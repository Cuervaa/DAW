/**
 * Programa que calcula el pago individual de una actividad grupal.
 * La empresa organiza una actividad con un precio total fijo (entero) y necesita saber
 * cuánto debe pagar cada participante. El programa controla el caso en el que el número
 * de participantes sea 0 mediante el manejo de excepciones, evitando la división entre cero.
 ***/

/**
 * Características 1. Calcula la cantidad a pagar por persona. 2. Controla
 * errores con un bloque try-catch. 3. Muestra un mensaje de error si se intenta
 * dividir entre cero.
 * 
 * @author [Unai Cuerva]
 */
public class gestionarPago {
	public static void main(String[] args) {
		int precio = 500;
		int participantes = 6;

		// Intentamos realizar la división controlada mediante try-catch
		try {
			int total = precio / participantes;
			System.out.println("Cada uno tendrá que pagar " + total + " €");
		} catch (ArithmeticException e) {
			System.out.println("No se puede repartir el dinero entre 0 personas.");
		}
	}
}