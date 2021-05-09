import Navbar from "react-bootstrap/Navbar";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="text-warning" href="/">
        Chatters
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
