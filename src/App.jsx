import React from 'react';
import { Button } from 'flowbite-react';
import { ComponentAccordion } from './component/ui/Navigate/ComponentAccordion';
import { ComponentNavbar } from './component/ui/Navigate/ComponentNavbar';
import { BeakerIcon, OutlineBeakerIcon } from './assets/icon';
import { CardComponent } from './component/ui/userInterface/CardComponent';



function App()
{
  return (
    <section className="flex h-screen items-center  justify-center ts bg-gray-100">
      <Button color="primary">Click me</Button>
      <CardComponent />
    </section>
  );
}

export default App;
