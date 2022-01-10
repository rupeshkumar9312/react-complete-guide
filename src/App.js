import './App.css';
import './components/ExpenseItem'
import './components/Expenses'
import Expenses from './components/Expenses';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14).toDateString(),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12).toDateString() },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28).toDateString(),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12).toDateString(),
    },
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>

  );
}

export default App;
