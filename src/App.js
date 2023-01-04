import Button from "./components/Button";
import Input from "./components/Input";

import { useState } from "react";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [secondNumber, setSecondNumber] = useState("0");
  const [fisrtNumber, setFirstNumber] = useState("0");
  const [resultNumber, setResultNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setFirstNumber("0");
    setSecondNumber("0");
    setResultNumber("0");
    setOperation("");
  };

  const handleAddNumber = (number) => {
    setResultNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (fisrtNumber === "0") {
      setFirstNumber(String(resultNumber));
      setResultNumber("0");
      setOperation("+");
    } else if (secondNumber === "0" && fisrtNumber !== "0") {
      setSecondNumber(resultNumber);
      setResultNumber("0");
    } else {
      const sum = Number(fisrtNumber) + Number(secondNumber);
      setResultNumber(String(sum));
    }
  };

  const handleMinusNumbers = () => {
    if (fisrtNumber === "0") {
      setFirstNumber(String(resultNumber));
      setResultNumber("0");
      setOperation("-");
    } else if (secondNumber === "0" && fisrtNumber !== "0") {
      setSecondNumber(resultNumber);
      setResultNumber("0");
    } else {
      const minus = Number(fisrtNumber) - Number(secondNumber);
      setResultNumber(String(minus));
    }
  };

  const handlePowNumbers = () => {
    if (fisrtNumber === "0") {
      setFirstNumber(String(resultNumber));
      setResultNumber("0");
      setOperation("*");
    } else if (secondNumber === "0" && fisrtNumber !== "0") {
      setSecondNumber(resultNumber);
      setResultNumber("0");
    } else {
      const pow = Number(fisrtNumber) * Number(secondNumber);
      setResultNumber(String(pow));
    }
  };

  const handleDividedNumbers = () => {
    if (fisrtNumber === "0") {
      setFirstNumber(String(resultNumber));
      setResultNumber("0");
      setOperation("/");
    } else if (secondNumber === "0" && fisrtNumber !== "0") {
      setSecondNumber(resultNumber);
      setResultNumber("0");
    } else {
      const divided = Number(fisrtNumber) / Number(secondNumber);
      setResultNumber(String(divided));
    }
  };

  const handleSqrtNumbers = () => {
    if (fisrtNumber === "0") {
      setFirstNumber(String(resultNumber));
      setSecondNumber(String(resultNumber));

      setOperation("x²");
      const sqrt = Math.sqrt(Number(fisrtNumber));
      setResultNumber(String(sqrt));
    }
  };

  const handlePerCentNumbers = () => {
    if (fisrtNumber === "0") {
      setFirstNumber(String(resultNumber));
      setResultNumber("0");
      setOperation("%");
    } else if (secondNumber === "0" && fisrtNumber !== "0") {
      setSecondNumber(resultNumber);
      setResultNumber("0");
    } else {
      const perCent = Number(fisrtNumber) * Number("0." + secondNumber);
      setResultNumber(String(perCent));
    }
  };
  const handleEquals = () => {
    if (secondNumber === "0") {
      setSecondNumber(resultNumber);
    }

    if (fisrtNumber !== "0" && operation !== "" && secondNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handlePowNumbers();
          break;
        case "/":
          handleDividedNumbers();
          break;
        case "√":
          handleSqrtNumbers();
          break;
        case "%":
          handlePerCentNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input
          value={`${fisrtNumber} ${operation} ${secondNumber} ${
            operation !== "" ? "=" : ""
          }`}
        />
        <Input value={resultNumber} />
        <Row>
          <Button label="C" onClick={() => handleOnClear("C")} />
        </Row>
        <Row>
          <Button label="%" onClick={() => handlePerCentNumbers()} />
          <Button label="x²" onClick={() => handlePowNumbers()} />
          <Button label="√" onClick={() => handleSqrtNumbers()} />
          <Button label="/" onClick={() => handleDividedNumbers()} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="x" onClick={() => handlePowNumbers()} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={() => handleMinusNumbers()} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={() => handleSumNumbers()} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="=" onClick={() => handleEquals()} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
