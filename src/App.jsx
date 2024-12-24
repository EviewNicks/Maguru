import React from 'react';
import { Button } from 'flowbite-react';
import { ComponentAccordion } from './component/ui/Navigate/ComponentAccordion';
import { ComponentNavbar } from './component/ui/Navigate/ComponentNavbar';




function App()
{
  return (
    <section className="flex h-screen items-center justify-center bg-gray-100">
      <Button color="primary">Click me</Button>
      {/* <ComponentNavbar /> */}
      {/* <ComponentAccordion /> */}
    </section>
  );
}

export default App;
