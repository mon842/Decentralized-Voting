import { useEffect, useState, React } from 'react'
import './Header.css';
import logo from '../logo.png';

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
  const [navblur, setNavBlur] = useState('bg-opacity-60 bg-transparent backdrop-blur-xl');
  const [blur, setBlur] = useState('');

  const handleClick = () => {
    if (act === '')
      setAct('active');
    else
      setAct('');
  }

  useEffect(()=>{
    if (act === ''){
      setNavBlur('bg-opacity-60 bg-transparent backdrop-blur-xl');
      setBlur('') 
    }
    else{
      setNavBlur('');
      setBlur('bg-opacity-60 bg-transparent backdrop-blur-xl');
    }

  },[act]);

  return (
    <nav className={`z-10 fixed top-0 left-0 right-0  h-32 flex justify-between items-center py-[24px] md:px-6 lg:px-6 bg-[#141420] ${navblur}`}>
      <img className='h-20' src={logo} alt="ar" srcset="" />

      <ul className={`rounded-xl sm:mt-3 flex px-3 justify-between items-center space-x-10 nav-menu sm:bg-opacity-0 text-white ${blur} bg-[#141420] ${act} `}>
        <li className='nav-item'>
          <a href='\' className="ml-10">Home</a>
        </li>
        <li className='nav-item'>
          <a href='\About' className="nav-link">About</a>
        </li>
        <li className='nav-item'>
          <a href='\Contract' className="nav-link">Contract</a>
        </li>
        <li>
          <div className="relative group">
            <div className=" absolute inset-1  bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur hover:blur-3xl opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="transition duration-200 ease-in transform   hover:scale-105  px-10 py-4 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#1d1d27] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]">Star Us on GitHub</button>
          </div>
        </li>
      </ul>

      <div className={`hamburger hidden cursor-pointer ${act}`} onClick={handleClick}>
        <span className='bar block h-1 w-8 rounded-lg my-1 mx-2 '></span>
        <span className='bar block h-1 w-8 rounded-lg my-1 mx-2 '></span>
        <span className='bar block h-1 w-8 rounded-lg my-1 mx-2 '></span>
      </div>
    </nav>
  )
}

export default Header