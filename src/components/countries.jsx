// /* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Country from './country';
import Footer from './footer';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [theme, setTheme] = useState("light");
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
    sortedCountries.sort((a, b) => {
        if (a.population > b.population) {
            return 1;
        }
        if (a.population < b.population) {
            return -1;
        }
    });

    useEffect(()=>{
        if(theme === "dark"){
            document.querySelector("html").setAttribute("data-theme", "dark");
            // document.querySelector("body").classList.add("dark");
        }else{
            document.querySelector("html").setAttribute("data-theme", "light");
            // document.querySelector("body").classList.remove("dark");
        }
    },[theme]);

    const changeTheme = ()=>{
        setTheme(theme === "dark"? "light" : "dark");
    }


    return (
        <>
            <div className="container m-auto p-4 relative">
                <header className="header h-10">
                    <div className="fixed top-0 left-0 right-0 flex justify-between bg-white/50 w-full py-3 px-4 md:px-8 lg:px-12 backdrop-blur-lg">
                        <a href='#home' className='group text-xl font-semibold bg-gray-800 py-2.5 lg:px-6 px-3 rounded-lg cursor-pointer text-white hover:bg-gray-800/95 active:scale-90 transition-all duration-200'><span className="text-transparent bg-gradient-to-r from-yellow-600 to-green-500 group-hover:to-lime-500 group-hover:from-cyan-300 bg-clip-text transition-all duration-200 select-none">World</span></a>
                        <div className='flex gap-2'>
                            <input type="search" name="search" id="search" placeholder='search' className='border border-black/50 rounded-xl pl-4 outline-none w-1/2 lg:w-auto' />
                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input onClick={(e)=>{changeTheme(e)}} type="checkbox" name='theme' id='theme' />

                                {/* sun icon */}
                                <svg
                                    className="swap-on h-6 w-6 lg:h-8 lg:w-8 fill-current dark:text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-off h-6 w-6 lg:h-8 lg:w-8 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </div>

                    </div>
                    <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">theme</button>

                </header>
                <hr className='my-2' />

                <div id='home' className="countries pt-4 lg:pt-10 flex gap-4  items-center justify-center flex-wrap">
                    {sortedCountries.length > 0 ? (
                        sortedCountries.map((country, index) => (
                            <Country key={country.ccn3 || index + 1} allCountry={country} />

                        ))
                    ) : (
                        <p>No countries available or still loading...</p> // Fallback message
                    )}
                </div>
            </div>
            <Footer/>

        </>

    )
}

export default Countries;

