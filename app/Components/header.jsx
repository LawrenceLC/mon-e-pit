
import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";


const Header = () => {
  return (
    <header className=" flex-wrap sticky top-0 z-20 mx-auto flex w-full items-center justify-between p-8">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;