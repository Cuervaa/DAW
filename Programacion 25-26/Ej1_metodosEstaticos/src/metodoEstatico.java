
public class metodoEstatico {
	 public static void main(String[] args) {
	        // Llamada al método del área del triángulo
	        double resultado = areaTriangulo(5, 10);
	        System.out.println("El área del triángulo es: " + resultado);

	        // Llamada al método que encuentra el mayor número
	        int resultado2 = mayor(1, 2, 3);
	        System.out.println("El número mayor es: " + resultado2);
	    }

	    /**
	     * Calcula el área de un triángulo a partir de su base y altura.
	     * @param base  base del triángulo
	     * @param altura altura del triángulo
	     * @return área del triángulo
	     */
	  public static double areaTriangulo(double base, double altura) {
	        double area = (base * altura) / 2;
	        return area;
	    }

	    /**
	     * Función que, dados tres números enteros, devuelve el mayor de los tres.
	     * @param num1 Primer número
	     * @param num2 Segundo número
	     * @param num3 Tercer número
	     * @return El valor más grande; si son iguales, devuelve uno de ellos.
	     */
	  public static int mayor(int num1, int num2, int num3) {
	        if (num1 >= num2 && num1 >= num3) {
	            return num1;
	        } else if (num2 >= num1 && num2 >= num3) {
	            return num2;
	        } else {
	            return num3;
	        }
	   }
}