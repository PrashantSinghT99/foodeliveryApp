import { Provider } from 'react-redux';
import MenuItemCards from '../MenuItemCards'
import { render } from '@testing-library/react';
import store from '../../../Store/store'
import { StaticRouter } from 'react-router-dom/server';
import { menuData } from '../../mocks/mockData'
import '@testing-library/jest-dom'
import { waitFor, fireEvent } from '@testing-library/react';
import Header from '../Header'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(menuData)
    })
})

test("Add items to card", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <MenuItemCards />
            </Provider>
        </StaticRouter>)

    await waitFor(() => expect(body.getByTestId("menu")))

    const addMenuItemBtn = body.getByTestId("addMenuItemBtn");
    const removeMenuItemBtn=body.getByTestId("removeMenuItemBtn");
    
    fireEvent.click(addMenuItemBtn);
    fireEvent.click(addMenuItemBtn);
    fireEvent.click(removeMenuItemBtn);

    // console.log(addMenuItemBtn);
    const cartCount = body.getByTestId("cart-count")

    expect(cartCount.innerHTML).toBe("(1)");

});
