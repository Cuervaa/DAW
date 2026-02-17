import java.util.Random;
import java.util.Scanner;

/**
 * Programa de adivinanza de números.
 * El programa genera un número aleatorio entre 1 y 10, y el usuario tiene 5 intentos para adivinarlo.
 * Después de cada intento, el programa indica si el número secreto es mayor o menor.
 * Si el usuario acierta, se muestra un mensaje de felicitación. Si no lo consigue en los 5 intentos, 
 * se muestra el número correcto.
 * 
 * @author [Unai Cuerva]
 * @version 1.0
 */
public class numeroRandom {

    public static void main(String[] args) {
        // Generamos un número aleatorio entre 1 y 10
        Random generador = new Random();
        int numeroSecreto = generador.nextInt(10) + 1; // +1 porque nextInt(10) genera del 0 al 9

        System.out.println("Bienvenido a la adivinanza, el objetivo del juego es adivinar en 5 intentos un número entre 1 y 10.");
        System.out.println("Recuerda que solo tienes 5 intentos.");
        System.out.println("👇 Escribe un número entre 1 y 10. 👇");

        Scanner teclado = new Scanner(System.in);
        boolean acertado = false; // Variable para saber si el jugador ha adivinado

        // Bucle de los 5 intentos
        for (int intento = 1; intento <= 5; intento++) {
            System.out.print("Intento " + intento + ": ");
            int numeroUsuario = teclado.nextInt();

            // Comprobamos si el número es correcto
            if (numeroUsuario == numeroSecreto) {
                System.out.println("🎉 ¡Has acertado en el intento " + intento + "! El número era: " + numeroSecreto);
                acertado = true;
                break; // Salimos del bucle si acierta
            } 
            // Si el número es menor al secreto
            else if (numeroUsuario < numeroSecreto) {
                System.out.println("El número secreto es mayor.");
            } 
            // Si el número es mayor al secreto
            else {
                System.out.println("El número secreto es menor.");
            }
        }

        // Si no ha acertado en los 5 intentos
        if (!acertado) {
            System.out.println("❌ Has agotado tus 5 intentos. El número era: " + numeroSecreto);
        }

        teclado.close();
    }
}