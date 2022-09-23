import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <section>
            <div className="navbar bg-[#750B0B] border-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <div className='font-medium text-2xl'>
                        Medical Darpan
                    </div>
                </div>
                <div className="navbar-center">
                    <p className="btn btn-ghost normal-case text-xl cursor-pointer">Home</p>
                    <p className="btn btn-ghost normal-case text-xl cursor-pointer">Product</p>
                    <p className="btn btn-ghost normal-case text-xl cursor-pointer">Distributor</p>
                    <p className="btn btn-ghost normal-case text-xl cursor-pointer">Manufacturers</p>
                    <p className="btn btn-ghost normal-case text-xl cursor-pointer">About Us</p>
                    <p className="btn btn-ghost normal-case text-xl cursor-pointer">Blog</p>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle mr-7">
                        <p className='font-medium text-xl'>Login</p>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <CgProfile 
                                size={33}
                            />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;