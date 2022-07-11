import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// export const Transaction = (props) => {
export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        // <li className="minus">
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {/* {transaction.text} <span>-$400</span><button class="delete-btn">x</button> */}
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} class="delete-btn">x</button>
        </li>
    )
}