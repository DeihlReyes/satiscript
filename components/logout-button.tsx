import { logout } from "@/lib/auth";
import { LogOut } from "lucide-react";
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
          <AlertDialogTrigger className="flex flex-row justify-center items-center gap-4 font-semibold w-full py-2 rounded-md bg-primary text-primary-foreground dark:text-foreground hover:bg-primary/90">
            <p>
              Logout
            </p>
            <LogOut className="w-4 h-4" />
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
                <AlertDialogAction className="dark:text-foreground" type="submit">
                  Sign out
                </AlertDialogAction>
              </form>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
  );
};

export default LogoutButton;
