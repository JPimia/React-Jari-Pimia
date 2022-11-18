import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    const [toggle, setToggle] = useState(false);
    let foobar = ["foo", "bar"];

    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(!toggle);
        }, 2000);

        return () => clearInterval(interval);
    }, [toggle]);

    const ChangeWord = () => {
        if (!toggle) {
            return foobar[0];
        } else {
            return foobar[1];
        }
    };

    return (
        <div>
            <h3>{<ChangeWord />}</h3>
            <button>
                <Link to="/users">Lista Käyttäjiä</Link>
            </button>
            <button>
                <Link to="/months">Lista Kuukausista</Link>
            </button>
            <button>
                <Link to="/random">Random 1 - 100</Link>
            </button>
        </div>
    );
};

export default MainPage;
