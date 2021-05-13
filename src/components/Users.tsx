interface IUser {
  username: string;
  status: string;
  _id: string;
}

interface UsersProps {
  users: IUser[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      {users.map((user) => (
        <div key={user._id} className="col mb-4 ">
          <div className="card border-success">
            <div className="card-body">
              <h5 className="card-title text-secondary">{user.username}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
