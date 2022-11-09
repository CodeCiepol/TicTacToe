import FieldsGrid from "./components/fields/fieldsGrid";
import "./App.css";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [fields, setFields] = useState([]);
  const [Winner, setWinner] = useState("");

  const winnablePositions=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]]

  const addFieldsHandler = useCallback(() => {
    const fieldsNumber = 9;
    let fieldsArray = [];
    for (let i = 0; i < fieldsNumber; i++) {
      fieldsArray.push({ id: i, value: 0 });
    }
    setFields(fieldsArray);
  }, []);

  useEffect(() => {
    addFieldsHandler();
  }, [addFieldsHandler]);

  const ClickerHandler = (id) => {
    let fieldsArray = [...fields];
    fieldsArray[id].value<2 ? fieldsArray[id].value += 1 : fieldsArray[id].value =0;
    setFields(fieldsArray);

    let fieldsP1 = fieldsArray.filter((obj => obj.value === 1));
    let idFieldsP1 = fieldsP1.map((obj)=>{
      return obj.id
    })

    let fieldsP2 = fieldsArray.filter((obj => obj.value === 2));
    let idFieldsP2 = fieldsP2.map((obj)=>{
      return obj.id
    })
  

    for(let i=0;i<8;i++){
      for(let j=0;j<3;j++){
        if(!idFieldsP1.includes(winnablePositions[i][j]))
        break;
        if (j===2){
          console.log("player 1 WINS")
          setWinner('1')
        }
      }
    }
    for(let i=0;i<7;i++){
      for(let j=0;j<3;j++){
        if(!idFieldsP2.includes(winnablePositions[i][j]))
        break;
        if (j===2){
          console.log("player 2 WINS")
          setWinner('2')
        }
      }
    }
  };

  return (
    <>
      <FieldsGrid fields={fields} ClickerHandler={ClickerHandler}></FieldsGrid>
      <div className='Winner'>
      {Winner ? `Wygrywa ${Winner} gracz!`:""}
      </div>
    </>
  );
}

export default App;
