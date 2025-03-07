function tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    
    return(
        <div>
            <div>{dynamicDateString}(dinâmico)</div>
            <div>{props.staticDateString}(estático)</div>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return{
        props:{
            staticDateString
        },
        revalidate:60
    }
}

export default tempo;