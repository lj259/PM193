const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28},
];

const find = personas.find(persona => persona.nombre === "Luis");
console.log(find);

personas.forEach(persona => {
    console.log("Nombre: "+persona.nombre+"Edad: "+persona.edad)
});

const reduce = personas.reduce((acumulador,persona) => acumulador + persona.edad,0);

console.log(reduce);