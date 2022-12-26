import React from 'react';
import {settingsData} from './settingsData';
import VisaLogo from '../../images/visa-logo.png';
import Checkicon from '../../images/check.png';
import Mastercardicon from '../../images/Mastercard.png';
import EnvelopeIcon from '../../images/envelope.png';

const Settings = () => {
  return (
    <div className="flex flex-col items-start">
        <div>
    <h1 className="mb-2 font-bold text-lg text-gray-500"> Settings</h1>
    <p className="text-base leading-relaxed text-left text-gray-500"> Manage your team and preference here. </p>
    </div>

    <ul className='flex mt-4 w-full'>
    {settingsData.map((item) =>(
        <li className='w-[100px] xl:w-full' key={item.id} >
        <a href='/' className=' text-gray-500 border inline-block py-3 px-3 font-semibold'>{item.title}</a>
        </li>
    ))}
</ul>

<div className='col-span-3 items-start justify-start flex flex-col pt-4 mb-6'>
<h3 className="py-2 font-semibold text-lg text-gray-600"> Payment Method</h3>
<p className="text-base text-gray-500">Update your billing details and address</p>
</div>

 {/* contact email */}
<div className="grid border-t xl:grid-cols-4 w-full mb-4">
  <div className="col-span-2">
<div className="mt-4 lg:mt-0">
<h4 className="font-semibold text-md text-gray-500 flex"> Contact Email</h4>
<p className="text-base leading-relaxed text-gray-500 flex">Where should invoice be sent ?</p>
 </div>
 </div>
<div>
<div className=" flex pt-4 lg:w-full lg:mt-0">
<input type="radio" className="h-4 w-4 text-purple-500 mr-3 mt-1" />
<p className="text-gray-700 text-base font-medium leading-none">Send to my account email</p>
</div>
<p className='text-gray-500'>olivia@untitledui.com</p>
<div className="flex pt-1">
<input type="radio" className="h-4 w-4 text-purple-500 mr-3 mt-1" />
<p className="text-gray-700">Send to an alternative email</p>
</div>
<div className="bg-white border border-slate-10 h-2 pb-8 shadow-sm rounded-md pt-1 p-4 mt-6 flex w-[350px]">
<div className="flex pt-">
   <img className='h-4 w-5 mr-2 mt-1' src={EnvelopeIcon} alt='envelope' /> 
    <span className="text-base font-semibold text-gray-600">billing@untitledui.com</span>
    </div>
	</div>
 </div>
 </div>

{/* Visa Card details */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full border-t mt-4">
<div className="col-span-2 mt-2">
<h4 className="font-semibold text-md text-gray-500 fle"> Card details</h4>
<p className="text-base leading-relaxed text-gray-500 ">Select default payment method</p>
 </div>
 <div className="col-span-2">
 <div className="bg-purple-50 rounded-lg shadow-sm p-4 border border-purple-500 flex sm:flex-row justify-between items-center mt-2 sm:gap-0 mr-2 xl:mt-4">
		<div className="flex sm:flex-row items-center gap-4">
			<div className="flex rounded-md bg-white py-2 px-2">
                <img src={VisaLogo} alt='visa logo' />
            </div>
			<div className="sm:text-left">
				<p className="text-purple-700 text-sm font-semibold">Visa ending in 1234</p>
				<p className="text-purple-500 text-sm">Expiry 06/2024</p>
                <p className="text-purple-500 text-sm pt-1">Set as default <span className='text-purple-700 px-2 font-semibold'>Edit</span></p>
			</div>
		</div>
        <img src={Checkicon} alt='check icon' className="bg-purple-600 h-4 w-4 py-1 px-1 rounded-lg mb-9 mr-2" />
 </div>
 </div>
 </div>

 {/* Master Card details */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full border-t mt-4">
<div className="col-span-2 mt-2">
<h4 className="font-semibold text-md text-gray-500 fle"> Card details</h4>
<p className="text-base leading-relaxed text-gray-500 ">Select default payment method</p>
 </div>
 <div className="col-span-2">
 <div className="bg-white rounded-lg shadow-sm p-4 border flex sm:flex-row justify-between items-center mt-2 sm:gap-0 mr-2 xl:mt-4">
		<div className="flex sm:flex-row items-center gap-4">
			<div className="flex rounded-md bg-white py-2 px-2">
            <img src={Mastercardicon} alt='master card logo' />
            </div>
			<div className="sm:text-left">
				<p className="text-gray-600 text-sm font-semibold">Mastercard ending in 1234</p>
				<p className="text-gray-500 text-sm">Expiry 06/2024</p>
                <p className="text-gray-600 text-sm pt-1">Set as default <span className='text-purple-700 px-2 font-semibold'>Edit</span></p>
			</div>
		</div>
        <input type="radio" className="h-4 w-4 px-1 py-1 mb-9 mr-2" />
 </div>
 </div>
 </div>
<div className="grid grid-cols-1 xl:grid-cols-4">
  <div className="col-span-2">
 </div>
	<div className=" sm:flex-row">
      <p className='xl:ml-16 mt-4 text-gray-500 text-md xl:px-5 cursor-pointer'> + Add payment method</p> 
		</div>
</div>
</div>
  )
}

export default Settings
