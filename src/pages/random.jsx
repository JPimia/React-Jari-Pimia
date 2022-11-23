import React from "react";
import { Link } from "react-router-dom";

function random() {
    function refreshPage() {
        window.location.reload(false);
    }
    var RandomNumber = Math.floor(Math.random() * 100) + 1;
    if (RandomNumber > 50) {
        return (
            <div className="App-header">
                <h3>
                    {"randomNumber > 50 = Nappi Käyttäjä Listaan."}
                    <br />
                    {"randomNumber < 50 = Nappi Listaan Kuukausista."}
                </h3>
                <small>{"Arvottu numero on: " + RandomNumber}</small>
                <button>
                    <Link to="/users">Lista Käyttäjistä</Link>
                </button>
                <button>
                    <Link onClick={refreshPage}>Try Again</Link>
                </button>
            </div>
        );
    } else {
        return (
            <div className="App-header">
                <h3>
                    {"randomNumber < 50 = Nappi Käyttäjä Listaan."}
                    <br />
                    {"randomNumber > 50 = Nappi Listaan Kuukausista."}
                </h3>
                <small>{"Arvottu numero on: " + RandomNumber}</small>
                <br />
                <button>
                    <Link to="/months">Lista Kuukausista</Link>
                </button>
                <button>
                    <Link onClick={refreshPage}>Try Again</Link>
                </button>
            </div>
        );
    }
}

export default random;
