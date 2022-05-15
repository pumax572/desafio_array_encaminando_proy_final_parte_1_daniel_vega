

const Bienvenido = ()=> {
    let usuario=prompt("Ingreaste a una calculadora de notas, ingresa tu nombre: ");
    while(usuario===""){
        usuario= prompt("Ingreaste a una calculadora de notas, ingresa tu nombre: ");
    }
    console.log("Hola "+ usuario);
};
const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
if(edadDelUsuario >= 18){
    alert("Eres mayor de edad, puedes calcular tus notas");
}else{
    alert("Eres menor de edad, no tienes notas que calcular");
}



function limpiar(){
    document.getElementById('miFormulario').reset();
}
function sumar(){
    let x= parseInt(document.getElementById('valor1').value);
    let y= parseInt(document.getElementById('valor2').value);
    
    document.getElementById('el-resultado').innerHTML=x+y;
}
function restar(){
    let x= parseInt(document.getElementById('valor1').value);
    let y= parseInt(document.getElementById('valor2').value);
    
    document.getElementById('el-resultado').innerHTML=x-y;
}
function multiplicar(){
    let x= parseInt(document.getElementById('valor1').value);
    let y= parseInt(document.getElementById('valor2').value);
    
    document.getElementById('el-resultado').innerHTML=x*y;
}
function dividir(){
    let x= parseInt(document.getElementById('valor1').value);
    let y= parseInt(document.getElementById('valor2').value);
    
    document.getElementById('el-resultado').innerHTML=x/y;
}
function calcularPorcentaje (numero, porcentaje){
    return numero / 100* porcentaje;

}
const a=["Hace deportes", "Es Ingeniero en Telecomunicaciones","Le gusta el futbol"
    ]
console.log(a);
console.log(a.length)
console.log(a [1])
const Nombre1={
    nombre : "Maximiliano",
    apellido: "Vega",
    edad: "35",
    soltero: false,
}

console.log(Nombre1);
console.log(Nombre1.nombre);
console.log(Nombre1.edad); 
console.log(Nombre1.apellido);
console.log(Nombre1.soltero);


 let NumerosPrimeros = ['Luis',"Tus notas son:", '8', '5', '9'];
let NumerosSegundos = ['Juan', "Tus notas son:",'5', '9', '7'];
let NumerosTerceros= ['Pedro',"Tus notas son:", '10', '9', '8'];
let NumerosFinales = NumerosPrimeros.concat(NumerosSegundos).concat(NumerosTerceros);
console.log(NumerosFinales)

Bienvenido();

