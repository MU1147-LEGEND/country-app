/* eslint-disable react/prop-types */
import { useState } from 'react';
import CountriesInformation from './countries-information-modal';


const Country = ({ allCountry, visitedCountries }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const index = visitedCountries.findIndex((country) => country?.name?.common === allCountry?.name?.common);

    const handleOpenModal = async () => {
        // checking if index is visited or not, if country is visited then not allowed or vice versa.
        if (visitedCountries[index].visited === false) {
            setIsModalOpen(true);
            visitedCountries[index].visited = true;
            localStorage.setItem("visitedCountries", JSON.stringify(visitedCountries));
        };
    }

    let filteredCountries = { ...allCountry };
    return (
        <>
            {filteredCountries?.region === "Americas" || filteredCountries?.region === "Europe" || filteredCountries.name.common === "India" || filteredCountries.name.common === "Israel" || filteredCountries.name.common === "French Southern and Antarctic Lands" || filteredCountries.name.common === "Saint Helena, Ascension and Tristan da Cunha" ? false :

                <div className="country w-44 h-80 flex flex-col items-center justify-between bg-slate-200 dark:bg-gray-800 px-4 rounded-md py-4 ">
                    <h1 onClick={handleOpenModal} className="country-name cursor-pointer text-xl font-semibold">{filteredCountries?.name?.common}</h1>
                    <img src={filteredCountries?.flags?.png} alt={(filteredCountries?.flags?.alt) || "Country-flag"} onClick={handleOpenModal} className='my-4' />
                    <p className='w-full text-center text-sm'>Capital: <span className='font-semibold'>{filteredCountries?.capital ? filteredCountries.capital.join(" ") : "Not found"}</span></p>
                    <p>C Code: {`${filteredCountries?.idd?.root ? filteredCountries?.idd?.root : "Not found"} 
        ${filteredCountries?.idd?.root ? filteredCountries?.idd?.suffixes?.[0] : ""}`}</p>

                    <div className={visitedCountries[index].visited ? "cursor-not-allowed" : ""}>
                        <button
                            className={`btn btn-info mt-3 ${visitedCountries[index].visited ? "text-white bg-green-500" : "text-black"}`}
                            onClick={handleOpenModal}
                            disabled={visitedCountries[index].visited}
                        >
                            {visitedCountries[index].visited ? "Visited" : "More Details"}
                        </button>
                    </div>

                    <CountriesInformation
                        countryInfo={filteredCountries}
                        isOpen={isModalOpen}
                    />
                </div>
            }
        </>
    );
}

export default Country;

