import * as React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import { Navbar, Inputcard } from './components';



const App = () => {
  return (
    <>
      <Navbar />
      <Inputcard />
    </>
  );
}


export default App;
