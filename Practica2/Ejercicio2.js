const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}
];
const filtrados = productos.filter(producto => producto.precio >= 1000);

const nombres = filtrados.map(filtrado => filtrado.nombre);
console.log(nombres)