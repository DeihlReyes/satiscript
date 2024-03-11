import { logout } from "@/lib/auth";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

const LogoutButton = () => {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await logout();
        redirect("/sign-in");
      }}>
      <Button className="w-full" type="submit">
        Sign out
      </Button>
    </form>
  );
};

export default LogoutButton;
