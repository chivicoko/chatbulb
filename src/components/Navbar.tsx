import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar: React.FC = () => {

  return (    
    <nav className="z-30 mb-10">
      <div className="flex items-center justify-between p-4 md:px-20 bg-[#f59739c7]">

        <Link href="/" className="flex items-center space-x-2">
          <span className="relative w-8 h-8">
            <Image
              src="/logo.png"
              alt="EktroMart Store's Logo"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100%"
            />
          </span>
          <span className="text-white text-xl md:text-2xl font-bold md:flex items-center">
            ChatBulb-EXP
          </span>
        </Link>

        <ClerkLoading>
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <UserButton/>
          </SignedIn>

          <SignedOut>
            <Link href='/sign-in' className='flex items-center justify-between gap-1 bg-purple-600 hover:bg-purple-500 rounded-md text-white text-sm md:text-base py-2 md:py-[11px] px-3 md:px-4 hover:cursor-pointer shadow-md'> 
              <AccountCircleIcon />
              Login
            </Link>
          </SignedOut>
        </ClerkLoaded>

      </div>
    </nav>
  );
};

export default Navbar;
