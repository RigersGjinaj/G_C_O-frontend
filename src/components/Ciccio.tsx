import "./Ciccio.css";

interface props {
  mioNome: string;
  valore: number;
  aggiorna: Function;
  contatore: number;
}

function Ciccio({ mioNome, valore, aggiorna, contatore }: props) {
  function incrementa() {
    aggiorna(contatore * 2);
  }

  return (
    <>
      <h1>Ciao a tutti</h1>
      <button onClick={() => incrementa()}>Moltiplica {contatore}</button>
      <h2>{mioNome}</h2>
      <h2>{valore}</h2>
    </>
  );
}
export default Ciccio;
