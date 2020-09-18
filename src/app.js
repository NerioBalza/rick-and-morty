const API = 'https://rickandmortyapi.com/api/character/';
let APIPage = 'https://rickandmortyapi.com/api/character/';
import fetchData  from './fetchData.js';
const container = document.getElementById('container');
const searchButton = document.querySelector('#search-button')
const nextPage = document.querySelector('#next');
const prevPage = document.querySelector('#prev');
const notfound = document.querySelector('#notfound');

let dataGlobal; 
let list = [];
let togleButtons = false;

const getData = async (APIPage) =>{
    const data = await fetchData(APIPage);
    dataGlobal = data;
    notfound.classList.add('hide');
    callCharacters();
}

const callCharacters = ()=>{
    for(let i = 0; i<20; i++){
        getCharacters(API, i);
    }
}

const getCharacters = async (api_url, ids) => {
    try {
        const data = dataGlobal;
        const character = await fetchData(`${api_url}${data.results[ids].id}`);
        let originglobal = {dimension: "Unknown Dimension"};
        if(character.origin.url != ""){
            const origin = await fetchData(character.origin.url);
            originglobal = origin;
        }
        createNode(character, originglobal.dimension, true);
    } catch (error) {
        console.log(error);
    }
}

const createNode = (character, origin, order = true, length) =>{
    //Contenedor
    let nuevoCaracter = document.createElement('div');
    nuevoCaracter.classList.add('character');
    nuevoCaracter.a = character.id;
    //Titulo
    let nombre = document.createElement('h3');
    nombre.classList.add('character__name');
    nombre.innerHTML = `${character.name}`;
    //Status
    let status = document.createElement('p');
    status.classList.add('character__data');
    status.innerHTML = `Status: ${character.status}`;
    let statusColor = document.createElement('div');
    statusColor.classList.add('status');
    (character.status == 'Alive') 
    ?  statusColor.style.background = '#55cc44'
    :  (character.status == 'Dead') 
    ?statusColor.style.background = '#d63d2e'
    :statusColor.style.background = '#A0A1A0'
    status.appendChild(statusColor);
    
    //Dimension
    let origen = document.createElement('p');
    origen.classList.add('character__data');
    origen.innerHTML = `${origin}`;
    //Imagen
    let imagen = document.createElement('img');
    imagen.src = character.image;
    imagen.classList.add ('character__image');
    
    
    nuevoCaracter.appendChild(imagen);
    nuevoCaracter.appendChild(nombre);
    nuevoCaracter.appendChild(status);
    nuevoCaracter.appendChild(origen);
    
    if(order){
        orderCharacter(nuevoCaracter);
    }
    else{
        let count = 0;
        list.push(nuevoCaracter);
        if(list.length == length){
            for(let i = 0; i<length; i++){
                count++;
                setTimeout(()=>{
                    container.appendChild(list[i]);
                    if(i==length-1){
                        disableButtons();
                    }
                },50*count);
            }
        }
    }
}

const orderCharacter = (character)=>{
    list.push(character);
    let count = 0;
    if(list.length == 20){
        for(let i = dataGlobal.results[0].id; i<=dataGlobal.results[19].id; i++){
            let order = list.find((character)=>{
                return character.a === i;
            });
            count++;
            setTimeout(()=>{
                container.appendChild(order);
                if(i==dataGlobal.results[19].id){
                    disableButtons();
                }
            }, 100 * count) 
        }
    }
}

const deleteCharacters = ()=>{
    const character = document.getElementsByClassName('character');
    const count = character.length;
    for(let i = 0; i<count ;i++){
        if(character.length>0){
            character[0].parentNode.removeChild(character[0]);
        }
    }
}

const disableButtons = () => {
    if(!togleButtons){
        searchButton.onclick = searchGlobal;
        nextPage.onclick = next;
        prevPage.onclick = prev;
        togleButtons = true;
    }
    else{
        searchButton.onclick = ()=>{};
        nextPage.onclick = ()=>{};
        prevPage.onclick = ()=>{};
        togleButtons = false;
    }
}

function next(){
    disableButtons();
    if(dataGlobal.info.next){
        deleteCharacters();
        APIPage = `${dataGlobal.info.next}`;
        getData(APIPage);
        list = [];
    }
}
function prev(){
    disableButtons();
    if(dataGlobal.info.prev){
        deleteCharacters();
        APIPage = `${dataGlobal.info.prev}`;
        getData(APIPage);
        list = [];
    } 
}

async function searchGlobal () {
    disableButtons();
    let searchInfo = document.querySelector('#search-info');
    let count = 0;
    let characterFound = [];
    if(searchInfo.value){
        deleteCharacters();
        for(let i = 1; i<=dataGlobal.info.pages; i++){
            const data = await fetchData(`${API}?page=${i}`);
            for(let c = 0; c<data.results.length; c++){
                let name = data.results[c].name.toLowerCase();
                if(name.indexOf(searchInfo.value.toLowerCase()) != -1){
                    characterFound.push(data.results[c].id);
                }
            }
        }
        list =[];
        for(let i = 0; i<characterFound.length; i++){
            const character = await fetchData(`${API}${characterFound[i]}`)
            let originglobal = {dimension: "Dimension desconocida"};
            if(character.origin.url != ""){
            const origin = await fetchData(character.origin.url);
            originglobal = origin;
            }
            count++;
            createNode(character, originglobal.dimension, false, characterFound.length);
        }
        if(!count){
            notfound.classList.remove('hide');
            disableButtons();
        }else{
            notfound.classList.add('hide');
        }
        searchInfo.value = '';
    }
    else{
        deleteCharacters();
        list = [];
        getData(APIPage);
    }

}
    
getData(APIPage);