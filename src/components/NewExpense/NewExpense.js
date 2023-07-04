import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const SaveExpenseDataHandler = (expensefrom) => {
    const expenseData = {
      ...expensefrom,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveHandler={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      <form> </form>
    </div>
  );
};

export default NewExpense;
