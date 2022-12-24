import React from 'react';
import {settingsData} from './settingsData';
import VisaLogo from '../../images/visa-logo.png';
import Checkicon from '../../images/check.png';
import Mastercardicon from '../../images/Mastercard.png';
const Settings = () => {
  return (
    <div className="flex flex-col items-start">
    <h1 className="mb-2 font-bold text-lg text-gray-500"> Settings</h1>
    <p className="text-base leading-relaxed text-left text-gray-400"> Manage your team and preference here </p>
    <ul className='flex mt-4'>
    {settingsData.map((item) =>(
        <li key={item.id} >
        <a href='/' className='bg-white border inline-block py-2 px-5 hover:text-blue-darker font-semibold'>{item.title}</a>
        </li>
    ))}
</ul>


<h3 className="py-6 font-bold text-lg text-gray-500"> Payment Method</h3>
<p className="text-base leading-relaxed text-left text-gray-400">Update your billing details and address</p>

{/* contact */}

<div className="container px-2 py-4 mx-auto">
<div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
  <div class="mt-4 lg:w-1/2 lg:mt-0 lg:mx-6">
<h4 className="font-bold text-md text-gray-500"> Contact Email</h4>
<p className="text-base leading-relaxed text-gray-400">Where should invoice be sent ?</p>
 </div>

<div class="md:w-1/2">
<div className="flex items-center">
<div className="bg-white border-2 rounded-md w-5 h-5 pr-4 flex flex-shrink-0 justify-center items-center relative">
<input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
</div>
<div>
<p className="text-base font-medium leading-none text-gray-700 mr-2">Send to my account email</p>
<span>olivia@untitledui.com</span>
</div>
</div>

<div class="flex items-center pt-4">
<input type="radio" className="h-4 w-4 text-purple-500 mr-3" />
<p class="text-gray-700">Send to an alternative email</p>
</div>
<div class="md:w-1/2 bg-white border border-slate-300 w-full h-13 shadow-lg rounded-md gap-4 pt-4 p-4 mt-6 flex flex-row">
    <h1 class="text-base font-semibold text-zinc-800">billing@untitledui.com</h1>
	</div>
    </div>
    </div>
    </div>
   


  <div className="container px-2 py-4 mx-auto">
<div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
  <div class="mt-4 lg:w-1/2 lg:mt-0 lg:mx-6">
<h4 className="font-bold text-md text-gray-500"> Card Details</h4>
<p className="text-base leading-relaxed text-gray-400">Select default payment method</p>
 </div>

<div class="md:w-1/2 px-3">
	<div class="w-full bg-purple-50 rounded-lg shadow-sm p-5 border border-purple-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
		<div class="flex flex-col sm:flex-row justify-start items-center gap-4">
			<div class="flex rounded-md bg-white py-2 px-2">
                <img src={VisaLogo} alt='visa logo' />
            </div>
			<div className="text-center sm:text-left">
				<p className="text-purple-500 font-semibold">Visa ending in 1234</p>
				<p className="text-purple-500 font-semibold">Expiry 06/2024</p>
                <p className="text-purple-500 font-semibold pt-4">Set as default <span className='text-purple-500 px-2'>Edit</span></p>
			</div>
		</div>
        <img src={Checkicon} alt='check icon' className="bg-blue-700 py-1 px-1 text-white rounded-lg hover:bg-blue-600" />
	</div>


    <div class="md:w-full pt-6">
	<div class="w-full bg-purple-50 rounded-lg shadow-sm p-5 border border-purple-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
		<div class="flex flex-col sm:flex-row justify-start items-center gap-4">
			<div class="flex rounded-md bg-white py-2 px-2">
                <img src={Mastercardicon} alt='visa logo' />
            </div>
			<div className="text-center sm:text-left">
				<p className="text-purple-500 font-semibold">Visa ending in 1234</p>
				<p className="text-purple-500 font-semibold">Expiry 06/2024</p>
                <p className="text-purple-500 font-semibold pt-4">Set as default <span className='text-purple-500 px-2'>Edit</span></p>
			</div>
		</div>
        <img src={Checkicon} alt='check icon' className="bg-blue-700 py-1 px-1  text-white rounded-lg hover:bg-blue-600" />
	</div>
    </div>



    </div>
    </div>
  </div>
</div>
  )
}

export default Settings