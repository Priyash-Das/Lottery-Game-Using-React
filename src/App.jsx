import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
  // let winCondition = (ticket) => {
  //   return ticket[0] === 0;
  // }; // EG. 1st number must be 0 like 074 , 011 , 089

  // let winCondition = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]);
  // }; // EG.  3 number are same like 999 , 888 , 111

  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  }; // EG. 3 numbers total = 15 like 645 , 771 , 555

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
