import React, {Component} from 'react';

const ToDo = ({ task }) => {
        return(
            <div className="task-name"> {task.task} </div>
        )
    }


export default ToDo
