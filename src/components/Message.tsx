interface MessageProps {
  message: string;
  username: string;
}

const Message: React.FC<MessageProps> = ({ message, username }) => {
  return (
    <div>
      <strong>{username}</strong> - {message}
    </div>
  );
};

export default Message;
