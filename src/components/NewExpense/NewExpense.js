import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpensedata) => {
    const expensedata = {
      ...enteredExpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense();
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
