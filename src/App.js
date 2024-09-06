import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
//Default Import
import Header from "./components/Header";
//Named Import
import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import FetchDataPage from "./components/FetchDataPage";
import useOnline from "./utils/useOnline";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//normal import
// import Instamart from "./components/Instamart";
// import About from "./components/About";

//lazy load
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(()=> import("./components/About"));

//Upon On-demand Loading  --> upon render --> suspend loading -->
// react will take care of this, when Suspense is used
// Suspense takes fallback callback when it is loading.

const AppLayout = () =>{

    const [user,setUser] = useState({
        name:"RajKumar",
        email:"support@gmail.com"
    });

    return (
        <Provider store={store}>
            <UserContext.Provider
                value={{
                    user:user,
                    setUser:setUser,
                }}
            >
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
    )
};
  

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        errorElement: <Error />,
        children:[
            {
                path:"about",
                element: <Suspense fallback={<h1>Loading .........⚽️</h1>}>
                            <About />
                        </Suspense>,
                children:[
                    {
                        path:"profile",
                        element: <Profile name={"Nikhil"}/>,
                    }
                ]
            },
            {
                path:"/",
                element: <Body  user={{name:"RajKumar"}}/>
            },
            {
                path:"contact",
                element: <Contact />
            },
            {
                path:"restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path:"fetch",
                element: <FetchDataPage />
            },
            {
                path:"instamart",
                element: <Suspense fallback= {<Shimmer/>}>                       
                             <Instamart />
                         </Suspense>
            },
            {
                path:"cart",
                element: <Cart />
            },


        ]
    },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


/*
Note:
- Basic job of bundler --> bundle the code
- One bundle is created , bigger the application, bigger bundle size

EX: Big wesite such as Make my trip, Flipkart (large scale production ready application)
Same concepts diff names:
- Chunking
- Code Splitting
- Dynamic Bundling
- lazy loading
- on Demand loading
- Dynamic Import

- keep all the images in CDN for caching.


CSS library --> optimized CSS & it saves time.
- Base UI
- Ant UI
- Chakra UI
- Material UI -> fully loaded component library
- Angular material
- BootStrap
- Tailwind

Should we use it? Pros
- easy to use
- reusable
- saves time / very fast
- consistent UI (same button in the entire app)
- pre build components

CONS:
- bundle size will be heavy
- restrictions


Data Layer
-- managed by State & props

Do we only handle data using state & props ? --> more than that
State --> local variable
Props ---> value passed from one component to another

Sharing Data Between Components:

AppLayout
-    (state = user)
    -    <Body user ={user}/>
        -   <RestaurantCard user={user} />

this is known as Props Drilling.
--> Data in the parent & want to access in grant child.
--> pass the data from parent to child.
Disadvantage:
    - rerenders all the components where it is passed.

How to pass data from child to parent?
--> 1. build custom hooks
    2. useContext
    3. Redux


REDUX is used to manage data layer of the application
CONS:
- Complex to setup 
- Huge learning curve

Building cart using Redux toolkit
- less boilerplate

STORE:
One big store for the Application
SLICE is a portion of a store
Cannnot directly modify the store
Need to DISPATCH an ACTION &
ACTION will call a Reducer function(regular func) which will update the slice of our redux STORE.

Flow: 
If we click on the add(+) button,
it dispatches an action which calls the reducer function which updates the slice of our redux store.

SELECTOR to read data 
useSelector() is a hook
                                        update                      Subscribe to the store
+ -> dispatch(action) --> reducer func --------> STORE(Slice)-----------> Selector() --------------> cart(2)


Steps:
- Create STORE
    - configureStore() - RTK

-Provide my store to the app
    - <Provider store = {store}> --import store from react-redux

-Slice
    -RTK - createSlice({
        name:"...",
        initialState:
        reducers:{
            addItems:(state,action) => {state = action.payload}
        }
    })

    export const {addItem,removeItem} = cartSlice.actions;
    export default cartSlice.reducer;

-Put the Slice into Store
     configureStore({
        reducer:{
            cart: cartSlice,
        },
     })



Testing in REACT
- Jest
- React Testing Library -(new) and enzyme (older one)

Why do we need testcases?
- 100 of components & 100 of developers are working on the same project
- Ex: Search functionality affects many other components.(RestaurantMenu , FoodCart,... etc)
- When we are adding a new feature, are we breaking any other components?
---> So we need TESTING for maintainability.



1. Test Driven Development
- Testcases even before we write our code


Different type of testing?
- Manual Testing
- Automated Testing

- End to End testing --> Covers entire user journey.
    - using selenium
    - we use Headless browser for this purpose
    - testcases faster

- Unit Testing
    - testing small unit/ small component unit testing

- Integration Testing
    - testing the integration between the components.


-React Testing Library is a part of Testing library(company) which uses Jest.

-JEST is JS Testing Framework.

Setup testcases
1. Install
    - npm install --save-dev @testing-library/react @testing-library/dom
    - npm i -D jest
2. Configure Jest
    -  npx jest --init
        no,no,jsdom,yes,babel,yes

3. npm run test
    - npm i -D jest-environment-jsdom

4. Create my first test (dundar tests)
    -lets test JS testing first
Syntax:
    test("name", function);
    test("name", ()=>{
    expect() ----> mandatory
});

5. Configure Babel
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- update .babelrc or create a babel.config.js

JSON vs JavaScript Object ?  Check 

6. gitignore /coverage


Let do Unit testing

-->tests are not run on broswer but instead running on JSDOM.
---> render function will create a small container where we can load the components

npm i -D @babel/preset-react







*/

