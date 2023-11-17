//Saludo de inicio
function saludar(){
    let usuario = prompt ("Ingresa tu username")

    if (usuario){
        alert("👟Bienvenido"+ usuario)
}
saludar()


// Solicitar al usuario que seleccione un artículo
 const seleccion = prompt("Seleccione un artículo ingresando el número:\n\n" +
 "1. Adidas Bad Bunny\n" +
 "2. Nike Retro 4\n" +
 "3. Nike Jordan 1 Low\n" +
"4. Adidas Yeesy 350");

 let precio = 0;

// Verificar la selección del usuario y asignar el precio correspondiente
switch (seleccion) {
     case '1':
     precio = 55000;
     break;
 case '2':
     precio = 58000;
     break;
 case '3':
     precio = 35000;
     break;
 case '4':
     precio = 49500;
     break;
 default:
     alert('Selección no válida. Inténtelo de nuevo.');
    break;
 }

 // Si la selección fue válida, solicitar la cantidad de unidades a comprar
 if (precio > 0){
     const cantidad = prompt(`Ingrese la cantidad de unidades para el artículo seleccionado.\nPrecio: $${precio}`);

 // Verificar si la cantidad es válida y es un número
 if (cantidad !== null && !isNaN(cantidad) && cantidad > 0) {
     // Calcular el total
    const total = precio * parseInt(cantidad);

     // Mostrar el total al usuario
     alert(`Total de la compra: $${total}`);
 } else {
         alert('Cantidad no válida. Inténtelo de nuevo.');
 }
 }

 // Definición de objetos que representan zapatillas
var zapatilla1 = {
    marca: "Adidas",
    modelo: "Bad Bunny",
    talla: 42,
    color: "Blanco"
  };
  
  var zapatilla2 = {
    marca: "Nike",
    modelo: "Retro 4",
    talla: 41,
    color: "Negro"
  };
  
  var zapatilla3 = {
    marca: "Nike ",
    modelo: "Jordan 1 Low",
    talla: 40,
    color: "Rojo"
  };
  
  var zapatilla4 = {
    marca: "Adidas ",
    modelo: "Yeesy 350",
    talla: 39,
    color: "Manteca"
  };
  
  // Creación del array que contiene los objetos de zapatillas
  var arrayZapatillas = [zapatilla1, zapatilla2, zapatilla3, zapatilla4];
  
  // Acceder a las propiedades de una zapatilla específica
console.log("Marca de la zapatilla 1:", arrayZapatillas[0].marca);
console.log("Modelo de la zapatilla 2:", arrayZapatillas[1].modelo);