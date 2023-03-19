import { useState } from "react";
import { initScene } from "../src/utils/initScene";
import Container from "./Components/Container";

export type CtxProps = {
  fillStyle: string;
  beginPath: () => void;
  arc: (
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number
  ) => void;
  fill: () => void;
};

function App() {
  const initialValue = false;
  const [pressed, setPressed] = useState<boolean>(initialValue);

  const handlePressButton = () => {
    setPressed((value) => !value);
  };

  return (
    <Container>
      {initScene(pressed)}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button onClick={() => handlePressButton()}>PRESS ME!</button>
        {pressed === true && <p>Press again the button to stop</p>}
      </div>
    </Container>
  );
}

export default App;
