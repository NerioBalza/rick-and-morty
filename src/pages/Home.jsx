import React, { Component } from "react";

import Searcher from "../components/Searcher";
import Characters from "../components/Characters";
import CharacterItem from "../components/CharacterItem";
import PagesButtons from "../components/PagesButtons";
import Loading from "../components/Loading";

const apiUrl = "https://rickandmortyapi.com/api/character/?page=1";

class Home extends Component {
  state = {
    loading: true,
    error: null,
    data: {},
    filter: "",
    currentURL: apiUrl,
  };

  componentDidMount() {
    this.fetchData(apiUrl);
  }

  fetchData = async (APIURL) => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const response = await fetch(APIURL);
      const data = await response.json();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleNexOrPrevPage = async (APIURL) => {
    if (this.state.filter === "") {
      this.fetchData(APIURL);
    } else {
      this.fetchData(APIURL + "&name=" + this.state.filter);
    }
    this.setCurrentURL(APIURL);
    window.scrollTo(0, 0);
  };

  handleSearch = async () => {
    if (this.state.filter === "") {
      this.fetchData(apiUrl);
    } else {
      this.fetchData(apiUrl + "&name=" + this.state.filter);
    }
    this.setCurrentURL(apiUrl);
    window.scrollTo(0, 0);
  };

  handleChangeSearch = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  setCurrentURL = (url) => {
    this.setState({
      currentURL: url,
    });
  };

  render() {
    return (
      <div className="home">
        {this.state.loading ? (
          <Loading />
        ) : (
          <>
            <Searcher
              filter={this.state.filter}
              onChange={this.handleChangeSearch}
              onSearch={this.handleSearch}
            />
            <Characters>
              {this.state.data.results.map((characterInfo) => {
                return (
                  <CharacterItem
                    key={characterInfo.id}
                    characterInfo={characterInfo}
                  />
                );
              })}
            </Characters>
            <PagesButtons
              info={this.state.data.info}
              loadMore={this.handleNexOrPrevPage}
              currentURL={this.state.currentURL}
            />
          </>
        )}
      </div>
    );
  }
}

export default Home;
