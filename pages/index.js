import Link from 'next/link';
import Image from 'next/image'


function Home(){
    return (<div class="p-6">
        <h1 class="text-indigo-600 text-6xl">Home</h1>

        <div class="p-3 " >
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
        </div>

        <div>
            <div>
                <div>
                    <img class="h-48 "   src="/img/nextLogo.png"></img>
                </div>
                <div>
                    <div class="uppercase text-indigo-500">Frase em destaque</div>
                </div>
            </div>

        </div>
    </div>)
}

export default Home