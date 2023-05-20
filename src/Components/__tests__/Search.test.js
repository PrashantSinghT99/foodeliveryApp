import { Provider } from 'react-redux';
import Body from '../Body'
import { render } from '@testing-library/react';
import store from '../../../Store/store'
import { StaticRouter } from 'react-router-dom/server';
import { mockData } from '../../mocks/mockData'
import '@testing-library/jest-dom'
import { waitFor, fireEvent } from '@testing-library/react';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(mockData)
    })
})

test("Shimmer should load on body", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>)

    const shimmer = body.getByTestId("shimmer");
    expect(shimmer).toBeInTheDocument();
    // console.log(shimmer);
});

test("All restaurant results on body after shimmer", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>)

    await waitFor(() => expect(body.getByTestId("searchBtn")))

    const reslist = body.getByTestId("res-list")

    expect(reslist.children.length).toBe(15);
    // const logo=header.getByTestId("appLogo")
    // // console.log(logo);
    // expect(logo.src).toBe("");
    // console.log(searchBtn);
});

test("Search results after typing food after clicking search btn", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>)

    await waitFor(() => expect(body.getByTestId("searchBtn")))

    const searchInput = body.getByTestId("searchInput")

    fireEvent.change(searchInput, {
        target: {
            value: "udupi",
        },
    });

    const searchBtn = body.getByTestId("searchBtn");

    fireEvent.click(searchBtn)

    const reslist = body.getByTestId("res-list")

    expect(reslist.children.length).toBe(1);
});
