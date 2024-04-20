import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSignup from "@/hooks/useSignUp";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();
  const [isFormComplete, setIsFormComplete] = useState(false);
  useEffect(() => {
    if (
      inputs.fullName &&
      inputs.username &&
      inputs.password &&
      inputs.confirmPassword &&
      inputs.gender
    ) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [inputs]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await signup(inputs);
  };

  return (
    <main className="flex items-center mx-auto">
      <form
        id="signUp"
        className="flex rounded-md w-[80vw] md:w-[40vw] h-[75vh] dark:bg-secondary bg-primary/25 p-10 flex-col gap-5 justify-center"
      >
        <h1 className="text-3xl font-black">Register</h1>
        <Input
          type="text"
          value={inputs.fullName}
          placeholder="Full Name"
          onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        />
        <Input
          type="text"
          value={inputs.username}
          placeholder="Username"
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        />

        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Confirm password"
          value={inputs.confirmPassword}
          onChange={(e) =>
            setInputs({ ...inputs, confirmPassword: e.target.value })
          }
        />

        <Select
          value={inputs.gender}
          onValueChange={(value) => setInputs({ ...inputs, gender: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="default">Prefer not to say</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {isFormComplete && (
          <p className="text-primary italic font-black text-center ">
            Good job! All set, let's go!
          </p>
        )}
        <Button onClick={handleSubmit} disabled={!isFormComplete || loading}>
          {loading ? "Loading..." : "Sign-up"}
        </Button>
        <p className="flex flex-col md:flex-row gap-1 justify-center">
          Have an account?
          <Link className="text-destructive" to="/login">
            Log-in!
          </Link>
        </p>
      </form>
    </main>
  );
}

export default SignUpPage;
