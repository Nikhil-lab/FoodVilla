import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header",() => {
    //load Header
    const header = render(
            <StaticRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </StaticRouter>
            );

    console.log(header);

    const logo = header.getByTestId("logo");
    console.log(logo);

    //Check if logo is loaded
    expect(logo.src).toBe("http://localhost/dummy.png")
})


test("Online Status should be green on rendering header",()=>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    )

    const status = header.getByTestId("status");
    console.log(status.innerHTML);
    expect(status.innerHTML).toBe(" ✅ Status  ");
})

test("Cart should have 0 items",()=>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    )

    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe(" Cart : 0 items");
})