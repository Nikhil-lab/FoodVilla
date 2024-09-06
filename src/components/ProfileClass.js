import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);                             //used to pass to parent React.Component, so that this.props is initialized
        console.log(props.name);                  //this will work
        console.log("constructor called");
        this.state ={                             //local state variables here
            count:0,
            count2:1,
            userInfo:{},
        }
    }

    async componentDidMount(){
        //API calls are made here
        //Called Only ONCE
        
        console.log("Component Did Mount");
        const user =  await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const json = await user.json();

        this.setState({
            userInfo:json,
        })
        console.log("Component Did Mount tricky bcz of async");

        this.timer = setInterval(()=>{
            console.log("calling every one sec")
        },[1000]);
    }

    componentDidUpdate(){
        //Called when we change our state/data
        // called when there is  new props or setState()  or forceUpdate() (like onChangeHandlers)
        console.log("Component did update");
    }

    componentWillUnmount(){
        //used for cleanup.
        console.log("On destroy of a component or called when leaving a page");
        clearInterval(this.timer);
    }

    render(){
        const {count} = this.state; //can also be destructred
        console.log("render");
        return (
        <>                                      
            <h1> Profile Class Component </h1> 
            <h2> Name:{this.props.name} </h2>    
            <button onClick={()=>{              
                this.setState({                 //setting state
                    count: this.state.count+1,
                })
            }}>
                Increment
            </button>
            <h2> {this.state.count} </h2>
            <h2> {this.state.userInfo?.title} </h2>
        </>

        )
    }
}

export default ProfileClass;

/*
Note:
 props are accessed using this.props in Class comp.

 when react is rendering,it happens in 2 phases of REACT Lifecycle.
 1. Render phase ---> constructor is called and rendered once
 2. Commit phase --> react updates the DOM

 Order of execution in Class component

 1. Constructor
 2. Render()
 3.componentDidMount()


 Parent Constructor
 Parent render
    First Child Constructor
    First Child render
    Second Child Constructor
    Second Child render
    -------------------------->DOM updated for Children
    First Child Component Did Mount
    Second Child Component Did Mount
 Parent Component Did Mount


 Order of execution in Functional component

 1. normal render before return
 2. useEffect()




 */