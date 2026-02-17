// ---- 2: Dado un número de minutos totales, escribe un algoritmo que muestre el número de semanas, días, horas y minutos equivalente. ----
import java.util.Scanner;
public class ProyectoEvaluacionEj2 {

	public static void main(String[] args) {
// Creamos el objeto Scanner para leer datos introducidos por el usuario.
		Scanner teclado = new Scanner(System.in);

        System.out.println("Minutos Totales:");
		int minutosTotales = teclado.nextInt();

        // Calculamos semanas, días, horas y minutos a partir del total
        int resultadoSemanas = minutosTotales / 10080;          // 1 semana = 10080 minutos
        int resultadoDias = (minutosTotales % 10080) / 1440;    // 1 día = 1440 minutos
        int resultadoHoras = (minutosTotales % 1440) / 60;     // 1 hora = 60 minutos
        int resultadoMinutos = minutosTotales % 60;            // minutos sobrantes

        // Mostramos el resultado en formato semanas:días:horas:minutos
        System.out.println(resultadoSemanas + " semanas " +
                           resultadoDias + " días " +
                           resultadoHoras + " horas " +
                           resultadoMinutos + " minutos");

        // Cerramos el Scanner
        teclado.close();
	}

}