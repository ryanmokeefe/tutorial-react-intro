import React from 'react';

const Person = (props) => {

    function age() {
        return Math.ceil(Math.random() * 30)
    }
    return (
        <div>
            <p>I'm a person! My name is {props.name}</p>
            <p>I am {age()} years old</p>
        </div>
    )
}

export default Person
