import Navbar from "react-bootstrap/Navbar";

interface ChatNavBarProps {
  room: string;
  username: string;
}

const ChatNavBar: React.FC<ChatNavBarProps> = ({ room, username }) => {
  return (
    <Navbar>
      <Navbar.Brand>
        Room number: <span style={{ color: "green" }}>{room}</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <span style={{ color: "green" }}>{username}</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ChatNavBar;
