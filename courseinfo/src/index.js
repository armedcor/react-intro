import React from 'react';
import ReactDOM from 'react-dom';

const Header = (prop) => {
    

    return (
        <>
        <h1>{prop.course}</h1>
        </>
    )
}

const Content = (prop) => (
    <>
    <p>
        {prop.part1} {prop.exercise1}
    </p>
    <p>
        {prop.part2} {prop.exercise2}
    </p>
    <p>
        {prop.part3} {prop.exercise3}
    </p>
    </>
)

const Total = (prop) => (
    <>
    <p>Number of exercises {prop.exercise1 + prop.exercise2 + prop.exercise3}</p>
    </>
)

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercise1 = 10;
    const part2 = "Using props to pass data";
    const exercise2 = 7;
    const part3 = "State of a component";
    const exercise3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3} />
            <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));