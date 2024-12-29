import React from 'react';
import { Button } from 'flowbite-react';
import { BeakerIcon, OutlineBeakerIcon } from './assets/icon';
import { CardComponent } from './component/ui/userInterface/CardComponent';
import { AccordionComponent, NavbarComponent, ButtonGroupComponent } from './component/ui/Navigate';



function App()
{
  return (
    <section className="flex flex-col h-screen items-center  justify-center ts bg-gray-100">
      {/* <Button color="primary">Click me</Button>
      <CardComponent />
      <AccordionComponent />
      <NavbarComponent /> */}
      <ButtonGroupComponent />
    </section>
  );
}

export default App;
