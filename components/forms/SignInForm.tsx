"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SignInSchema, signinSchema } from "@/lib/validation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignInSchema) => {
    const response = await fetch("/api/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });

    console.log(response)
    if (response.ok) {
      router.push("/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Error Logging In",
        duration: 3000,
      });
    }
  };

  return (
    <Card className="w-[350px] lg:w-[400px] h-full p-4">
      <CardHeader className="text-center space-y-2">
        <CardTitle>Satiscript</CardTitle>
        <CardDescription>
          Sign in if you already have an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="space-y-2 w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="mail@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <CardFooter className="p-0">
              <Button className="w-full mt-6 dark:text-foreground" type="submit">
                Sign in
              </Button>
            </CardFooter>
          </form>
          <p className="text-center text-sm text-gray-600 mt-8">
            If you don&apos;t have an account, please&nbsp;
            <Link className="text-blue-500 hover:underline" href="/sign-up">
              Sign up
            </Link>
          </p>
        </Form>
      </CardContent>
      <CardFooter>
        <div className="bg-primary/10 w-full p-4">
          <h2 className="text-base mb-2">Demo Account: </h2>
          <p className="text-sm">Email: demo@gmail.com</p>
          <p className="text-sm">Password: demo12345</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignInForm;
