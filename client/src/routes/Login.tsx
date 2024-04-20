import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import useLogin from "@/hooks/useLogin";
import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <main className="flex items-center mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex rounded-md w-[80vw] md:w-[40vw] h-[60vh] dark:bg-secondary bg-primary/15 p-10 flex-col gap-5 justify-center"
        action=""
      >
        <h1 className="text-3xl font-black">Please log-in</h1>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full"
          type="text"
          placeholder="Username"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">
          {loading ? <p>loading...</p> : <p>Log-in</p>}
        </Button>
        <p className="flex justify-center">
          Don't have an account?
          <Link className="text-destructive" to="/signup">
            Register!
          </Link>
        </p>
      </form>
    </main>
  );
}

export default LoginPage;
