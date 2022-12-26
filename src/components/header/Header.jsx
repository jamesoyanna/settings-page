import React, {useState} from "react";
import { navLinks } from '../Sidebar/sidebarData';
import VideoImage from '../../images/girl.png';
import Playbutton from '../../images/Play-button.png';
import Logo from '../../images/Logomark.png';
import Avatar from '../../images/Avatar.png';
import DashboardIcon from '../../images/Icon.png';
import HomeIcon from '../../images/home-icon.png';
import LogoutIcon from '../../images/logout-icon.png';
import MenuIcon from '../../images/hamburger-icon.png';
import { SearchIcon } from '@heroicons/react/outline'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden flex w-[380px] border-2 py-1 border-gray-300 p-3">
      <div className="w-full flex md:space-x-2 md:pb-6 pb-3 justify-start md:justify-start">
        <img
          className="md:w-12 md:h-12 w-10 h-10"
          src={Logo}
          alt="logo"
        />
        <span className="text-lg font-bold mt-2">
        Untitled UI
        </span>
        </div>

        {!isOpen && (
        <img src={MenuIcon} alt='menu icon'
          onClick={() => setIsOpen(!isOpen)}
          className="w-5 h-5 mt-6 md:hidden flex items-center justify-center ml-4 cursor-pointer hover:bg-gray-100 smooth"
         />
      )}

 {/* small-screens navbar */}
 <div className="md:w-[250px] h-[91%] overflow-hidden md:flex flex-col items-center justify-between px-3 bg-white">
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={() => setIsOpen(false)}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody className="overflow-y-scroll scrollbar-hide">
              <div>
               {/* start */}
               <nav>
      {/* Logo */}
      <div>
            <a href="/" className="inline-flex space-x-2 items-center">
                <span>
                    <img className="w-10 h-10" src={Logo} alt="logo" />
                </span>
                <span className="text-lg font-bold">
                    Untitled UI
                </span>
                </a>
           </div>
      {/* search box */}
      <div className="relative mt-2 pb-2 px-4">
            <span className="absolute inset-y-0 left-1 flex items-center pl-6">
                <SearchIcon className='w-5 h-5 text-gray-400 mb-2'/>
            </span>
            <input type="text" className="w-full py-1 pl-10 text-gray-700 bg-white border rounded-md dark:border-gray-300 focus:border-purple-400 dark:focus:border-purple-300 focus:ring-purple-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search"/>
        </div>
      {/* search end */}
    <div className='space-y-8 w-full'>
    <div className="w-full flex justify-start space-x-4 px- py-2 cursor-pointer group hover:bg-gray-100 border-transparent transform rounded-md">
    <img src={HomeIcon} alt="dahboard icon" className='h-5 w-4' />
    <h1 className='text=gray-600 group-hover:text-black xl:flex '>Home</h1>
   </div>
   <div className="w-full flex items-center space-x-4 cursor-pointer group hover:bg-gray-100 border-l-2 border-transparent transform rounded-md">
   <img src={DashboardIcon} alt="dahboard icon" className='h-5 w-4' />
    <h1 className='text=gray-600 group-hover:text-black xl:flex'>Dashboard</h1>
    <span className="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">10</span>
   </div>
        {navLinks.slice(0,6).map((link) =>(
     <NavItem link={link} key={link.id} />
))}
<div className='w-full border-t border-gray-100' />
 {navLinks.slice(6,8).map((link) =>(
  <NavItem link={link} key={link.id} />
))}
 </div>
<div className='xl:flex flex-col items-center justify-center space-y-2 border pl-6 pb-4 bg-gray-100 rounded'>
  <h1 className='text-md w-full font-medium mt-4 ml-6'>New features available !</h1>
  <p className='text-gray-500'>Check  out the new dashboard view. Pages now load fast.</p>
  <div className='relative'>
<img className="max-w-lg h-auto rounded-lg" src={VideoImage} alt="video paceholder" />
<img className="cursor-pointer absolute top-0 left-0 py-14 px-5" src={Playbutton} alt="play button" />
</div>
<p className="text-center">Dismiss<a href="# " className="text-purple-600 -600 font-medium inline-flex items-center"><span className='px-7'>Whats new ?</span></a></p>
        </div>
    <div className="flex justify-between space-x-3 items-center p-3">
                <div className="flex items-center space-x-4">
                    <img src={Avatar} className="rounded-full h-10 w-10" alt="Avatar" />
                    <div className="flex flex-col space-y-2">
                        <span className="font-bold">Olivia Rhye</span>
                        <span>olivia@untitledui.com</span>
                    </div>
                    
                </div>
                <div>
                <img src={LogoutIcon} alt="logout"/>
                </div>
            </div>
    </nav>
               {/* stop */}
            
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
{/* stop */}











    </div>
  );
}



const  NavItem = ({link}) => {
  return (
    <div  className= "w-full flex items-center justify-start space-x-3 cursor-pointer group hover:bg-gray-100 border-l-2 border-transparent transform rounded-md" key={link.id} >
    <span>{link.icon}</span>
    <h1 className="text=gray-600 group-hover:text-black xl:flex text-black">{link.title}</h1>
   </div>
  )
}

export default Header;
