import { useState } from 'react';
import DateItem from './DateItem';
import './ExpenseItem.css'
const ExpenseItem = (props) => {

    const [title,setTitle] = useState(props.title);    /** React Hook start with use */

    const clickHandler = () => {
        setTitle("Updated");
    }

    return (
        <div className="expense-item">
            <div className="expense-date">{props.dte}</div>
            {/* <DateItem date={props.dte}/> */}
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">
                ${props.amount}
            </div>
            <button onClick={clickHandler}>Submit</button>
        </div>
    )
}

export default ExpenseItem;