import useCanvas, { DrawProps } from "../hooks/useCanvas";

const CustomCanvas = (props: { draw: DrawProps }) => {
  const { draw, ...rest } = props;

  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
};

export default CustomCanvas;
