import OIcon from "./fields/oIcon";
import XIcon from "./fields/xIcon";
import Card from "./UI/Card";

const CurrentPlayer = (props) => {
  const FigurePlayer = () => {
    return (
      <div className="square">
       { props.player1? <OIcon x="28" y="28" /> : <XIcon x="55" y="55" />}
      </div>
    );
  };
  return (
    <Card className="currentPlayer">
      <FigurePlayer />
      <h1>{props.player1 ? "Player 1" : "Player 2"}</h1>
      <FigurePlayer />
    </Card>
  );
};
export default CurrentPlayer;
