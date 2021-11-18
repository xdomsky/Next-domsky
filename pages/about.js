import Head from 'next/head'
import Link from 'next/link'

const About = () => {
    return (
        <>
            <Head>
                <title>DOMSKY | About</title>
                <meta name="keywords" content="ninja" />
            </Head>
            <a class="fixed bottom-2 right-2 bg-black text-white px-2 py-2"><Link href="#top">elo</Link></a>
            <div id="top" class="grid grid-cols-2 flex items-center h-screen border-0">
                <div class="left">
                    <h2 class="text-2xl font-bold text-black text-center">Daj się poznać od dobrej strony!</h2> <h2 class="text-2xl font-bold text-black text-center">Twój serwis www zrobi dobre pierwsze wrażenie</h2>
                </div>
                <div class="right">
                    <img src="/user.jpg"></img>
                </div>
            </div>
            <div class="px-20 py-10 bg-white grid grid-cols-2 flex items-center">
                <div class="left max-w-md mx-52">
                    <h1 class="text-3xl font-bold text-black">Pełna optymalizacja</h1>
                    <p class="pt-5 text-xl">Moim jednym z atutów jest tworzenie i pozycjonowanie strony internetowej. Dzięki czemu mogę ją zoptymalizować pod wyszukiwarkę google.</p>
                </div>
                <div class="right max-w-md">
                    <img src="/optymalizacje.jpg" alt="img" class="mx-5"></img>
                </div>
            </div>
            <div class="px-20 py-10 bg-white grid grid-cols-2 flex items-center">
                <div class="left max-w-md mx-52">
                    <img src="/projekt.jpg" alt="img" class="-mx-5"></img>
                </div>
                <div class="right max-w-md">
                    <h1 class="text-3xl font-bold text-black">Nowatorski projekt graficzny</h1>
                    <p class="pt-5 text-xl">Według mnie projekt graficzny jest elementem, który użytkownik najpierw ocenia po wejściu na stronę. Dlatego tworzę taki projekt który będzie wywoływał poczucie profesjonalizmu u klientów.</p>
                </div>
            </div>
            <div class="px-20 py-10 bg-white grid grid-cols-2 flex items-center">
                <div class="left max-w-md mx-52">
                    <h1 class="text-3xl font-bold text-black">Utrzymanie relacji z klientem</h1>
                    <p class="pt-5 text-xl">Utrzymuje dobre relacje z klientami, oznacza to że po ukończeniy strony dalej będziesz mógł się ze mną kontaktować i liczyć na moją pomoc przy przerabianiu twojej strony internetowej.</p>
                </div>
                <div class="right max-w-md">
                    <img src="/relacje.jpg" alt="img" class="mx-5"></img>
                </div>
            </div>
            <div class="px-20 py-10 bg-white grid grid-cols-2 flex items-center">
                <div class="left max-w-md mx-52">
                    <img src="/konsultacje.jpg" alt="img" class="-mx-5"></img>
                </div>
                <div class="right max-w-md">
                    <h1 class="text-3xl font-bold text-black">Konsultacje</h1>
                    <p class="pt-5 text-xl">Podczas tworzenia strony masz możliwość kontaktu ze mną na każdym z etapów dzięki czemu uzyskasz wszelkie informacje na temat poszczególnego etapu pracy.</p>
                </div>
            </div>
        </>
    );
}

export default About;