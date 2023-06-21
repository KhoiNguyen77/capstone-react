import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {
    cart: [
        { id: '1', name: 'nike', price: 1000, quantity: 1, image: 'https://shop.cyberlearn.vn/images/adidas-prophere.png' }
    ]
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getAllProductAction: (state, action) => {
            state.arrProduct = action.payload

        },
        addCartAction: (state, action) => {
            let item = { ...action.payload, quantity: 1 };
            let itemCart = state.cart.find(sp => sp.id === item.id);
            if (itemCart) {
                itemCart.quantity += 1;
            } else {
                state.cart.push(item);
            }
        },
        delCartAction: (state, action) => {
            console.log(action)
            let indexDel = state.cart.findIndex(item => item.id == action.payload);
            if (indexDel !== -1) {
                state.cart.splice(indexDel, 1)
            }
        },
        changeQuantityAction: (state, action) => {
            const itemquantity = action.payload;
            let item = state.cart.find(item => item.id === itemquantity.id);
            if (item) {
                item.quantity += itemquantity.quantity;
                if (item.quantity < 1) {
                    if (window.confirm('bạn có muốn xóa sản phẩm này không>')) {
                        state.cart = state.cart.filter(sp => sp.id !== itemquantity.id);
                    } else {
                        item.quantity -= itemquantity.quantity;
                    }
                }
            }
        }

    }

}
);

export const { getAllProductAction, addCartAction, delCartAction, changeQuantityAction } = productReducer.actions

export default productReducer.reducer

export const getAllProductApi = () => {
    return async (dispatch) => {
        let res = await http.get('/api/product');
        const actionProduct = getAllProductAction(res.data.content);//fulfill
        dispatch(actionProduct);

    }

}

