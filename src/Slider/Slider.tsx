const Slider = () => {

  return (
    <div className="w-[1260px] h-[500px] bg-[url('src/assets/bg_img1.png')]">
      <div className="mx-[109px] my-[59px] w-[1099px] h-[422px] absolute">
        <img 
          className="w-[254px] h-[270px] top-[7px] absolute rounded-[50px]" 
          src="src/assets/logo_1.png"
          alt="logo" 
        />
        
        <div className="mt-8 w-[760.98px] h-[283px] left-[338.02px] top-0 absolute">
            <span className="text-teal-600 text-4xl font-bold font-['Overpass']">
              BookQuest
            </span>
            <br/>
            <span className=" py-7 text-black text-4xl font-normal font-['Overpass']"> 
              Platform for everyone who love to read. Find a library of book and author. 
            </span>
        </div>
        
        <a 
          className="py-[15px] w-[274.09px] h-[75px] left-[127.85px] top-[310px] absolute bg-orange-200 rounded-[11px] text-center text-[32px] font-medium font-['Overpass']"
        >
            Documentation
        </a>

        <a 
          className="py-[15px] w-[274.09px] h-[75px] left-[609.49px] top-[310px] absolute bg-orange-200 rounded-[11px] text-center text-[32px] font-medium font-['Overpass']"
          href="http://localhost:5173/Detailpage"
        >
            Get Started
        </a>
      </div>
    </div>
  );
};

export default Slider