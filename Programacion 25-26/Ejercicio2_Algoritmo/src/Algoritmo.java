public class Algoritmo {

	public static void main(String[] args) {
		// Declaramos las variables para horas, minutos y segundos
		int horas = 1;
		int minutos = 10;
		int segundos = 6;
		
		// Calculamos los segundos totales;
		// 1 hora =3600 segundos, 1 minuto = 60 segundos
		int segundosTotales = horas*3600 + minutos*60 + segundos;
		
		// Mostramos el resultado en pantalla
		System.out.println(segundosTotales + " son segundos totales.");
	}

}