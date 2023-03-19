import * as React from "react";
import "./components.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default Container;
