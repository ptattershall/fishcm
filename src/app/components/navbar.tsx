"use client"
import { useRouter } from "next/navigation";
import { Fragment, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect } from "react";
import {navOptions} from "@/app/components/navItems";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";


// ... Rest of the code ...
const btnValues = "cursor-pointer font-medium p-2 m-2 hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 rounded-2xl";
const token = typeof window !== "undefined" ? localStorage.getItem('token') : null;
const user = typeof window !== "undefined" ? localStorage.getItem('role') : null;

// eslint-disable-next-line react-hooks/rules-of-hooks


function NavItems() {
  return (
    <div className="items-center justify-between" id="nav-items">
        <ul className="flex flex-row">
            {navOptions.map((item) => (
                    <li key={item.id} className={btnValues}>{item.label}</li>)
                )
            }
        </ul>
    </div>
  );
}

export default function Navbar() {
  const router = useRouter();

  const isAuthUser = useState(token ? true : false);

  const handleLogout = async () => {
    try {
        await axios.get("/api/users/logout");
        toast.success("Logged out successfully!");
        router.push("/");
    } catch (error: any) {
        console.log(error.message);
        toast.error(error.message);
    }
  };       //   

  const handleSignIn = () => {
    router.push("/login");
  };

  const handleSignUp = () => {
    router.push("/signup"); // You can replace "/signup" with the path to your signup page.
  };

  const goToDashboard = () => {
    
};


  return (
    <nav className="fixed w-full z-20 top-0 left-0 border-b bg-blue-900 opacity-80 text-slate-200">
      <div className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-3">
        <div className="flex items-center cursor-pointer p-5">
          <Link href='/'>
              <Image src="/images/logo.png" alt="My logo" width={84} height={100}/>
          </Link>
        </div>
        <div className="flex md:order-2 gap-2">
          {!isAuthUser ? (
            <Fragment>
              <button
                className={btnValues}
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <button
                className={btnValues}
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button
                className={btnValues}
                onClick={goToDashboard}
              >
                Account
              </button>
              <button
                className={btnValues}
                onClick={handleLogout}
              >
                Logout
              </button>
            </Fragment>
          )}
           <button 
                    data-collapse-toggle="nav-sticky"
                    type="button" 
                    className="md:box-content p-2 rounded-2xl md:hidden hover:bg-blue-600 focus:outline-none"
                    aria-controls="nav-sticky"
                    aria-expanded="false"
                >
                <span className="sr-only">Open main menu</span>
                <svg className="pl-3 pt-3 w-10 h-10" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
                    <path 
                        d="M1 1h8M1 4h 8M1 7h8"
                        stroke="black" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                    ></path>
                </svg>
            </button>
        </div>
        <NavItems />
      </div>
    </nav>
  );
}

