import React from 'react';
import { Button } from '@/components/ui/button';

const Carousel1: React.FC = () => {
  return (
    <div>
      <img
        className="w-[200px] h-[200px] top-[100px] left-[150px] absolute rounded-[30px]"
        src="src/assets/logo_1.png" // Consider using `require` or `import` for image paths
        alt="logo"
      />

      <div className="mt-8 left-[420px] top-[80px] w-[650px] absolute">
        <span className="text-teal-600 text-3xl font-bold font-['Overpass']">
          BookQuest
        </span>
        <br />
        <span className="text-black text-2xl font-['Overpass']">
          Platform for everyone who loves to read.<br/> Find a library of books and authors.
        </span>
      </div> 

      <Button variant="link" className="mt-[250px] mx-[370px] bg-[#042F2B] text-white rounded">
        <a href="http://localhost:5173/Detailpage">Get Started</a>
      </Button>
    </div>
  );
};

export default Carousel1;
