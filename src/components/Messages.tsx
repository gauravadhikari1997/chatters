import { Message } from ".";

interface IMessage {
  text: string;
  user: string;
}

interface MessagesProps {
  messages: IMessage[];
  username: string;
}

const Messages: React.FC<MessagesProps> = ({ messages, username }) => {
  return (
    <div>
      {messages.map((message: IMessage, i) => (
        <div key={i}>
          <Message message={message.text} username={message.user} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
