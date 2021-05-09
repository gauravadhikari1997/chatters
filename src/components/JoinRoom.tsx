import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { socket } from "../utils/web-sockets";

interface JoinRoomProps {
  onJoinSuccess: (data: any) => void;
}

const JoinRoom: React.FC<JoinRoomProps> = ({ onJoinSuccess }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {}, []);

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setUsername(inputValue);
  };

  const onRoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const roomNo = e.target.value;
    setRoom(roomNo);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && room) {
      socket.emit("join", { username, room }, (error: string) => {
        if (error) {
          setError(error);
        } else {
          socket.on("welcome", (data: any) => {
            onJoinSuccess(data);
          });
        }
      });
    }
  };

  socket.on("welcome", (data: any) => {
    onJoinSuccess(data);
  });

  return (
    <Form className="join-room-form" onSubmit={submit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Enter your name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Name"
          maxLength={25}
          value={username}
          onChange={onUsernameChange}
        />
        <Form.Text className="text-muted">
          This name will be used as username while chatting.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Enter room number of your choice</Form.Label>
        <Form.Control
          type="text"
          placeholder="Room Number"
          maxLength={25}
          value={room}
          onChange={onRoomChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Join the Chat Room
      </Button>
      <p style={{ color: "red" }}>{error}</p>
    </Form>
  );
};

export default JoinRoom;
