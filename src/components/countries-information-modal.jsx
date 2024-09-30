/* eslint-disable react/prop-types */

const CountriesInformation = ({ countryInfo, isOpen }) => {

    const currencyInfo = countryInfo?.currencies
        ? Object.entries(countryInfo.currencies)[0]
        : ["No currency", ""];

    const currency = currencyInfo[0];
    const symbol = currencyInfo[1]?.symbol || '';

    const langInfo = countryInfo?.languages ? Object.entries(countryInfo.languages) : "";


    if (!isOpen) return null;
    return (
        <>
            <dialog open className="modal bg-gray-200/80 dark:bg-gray-800/80 ">
                {/* codes inside modal */}
                <div className="modal-box space-y-2">
                    {/* manual button for close modal */}
                    <form method="dialog" className="modal-backdrop">
                        <button className="btn btn-circle btn-outline absolute right-2 top-2" >✕</button>
                    </form>

                    <h3 className="font-bold text-lg">{countryInfo?.name?.common}</h3>
                    <p><span className='font-semibold'>Capital:</span> {countryInfo?.capital ? countryInfo.capital.join(" ") : "Not Found"}</p>
                    <p><span className='font-semibold'>Region:</span>{countryInfo?.region? countryInfo.region:"Not Found"}</p>
                    <p><span className='font-semibold'>Official Name:</span> {countryInfo?.name?.official}</p>
                    <p><span className='font-semibold'>Languages:</span> {typeof (langInfo) !== "string" ? langInfo.map((lang) => lang[1]).join(", ") : "No Language"} </p>
                    <p><span className='font-semibold'>Currency:</span> {`${currency}${symbol ? " - " + symbol : ""}`}</p>
                    <p><span className='font-semibold'>Population:</span> {countryInfo?.population? countryInfo.population:"No Info"}</p>
                    <p><span className='font-semibold'>Area:</span> {countryInfo?.area? countryInfo.area: "No Info"}</p>
                    <p><span className="font-semibold">Country Code:</span> {`${countryInfo?.idd?.root ? countryInfo?.idd?.root : "Not found"}${countryInfo?.idd?.root ? countryInfo?.idd?.suffixes?.[0] : ""}`}</p>
                    <p><span className="font-semibold">Time Zone: </span>{countryInfo?.timezones? countryInfo.timezones:"Not Found"}</p>

                    <a href={countryInfo?.maps?.googleMaps} target='_blank' className='btn btn-info mt-4'>See in Map<i className="fa-solid fa-map-location-dot"></i></a>
                </div>
                {/* codes inside modal */}
                <form method="dialog" className="modal-backdrop">
                    <button></button>
                </form>
            </dialog>
        </>
    )
}

export default CountriesInformation;