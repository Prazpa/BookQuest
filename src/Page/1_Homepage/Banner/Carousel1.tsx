import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 

const Carousel1 = () => {

  const { darkMode } = useContext(ColContext);

  return (
    <div className={`flex items-center justify-center gap-5 h-[400px]`}>
      <img 
        className={`h-[200px]`}
        src={`${darkMode ? 'src/assets/logo_2.png' : 'src/assets/logo_1.png'}`} 
        alt="logo"
      />

      <div>
        <span className={`font-bold text-[24px] ${darkMode ? 'text-[#F26B77]' : 'text-teal-600 '}`}>
          BookQuest
        </span>
        <br />
        <span className={`text-black text-[22px]`}>
          Platform for everyone who loves to read.<br/> Find a library of books and authors.
        </span>
      </div> 
    </div>
  );
};

export default Carousel1;
