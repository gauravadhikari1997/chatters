import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

import { Messages, Users, ChatNavBar } from ".";
import { socket } from "../utils/web-sockets";

interface ChatRoomProps {
  username: string;
  room: string;
  joinData: any;
}

interface IMessage {
  text: string;
  user: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ username, room, joinData }) => {
  const history = useHistory();
  const chatLog = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  useEffect((): any => {
    socket.on("roomInfo", (data: any) => setUsers(data.users));

    if (Object.keys(joinData).length > 0) {
      setMessages([joinData]);
      socket.on("message", (message: IMessage, error: string) => {
        setMessages((msgs) => [...msgs, message]);
      });
    } else {
      history.push("/join");
    }

    return () => socket.disconnect();
  }, [history, joinData]);

  useEffect(() => {
    if (chatLog.current) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [messages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(message);
  };

  const sendMessage = (message: string) => {
    if (message) {
      socket.emit(
        "sendMessage",
        { userId: joinData.userData.id, message },
        (error: string) => {
          if (error) {
            alert(error);
            history.push("/join");
          }
        }
      );
      setMessage("");
    }
  };

  return (
    <div>
      <ChatNavBar username={username} room={room} />
      <Users users={users} />
      <div ref={chatLog}>
        <Messages messages={messages} username={username} />
        <Form className="join-room-form" onSubmit={handleClick}>
          <Form.Group
            style={{ display: "flex", alignItems: "baseline" }}
            controlId="formBasicEmail"
          >
            <Form.Control
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={handleChange}
            />
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default ChatRoom;
