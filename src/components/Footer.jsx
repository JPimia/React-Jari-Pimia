import React from "react";

const footer = ({ length }) => {
    return (
        <footer>
            <p>
                {length}
                {length === 1 ? " Tehtävä" : " Tehtävää"}
            </p>
        </footer>
    );
};

export default footer;
