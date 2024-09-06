import { StaticRouter } from "react-router-dom/server"
import { fireEvent, waitFor } from "@testing-library/dom"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../utils/store"
import RestaurantMenu from "../RestaurantMenu"
import { MENU_DATA } from "../../mocks/data"
import Header from "../Header"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_DATA);
        },
    });
});

test("Restaurant Menu is loaded",async()=>{
    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=> expect(menu.getByTestId("menu")))

    expect(menu.getByTestId("menu").innerHTML).toBe("Menu");
    
    expect(menu.getAllByTestId("menu-list"));

    const menuLst = menu.getAllByTestId("menu-list");
    console.log(menuLst);
    expect(menuLst[0].innerHTML).toBe("Vada (2 Pc) -<button data-testid=\"menu-list-btn\" class=\"p-1 m-1 bg-purple-950 hover:bg-gray-700 text-white rounded-md size-auto\">Add Item</button>");

    const menuBtn = menu.getAllByTestId("menu-list-btn");
    fireEvent.click(menuBtn[0]);

    const cart = menu.getByTestId("cart");
    expect(cart.innerHTML).toBe(" Cart : 1 items");

    fireEvent.click(menuBtn[0]);
    expect(cart.innerHTML).toBe(" Cart : 2 items");

})