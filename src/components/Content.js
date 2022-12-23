import React from "react";
import Billing from "./billing/Billing";

function Content() {
  return (
    <div className=" w-full h-[90vh] space-x-4 items-center justify-center grid grid-cols-2 xl:grid-cols-3">
      <div className=" items-center justify-center flex flex-col col-span-12 h-full   py-2 px-3 w-full space-y-4">
        {/* upper section */}
        <div className=" pb-1 pt-12 px-3 w-full h-full space-y-8">
       <Billing />
 

         
        </div>
       
      </div>
    </div>
  );
}

export default Content;
