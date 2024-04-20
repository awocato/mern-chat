import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/routes/Home";
import Layout from "@/components/Layout";
import LoginPage from "@/routes/Login";
import SignUpPage from "@/routes/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "@/context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={authUser ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUpPage />}
          />
        </Route>
      </Routes>
      <Toaster
        toastOptions={{
          className:
            "dark:bg-secondary bg-primary/25 dark:text-primary-foreground text-primary-background",
        }}
      />
    </>
  );
}

export default App;
