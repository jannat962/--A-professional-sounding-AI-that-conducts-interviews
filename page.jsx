
"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { supabase } from "@/services/supabaseClient";

function Page() {
const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    console.error('Supabase OAuth Error:', error.message);
    return;
  }

  console.log('Redirecting to Google login:', data);
};

  // used to sign in with google

  // const signInwithGoogle=async()=>{
  //   const {error}= await supabase.auth.signInWithOAuth({
  //     provider:'google'
  //   }
  //   )
    
  //   if(error){
  //     console.error('Error:',error.message)
  //   }
  // }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center border rounded-2xl p-8'>
        <Image
          src="/logo3.png"
          alt="logo"
          width={400}
          height={300}
          className="w-[180px]"
        />

        <div className='flex items-center flex-col gap-4'>
          <Image
            src="/login3.png"
            alt="login"
            width={600}
            height={400}
            className="w-[400px] h-[250px]"
          />

          <h2 className='text-2xl font-bold text-center mt-5'>
            Welcome to IntanCruiter
          </h2>
          <p className='text-gray-500 text-center'>
            Sign In with Google Authentication
          </p>
          <Button className='mt-3'
          onClick={signInWithGoogle}>Login with google</Button>
        </div>
        
      </div>
    </div>
    
  );
}

export default Page;