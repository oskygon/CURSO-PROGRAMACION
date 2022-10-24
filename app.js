window.addEventListener("load", function () {

  const boton = document.querySelector("#boton-resumen"); 

  function imprimirCompra(){
      const resumenResult = document.querySelector('#result').value;
      const resumenCat = document.querySelector('#box2').value;
      const resumenCant = document.querySelector('#box1').value;
      const resumenE = document.querySelector('#correo').value;
      const resumenA = document.querySelector('#nombre').value;
      const resumenB = document.querySelector('#apellido').value;
      const window_config = "width=1360,height=200,scrollbars=NO"; 
      const v1 = window.open("","Ventana 1",window_config); 
      v1.document.write("<h1>Compra realizada con éxito</h1>" + "Nombre: " +resumenA + " Apellido: " + resumenB + " Email: " + resumenE + " Cantidad de tickets: " + resumenCant + " Categoria: " + resumenCat + " Total a pagar $: " + resumenResult + "<p>Ha recibido un email con el código para retirar los tickets</p>"); 

      setTimeout(function () {
             
              v1.close();
      }, 15000);

  }

  boton.addEventListener("click", () => imprimirCompra() ); 

})





function borrarFormulario() {
    document.getElementById("formulario").reset();
  }

 /* function mostrarResumen(url) {
	window.open('./ventana.html', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=600,height=400,left = 390,top = 50');
 
}*/

try {function calculate() {
 
  let myBox1 = document.getElementById('box1').value; 
  let myBox2 = document.getElementById('box2').value;
  let myBox3 = document.getElementById('box3').value;
  
  let result = document.getElementById('result'); 
  let myResult = myBox1 * ( myBox3 - ( myBox3 * myBox2 ));
  result.value = myResult;
  
  
  }
  } catch (error) { throw error; }


 




     