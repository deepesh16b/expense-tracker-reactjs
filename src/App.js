import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    { title: "Car Wash", date: new Date(2023, 3, 14), amount: 22.5 },
    { title: "Dog Food", date: new Date(2023, 3, 13), amount: 2.2 },
    { title: "Shopping", date: new Date(2023, 3, 12), amount: 622.9 },
    { title: "Electricity Bill", date: new Date(2023, 3, 12), amount: 242.9 },
  ];

  const addExpenseHandler = () => {
    console.log(expenses);
  };

  return (
    <div>
      <h2>Hi, I'm Deepesh Bhardwaj!</h2>
      <p>This is an Expense Tracker Web Application</p>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
