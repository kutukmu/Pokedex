import React, { Component } from "react";
import "../css/Pokecard.css"




function threedigit(num) {


    const newnum = `${num}`;

    if (newnum.length === 3) {
        return num
    } else if (newnum.length === 2) {
        return `0${num}`
    } else if (newnum.length === 1) {
        return `00${num}`
    }


}
class Pokecard extends Component {

    static defaultProps = {
        name: "kerim"
    }

    render() {

        const props = this.props;



        const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${threedigit(props.id)}.png`


        return <div className="Pokecard">
            <h1 className="card-header">{props.name}</h1>
            <img src={imgSrc} alt="" />
            <p className="card-type">{props.type}</p>
            <p className="card-base">{props.base}</p>
        </div>
    }


}


export default Pokecard