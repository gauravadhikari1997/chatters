import { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import { ChatRoom, JoinRoom } from ".";

const Home: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joinData, setJoinData] = useState({});

  function onJoinSuccess(data: any) {
    setJoinData(data);
    setUsername(data.userData.username);
    setRoom(data.userData.room);
    history.push(`/chat/rooms/${data.userData.room}`);
  }

  return (
    <Switch>
      <Route
        path="/join"
        component={() => <JoinRoom onJoinSuccess={onJoinSuccess} />}
      />
      <Redirect from="/" to="/join" exact />
      <Route
        path="/chat/rooms/:roomNumber"
        component={() => (
          <ChatRoom username={username} room={room} joinData={joinData} />
        )}
      />
    </Switch>
  );
};

export default Home;
