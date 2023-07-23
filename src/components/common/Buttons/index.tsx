import { IconType } from "react-icons";

interface ButtonsProps {
  hrefLink: string;
  svgName: IconType;
  caption: string;
  btnStyle: string;
}

export const ButtonsCard = ({
  hrefLink,
  svgName,
  caption,
  btnStyle,
}: React.PropsWithChildren<ButtonsProps>) => {
  return (
    <a href={hrefLink} target="_blank" className={btnStyle}>
      {svgName}
      <span className="ml-2">{caption}</span>
    </a>
  );
};
