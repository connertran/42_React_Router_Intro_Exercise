import { Link } from "react-router-dom";
import "./Pepsi.css";
function Pepsi() {
  return (
    <>
      <h1>Do you want to buy some Pepsi?</h1>
      <img
        src="https://vrtal.cz/uploads/2023/03/01702001.633x550.fit.q85.jpeg"
        alt="pepsi-img"
      />
      <Link className="Pepsi-go-back-btn" to="/">
        Go Back
      </Link>
    </>
  );
}

export default Pepsi;
