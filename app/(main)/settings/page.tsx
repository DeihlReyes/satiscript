import AccountTab from "@/components/account-tab"
import GeneralTab from "@/components/general-tab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Settings = () => {
  return (
    <div className="flex h-full w-full px-8 lg:px-12 py-8">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="flex justify-start w-full">
          <TabsTrigger className="px-6" value="account">Account</TabsTrigger>
          <TabsTrigger className="px-6" value="general">General</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <AccountTab />
        </TabsContent>
        <TabsContent value="general">
          <GeneralTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Settings