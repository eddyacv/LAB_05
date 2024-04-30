import portadas from './data/portada.json';

const Single = () => {
    console.log(portadas)
    const currentRoute = window.location.pathname;
    const portada = portadas.find(it => currentRoute.includes(it.slug));

    return (
        <>
            <h1 className="text-white">{portada.name}</h1>
            <br></br>
            <img src={portada.url} alt={portada.name} />
            <p className="text-white text-center">{portada.descripcion}</p>    
        </>
    );
}

export default Single;