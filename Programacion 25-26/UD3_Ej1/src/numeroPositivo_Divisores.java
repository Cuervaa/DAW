/**
 *Tu empresa está trabajando en un programa confidencial para un importante cliente.
 *No están autorizados a explicarte la finalidad del programa completo,
 *pero necesitan que realices un pequeño programa con una tarea a priori sencilla.
 *
 *Dado un número entero positivo, se te pide que escribas por pantalla todos sus divisores positivos.
 *
 ** @author [Unai Cuerva]
 */
public class numeroPositivo_Divisores {

	public static void main(String[] args) {
		int numero = 15;
		//Prueba todos los números desde 1 hasta el 15 en este caso.
		for (int i = 1; i <=numero ;i++) {
			//Si el resto de dividir 'numero' entre 'i' es 0, entonces 'i' es divisor.
			if (numero % i == 0) {
				System.out.println(i + " es devisor de " + numero);
			}
			
		}

	}

}