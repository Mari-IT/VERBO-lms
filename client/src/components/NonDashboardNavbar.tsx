"use client"

import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Mail , Search } from 'lucide-react'; 
import Link from 'next/link';
import React from 'react';

export const NonDashboardNavbar = () => {
  const {user} = useUser();
  const userRole = user?.publicMetadata?.userType as "student" | "teacher";
  //console.log('user?.publicMetadata?.userType:', user?.publicMetadata?.userType);
  
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
        <Link href="/" className="nondashboard-navbar__brand" scroll={false}>
          VERBO
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Link href="/search" className="nondashboard-navbar__search-input" scroll={false}>
              <span className="hidden sm:inline">Search Courses</span>
              <span className="sm:hidden">Search</span>
            </Link>
            <Search 
              className="nondashboard-navbar__search-icon"
              size={19}/>
          </div>
        </div>
        </div>
      
      <div className="nondashboard-navbar__actions">
        <button className="nondashboard-navbar__notification-button">
            <span className="nondashboard-navbar__notification-indicator">  
            </span>
            <Mail  className="nondashboard-navbar__notification-icon" />
        </button>

        <SignedIn>
          <UserButton 
            appearance={{
              baseTheme: dark,
              elements: {
                userButtonOuterIdentifier: "text-customgreys-dirtyGrey",
                userButtonBox: "skale-90 sm:scale-100"
              }
            }}
            showName={true}
            userProfileMode="navigation"
            userProfileUrl={
              userRole === "teacher" ? "/teacher/profile" : "/user/profile"
            }
          />
        </SignedIn>
        <SignedOut>
          <Link href="/signin" className="nondashboard-navbar__auth-button--login" scroll={false}>
            Log In
          </Link>
          <Link href="/signup" className="nondashboard-navbar__auth-button--signup" scroll={false}>
            Sign Up
          </Link>
        </SignedOut>
      </div>
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;