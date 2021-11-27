import { createContext } from "react";
export default createContext({
    pros: [
        {
            id: '1',
            amount: 0,
            price: 2,
            checked: false
        },
        {
            id: '2',
            amount: 0,
            price: 3,
            checked: false
        }
    ],
    totalPrice: 0
})
