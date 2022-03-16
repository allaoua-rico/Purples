import React from "react";
import MongoDB from "../public/svg/MongoDB";
import Mongoose from "../public/svg/Mongoose";

export default function DBDescription() {
  return(
  <div>
      <div className="mb-[-25px]">
      Using <MongoDB className='inline mb-2'/> and <Mongoose className='inline mx-[-14px]'/> to:

      </div>
    <ul className="list-disc gap-y-2 flex flex-col text-[#BEC6DD]">
      <li>Perform CRUD operations according to user authorisations.</li>
      <li>Catch CRUD operations from errors and prevent crashs.</li>
      <li>Use Mongoose virtuals (setters and getters) to perform complex readings and writings to the docs.</li>


    </ul>
    
  </div>);
}
