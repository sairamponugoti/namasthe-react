import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (
    <h1 className="header">
        Hello React
        </h1>
)

// React Component
// Class Based Component - OLD way
// Functional Components - New way

//React Functional Component
/* 
    It is a normal javascript function which returns some JSX (React Element)
*/

const Title = () => (
    <h1 className="title">
        Hello React Title Component
    </h1>
);

// const HeadingComponent = () => {
//     return <h1>Hello React</h1>
// };

// Component Composition
const HeadingComponent = () => (
<div id="container">
     {/*We can add comments here  */}
{heading}
    <Title />
    <h2>Hello React 2</h2>
</div>
);

const root = ReactDOM.createRoot(document.querySelector("root"))
root.render(<HeadingComponent />);