// /* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Country from './country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            const URL = "https://restcountries.com/v3.1/all";
            const Fetch = await fetch(URL);
            const result = await Fetch.json();
            setCountries(result)
        }
        fetchCountries();

    }, []);

    const sortedCountries = [...countries];
    sortedCountries.sort((a,b)=>{
        if(a.population > b.population){
            return 1;
        }
        if(a.population < b.population){
            return -1;
        }
    });


    return (
        <>
            <div className="container m-auto p-4 relative">
                <header className="header h-10 ">
                    <div className="fixed top-0 left-0 right-0 flex justify-between bg-white/50 w-full py-3 px-10 backdrop-blur-lg">
                        <p className='text-xl font-semibold'>All Countries</p>
                        <input type="search" name="search" id="search" placeholder='search' className='border-2 border-black/50 rounded-xl pl-4 outline-none py-1' />
                    </div>
                </header>
                <hr className='my-2' />

                <div className="countries flex gap-4  items-center justify-center flex-wrap">
                    {sortedCountries.length > 0 ? (
                        sortedCountries.map((country, index) => (
                            <Country key={country.ccn3 || index+1} allCountry={country} />

                        ))
                    ) : (
                        <p>No countries available or still loading...</p> // Fallback message
                    )}
                </div>
            </div>

        </>

    )
}

export default Countries;

