import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {

    return (
        <div className="expenses">
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                dte={props.expenses[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                dte={props.expenses[1].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                dte={props.expenses[2].date}>
            </ExpenseItem>
        </div>
    )
}
export default Expenses;