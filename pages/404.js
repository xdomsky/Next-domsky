import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div class="py-72 text-center text-2xl">
            <h1 class="font-semibold">Ooooops...</h1>
            <h2 class="font-semibold">Strona nie odnaleziona.</h2>
            <p>Wracaj do <Link href="/"><a class="text-blue-600 underline">Homepage</a></Link></p>
        </div>
    );
}
export default NotFound;