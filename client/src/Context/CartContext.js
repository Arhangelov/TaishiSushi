import React, { useReducer, useContext, createContext} from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return[...state, action.sushi];
        case "REMOVE":
            return state.filter((sushi) => sushi.id !== action.sushiId);
        case "UPDATE":
            return action.sushi;
        case "CHANGE":
            const index = state.findIndex(
              (p) => p.id === action.sushi.id
            );
            if (index >= 0) state[index] = action.sushi;
      return JSON.parse(JSON.stringify(state));
        default:
            throw new Error(`unknown action ${action.type}`)
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)