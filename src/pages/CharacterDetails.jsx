import React from "react";

import Loading from "../components/Loading";
import CharacterCard from "../components/CharacterCard";

const apiUrl = "https://rickandmortyapi.com/api/character/";

class CharacterDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {},
  };

  componentDidMount() {
    this.fetchData(apiUrl + this.props.match.params.ID);
    window.scrollTo(0, 0);
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
    return (
      <div className="character-details">
        {this.state.loading ? (
          <Loading />
        ) : (
          <section className="card-container">
            <CharacterCard data={this.state.data} />
          </section>
        )}
      </div>
    );
  }
}

export default CharacterDetails;
