import React from 'react';
import {settingsData} from './settingsData';
import VisaLogo from '../../images/visa-logo.png';
import Checkicon from '../../images/check.png';
import Mastercardicon from '../../images/Mastercard.png';
const Settings = () => {
  return (
    <div className="flex flex-col items-start">
    <h1 className="mb-2 font-bold text-lg text-gray-500"> Settings</h1>
    <p className="text-base leading-relaxed text-left text-gray-500"> Manage your team and preference here. </p>

    <ul className='flex mt-4'>
    {settingsData.map((item) =>(
        <li key={item.id} >
        <a href='/' className=' text-gray-500 border inline-block py-2 px-5 font-semibold'>{item.title}</a>
        </li>
    ))}
</ul>

<div className='col-span-3 items-start justify-start flex flex-col w-full pt-4 mb-6'>
<h3 className="py-3 font-semibold text-lg text-gray-600"> Payment Method</h3>
<p className="text-base leading-relaxed text-left text-gray-500">Update your billing details and address</p>
</div>


<div className="grid grid-cols-4 border-t">
  <div className="py-4 col-span-2">
<div className="mt-4 lg:w-1/2 lg:mt-0">
<h4 className="font-semibold text-md text-gray-500 flex"> Contact Email</h4>
<p className="text-base leading-relaxed text-gray-500 flex">Where should invoice be sent ?</p>
 </div>
 </div>

 
<div className="px-2 py-4">
<div className="flex pt-4 lg:w-full lg:mt-0">
<input type="radio" className="h-4 w-4 text-purple-500 mr-3 mt-1" />
<p className="text-gray-700 text-base font-medium leading-none">Send to my account email</p>
</div>
<p className='text-gray-500'>olivia@untitledui.com</p>
<div className="flex pt-1">
<input type="radio" className="h-4 w-4 text-purple-500 mr-3 mt-1" />
<p className="text-gray-700">Send to an alternative email</p>
</div>
<div className="bg-white border border-slate-10 h-2 pb-8 shadow-sm rounded-md pt-1 p-6 mt-6 flex flex-col w-[350px] mx-auto items-start">
    <h1 className="text-base font-semibold text-gray-600">billing@untitledui.com</h1>
	</div>
 </div>
 </div>


 {/* Visa Card details */}
 <div className="grid grid-cols-4 border-t">
  <div className="py-4 col-span-2">
<div className="mt-4 lg:mt-0">
<h4 className="font-semibold text-md text-gray-500 flex"> Card details</h4>
<p className="text-base leading-relaxed text-gray-500 flex">Select default payment method</p>
 </div>
 </div>

	<div className="w-[510px]  bg-purple-50 rounded-lg shadow-sm p-1 border border-purple-500 flex flex-col sm:flex-row justify-between items-center mt-6 gap-2 sm:gap-0">
		<div className="flex flex-col sm:flex-row justify-start items-center gap-4">
			<div className="flex rounded-md bg-white py-2 px-2">
                <img src={VisaLogo} alt='visa logo' />
            </div>
			<div className="text-center sm:text-left">
				<p className="text-purple-700 text-sm font-semibold">Visa ending in 1234</p>
				<p className="text-purple-500 text-sm">Expiry 06/2024</p>
                <p className="text-purple-500 text-sm pt-1">Set as default <span className='text-purple-700 px-2 font-semibold'>Edit</span></p>
			</div>
		</div>
        <img src={Checkicon} alt='check icon' className="bg-purple-600 h-4 w-4 py-1 px-1 rounded-lg mb-9 mr-2" />
	</div>
</div>

{/* Mater Card details */}

<div className="grid grid-cols-4 border-t">
  <div className="py-4 col-span-2">
<div className="mt-4 lg:mt-0">
<h4 className="font-semibold text-md text-gray-500 flex"> Card details</h4>
<p className="text-base leading-relaxed text-gray-500 flex">Select default payment method</p>
 </div>
 </div>

	<div className="w-[510px]  bg-white rounded-lg shadow-sm p-1 border flex flex-col sm:flex-row justify-between items-center mt-6 gap-2 sm:gap-0">
		<div className="flex flex-col sm:flex-row justify-start items-center gap-4">
			<div className="flex rounded-md bg-white py-2 px-2">
                <img src={Mastercardicon} alt='visa logo' />
            </div>
			<div className="text-center sm:text-left">
				<p className="text-gray-600 text-sm font-semibold">Mastercard ending in 1234</p>
				<p className="text-gray-500 text-sm">Expiry 06/2024</p>
                <p className="text-gray-600 text-sm pt-1">Set as default <span className='text-purple-700 px-2 font-semibold'>Edit</span></p>
			</div>
		</div>
        <img src={Checkicon} alt='check icon' className="bg-white h-4 w-4 py-1 px-1 border-2 rounded-lg mb-9 mr-2" />
	</div>
</div>

<div className="grid grid-cols-4">
  <div className="col-span-2">
 </div>
	<div className="sm:flex-row sm:gap-0">
	<div className=" pt-4 sm:flex-row">
      <p className='ml-12 mt-2 text-gray-500 text-md'> + Add payment method</p> 
		</div>
        
	</div>
</div>
</div>
  )
}

export default Settings
