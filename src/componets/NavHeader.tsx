import { NavLink } from "react-router-dom";

type Props = {
  text: string;
  route: string;
};

export default function NavHeader({ text, route }: Props) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `font-[600] text-[18px] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 delay-600 ${
          isActive ? "text-light-purple" : "text-purple"
        }`
      }
    >
      {text}
    </NavLink>
  );
}
