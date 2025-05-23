function verificarUsuario(usuario){
    let promise = new Promise((resolve, reject) => {
        if(usuario === 'Admin'){
            resolve("Acceso concedido");
        }else{
            reject("Acceso denegado");
        };
    });
    return promise
}

verificarUsuario("Admin")
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject));

verificarUsuario("Ivan")
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject));