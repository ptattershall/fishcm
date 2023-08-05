"use client"

import Link from "next/link"; 
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect } from "react";
import toast from "react-hot-toast";



export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        role: "user"
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true)
            const res = await axios.post("/api/users/login", user)
            console.log(res.data, "Login Successful")
            router.push("/")
            toast.success("Login Successful")
        } catch (error:any) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(user.email) && user.password.length > 7) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
        }, [user])

        

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <Image src="/images/logo.png" alt="logo" width={100} height={143} className="mb-5"/>
        <div className="max-w-md w-full space-y-6">
            <h1 className="text-3xl font-bold mb-5 text-center">{loading ? "Attempting Login" : "Login"}</h1>
            <div className="mb-4 space-y-1">
                <label htmlFor="email" className="text-sm font-bold">Email</label>
                <input type="email" placeholder="Enter E-mail" value={user.email} id="email" onChange={(e) => setUser({...user, email: e.target.value})}
                    className="px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm w-full"/>
            </div>
            <div className="mb-4 space-y-1">
                <label htmlFor="password" className="text-sm font-bold">Password</label>
                <input type="password" placeholder="Enter Password" value={user.password} id="password" onChange={(e) => setUser({...user, password: e.target.value})}
                    className="px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm w-full"/>
            </div>
            <button onClick={onLogin} className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 w-full">
                {buttonDisabled ? "Enter Login Credentials" : "Login"}
            </button>
            <div className="text-center underline">
                <Link href="/signup">Go to SignUp</Link>
            </div>
            
        </div>
    </div>
  )
}