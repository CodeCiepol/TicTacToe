import Card from "../UI/Card";
import classes from "./fieldsGrid.module.css";
import FieldItem from "./fieldItem";

const FieldsGrid = (props) => {
  return (
      <Card className={classes.grid}>
        {props.fields.map((field) => (
          <FieldItem
            key={field.id}
            id={field.id}
            value={field.value}
            ClickerHandler={props.ClickerHandler}
          />
        ))}
      </Card>
  );
  // return (
  //   <div className={classes.grid}>
  //     {[...Array(9).keys()].map(()=><div className={classes.cell}>test</div>)}
  //   </div>
  // );
};
export default FieldsGrid;
