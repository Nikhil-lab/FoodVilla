import "@testing-library/jest-dom";
import { Provider } from "react-redux"
import store from "../../utils/store"
import Body from "../Body"
import { StaticRouter } from "react-router-dom/server"
import { fireEvent, render, waitFor } from "@testing-library/react"
import { RESTAURANT_DATA } from "../../mocks/data"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA);
        },
    });
});

test("Shimmer on Homepage", ()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    const shimmer = body.getByTestId("shimmer");

    expect(shimmer).toBeInTheDocument();
    expect(shimmer.children.length).toBe(10);

})

test("Restaurants should load on Homepage", async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=> expect(body.getByTestId("search-btn")))

    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(20);

})


test("Search for string(food) on Homepage", async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=> expect(body.getByTestId("search-btn")))

    const input = body.getByTestId("search-input");
    //fire the event 

    fireEvent.change(input,{
        target:{
            value:"food"
            }
        })

    const searchButton = body.getByTestId("search-btn");
    fireEvent.click(searchButton)
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(1);

})