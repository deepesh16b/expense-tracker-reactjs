import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

// Such wrappers with some css, does not work if
// there is no attribute or content between the open-close tag.

// So we have to add the default-content i.e. child-props : which contains all the
// content that exist between this "card" tag in the "Expense or ExpenseItem file"
