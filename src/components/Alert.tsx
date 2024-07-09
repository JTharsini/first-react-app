import { ReactNode } from "react";

interface Props {
  //children: string; // name children is mandatory to have it as child component
  children: ReactNode; // to pass html tag as children, ReactNode type should be used
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
