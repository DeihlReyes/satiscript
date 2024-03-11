import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const dashboard = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <section>
      <h1>Dashboard</h1>
    </section>
  );
};

export default dashboard;
