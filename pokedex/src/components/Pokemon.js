import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
    state = {
        pokemons: [],
        searchedPoke: []
    }
    componentDidMount = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(data => this.setState({
            pokemons: data.results
        }))
    }
    handleChange = (e) => {
        const searchedVal = e.target.value;
        this.setState({
          ...this.state,
          searchedPoke: this.state.pokemons.filter(item => item.name.includes(searchedVal))  
        })
        console.log(this.state.searchedPoke)
    }
    render() {
        const { pokemons, searchedPoke } = this.state;
        return (
            <div>
                <form className="search-form">
                    <input type="text" placeholder="Search for Pokemon" className="search-input" onChange={this.handleChange} />
                </form>
                {
            searchedPoke.length ? 
                <div className="poke-wrapper">
                    {
                        searchedPoke.map((p,i) => 
                        <Link to={`pokemon/${i+1}`} className="poke-box">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} />
                            <p>{p.name}</p>
                        </Link>
                    )
                    }
                </div> :
                <div className="poke-wrapper">
                    {
                        pokemons && pokemons.map((p,i) => 
                            <Link to={`pokemon/${i+1}`} className="poke-box">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} />
                                <p>{p.name}</p>
                            </Link>
                        )
                    }
                </div>
                }
            </div>
        );
    }
}

export default Pokemon;