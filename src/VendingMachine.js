import ItemList from "./VendingMachineItems";
import "./VendingMachine.css";
function VendingMachine() {
  return (
    <div className="VendingMachine-div">
      <h1 className="VendingMachine-h1">Vending Machine</h1>
      <div className="VendingMachine-intro">
        <p>Hello, I am a Vending Machine. What would you like to eat?</p>
      </div>
      <ItemList />
    </div>
  );
}

export default VendingMachine;
