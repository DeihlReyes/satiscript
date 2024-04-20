'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
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
import { toast } from "./ui/use-toast";
import { detailsSchema, passwordSchema } from "@/lib/validation";



type Details = z.infer<typeof detailsSchema>


const AccountTab = (user: Details) => {
  const [editMode, setEditMode] = useState(false);

  const formDetails = useForm<z.infer<typeof detailsSchema>>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      username: user.username || "",
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

  const onSubmit = formDetails.handleSubmit(async (values: z.infer<typeof detailsSchema>) => {
    if (values.firstName === user.firstName && values.lastName === user.lastName && values.username === user.username) {
      setEditMode(false);
      return;
    }
    const response = await fetch("/api/profile/details", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username
      }),
    });
    if (response.ok) {
      toast({
          title: "Account details updated",
          description: "Details has been updated successfully",
          duration: 5000,
        })
      setEditMode(false);
    } else {
      toast({
          title: "Error",
          description: "An error occurred while updating your details",
          variant: "destructive",
          duration: 5000,
        })
    }
  });

  const onSubmitPassword = async (values: z.infer<typeof passwordSchema>) => {
    if (values.newPassword === values.currentPassword) {
      toast({
        title: "Error",
        description: "New password cannot be the same as the current password",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    if (values.newPassword !== values.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    const response = await fetch("/api/profile/password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword
      }),
    });

    if (response.ok) {
      formPassword.reset();
      toast({
        title: "Password updated",
        description: "Password has been updated successfully",
        duration: 5000,
      });
    } else {
      toast({
        title: "Error",
        description: "An error occurred while updating your password",
        variant: "destructive",
        duration: 5000,
      });
    }
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
            <Form {...formDetails}>
              <form onSubmit={onSubmit} className="lg:space-y-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-0">
                  <FormField
                    control={formDetails.control}
                    name="firstName"
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
                    control={formDetails.control}
                    name="lastName"
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
                    control={formDetails.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input disabled={!editMode} {...field} />
                        </FormControl>
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