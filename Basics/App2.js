import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id :"title"},"Hello Everyone");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const heading1= React.createElement(
    "h1",
    {
        id :"title",
        key: 1,
    },
    "Heading  1"
);


console.log(heading1);

//React.createElement=> object => html(DOM)

const heading2= React.createElement(
    "h2",
    {
        id :"title2",
        key:2,
    },
    "Heading  2"
);

//JSX (html like syntax)
//not html inside javascript

const heading3 = (
    <h3 id="title3" key="4">
        JSX is here
    </h3>
    );

const container= React.createElement(
    "div",
    {   
        id :"container",
        key:3,
    },
    [heading1,heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);


// <---------Parcel (in background)---->
// HMR - Hot Module Replacement
//Created a server
// File Watcher algo
// Bundling
// Minify the code
// cleaning our code
// Dev & production build
// Super fast build algo
//Image Optimization
//Caching while development
//compatible with older version
//port number
//consistent hashing algo
//Tree shaking --> removing unwanted code/functions in package


//npx is npm run (npm used to execute commands)



//JSX --> JavaScript XML
//wanted to create HTML using JAVASCRIPT
// React.createElement would be messy & lengthy

//React keeps a track of key


//BABEL converts JSX to React.createElement=> object => html(DOM)





