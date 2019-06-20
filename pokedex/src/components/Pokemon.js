import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
    state = {
        pokemons: []
    }
    componentDidMount = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(data => this.setState({
            pokemons: data.results
        }))
    }
    render() {
        const { pokemons } = this.state;
        return (
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
        );
    }
}

export default Pokemon;