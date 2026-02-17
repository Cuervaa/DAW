// Programa que calcula el área de un triángulo sencillo a partir de la base y la altura.

//Importamos el Scanner para leer datos del usuario.
import java.util.Scanner;

  public class Comentar_CodigoSecreto {

	  public static void main(String[] args) {
// Creamos una Constante llamada Base que contendra un numero entero
		  	final int base = 3;
		  	
// Despues pediremos al usuario meter el valor de la Altura, Gracias al Objeto Scanner.
		  	Scanner teclado = new Scanner(System.in);

		  	System.out.println("Altura:");
		  	
// En este apartado guardaremos como variable la Altura metida por el usuario.
		  	int altura = teclado.nextInt();
		  	
// Cálculo del área del triángulo: (base * altura) / 2
// Se convierte a double para obtener decimales en el resultado.
		  	double area = (double)(base * altura) / 2;
		  	
// Mostramos el resultado final.
		  	System.out.println("El area es " + area);

	  }

  }