import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useAppDispatch } from "../store";
import { logout } from "../store/slices/authSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-[100vw] mx-auto px-6 bg-gray-950 py-4 min-h-[100vh] ">
      <div className="bg-gray-300 py-4  w-[80%] text-black  rounded flex items-center justify-between px-2">
        <h2 className="text-2xl">Todo App</h2>
        <button
          onClick={handleLogout}
          className="border text-xs font-bold  rounded p-2 bg-white text-[#003135]"
        >
          Logout
        </button>
      </div>

      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
