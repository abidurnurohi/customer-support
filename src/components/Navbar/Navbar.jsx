import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-[#E9E9E9]'>
            <div className="navbar bg-white shadow-sm px-4 flex-col md:flex-row">
                <div className="flex-1">
                    <a className="text-xl text-black font-bold">CS — Ticket System</a>
                </div>
                <div className="text-black">
                    <ul className='menu menu-horizontal flex-col md:flex-row gap-2 md:gap-4 px-1 text-center items-center'>
                        <li><a href="">Home</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Changelog</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Contact</a></li>
                        <li><button className=" text-white font-semibold"
                            style={{
                                background: 'linear-gradient(#632EE3, #9F62F2)'
                            }}>
                            <span>+</span> New Ticket</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;