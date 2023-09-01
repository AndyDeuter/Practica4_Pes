const usuarios = [
    { "name": "User1", "Edad": 21, "Carrera": "Software", "year": 2},
    { "name": "User2", "Edad": 24, "Carrera": "Software", "year": 1},
    { "name": "User3", "Edad": 25, "Carrera": "gastronomia", "year": 2},
    { "name": "User4", "Edad": 26, "Carrera": "diseño grafico", "year": 3},
    { "name": "User5", "Edad": 24, "Carrera": "civil", "year": 5},
    { "name": "User6", "Edad": 19, "Carrera": "medicina", "year": 3},
    { "name": "User7", "Edad": 23, "Carrera": "Software", "year": 5},
    { "name": "User8", "Edad": 23, "Carrera": "medicina", "year": 3},
    { "name": "User9", "Edad": 25, "Carrera": "civil", "year": 1},
    { "name": "User10", "Edad": 21, "Carrera": "gastronomia", "year": 2},
    { "name": "User11", "Edad": 22, "Carrera": "Software", "year": 4}
];

/*const usuariosfilter = usuarios.filter( (x) => {
    if( x.Carrera == "Software"){
        return x;

        return x.Carrera == "Software" && x.Edad == 25
    }
    

    /*return x.Carrera == "Software" && x.Edad == 25
})
console.log(usuariosfilter)
*/

/*const carrerafiter = usuarios.filter ( (user) =>{
    return user.Carrera == "arquitectura"
}

)
console.log(carrerafiter)
*/



const usuariosmap = usuarios.map((user) => {
    return{
        "nombre": user.name,
        "edad": user.Edad
    }
}
)

console.log(usuariosmap)

