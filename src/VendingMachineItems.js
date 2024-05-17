import { Link } from "react-router-dom";
import "./VendingMachineItems.css";

function ItemList() {
  return (
    <div className="VendingMachineItems-div">
      <Link className="VendingMachineItems-link" to="/coca-cola">
        Coca Cola
      </Link>
      <Link className="VendingMachineItems-link" to="/pepsi">
        Pepsi
      </Link>
      <Link className="VendingMachineItems-link" to="/chips">
        Chips
      </Link>
    </div>
  );
}

export default ItemList;
