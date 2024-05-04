import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

import { useAppSelector } from './store';

function App() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          path="/"
        />
        <Route
          element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
          path="/login"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
