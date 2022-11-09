import Card from "../UI/Card";
import classes from "./fieldsGrid.module.css";

import XIcon from "./xIcon"
import OIcon from "./oIcon";

import  "./fieldItem.css"
const FieldItem = (props) => {
  return (
      <div className={props.value===1? "field0" : "field2"} onClick={props.ClickerHandler.bind(null,props.id)}>
    {/* <Card className={classes.cell}> */}
    {props.value===1 && <OIcon/>}
    {props.value===2 && <XIcon/>}
    {/* {props.value} */}
    {/* </Card> */}
      </div>
  );
};
export default FieldItem;
