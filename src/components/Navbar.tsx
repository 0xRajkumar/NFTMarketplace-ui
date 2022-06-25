import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
  return (
    <nav className='h-16 flex items-center px-4 justify-end  sticky top-0 bg-gray-900'>
      <ConnectButton />
    </nav>
  );
}

export default Navbar;
