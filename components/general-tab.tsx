"use client";

import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { espKeySchema } from "@/lib/validation";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

type espKeyProps = z.infer<typeof espKeySchema>;

const GeneralTab = (espKey: espKeyProps) => {
  const formDetails = useForm<z.infer<typeof espKeySchema>>({
    resolver: zodResolver(espKeySchema),
    defaultValues: {
      espKey: espKey.espKey ?? "",
      userId: espKey.userId
    },
  });

  const onSubmit = formDetails.handleSubmit(
    async (values: z.infer<typeof espKeySchema>) => {

      if (values.espKey !== espKey.espKey) {
        setEditMode(false);
      }

      const response = await fetch("/api/esp/post-key", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: espKey.userId,
          espKey: values.espKey,
        }),
      });

      console.log(response)

      if (response.ok) {
        formDetails.reset();
        toast({
          title: "EspKey Saved!",
          description: "EspKey was saved successfully",
          duration: 3000,
        });
      } else {
        toast({
          title: "Error",
          description: "An error occurred while saving espKey",
          variant: "destructive",
          duration: 3000,
        });
      }
    }
  );

  const handleClick = () => {
    if (editMode) {
      onSubmit();
    } else {
      setEditMode(true); // Switch to edit mode when Edit button is clicked
    }
  };

  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <Card className="p-4 lg:p-8">
        <CardHeader>
          <CardTitle>General</CardTitle>
          <CardDescription>Change your general settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-md py-8">
            <h1 className="font-bold text-lg mb-6">Theme Settings</h1>
            <ModeToggle />
          </div>
          <div className="max-w-sm">
            <Form {...formDetails}>
              <form onSubmit={onSubmit} className="space-y-6">
                <FormField
                  control={formDetails.control}
                  name="espKey"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>EspKey</FormLabel>
                      <FormControl>
                        <Input placeholder="No key yet!" disabled={!editMode} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="w-20 mt-8 lg:mt-0 dark:text-foreground"
                  type="button"
                  onClick={handleClick}>
                  {editMode ? "Save" : "Edit"}
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneralTab;
