import Link from 'next/link';

function Home(){
    return (<div>
        <h1>Home</h1>
        <div>
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
        </div>

        <div>
        <Link href="/tempo">
            <a>Acessar página tempo</a>
        </Link>
        </div>

        <div>
        <Link href="/api/tempo">
            <a>Acessar API tempo</a>
        </Link> 
        </div>

    </div>)
}

export default Home