

import XIcon from "./xIcon"
import OIcon from "./oIcon";

import  "./fieldItem.css"
const FieldItem = (props) => {
  return (
      <div className="field0" onClick={props.ClickerHandler.bind(null,props.id)}>
    {props.value===1 && <OIcon x="80" y="80"/>}
    {props.value===2 && <XIcon x="120" y="120"/>}
      </div>
  );
};
export default FieldItem;
