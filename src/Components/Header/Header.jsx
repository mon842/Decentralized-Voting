import { useEffect, useState, React } from 'react';
import './Header.css';
import img1 from "../Header/Group 174.svg";


const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setAct('');
    return () => {
      setAct('');
    }
  }, [windowSize > 768])


  const [act, setAct] = useState('');

  const handleClick = () => {
    if (act === '')
      setAct('active');
    else
      setAct('');
  }
  return (
    <header className='sticky top-0 '>
    <nav className=' z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 h-20 font-[Poppins] flex justify-between items-center py-[24px] md:px-10 lg:px-10 bg-[#141420]'>
      <div className=''>
      <img className='h-12 w-20' src={img1} alt="ar" srcset="" />
      </div>
      <div className=''>
      <ul className={`flex items-center gap-[5vw] nav-menu text-white ${act}`}>
        <li className='nav-item'>
          <a href='\' className="hover:text-dark-pink hover:underline underline-offset-3 visited: underline decoration-dark-pink">Home</a>
        </li>
        <li className='nav-item'>
          <a href='\About' className="hover:text-dark-pink hover:underline underline-offset-3">About</a>
        </li>
        <li className='nav-item'>
          <a href='\Contact' className="hover:text-dark-pink hover:underline underline-offset-3">Contact</a>
        </li>
        <li>
          <div className="relative group">
            <div className=" absolute inset-1 bg-[#b2b7c1] rounded-lg blur hover:blur-2xl opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="transition duration-200 ease-in transform   hover:scale-105  px-10 py-4 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#1d1d27] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]">Star Us on GitHub</button>
          </div>
        </li>
      </ul>
      </div>
      <div className={`hamburger hidden cursor-pointer ${act}`} onClick={handleClick}>
        <span className='bar block h-1 w-8 rounded-lg my-1 mx-2 '></span>
        <span className='bar block h-1 w-8 rounded-lg my-1 mx-2 '></span>
        <span className='bar block h-1 w-8 rounded-lg my-1 mx-2 '></span>
      </div>
    </nav>
    </header>
  )
}

export default Header

