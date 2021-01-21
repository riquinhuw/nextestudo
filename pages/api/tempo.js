async function tempo(request,response) {
    const textSecret = process.env.TEXTO_SECRETO
    const dynamicDate = new Date();
    
    const apiResponse = await fetch("https://testetemporario.free.beeceptor.com");
    const apiResponseJson = await apiResponse.json();
    const mensagem = apiResponseJson.mensagem;

    response.setHeader('Cache-Control','s-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        mensagem: mensagem,
        mensagemSecreta:textSecret
    })
}

export default tempo;