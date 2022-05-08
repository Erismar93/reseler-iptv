import clsx from "clsx";
import { Button } from "../button/Button";

const options: MenuItemProps[] = [
  {
    label: "Planos",
    href: "plans",
  },
  {
    label: "Benefícios",
    href: "plans",
  },
  {
    label: "Revenda",
    href: "plans",
  },
];

export const Header = () => {
  return (
    <header
      className={clsx(
        "flex justify-between w-full",
        "px-6 lg:px-40 py-4 lg:py-6","font-bold absolute top-0 z-10"
      )}
    >
      <Logo />
      <div className="hidden lg:flex items-center">
        <MenuList options={options} />
      </div>
    </header>
  );
};

type MenuItemProps = {
  href: string;
  label: string;
  active?: boolean;
};

type MenuListProps = {
  options: MenuItemProps[];
};
const MenuList = (props: MenuListProps) => {
  const { options } = props;
  return (
    <ul className="flex space-x-10 ">
      {options.length > 0 &&
        options.map((option, key) => <MenuItem key={key} {...option} />)}
    </ul>
  );
};

const MenuItem = (props: MenuItemProps) => {
  const { active, href, label } = props;
  return (
    <li
      className={clsx(
        "uppercase",
        "cursor-pointer",
        "group relative",
      )}
    >
      <div className="px-1 text-sm text-gray-400 group-hover:text-white">
        <a href={href}>{label}</a>
      </div>
      <div className="first-letter:w-full h-0.5 group-hover:bg-primary"></div>
    </li>
  );
};

const Logo = () => {
  return <h1 className="text-white text-2xl font-bold">IPTV Online</h1>;
};
