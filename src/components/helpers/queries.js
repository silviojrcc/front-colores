const URL_color = import.meta.env.VITE_RECETA || 'http://localhost:4000/apicolores/colores';

export const obtenerColores = async () => {
    try {
        console.log(URL_color);
        const respuesta = await fetch(URL_color);
        const listaColores = await respuesta.json();
        return listaColores;
    } catch (error) {
        console.log(error)
    }
}

export const crearColor = async (color) => {
    try {
        const respuesta = await fetch(URL_color, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(color)
        });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const borrarColor = async (id)=>{
    console.log(id);
    try {
        const respuesta = await fetch(URL_color + "/" + id, {
            method: "DELETE",
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}