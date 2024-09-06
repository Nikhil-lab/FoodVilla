import React from "react";
import ReactDOM from "react-dom/client";


//JSX (html like syntax)
//not html inside javascript


// React Element 
const heading = (
    <h3 id="title3" key="h3">
        Hello World 
        JSX is here
        (React Element)
    </h3>
    );

//REACT Components 2 types
// - Functional - NEW
// - Class Based Component


// - Functional Component
// Name of component starts with CAPITAL Letter

const HeaderComponent2 = () =>(
    <div>
        <h1> Another way of writing Functional Component</h1>
        <h2> H2 Heading</h2>
    </div>
);


var xyz = 10;

//Component Composition --passing components into component
const HeaderComponent = () =>{
    return (
        <div>
            <h1> Namaste React Functional Component</h1>
            <h2> (Functional Component not react element)</h2>

            {heading}

            <HeaderComponent2/> 

            <h1>Can also be called like function</h1>
            {HeaderComponent2()}

            <div>Any javascript code inside JSX</div>
            {xyz}
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);  // to render react element
root.render(<HeaderComponent/>); //to render functional component  (make it tag like syntax <...../>)



//React reconcillion keys
//JSX using React.createElement behind the scenes

//babel uses new piece of code to build the old version of the code(polyfills).
//browser understand noraml JS but JSX is converted to JS by Babel
