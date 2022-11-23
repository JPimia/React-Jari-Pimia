//import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainPage = (props) => {
    // const [toggle, setToggle] = useState(false);
    // let foobar = ["foo", "bar"];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setToggle(!toggle);
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, [toggle]);

    // const ChangeWord = () => {
    //     if (!toggle) {
    //         return foobar[0];
    //     } else {
    //         return foobar[1];
    //     }
    // };

    return (
        <div>
            <h3>{"Home"}</h3>
            <button>
                <Link to="/info">Tietoja sovelluksesta</Link>
            </button>
            <button>
                <Link to="/stats">Tehtävät</Link>
            </button>
        </div>
    );
};

export default MainPage;
