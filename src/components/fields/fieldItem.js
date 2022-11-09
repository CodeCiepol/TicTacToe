import Card from "../UI/Card";
import classes from "./fieldsGrid.module.css";
const FieldItem = (props) => {
  return (
      <div onClick={props.ClickerHandler.bind(null,props.id)}>
    <Card className={classes.cell}>
    {props.value}
    </Card>
      </div>
  );
};
export default FieldItem;
