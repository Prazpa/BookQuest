import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react'; 

const Carousel1 = () => {
  const { darkMode } = useContext(ColContext);
  const style = 'xs:flex xs:flex-col xs:justify-center xr:flex xr:flex-col xr:px-[10px] sm:flex-row items-center justify-center gap-5 h-[400px] w-full'
  return (
    <div className={style}>
      <img 
        src={`${darkMode ? 'src/assets/logo_2.jpg' : 'src/assets/logo_1.jpg'}`} 
        alt="logo"
        className='sm:h-[160px] sm:w-[150px] xr:w-[130px] md:w-[180px] md:rounded-[40px] xs:h-[140px] sm:px-[10px] rounded-[28px]'
      />

      <div>
        <h1 className={`font-bold text-[24px] ${darkMode ? 'text-[#F26B77]' : 'text-teal-600 '}`}>
          BookQuest
        </h1>
        <span className={`text-black text-[20px]`}>
          Platform for everyone who loves to read.<br/> Find a library of books and authors.
        </span>
      </div> 
    </div>
  );
};

export default Carousel1;