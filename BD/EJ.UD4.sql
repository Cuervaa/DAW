-- Actividad de aprendizaje 2: sentencias SQL -- 

-- 1º Sentencia --
INSERT INTO `tienda`.`producto` (`codigo`, `descripcion`, `precio`, `stock`, `minimo`) VALUES ('1006', 'Balon Baloncesto 7', '8.00', '5', '5');
INSERT INTO `tienda`.`producto` (`codigo`, `descripcion`, `precio`, `stock`, `minimo`) VALUES ('1007', 'Balon de Futbol 7', '8.00', '5', '5');

-- 2º Sentencia Update-- 
UPDATE producto
SET precio = precio - 0.50
WHERE codigo IN (1006, 1007);

-- 3º Sentencia DELETE --
DELETE FROM `tienda`.`producto` WHERE (`codigo` = '1006');

