import React, { useReducer, useContext, createContext, useState} from 'react';

const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state = {}, action) => {
//     switch(action.type) {
//         case 'ADD':
//             console.log('action', action)
//             return {...state, cart: action.sushi};
//         case "REMOVE":
//             return state.filter((sushi) => sushi.id !== action.sushiId);
//         case "UPDATE":
//             console.log(state);
//             !state.length && state.push(action.sushi);
//             return state;
//         case "CHANGE":
//             const index = state.findIndex(
//               (p) => p.id === action.sushi.id
//             );
//             if (index >= 0) state[index] = action.sushi;
//              return JSON.parse(JSON.stringify(state));
//         default:
//             throw new Error(`unknown action ${action.type}`)
//     }
// }

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // const [state, dispatch] = useReducer(reducer, {});
    const [cart, setCart] = useState([])

    return (
            <CartContext.Provider value={[cart, setCart]}>
                {children}
            </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
