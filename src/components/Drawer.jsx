import React from 'react';

const Drawer = () => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div>
                        <div className='text-center bg-base-200 rounded mt-2'>Related Category</div>
                        <ul className="menu p-2 overflow-y-auto w-40 bg-base-100 text-base-content">
                            <li className='text-sm'><a>Sidebar Item 1</a></li>
                            <li className='text-sm'><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-center bg-base-200 rounded mt-2'>Related Category</div>
                        <ul className="menu p-2 overflow-y-auto w-40 bg-base-100 text-base-content">
                            <li className='text-sm'><a>Sidebar Item 1</a></li>
                            <li className='text-sm'><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-center bg-base-200 rounded mt-2'>Related Category</div>
                        <ul className="menu p-2 overflow-y-auto w-40 bg-base-100 text-base-content">
                            <li className='text-sm'><a>Sidebar Item 1</a></li>
                            <li className='text-sm'><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-center bg-base-200 rounded mt-2'>Related Category</div>
                        <ul className="menu p-2 overflow-y-auto w-40 bg-base-100 text-base-content">
                            <li className='text-sm'><a>Sidebar Item 1</a></li>
                            <li className='text-sm'><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-center bg-base-200 rounded mt-2'>Related Category</div>
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