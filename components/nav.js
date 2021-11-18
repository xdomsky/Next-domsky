import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="py-4 px-8 bg-white text-indigo-400 flex justify-between fixed w-full">
            <div><h1 className="text-3xl font-bold">DOMSKY</h1></div>
            <div className="flex">
                <div className="ml-4 text-xl font-medium"><Link href="/">Strona główna</Link></div>
                <div className="ml-4 text-xl font-medium"><Link href="/about">O nas</Link></div>
                <div className="ml-4 text-xl font-medium"><Link href="/kontakt">Kontakt</Link></div>
            </div>
        </div>
    );
}

export default Navbar;