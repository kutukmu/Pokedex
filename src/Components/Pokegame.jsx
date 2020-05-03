import React, { Component } from "react"
import Pokedex from "./Pokedex"
import PokeArray from "./pokemons";
import "../css/Pokedex.css"
import "../css/App.css"



class Pokegame extends Component {



    render() {
        function randomDex(arr) {

            var j, x, i;
            for (i = arr.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }


            return arr;
        }
        const newArr = randomDex(PokeArray)

        function sliceArray(arr) {
            return {
                first: arr.slice(0, 4),
                second: arr.slice(4, 9)
            }
        }

        function findTotal(arr) {


            return arr.reduce((accum, current) => {
                return accum + current.base_experience
            }, 0)
        }


        const firstTotal = findTotal(sliceArray(newArr).first);
        const secondTotal = findTotal(sliceArray(newArr).second);






        return <div className="dexContainer">
            <div style={{ background: (firstTotal > secondTotal) ? "green" : null }}>
                <Pokedex arr={sliceArray(newArr).first} />
                <h1 class="header">{(firstTotal > secondTotal) && "Winner"}</h1>
            </div>
            <div style={{ background: (secondTotal > firstTotal) ? "green" : null }}>
                <Pokedex arr={sliceArray(newArr).second} />
                <h1 class="header">{(secondTotal > firstTotal) && "Winner"}</h1>
            </div>

        </div>
    }

}


export default Pokegame;