
const Footer = () => {
    return (
        <>
            <footer className='text-center mt-14 py-4 bg-slate-300 dark:bg-gray-800 w-full text-lg font-medium'>
                <div className="year">Copyright &copy; {new Date().getFullYear()}</div>
            </footer>
        </>
    )
}

export default Footer