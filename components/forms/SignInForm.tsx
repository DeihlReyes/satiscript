'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';
import { SignInSchema, signinSchema } from '@/lib/validation';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast"


const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast()
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: SignInSchema) => {
    const data = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });


    if(data?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was an error logging you in. Please try again.",
      })
    } else {
      router.push('/dashboard')
    }
  };

  return(
    <Card className='lg:w-[400px] h-full shadow-md shadow-slate-200 p-4'>
      <CardHeader className='text-center space-y-2'>
        <CardTitle>CSATisfy</CardTitle>
        <CardDescription>Sign in if you already have an account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
            <div className='space-y-2 w-full'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='mail@example.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        placeholder='Enter your password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <CardFooter className='p-0'>
              <Button className='w-full mt-6' type='submit'>
                Sign in
              </Button>
            </CardFooter>
          </form>
          <p className='text-center text-sm text-gray-600 mt-8'>
            If you don&apos;t have an account, please&nbsp;
            <Link className='text-blue-500 hover:underline' href='/sign-up'>
              Sign up
            </Link>
          </p>
        </Form>
      </CardContent>
    </Card>
  );

};

export default SignInForm;
