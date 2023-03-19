import * as React from "react";
import CustomCanvas from "./Canvas";

const CanvasContainer = () => {
  const draw = (ctx: any, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.fillRect(100, 24, 100, 100);
    ctx.closePath();
  };
  return <CustomCanvas draw={draw} />;
};

export default CanvasContainer;
