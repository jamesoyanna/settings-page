import React from 'react'
import DownloadIcon from '../../images/download.png'
import ArrowIcon from '../../images/arrow-icon.png'
import CheckIcon from '../../images/check-icon.png'

const billingData = [
    {
        id: 0,
        invoice: "Basic Plan - Dec 2022",
      },
      {
        id: 2,
        amount: "USD $10.00",
      },
      {
        id: 3,
        amount: "19th Dec, 2022",
      },
      {
        id: 4,
        status: "Paid",
      },
      {
        id: 5,
        status: "Paid",
      },
      {
        id: 6,
        status: "Paid",
      },
    ]

const Billing = () => {
  return (
    <div className="sm:px-6 w-[400px] xl:w-full">
                <div className="md:px-1">
                <div className="xl:justify-between mb-6 md:flex">
                        <p className="text-md font-semibold text-gray-600">Billing History</p>
                        <button className="mt-4 xl:m-0 py-2 px-3 flex text-sm font-medium text-gray-600 bg-white border cursor-pointer rounded-lg">
                        <img src={DownloadIcon} alt='donload icon' className='mr-3' />
                        Download All
                        </button>
                    </div>
                </div>
                <div className="bg-white border rounded-lg shadow-lg pb-10">
                    <div className="overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
            <thead >
            <tr className='bg-gray-100 border'>
            <th><input className='w-4 h-4' placeholder="checkbox" type="checkbox" /></th>
            <th className="flex items-center px-8 align-middle py-6 text-left text-gray-500 text-md font-normal">Invoice
            <img className='ml-2' src={ArrowIcon} alt='arrow icon' />
            </th>
                <th className="px-8 align-middle py-6 text-left text-gray-500 text-md font-normal">Amount</th>
                <th className="px-8 align-middle py-6 text-left text-gray-500 text-md font-normal">Date</th>
            <th className="px-8 align-middle py-6 text-left text-gray-500 text-md font-normal">Status</th>
            <th className="px-8 align-middle py-6 text-left text-gray-500 text-md font-normal">Users on plan</th>
            <th className="px-8 align-middle py-6 text-left text-gray-500 text-md"></th>
          </tr>
        </thead>
            <tbody>
                {billingData.map((billing)=>(

               
                 <tr key={billing.id} className="focus:outline-none h-16 border border-gray-100 rounded">
                                    <td>
                                        <div className="ml-5">
                                            <div className="bg-white border-2 rounded-md w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            </div>
                                        </div>
                                    </td>


                                    <td>
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">Basic Plan - Dec 2022</p>
                                        </div>
                                    </td>

                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 px-3">USD $10.00</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 px-3">19th Dec, 2022</p>
                                        </div>
                                    </td>

                                    <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
									<div className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                        <div className="absolute opacity-100 bg-green-100 py-1 px-6 rounded-full flex">
                                     <img className='h-3 w-3 text-green-700' src={CheckIcon} alt='check icon' /> 
									<span className="relative text-green-700 ml-2">Paid
                                    </span>
                                    </div>
									</div>
								</td>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                <span className='font-bold text-base text-gray-500 border rounded-full h-7 w-7 bg-gray-100'>+2</span>
              </div>
            </td>
            <td>
            <img src={DownloadIcon}  alt="download icon" className="w-5 h-5 ml-6" />  
            </td>
             </tr>
              ))}
            </tbody>
        </table>
    </div>
</div>
</div>
            
  )
}
export default Billing;