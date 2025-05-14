import { useState } from "react";
import { getTicket } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(getTicket(n));

  let buyTicket = () => {
    setTicket(getTicket(n));
  };

  let isWinning = winCondition(ticket);

  return (
    <div>
      <h1>Lottery Game</h1>
      <p>Ticket</p>
      <Ticket ticket={ticket} />
      <br />
      <Button action={buyTicket} />
      <h3>{isWinning && "Congratulations, You won!"}</h3>
    </div>
  );
}
