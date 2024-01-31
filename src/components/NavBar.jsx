import React from "react";

const NavBar = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"ACHIEVEMENTS",link:"/"},
        {name:"EXPLORE",link:"/"},
        {name:"MY",link:"/"},
      ];

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white">
                H4G
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500`}>
                {
                Links.map((link)=>(
                    <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
                    </li>
                ))
                }
            </ul>
            <button className="btn">
                Log Out
            </button>
            </div>
        </div>
    )
}

export default NavBar;
