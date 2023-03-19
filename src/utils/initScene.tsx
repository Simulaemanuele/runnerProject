import * as React from "react";
import CanvasContainer from "../Components/CanvasContainer";

export const initScene = (pressed: boolean) => {
  let scene: JSX.Element;
  if (pressed === true) {
    return (scene = <CanvasContainer />);
  } else {
    return (scene = <></>);
  }
};
