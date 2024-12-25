import React from 'react';
import { Button } from 'flowbite-react';
import { ComponentAccordion } from './component/ui/Navigate/ComponentAccordion';
import { ComponentNavbar } from './component/ui/Navigate/ComponentNavbar';
import { BeakerIcon, OutlineBeakerIcon } from './assets/icon';



function App()
{
  return (
    <section className="flex h-screen items-center  justify-center ts bg-gray-100">
      {/* <Button color="primary">Click me</Button>
      <BeakerIcon className='w-6 h-6 text-blue-600' />
      <OutlineBeakerIcon className='w-6 h-6 text-colors-gray-36' /> */}
      {/* <ComponentNavbar /> */}
      {/* <ComponentAccordion /> */}
      <div className="space-y-4">
        {/* Ukuran Berbeda */}
        <BeakerIcon className="w-4 h-4 text-red-500" /> {/* Kecil */}
        <BeakerIcon className="w-8 h-8 text-green-500" /> {/* Sedang */}
        <BeakerIcon className="w-12 h-12 text-blue-500" /> {/* Besar */}

        {/* Efek Hover */}
        <OutlineBeakerIcon className="w-8 h-8 text-gray-400 hover:text-gray-800" />

        {/* Animasi */}
        <BeakerIcon className="w-8 h-8 text-pink-500 animate-bounce" />
      </div>
    </section>
  );
}

export default App;
