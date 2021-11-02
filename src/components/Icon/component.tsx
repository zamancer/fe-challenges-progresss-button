import Chevron from "../../../public/assets/chevron.svg";
import Check from "../../../public/assets/check.svg";
import Cross from "../../../public/assets/cross.svg";
import { IProps } from "./index";

const Icon = ({ color, type }: IProps) => {
  const getIconLogo = () => {
    switch (type) {
      case "check":
        return Check;
      case "chevron":
        return Chevron;
      case "cross":
        return Cross;
    }
  };

  const IconLogo = getIconLogo();

  return <IconLogo fill={color} stroke={color} />;
};

export { Icon };
