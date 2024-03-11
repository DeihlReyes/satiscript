import SignInForm from "@/components/forms/SignInForm";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

const page = async () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen ">
      <div>
        <SignInForm />
      </div>
    </section>
  );
};

export default page;
