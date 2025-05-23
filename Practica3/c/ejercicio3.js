function simularPeticionAPI(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos(){
    const datos = await simularPeticionAPI();
    return datos;
}

obtenerDatos().then(datos => {
    console.log(datos);
});