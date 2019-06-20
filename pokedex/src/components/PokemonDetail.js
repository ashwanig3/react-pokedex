import React, { Component } from 'react';

class PokemonDetail extends Component {
    state = {
        pokeObj: {},
    }
    componentDidMount = () => {
        const target = this.props.match.params.no;
        fetch(`https://pokeapi.co/api/v2/pokemon/${target}`)
        .then(res => res.json())
        .then(data => this.setState({
            pokeObj: data
        }))
    }
    handleModal = () => {
        this.props.history.push('/');
    }
    render() {
        const { no } = this.props.match.params;
        const { pokeObj } = this.state;
        return (
            <div class="poke-container">
                <header><span onClick={this.handleModal}>X</span></header>
                <div className="main-wrapper">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${no}.png`} />
                <div className="poke-detail">
                    <h1>{pokeObj.name} #{no}</h1>   
                   <span>Height: {pokeObj.height}m, </span>
                   <span>Weight: {pokeObj.weight}kg</span>
                   <div className="poke-ability">
                        <h3>Abilities:</h3>
                       {
                           pokeObj.abilities && pokeObj.abilities.map(p => <p>{p.ability.name}</p>)
                       }
                   </div>
                </div>
                </div>
            </div>
        );
    }
}

export default PokemonDetail;