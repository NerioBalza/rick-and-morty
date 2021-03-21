import React from "react";

const apiUrl = "https://rickandmortyapi.com/api/character/";

class CharacterDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {},
  };

  componentDidMount() {
    this.fetchData(apiUrl + this.props.match.params.ID);
    console.log(this.state.data);
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
  componentDidUpdate() {
    console.log(this.state.data);
  }

  render() {
    return <div className="character-details"></div>;
  }
}

export default CharacterDetails;
