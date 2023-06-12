import { Link } from "react-router-dom";

interface NavItemProps {
  data: {
    text: string;
    to: string;
  };
  offNav: Function;
}

export default function NavItem({ data, offNav }: NavItemProps): JSX.Element {
  const { text, to } = data;
  return (
    <Link to={`${to}`} onClick={() => offNav()}>
      {text}
    </Link>
  );
}
