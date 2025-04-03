import { calcuatorMapping } from "../constants/calculatorMappings";
import { useState } from "react";
import styles from "../styles/global.module.css";
import { infixExpression, processExpressions } from "../utils/infixExpressions";
const Calculator = (props) => {
  const [output, setOutput] = useState("");
  const [expression, setExpression] = useState("");
  const handleChange = (event) => {
    setExpression(() => event.target.value);
  };
  const streamExpression = (event) => {
    switch (event.target.value) {
      case "=": {
        try {
          const res = infixExpression(processExpressions(expression));
          setOutput(res);
        } catch (err) {
          setOutput("Error");
        }
        break;
      }
      case "C": {
        setExpression("");
        setOutput("");
        break;
      }
      default: {
        setExpression((prevExpression) =>
          prevExpression.concat(event.target.value)
        );
      }
    }
  };
  return (
    <div className={styles.appContainer}>
      <h2>React Calculator</h2>
      <input
        type="text"
        id="expression"
        value={expression}
        onChange={handleChange}
      />
      <div id="output">{output}</div>
      {calcuatorMapping.map((item, index) => {
        return (
          <div
            className={styles.calculatorParent}
            key={`calculator-container-${index}`}
          >
            {item.map((btn, index1) => {
              return (
                <button
                  key={`calacutor-action-${index}-${index1}`}
                  type="button"
                  value={btn}
                  className={styles.targetBtn}
                  onClick={streamExpression}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Calculator;
