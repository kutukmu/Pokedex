import React, { Component } from "react";
import Pokecard from "./Pokecard"

import "../css/Pokedex.css"
import "../css/Pokecard.css"

class Pokedex extends Component {



    render() {
        const props = this.props

        const baseTotal = props.arr.reduce((accum, current) => {

            return accum + current.base_experience


        }, 0)





        return <div className="Pokedex" >
            <div className="dexcontainer">
                {props.arr.map((n, index) => <Pokecard key={n.index} id={n.id} name={n.name} type={n.type} base={n.base_experience} index={index} />)}
            </div>


            <h1 class="total-header">Total : {baseTotal}</h1>
        </div>



    }

}


export default Pokedex;