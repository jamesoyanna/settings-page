import React from 'react'
import { navLinks } from './navbarData';
import VideoImage from '../../images/girl.png';
import Playbutton from '../../images/Play-button.png';
import Logo from '../../images/Logomark.png';
import Avatar from '../../images/Avatar.png';
import DashboardIcon from '../../images/Icon.png';
import HomeIcon from '../../images/home-icon.png';
import LogoutIcon from '../../images/logout-icon.png';
import { SearchIcon } from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div>
    <div className="md:w-[250px] h-[91%] hidden overflow-hidden md:flex flex-col items-center justify-between px-3 bg-white">
    <div>
    <nav className='col-span-2 border-r border-gray-320 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
      {/* Logo */}
      <div className="px-6">
            <a href="/" className="inline-flex space-x-2 items-center">
                <span>
                    <img className="full w-8 h-8" src={Logo} alt="logo" />
                </span>
                <span className="text-lg font-bold">
                    Untitled UI
                </span>
                </a>
           </div>
      {/* search box */}
      <div className="relative mt-2 pb-2 px-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-7">
                <SearchIcon className='w-5 h-5 text-gray-400 mb-2'  />
            </span>
            <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:text-gray-300 dark:border-gray-300 focus:border-purple-400 dark:focus:border-purple-300 focus:ring-purple-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search"/>
        </div>
      {/* search end */}
    <div className='space-y-8 w-full'>
    <div className="w-full flex items-center justify-start space-x-4 px-5 py-2 cursor-pointer group hover:bg-gray-100 border-l-2 border-transparent transform rounded-md">
    <img src={HomeIcon} alt="dahboard icon" className='h-5 w-4' />
    <h1 className='text=gray-600 xl:flex hidden'>Home</h1>
   </div>

   <div className="w-full flex items-center justify-start space-x-4 px-5 py-2 cursor-pointer group hover:bg-gray-100 border-l-2 border-transparent transform rounded-md">
   <img src={DashboardIcon} alt="dahboard icon" className='h-5 w-4' />
    <h1 className='text=gray-600 group-hover:text-black xl:flex hidden'>Dashboard</h1>
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
<div className='xl:flex hidden flex-col items-center justify-center space-y-4 border pr-2 pl-1 pb-4 bg-gray-100 rounded'>
  <h1 className='text-md w-full font-medium mt-3 ml-6'>New features available !</h1>
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
    </div>
    </div>
    </div>
  )
}

const  NavItem = ({link}) => {
  return (
    <div className= "w-full flex items-center justify-start space-x-4 px-5 cursor-pointer group hover:bg-gray-100 border-l-2 border-transparent transform rounded-md"  key={link.id} >
    <span>{link.icon}</span>
    <h1 className="text=gray-600 xl:flex hidden text-black">{link.title}</h1>
   </div>
   
  )
}

export default Sidebar;