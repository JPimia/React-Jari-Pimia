import React from "react";
import { Link } from "react-router-dom";

function monthPage() {
    return (
        <div>
            <h3>Tällä sivulla lista kuukausista</h3>
            <ul>
                {[
                    "Tammikuu",
                    "Helmikuu",
                    "Maaliskuu",
                    "Huhtikuu",
                    "Toukokuu",
                    "Kesäkuu",
                    "Heinäkuu",
                    "Elokuu",
                    "Syyskuu",
                    "Lokakuu",
                    "Marraskuu",
                    "Joulukuu",
                ].map((months, index) => {
                    return (
                        <li style={{ listStyleType: "decimal" }} key={index}>
                            {months}
                        </li>
                    );
                })}
            </ul>
            <button>
                <Link to="/">Takaisin Pääsivulle</Link>
            </button>
        </div>
    );
}

export default monthPage;
