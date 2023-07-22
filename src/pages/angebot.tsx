import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Form from '../components/Form';
import LazyShow from '../components/LazyShow';
import config from '../config/index.json';

const App = () => {
  const { company } = config;
  const { name: companyName, logo } = company;

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className="flex items-center justify-center">
        <a href="../">
          <span className="sr-only">{companyName}</span>
          <img
            alt="logo"
            className="h-24 scale-150 w-auto sm:h-24"
            src={logo}
          />
        </a>
      </div>
      <div className="flex items-center justify-between w-full md:w-auto ml-20">
        <Form />
      </div>
      <div className="mt-96">
        <LazyShow>
          <>
            <Canvas />
            <About />
          </>
        </LazyShow>
      </div>
      <Analytics />
    </div>
  );
};

export default App;
