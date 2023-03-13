import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Wash", date: new Date(2023, 3, 14), amount: 22.5 },
    { title: "Dog Food", date: new Date(2023, 3, 13), amount: 2.2 },
    { title: "Shopping", date: new Date(2023, 3, 12), amount: 622.9 },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Hi, I am Deepesh Bhardwaj</p>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
