import { logout } from "@/lib/auth";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const LogoutButton = () => {
  return (
        <AlertDialog>
          <AlertDialogTrigger className="w-full py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
              Sign out
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Do you want to sign out?</AlertDialogTitle>
              <AlertDialogDescription>
                Signing out will redirect you to the sign in page.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <form
                className="space-x-4"
                action={async () => {
                  "use server";
                  await logout();
                  redirect("/sign-in");
                }}>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction type="submit">
                  Sign out
                </AlertDialogAction>
              </form>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
  );
};

export default LogoutButton;
