import Link from 'next/link';



function Home(){
    return (<div class="max-h-full w-full p-6 bg-blue-400">
        <h1 class="h-50 w-44  text-indigo-100 text-6xl text-center">Home</h1>

        <div class="p-3" >
            <div class=" m-2 max-h-10 max-w-max rounded border-2 bg-blue-600 text-center">
            <Link href="/sobre">
                <a class="m-1">Acessar página Sobre</a>
            </Link>
            </div>

            <div class="m-2 max-h-10 max-w-max rounded border-2 bg-blue-600 text-center">
            <Link href="/tempo">
                <a class="m-1">Acessar página tempo</a>
            </Link>
            </div>

            <div class="m-2 max-h-10 max-w-max rounded border-2 bg-blue-600 text-center">
            <Link href="/api/tempo">
                <a class="m-1">Acessar API tempo</a>
            </Link> 
            </div>

            <div class="m-2 max-h-10 max-w-max rounded border-2 bg-blue-600 text-center">
            <Link href="/jogarttt">
                <a class="m-1">Jogar Jogo da Velha</a>
            </Link> 
            </div>
        </div>

        <div>
            <div>
                <div class="h-32 w-32">
                    <img class="h-32"   src="/img/nextLogo.png"></img>
                </div>
                <div>
                    <p class="uppercase  m-2">
                        Site feito por <a class="text-blue-800" href="https://github.com/riquinhuw">Carlos H</a>
                    </p>
                </div>
            </div>

        </div>
    </div>)
}

export default Home