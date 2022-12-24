import React from 'react'
import DownloadIcon from '../../images/download.png'

const Billing = () => {
  return (
    <div className="sm:px-6 w-full">
                <div className="px-4 md:px-1 py-4 md:py-7">
                    <div className="flex items-center justify-between">
                        <p className="focus:outline-none text-md font-bold leading-normal text-gray-500">Billing History</p>
                        <button className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-white border hover:bg-gray-300 cursor-pointer rounded">
                        Download All
                        </button>
                    </div>
                </div>
                <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                    <div className="mt-3 overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                        <thead>
          <tr>
            <th className="px-8 align-middle py-6 text-left text-gray-400 text-sm"></th>
            <th className="px-8 align-middle py-6 text-left text-gray-400 text-sm">Invoice
            </th>
            <th className="px-8 align-middle py-6 text-left text-gray-400 text-sm">Amount</th>
            <th className="px-8 align-middle py-6 text-left text-gray-400 text-sm">Date</th>
            <th className="px-8 align-middle py-6 text-left text-gray-400 text-sm">Status</th>
            <th className="px-8 align-middle py-6 text-left text-gray-400 text-sm">Users on plan</th>
            <th className="px-8 align-middle py-6 text-left text-gray-400 text-sm"></th>
          </tr>
        </thead>
            <tbody>
                 <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                                    <td>
                                        <div className="ml-5">
                                            <div className="bg-white border-2 rounded-md w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            </div>
                                        </div>
                                    </td>


                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">Basic Plan - Dec 2022</p>
                                        </div>
                                    </td>

                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 px-3">USD $10.00</p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 px-3">19th Dec, 2022</p>
                                        </div>
                                    </td>

                                    <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span className="relative text-green-600">Paid</span>
									</span>
								</td>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
              </div>
            </td>
            <td>
            <img src={DownloadIcon}  alt="download icon" className="w-5 h-5" />  
            </td>
             </tr>

            <tr className="h-3"></tr>
             {/* table row */}
             <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                                    <td>
                                        <div className="ml-5">
                                            <div className="bg-white border-2 rounded-md w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            </div>
                                        </div>
                                    </td>


                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">Basic Plan - Dec 2022</p>
                                        </div>
                                    </td>

                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 px-3">USD $10.00</p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2 px-3">Nov 1, 2022</p>
                                        </div>
                                    </td>

                                    <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span className="relative text-green-600">Paid</span>
									</span>
								</td>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div className="flex">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
              </div>
            </td>
             </tr>
             
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
  )
}

export default Billing