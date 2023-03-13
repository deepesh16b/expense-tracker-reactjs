import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date(2023, 2, 12);
  const expenseName = "Car Wash";
  const expensePrice = 150.5;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
