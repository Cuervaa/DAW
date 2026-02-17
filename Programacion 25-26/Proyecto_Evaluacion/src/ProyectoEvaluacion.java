// ----1: Dado un número de segundos totales, escribe un algoritmo que muestre el número de horas, minutos y segundos equivalente. ----
import java.util.Scanner;
public class ProyectoEvaluacion {

    public static void main(String[] args) {
        // Creamos el objeto Scanner para leer datos introducidos por el usuario
        Scanner teclado = new Scanner(System.in);

        System.out.println("Segundos Totales:");
        int segundostotales = teclado.nextInt();

        // Calculamos cuántas horas, minutos y segundos hay en el total
        int resultadoHoras = segundostotales / 3600;
        int resultadoMinutos = (segundostotales % 3600) / 60;
        int resultadoSegundos = segundostotales % 60;

        // Mostramos el resultado en formato horas:minutos:segundos
        System.out.println(resultadoHoras + " horas " +
                           resultadoMinutos + " minutos " +
                           resultadoSegundos + " segundos");
        teclado.close();
    }
}