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
        </section>
    );
};

export default Search;