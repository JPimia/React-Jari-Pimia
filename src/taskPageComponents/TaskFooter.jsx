import React from "react";

const TaskFooter = ({ length }) => {
    return (
        <div>
            <footer className="footer2">
                <p>
                    {length}
                    {length === 1 ? " Tehtävä" : " Tehtävää"}
                </p>
            </footer>
        </div>
    );
};

export default TaskFooter;
