import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <div className=' w-full text-[red] border-b-2 border-b-[rgb(183,176,176)] border-solid'>
          <div className='flex w-[30%] gap-2.5 ml-[39px] p-[5px]'>
            <div className="icon">Icon</div>
            <div className='text-[black]'>
              ScanStack <br /> Resume analysis
            </div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
