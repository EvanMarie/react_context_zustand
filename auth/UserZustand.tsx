import useUserStore from "./store";

const UserZustand = () => {
  const { user, login, logout } = useUserStore();

  if (user)
    return (
      <>
        <div>
          <button onClick={() => logout()} className="btn btn-primary mx-1">
            Logout
          </button>
          {/* <span className="mx-2">{user}</span> */}
        </div>
      </>
    );
  return (
    <div>
      <button
        onClick={() => login("Evan.Marie")}
        className="btn btn-primary mx-1"
      >
        Login
      </button>
    </div>
  );
};

export default UserZustand;
