//import for Darkmode 
import { ColContext } from '@/App';
import { useContext } from 'react'; 

const Carousel1 = () => {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  return (
    <div>
      <img
        className="w-[200px] h-[200px] top-[100px] left-[150px] absolute rounded-[30px]"
        src={`${darkMode ? 'src/assets/logo_2.png' : 'src/assets/logo_1.png'}`} 
        alt="logo"
      />

      <div className="mt-8 left-[420px] top-[100px] w-[650px] absolute">
        <span className={`text-teal-600 text-2xl font-bold font-['Overpass'] ${darkMode ? 'invert' : ''}`}>
          BookQuest
        </span>
        <br />
        <span className="text-black text-2xl font-['Overpass']">
          Platform for everyone who loves to read.<br/> Find a library of books and authors.
        </span>
      </div> 
    </div>
  );
};

export default Carousel1;
