import { Link } from "react-router-dom";
import "./CocaCola.css";
function CocaCola() {
  return (
    <>
      <h1>Do you want to buy a Coca Cola?</h1>
      <img
        src="https://i.actva.cz/i/1/1/f65/53f65/600x600/jK4uGc_600x600_c2994299c90f20c7.jpg"
        alt="cola-img"
      />
      <Link className="CocaCola-go-back-btn" to="/">
        Go Back
      </Link>
    </>
  );
}

export default CocaCola;
