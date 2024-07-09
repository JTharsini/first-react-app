import { MouseEvent } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  // ? : optional, here one of these values is valid
  // if any of other texts is set for color then TypeScript compiler shows error
  onClick: (event: MouseEvent) => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
