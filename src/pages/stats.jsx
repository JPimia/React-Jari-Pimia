//import React, { useState } from "react";
//import { Link } from "react-router-dom";
import Task from "../components/task";

const Stats = (props) => {
    return (
        <div>
            {props.tasks.map((t) => (
                <Task id={t.id} />
            ))}
        </div>
    );
};

export default Stats;
