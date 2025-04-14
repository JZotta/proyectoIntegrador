CREATE SCHEMA proyectoIntegrador;
USE proyectoIntegrador;

CREATE TABLE usuarios (
	idUsuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
    email VARCHAR(50) NOT NULL UNIQUE,
    contrasenia VARCHAR(220) NOT NULL,
    fecha DATE NOT NULL,
    dni INT NOT NULL UNIQUE,
    fotoPerfil VARCHAR(1000),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAT TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
	idProducto INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT UNSIGNED NOT NULL,
    nombreImagen VARCHAR(50) NOT NULL UNIQUE,
    nombreProducto VARCHAR(200) NOT NULL,
    descripcionProducto VARCHAR(200),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAT TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario)    
);
CREATE TABLE comentarios (
	idComentario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idProducto INT UNSIGNED NOT NULL,
    idUsuario INT UNSIGNED NOT NULL,
    textoComentario VARCHAR(1000) NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAT TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (idProducto) REFERENCES productos(idProducto),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario) 
);

INSERT INTO usuarios
VALUES (DEFAULT, 'perezgonzalo@hotmail.com' , 'Gperez2007' , '2007-09-14', '48759648', '/images/users/fotoGonzalo.png', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios
VALUES (DEFAULT, 'gomezmanuel@hotmail.com' , 'Mgomez2009' , '2009-08-24', '50783233', '/images/users/fotoManuel.png', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios
VALUES (DEFAULT, 'perezpedro@hotmail.com' , 'Pperez1999' , '1999-12-28', '38427931', '/images/users/fotoPedro.png', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios
VALUES (DEFAULT, 'hernandezjavier@hotmail.com' , 'jHernandez1965' , '1965-01-10', '20837964', '/images/users/fotoJavier.png', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios
VALUES (DEFAULT, 'sanchezrodrigo@hotmail.com' , 'Rsanchez2011' , '2011-11-03', '56742356', '/images/users/fotoRodrigo.png', DEFAULT, DEFAULT, DEFAULT);



INSERT INTO productos 
VALUES (DEFAULT, 1, 'camisetaTigre.jpg', 'Camiseta blanca Club Atletico Tigre 2018', 'Simplemente, el matador', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos 
VALUES (DEFAULT, 2, 'camisetaBoca.jpg', 'Camiseta Boca Juniors Titular 2024', 'La tradicional azul y oro con un diseño renovado y tecnología Aeroready para mayor comodidad en la cancha y fuera de ella.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos 
VALUES (DEFAULT, 3, 'camisetaRiver.jpg', 'Camiseta River Titular 2024', 'El icónico manto sagrado con la banda roja cruzada. Diseño elegante y tejido transpirable para máximo rendimiento.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos 
VALUES (DEFAULT, 4, 'camisetaRacing.jpg', 'Camiseta Racing Titular 2024', 'Celeste y blanca con detalles modernos, pensada para los hinchas que alientan sin cesar en el Cilindro de Avellaneda.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos 
VALUES (DEFAULT, 5, 'camisetaIndependiente.jpg', 'Camiseta Independiente Titular 2024', 'El clásico rojo del Rey de Copas con detalles que rinden homenaje a su historia gloriosa. Confort y orgullo en cada costura.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos 
VALUES (DEFAULT, 1, 'camisetaSanLorenzo.jpg', 'Camiseta San Lorenzo Titular 2024', 'Azulgrana con un diseño moderno y escudo bordado, ideal para los hinchas del Ciclón que llevan los colores en el corazón.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos 
VALUES (DEFAULT, 2, 'camisetaVelez.jpg', 'Camiseta Vélez Titular 2024', 'Clásica V azulada en el pecho, con tejido liviano y tecnología de absorción para los amantes del Fortín.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos 
VALUES (DEFAULT, 3, 'camisetaEstudiantes.jpg', 'Camiseta Estudiantes Titular 2024', 'Roja y blanca a rayas, inspirada en la garra y mística del Pincha. Perfecta para la cancha y el día a día.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos 
VALUES (DEFAULT, 4, 'camisetaHuracan.jpg', 'Camiseta Huracán Titular 2024', 'Blanca con detalles en rojo, emblema del Globo bordado y tecnología transpirable para mayor comodidad en cada partido.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos 
VALUES (DEFAULT, 5, 'camisetaArgentinos.jpg', 'Camiseta Argentinos Titular 2024', 'Roja con la icónica franja blanca en diagonal, representando la historia y pasión del Semillero del Mundo.', DEFAULT, DEFAULT, DEFAULT);



INSERT INTO comentarios 
VALUES (DEFAULT, 1, 1, 'Excelente calidad, me encantó el diseño.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 1, 2, 'Muy cómoda y fiel a la descripción.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 1, 3, 'La tela es liviana, ideal para verano.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 2, 2, 'Los colores son muy vibrantes, me encantó.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios
VALUES (DEFAULT, 2, 3, 'Llegó rápido y en buen estado.', DEFAULT, DEFAULT, DEFAULT);
 
INSERT INTO comentarios
VALUES (DEFAULT, 2, 4, 'Perfecta para ir a la cancha.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 3, 3, 'Diseño precioso, muy recomendable.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 3, 4, 'Se siente muy cómoda y transpirable.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 3, 5, 'Ideal para entrenar.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 4, 4, 'Me sorprendió la calidad del bordado.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 4, 5, 'Racing el mas grande!', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 4, 1, 'Mi camiseta favorita hasta ahora.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 5, 5, 'Muy buen producto, lo recomiendo.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 5, 1, 'La usé varias veces y sigue como nueva.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 5, 2, 'El rey de copas indiscutido! Muy buena remera.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 6, 1, 'Perfecta para cualquier hincha.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 6, 2, 'Buen diseño y muy cómoda.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 6, 3, 'Excelente relación precio-calidad.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 7, 2, 'Buen detalle del escudo bordado.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios
VALUES (DEFAULT, 7, 3, 'Los materiales son de primera.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 7, 4, 'Me queda perfecta, tal como la esperaba.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 8, 3, 'Hermosa camiseta, muy cómoda.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 8, 4, 'Me encantó el diseño clásico.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 8, 5, 'No se achica al lavar', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 9, 4, 'Una gran compra, la volvería a hacer.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios
VALUES (DEFAULT, 9, 5, 'El envío fue muy rápido.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 9, 1, 'Perfecta para hinchas de verdad.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 10, 5, '¡Vamos Bicho! Muy buena camiseta.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 10, 1, 'Los colores y la calidad son de 10.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios 
VALUES (DEFAULT, 10, 2, 'Una camiseta muy cómoda para todo uso.', DEFAULT, DEFAULT, DEFAULT);

