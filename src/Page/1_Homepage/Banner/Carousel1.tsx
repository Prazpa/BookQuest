//import for Darkmode 
import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 

const Carousel1 = () => {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  return (
    <div className={`
      flex items-center justify-center gap-5 h-[400px]
      xs:flex-col 
      xr:flex-col
      sm:flex-row 
    `}>
      <img
        className={`
          xs:w-[100px] xs:h-[100px] xs:rounded-sm
          xr:w-[150px] xr:h-[150px] 
          sm:w-[200px] sm:h-[200px] 
        `}
        src={`${darkMode ? 'src/assets/logo_2.png' : 'src/assets/logo_1.png'}`} 
        alt="logo"
      />

      <div className={``}>
        <span className={`
          text-teal-600 font-bold font-['Overpass']
          xs:text-[20px]
          sm:text-2xl
          ${darkMode ? 'invert' : ''}
        `}>
          BookQuest
        </span>
        <br />
        <span className={`
          text-black  font-['Overpass']
          xs:text-[16px]
          xr:text:-[20px]
          sm:text-lg
          md:text-xl
        `}>
          Platform for everyone who loves to read.<br/> Find a library of books and authors.
        </span>
      </div> 
    </div>
  );
};

export default Carousel1;
