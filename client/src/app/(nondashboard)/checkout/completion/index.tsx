"use client";

import { Button } from '@/components/ui/button';
import { BadgeCheck, CheckCheck, CircleCheckBig } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


const CompletionPage = () => {
  return (
    
    <div className="completion">
        <div className="completion__content">
            <div className="completion__icon">
             <CheckCheck className="w-20 h-19" />
        </div>
        <h1 className="completion__title">ENROLLMENT COMPLETED</h1>
        <p className="completion__message">
            🥳✨ Thank you for your purchase! Enjoy your course! 🥳✨
        </p>    
    </div>
    <div className="completion__support">
        <p>
            Looking for help? Our{"  "}
          <Button variant="link" asChild className="p-0 m-0 text-primary-750">
            <a href="mailto:verbo.lms@gmail.com">support team </a>
          </Button> {" "}
           is here for you!
        </p>
    </div>
    <div className="completion__action">
        <Link href="user/courses" scroll={false}
        className = "text-gray-700 px-4 py-2 rounded-md">
            Check Out Courses
        </Link>
      </div>
    </div>
  )
};

export default CompletionPage;