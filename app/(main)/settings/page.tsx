import AccountTab from "@/components/account-tab"
import GeneralTab from "@/components/general-tab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getSession } from "@/lib/auth";
import { getProfile } from "@/lib/profile";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings | Satiscript",
  description: "Settings for Satiscript, a customer satisfaction priority platform. Update your account information and general settings.",
};


const Settings = async () => {
  const session = await getSession();
  const user = await getProfile();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex h-full w-full px-8 lg:px-12 py-8">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="flex justify-start w-full">
          <TabsTrigger className="px-6" value="account">Account</TabsTrigger>
          <TabsTrigger className="px-6" value="general">General</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <AccountTab username={user!.username} firstName={user!.firstName} lastName={user!.lastName} />
        </TabsContent>
        <TabsContent value="general">
          <GeneralTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Settings