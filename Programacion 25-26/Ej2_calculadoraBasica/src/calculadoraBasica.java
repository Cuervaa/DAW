import java.util.Scanner;

/**
 * Clase que implementa una calculadora básica con las operaciones
 * suma, resta, multiplicación y división. 
 * 
 * El programa permite al usuario elegir la operación a realizar e 
 * introduce los valores necesarios según la operación seleccionada.
 * 
 * @author [Unai Cuerva]
 */
public class calculadoraBasica {

    /**
     * 
     * Muestra un menú con las operaciones disponibles y solicita al usuario 
     * que elija una. En función de la elección, llama al método correspondiente.
     * 
     */
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Para realizar una operación escribe el tipo:");
        System.out.println("suma");
        System.out.println("resta");
        System.out.println("multiplicar");
        System.out.println("divir");
        System.out.println("salir");
        System.out.println("¿Qué operación quieres realizar?");
        String opcion = teclado.nextLine();

        // Comprobamos la opción elegida
        if (opcion.equalsIgnoreCase("suma")) {
            System.out.println("Resultado: " + suma(7, 3));
        } else if (opcion.equalsIgnoreCase("resta")) {
            System.out.println("Resultado: " + resta(20, 6));
        } else if (opcion.equalsIgnoreCase("multiplicar")) {
            System.out.println("Resultado: " + multiplicar());
        } else if (opcion.equalsIgnoreCase("divir")) {
            System.out.println("Resultado: " + division());
        } else {
            System.out.println("Opción no válida.");
        }

        teclado.close();
    }

    /**
     *
     * @param num1 Primer número
     * @param num2 Segundo número
     * @return Resultado de la suma de ambos números
     */
    static double suma(double num1, double num2) {
        return num1 + num2;
    }

    /**
     *
     * @param num1 Primer número
     * @param num2 Segundo número
     * @return Resultado de la resta (num1 - num2)
     */
    static double resta(double num1, double num2) {
        return num1 - num2;
    }

    /**
     * 
     *
     * @return Resultado de multiplicar ambos números introducidos por el usuario
     */
    static double multiplicar() {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Primer número: ");
        double num1 = Double.parseDouble(teclado.nextLine());
        System.out.print("Segundo número: ");
        double num2 = Double.parseDouble(teclado.nextLine());
        return num1 * num2;
    }

    /**
     * 
     * Controla el error de división entre cero mostrando un mensaje de advertencia.
     *
     * @return Resultado de la división o 0 si el divisor es cero
     */
    static double division() {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Primer número: ");
        double num1 = Double.parseDouble(teclado.nextLine());
        System.out.print("Segundo número: ");
        double num2 = Double.parseDouble(teclado.nextLine());
        // Control de error hacia la division entre 0
        if (num2 == 0) {
            System.out.println("No se puede dividir entre cero.");
            return 0;
        }
        return num1 / num2;
    }
}