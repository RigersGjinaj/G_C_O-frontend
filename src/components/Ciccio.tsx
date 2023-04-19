import { Fragment } from "react";
import { useState } from "react";
import "./Ciccio.css";

interface props {
  mioNome: string;
  valore: number;
}

function Ciccio(props: props) {
  const [contatore, setContatore] = useState(1);

  function incrementa() {
    setContatore((contatore) => contatore * 2);
  }

  return (
    <Fragment>
      <h1>Ciao a tutti</h1>
      <button onClick={() => incrementa()}>Moltiplica {contatore}</button>
      <h2>{props.mioNome}</h2>
      <h2>{props.valore}</h2>
    </Fragment>
  );
}
export default Ciccio;
