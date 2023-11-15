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
 if (precio > 0) {
 const cantidad = prompt(`Ingrese la cantidad de unidades para el artículo seleccionado.\nPrecio: $${precio}`);

 // Verificar si la cantidad es válida y es un número
 if (cantidad !== null && !isNaN(cantidad) && cantidad > 0) {
     // Calcular el total
    const total = precio * parseInt(cantidad);

     // Mostrar el total al usuario
     alert(`Total de la compra: $${total}`);
 } else {
/     alert('Cantidad no válida. Inténtelo de nuevo.');
 }

 }