import React from 'react';
import ReactDOM from 'react-dom';

const Header = (prop) => {
    

    return (
        <>
        <h1>{prop.course}</h1>
        </>
    )
}

const Part = (prop) => (
    <p>
        {prop.part} {prop.exercise}
    </p>
)

const Content = () => {
    const part1 = "Fundamentals of React";
    const exercise1 = 10;
    const part2 = "Using props to pass data";
    const exercise2 = 7;
    const part3 = "State of a component";
    const exercise3 = 14;
    return (
        <div>
            <Part part={part1} exercise={exercise1} />
            <Part part={part2} exercise={exercise2} />
            <Part part={part3} exercise={exercise3} />
        </div>
    )
}


const Total = (prop) => (
    <>
    <p>Number of exercises {prop.exercise1 + prop.exercise2 + prop.exercise3}</p>
    </>
)

const App = () => {
    const course = "Half Stack application development";
    const exercise1 = 10;
    const exercise2 = 7;
    const exercise3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content />
            <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));