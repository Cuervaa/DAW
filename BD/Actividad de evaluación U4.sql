-- Modificar precio del Flan de chocolate
UPDATE producto
SET precio = 2.50
WHERE idproducto = '79';

-- Modificar precio del Flan de vainilla
UPDATE producto
SET precio = 2.30
WHERE idproducto = '80';

-- Incremento del 3% en productos de Carnes o Lácteos
UPDATE producto
SET precio = precio * 1.03
WHERE idcategoria IN (4, 6);

-- Eliminar el producto Flan de vainilla
DELETE FROM producto
WHERE idproducto = '80';

-- Importe total por pedido
SELECT
    p.idpedido,
    p.fechapedido,
    SUM(d.precio * d.unidades * (1 - d.descuento)) AS importe
FROM pedido p
JOIN detalle d ON p.idpedido = d.idpedido
GROUP BY p.idpedido, p.fechapedido
ORDER BY p.idpedido;

-- Creación de la tabla IMPORTES
CREATE TABLE IMPORTES (
    numero  INT,
    fecha   DATE,
    importe DECIMAL(10,2)
);

-- Copiar los importes de los pedidos a la tabla IMPORTES
INSERT INTO IMPORTES (numero, fecha, importe)
SELECT
    p.idpedido,
    p.fechapedido,
    SUM(d.precio * d.unidades * (1 - d.descuento)) AS importe
FROM pedido p
JOIN detalle d ON p.idpedido = d.idpedido
GROUP BY p.idpedido, p.fechapedido;

-- nuevoPedido.sql
-- Alta de un nuevo pedido con transacción

START TRANSACTION;

-- 1. Crear el pedido para el cliente ANATR con fecha de hoy
INSERT INTO pedido (idpedido, idcliente, fechapedido)
VALUES (11078, 'ANATR', CURDATE());

-- 2. Insertar líneas de detalle (3 productos)
INSERT INTO detalle (idpedido, idproducto, precio, unidades, descuento)
VALUES
    (11078, 11, 14.00, 2, 0),     -- Producto 1
    (11078, 42, 9.50, 3, 0.05),   -- Producto 2 con 5% descuento
    (11078, 72, 6.20, 1, 0);      -- Producto 3

-- 3. Actualizar el stock de los productos vendidos
UPDATE producto
SET stock = stock - 2
WHERE idproducto = 11;

UPDATE producto
SET stock = stock - 3
WHERE idproducto = 42;

UPDATE producto
SET stock = stock - 1
WHERE idproducto = 72;

-- 4. Confirmar la transacción
COMMIT;

-- nuevoPedidoAbortado.sql
-- Alta de un pedido que será abortado

START TRANSACTION;

-- 1. Crear un nuevo pedido (distinto al anterior)
INSERT INTO pedido (idpedido, idcliente, fechapedido)
VALUES (11079, 'ANATR', CURDATE());

-- 2. Insertar líneas de detalle
INSERT INTO detalle (idpedido, idproducto, precio, unidades, descuento)
VALUES
    (11079, 15, 8.50, 2, 0),
    (11079, 27, 4.20, 5, 0),
    (11079, 33, 6.00, 1, 0.10);

-- 3. Actualizar el stock de los productos
UPDATE producto
SET stock = stock - 2
WHERE idproducto = 15;

UPDATE producto
SET stock = stock - 5
WHERE idproducto = 27;

UPDATE producto
SET stock = stock - 1
WHERE idproducto = 33;

-- 4. Abortamos la transacción
ROLLBACK;


DELETE FROM cliente WHERE idcliente = 'ALFKI';


