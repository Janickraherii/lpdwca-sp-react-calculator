function InputField(props) {
  return (
    <div className="input-field">
      <label>{props.label}</label>
      <input
        type="number"
        id={props.label}
        value={props.value}
        onChange={props.handleInput}
      />
    </div>
  );
} 
function ResultDisplay(props) {
  return (
    <div className="result-display">
      <h3>Résultat :</h3>
      <input type="number" value={props.result} readOnly/>
    </div>
  );
} 

// Main App Component
function App(props) {
 
  const [input1, setInput1] = React.useState(0);
  const [input2, setInput2] = React.useState(0);
  const [result, setResult] = React.useState(0);

  
  const handleInput1Change = (event) => {
    setInput1(Number(event.target.value));
  };

  const handleInput2Change = (event) => {
    setInput2(Number(event.target.value));
  };

  
  const handleSum = () => {
    setResult(input1 + input2);
  };

  
  const handleMultiply = () => {
    setResult(input1 * input2);
  };


  return (
    <div className="app-container">
      <h1>Simple Calculator – ReactJS</h1>

      <InputField label="Nombre 1" value={input1} handleInput={handleInput1Change} />
      <InputField label="Nombre 2" value={input2} handleInput={handleInput2Change} />

      <div className="buttons">
        <button onClick={handleSum}>Sum</button>
        <button onClick={handleMultiply}>Multiply</button>
      </div>

      <ResultDisplay result={result} />
    </div>
  );
} // End of App component


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
