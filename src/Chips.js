import { Link } from "react-router-dom";
import "./Chips.css";

function Chips() {
  return (
    <>
      <h1>Do you want to buy some Chips?</h1>
      <img
        src="https://m.media-amazon.com/images/I/813axPlVxBL.jpg"
        alt="chips-img"
      />
      <Link className="Chips-go-back-btn" to="/">
        Go Back
      </Link>
    </>
  );
}

export default Chips;
