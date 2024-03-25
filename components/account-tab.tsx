'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { set, z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react";

 
const detailsSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
})

type Details = z.infer<typeof detailsSchema>

const passwordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Password do not match",
});


const AccountTab = () => {
  // i want the button to say Edit when the form is not in edit mode and Save when the form is in edit mode
  // i want the form to be in edit mode when the page loads
  // i want the form to be in edit mode when the user clicks the Edit button

  const [editMode, setEditMode] = useState(false);

  const formDetials = useForm<z.infer<typeof detailsSchema>>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      firstname: "John",
      lastname: "Doe",
      username: "johndoe"
    },
  });

  const formPassword = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    },
  });

  const onSubmit = formDetials.handleSubmit((values: z.infer<typeof detailsSchema>) => {
    console.log(values);
    setEditMode(false); // Switch to view mode after submitting
  });

  function onSubmitPassword(values: z.infer<typeof passwordSchema>) {
    console.log(values);
  }
  
  const handleClick = () => {
    if (editMode) {
      onSubmit();
    } else {
      setEditMode(true); // Switch to edit mode when Edit button is clicked
    }
  };

  return (
    <div>
      <Card className="p-4 lg:p-8">
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>View and Edit your account details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-md py-8">
            <h1 className="font-bold text-xl mb-6">Details</h1>
            <Form {...formDetials}>
              <form onSubmit={onSubmit} className="lg:space-y-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-0">
                  <FormField
                    control={formDetials.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input disabled={!editMode} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formDetials.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input disabled={!editMode} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                    control={formDetials.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input disabled={!editMode} {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <Button className="w-20 mt-8 lg:mt-0" type="button" onClick={handleClick}>{
                  editMode ? "Save" : "Edit"
                }</Button>
              </form>
            </Form>
          </div>

          {/* Password */}

          <div className="max-w-md py-8 lg:pr-36">
            <h1 className="font-bold text-xl mb-6">Change Password</h1>
            <Form {...formPassword}>
              <form onSubmit={formPassword.handleSubmit(onSubmitPassword)} className="lg:space-y-6">
                <FormField
                  control={formPassword.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formPassword.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                    control={formPassword.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <Button className="mt-8 lg:mt-0" type="submit">Change Password</Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AccountTab