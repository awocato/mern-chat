import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import useLogout from "@/hooks/useLogout";
function LogoutButton() {
  const { loading, logout } = useLogout();

  return (
    <Button onClick={logout}>
      {!loading ? (
        <div className="flex items-center gap-3">
          <LogOut />
          <p>Log out</p>
        </div>
      ) : (
        "loading..."
      )}
    </Button>
  );
}

export default LogoutButton;
