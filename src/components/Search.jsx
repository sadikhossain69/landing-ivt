import React from 'react';
import SearchInput from './SearchInput';

const Search = () => {
    return (
        <section className='text-black pl-5 space-y-2'>
            <div>
                <p className='text-black'> Medical Darpan {">"} greater than {">"} <span className='text-black font-bold'>fubiFlu Tabet</span></p>
            </div>
            <div>
                <SearchInput/>
            </div>
            <div className='space-x-3'>
                <span className='text-xl font-bold text-slate-500'>Paracitamol</span>
                <span className='text-sm font-bold text-slate-500'>(128 Products)</span>
                <span className='bg-accent rounded py-1 px-3 text-white font-bold'>Napa</span>
                <span className='bg-accent rounded py-1 px-3 text-white font-bold'>500 mg</span>
                <span className='text-sm text-red-500 font-medium'>Remove all</span>
            </div>
        </section>
    );
};

export default Search;