import React from 'react';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { SiMarketo, SiLinuxmint } from 'react-icons/si';
import { BiPurchaseTagAlt } from 'react-icons/bi';
function Sidebar() {
  return (
    <aside className='w-64 bg-gray-900 md:static fixed top-0 bottom-0 left-0 text-white'>
      <h1 className='text-center text-2xl font-semibold p-2'>Art Dodger</h1>
      <ul className='list-none flex flex-col space-y-2 pt-4'>
        <li>
          <Link href='/'>
            <a className='p-2  flex  items-center gap-x-2'>
              <AiFillHome />
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/marketplace'>
            <a className='p-2  flex  items-center gap-x-2'>
              <SiMarketo />
              Marketplace
            </a>
          </Link>
        </li>
        <li>
          <Link href='/owned'>
            <a className='p-2  flex  items-center gap-x-2'>
              <BiPurchaseTagAlt />
              Owned
            </a>
          </Link>
        </li>
        <li>
          <Link href='/mint'>
            <a className='p-2  flex  items-center gap-x-2'>
              <SiLinuxmint />
              Mint
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
