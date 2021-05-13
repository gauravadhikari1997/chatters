import useDarkMode from "use-dark-mode";

import Navbar from "react-bootstrap/Navbar";
import Toggle from "./Toggle";

const Header: React.FC = () => {
  const darkMode = useDarkMode(false);

  return (
    <Navbar expand="lg">
      <Navbar.Brand className="text-warning" href="/">
        Chatters
      </Navbar.Brand>
      <div className="dark-mode-toggle">
        <button type="button" onClick={darkMode.disable}>
          ☀
        </button>
        <Toggle />
        <button type="button" onClick={darkMode.enable}>
          ☾
        </button>
      </div>
    </Navbar>
  );
};

export default Header;
