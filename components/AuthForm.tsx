
// // "use client"

// // import React from 'react'
// // import Image from "next/image";
// // import { zodResolver } from "@hookform/resolvers/zod"
// // import { useForm } from "react-hook-form"
// // import { z } from "zod"
// // import Link from "next/link";
// // import { Button } from "@/components/ui/button"
// // import {Form} from "@/components/ui/form"
// // import { Input } from "@/components/ui/input"
// // import {toast} from "sonner";
// // import FormField from "@/components/FormField";
// // import {useRouter} from "next/navigation";
// // import { auth } from "@/firebase/client";
// // import {createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";
// // import {signIn, signUp} from "@/lib/actions/auth.action";


// // // import { z } from "zod";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { toast } from "sonner";
// // // import { auth } from "@/firebase/client";
// // // import { useForm } from "react-hook-form";
// // // import { useRouter } from "next/navigation";
// // // import { zodResolver } from "@hookform/resolvers/zod";

// // const authFormSchema  = (type:FormType) =>{
// //     return z.object({
// //         name:type === 'sign-up' ?z.string().min(3) :z.string().optional(),
// //          email :z.string().email(),
// //         password: z.string().min(3),
// //     })
// // }

// // const AuthForm = ({type }:{type:FormType}) => {
// //     const router = useRouter()

// //     const formSchema = authFormSchema(type);
// //     // 1. Define your form.
// //     const form = useForm<z.infer<typeof formSchema>>({
// //         resolver: zodResolver(formSchema),
// //         defaultValues: {
// //             name: "",
// //             email : "",
// //             password:"" ,
// //         },
// //     })


// //     // 2. Define a submit handler.
// //      const onSubmit = async (data: z.infer<typeof formSchema>) => {
// //         try {
// //             if (type === "sign-up") {
// //                 const { name, email, password } = data;

// //                 const userCredential = await createUserWithEmailAndPassword(
// //                     auth,
// //                     email,
// //                     password
// //                 );

// //                 const result = await signUp({
// //                     uid: userCredential.user.uid,
// //                     name: name!,
// //                     email,
// //                     password,
// //                 });

// //                 if (!result?.success) {
// //                     toast.error(result?.message);
// //                     return;
// //                 }
                       
// //               toast.success("Account created Successful! Please Sign in ");
// //               router.push("/sign-in");
// //               }
// //               else  {
// //                   const {email, password} = data;
// //                   const userCredential = await signInWithEmailAndPassword(auth, email , password)
// //                 const idToken = await userCredential.user.getIdToken();
// //                   if(!idToken)
// //                   {
// //                       toast.error("sign-in failed!");
// //                       return;
// //                   }
// //                   await signIn({
// //                       email,idToken
// //                   })
// //                 toast.success("Sign in Successful! ");
// //                   router.push("/");
// //               }

// //             }
// //          catch (error) {
// //             console.log(error);
// //             toast.error(` this error => < ${error} > was present `)
// //         }
// //     }
// //     const  isSignIn = type === 'sign-in' ;

// //     return (
// //         <div className="card-border lg:min-w-[556px]">
// //            <div className="flex flex-col gap-6 card py-14 px-10">
// //                  <div>
// //                        <div className="flex flex-row gap-2 justify-center-safe">
// //                               <Image src ="/logo.svg" alt = "logo" height = {35} width ={ 40}/>
// //                        <h2>PrepMate</h2>
// //                        </div>
// //                      <br></br>
// //                      <h3 > Practice Job Interview with AI </h3>

// //            </div>
// //             <Form {...form}>
// //                 <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-3 form">
// //                     {! isSignIn && <p><FormField control = {form.control}
// //                                                  name="name"
// //                                                  label="name"
// //                                                  placeholder="Your name" />

// //                     </p>}
// //                     <p><FormField control = {form.control}
// //                                   name="email"
// //                                   label="email"
// //                                   placeholder="Your email"
// //                                   type ="email"
// //                                   />
// //                     </p>
// //                     <p><FormField control = {form.control}
// //                                   name="password"
// //                                   label="password"
// //                                   placeholder="Your password"
// //                                   type = "password" />
// //                     </p>

// //                     <Button className="btn" type="submit">{isSignIn? 'Sign-in' : 'Create an Account '}</Button>
// //                     {/*<Button type="submit">Submit</Button>*/}
// //                 </form>
// //             </Form>
// //               <p className= "text-center">{!isSignIn  ?"Have an account already ?" : "Create your Account "}
// //               <Link href={!isSignIn ? '/sign-in': '/sign-up'} className="font-bold">
// //                   {!isSignIn ? "Sign-in" : "Sign-up" }              </Link>
// //               </p>

// //         </div>
// //         </div>
// //     )
// // }
// // export default AuthForm



// import Image from "next/image";
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Form } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { toast } from 'sonner';
// import FormField from '@/components/FormField';
// import { useRouter } from 'next/navigation';
// import { auth } from '@/firebase/client';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { signIn, signUp } from '@/lib/actions/auth.action';

// const authFormSchema = (type: FormType) => {
//   return z.object({
//     name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
//     email: z.string().email(),
//     password: z.string().min(3),
//   });
// };

// const AuthForm = ({ type }: { type: FormType }) => {
//   const router = useRouter();

//   const formSchema = authFormSchema(type);
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit = async (data: z.infer<typeof formSchema>) => {
//     try {
//       if (type === 'sign-up') {
//         const { name, email, password } = data;

//         const userCredential = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );

//         const result = await signUp({
//           uid: userCredential.user.uid,
//           name: name!,
//           email,
//           password,
//         });

//         if (!result?.success) {
//           toast.error(result?.message);
//           return;
//         }

//         toast.success('Account created successfully! Please sign in');
//         router.push('/sign-in');
//       } else {
//         const { email, password } = data;
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         const idToken = await userCredential.user.getIdToken();

//         if (!idToken) {
//           toast.error('Sign-in failed!');
//           return;
//         }

//         await signIn({
//           email,
//           idToken,
//         });

//         toast.success('Sign-in successful!');
//         router.push('/');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(`Error: ${error.message}`);
//     }
//   };

//   const isSignIn = type === 'sign-in';

//   return (
//     <div className="card-border lg:min-w-[556px]">
//       <div className="flex flex-col gap-6 card py-14 px-10">
//         <div>
//           <div className="flex flex-row gap-2 justify-center-safe">
//             <Image src="/logo.svg" alt="logo" height={32} width={38} />
//             <h2>PrepMate</h2>
//           </div>
//           <br />
//           <h3>Practice Job Interview with AI</h3>
//         </div>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-3 form">
//             {!isSignIn && (
//               <p>
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   label="Name"
//                   placeholder="Your name"
//                 />
//               </p>
//             )}
//             <p>
//               <FormField
//                 control={form.control}
//                 name="email"
//                 label="Email"
//                 placeholder="Your email"
//                 type="email"
//               />
//             </p>
//             <p>
//               <FormField
//                 control={form.control}
//                 name="password"
//                 label="Password"
//                 placeholder="Your password"
//                 type="password"
//               />
//             </p>

//             <Button className="btn" type="submit">
//               {isSignIn ? 'Sign-in' : 'Create an Account'}
//             </Button>
//           </form>
//         </Form>
//         <p className="text-center">
//           {!isSignIn ? 'Have an account already?' : 'Create your account'}
//           <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold">
//             {!isSignIn ? 'Sign-in' : 'Sign-up'}
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
// ```
// Note that this is just an updated version of the code, and you should review it carefully to ensure that it meets your specific requirements.




"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { auth } from "@/firebase/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, } from "firebase/auth";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { signIn, signUp } from "@/lib/actions/auth.action";
import FormField from "./FormField";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (type === "sign-up") {
        const { name, email, password } = data;

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result?.success) {
          toast.error(result?.message);
          return;
        }

        toast.success("Account created successfully. Please sign in.");
        router.push("/sign-in");
      } else {
        const { email, password } = data;

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const idToken = await userCredential.user.getIdToken();
        if (!idToken) {
          toast.error("Sign in Failed. Please try again.");
          return;
        }

        await signIn({
          email,
          idToken,
        });

        toast.success("Signed in successfully.");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  };

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>

        <h3>Practice job interviews with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
              />
            )}

            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
            />

            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button className="btn" type="submit">
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;