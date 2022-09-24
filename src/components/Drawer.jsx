import React from 'react';

const Drawer = () => {
    return (
        <>
            <div className="drawer drawer-mobile mt-2">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div>
                        <div className='text-center bg-base-200 rounded mt-2 py-2 font-bold'>Related Category</div>
                        <ul className="menu p-2 overflow-y-auto w-40 bg-base-100 text-base-content">
                            <li className='text-sm'><a>Item 1</a></li>
                            <li className='text-sm'><a>Item 2</a></li>
                            <li className='text-sm'><a className='bg-accent text-white'>Item 3</a></li>
                            <li className='text-sm'><a>Item 4</a></li>
                            <li className='text-sm'><a>Item 5</a></li>
                            <li className='text-sm'><a>Item 6</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-center bg-base-200 rounded mt-2 py-2 font-bold'>Related Brands</div>
                        <ul className="menu p-2 overflow-y-auto w-40 bg-base-100 text-base-content">
                            <li className='text-sm'><a>Item 1</a></li>
                            <li className='text-sm'><a>Item 2</a></li>
                            <li className='text-sm'><a>Item 3</a></li>
                            <li className='text-sm'><a>Item 4</a></li>
                            <li className='text-sm'><a>Item 5</a></li>
                            <li className='text-sm'><a>Item 6</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-center bg-base-200 rounded mt-2 py-2 font-bold'>Business Type</div>
                        <ul className="menu p-2 overflow-y-auto w-40 bg-base-100 text-base-content">
                            <li className='text-sm'><a>Item 1</a></li>
                            <li className='text-sm'><a>Item 2</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-center bg-base-200 rounded mt-2 py-2 font-bold'>Manufacturer</div>
                        <ul className="menu p-2 overflow-y-auto w-40 bg-base-100 text-base-content">
                            <li className='text-sm'><a>Item 1</a></li>
                            <li className='text-sm'><a>Item 2</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-center bg-base-200 rounded mt-2 py-2 font-bold'>Prescription</div>
                        <ul className="menu p-2 overflow-y-auto w-40 bg-base-100 text-base-content">
                            <li className='text-sm'><a className='bg-accent text-white'>Item 1</a></li>
                            <li className='text-sm'><a>Item 2</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-center bg-base-200 rounded mt-2 py-2 font-bold'>Related Category</div>
                        <ul className="menu p-2 overflow-y-auto w-40 bg-base-100 text-base-content">
                            <li className='text-sm'><a>Sidebar Item 1</a></li>
                            <li className='text-sm'><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Drawer;