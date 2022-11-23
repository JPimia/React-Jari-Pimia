import React from "react";

function Info() {
    return (
        <div>
            <h3>Tietoja sovelluksesta</h3>
            <ul style={{ listStyle: "none" }}>
                {[
                    "Tekijä: Jari Pimiä",
                    "Käyttöohjeet: Tulossa myöhemmin...",
                    "Lähteet: Ei käytetty ulkoisia lähteitä",
                ].map((users, index) => {
                    return <li key={index}>{users}</li>;
                })}
            </ul>
        </div>
    );
}

export default Info;
