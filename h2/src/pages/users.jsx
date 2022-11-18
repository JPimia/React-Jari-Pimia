import React from "react";
import { Link } from "react-router-dom";

function userPage() {
    return (
        <div>
            <h3>Tällä sivulla lista käyttäjistä</h3>
            <ul>
                {[
                    "Jari Pimiä",
                    "Jani Stedt",
                    "Masi Soranummi",
                    "Jesse Schemeikka",
                    "Hilla Hotakainen",
                ].map((users, index) => {
                    return <li key={index}>{users}</li>;
                })}
            </ul>
            <button>
                <Link to="/">Takaisin Pääsivulle</Link>
            </button>
        </div>
    );
}

export default userPage;
