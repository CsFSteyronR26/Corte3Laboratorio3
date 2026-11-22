INSERT INTO students (
    id,
    name,
    email,
    phone,
    address,
    birthdate,
    semester,
    status
) VALUES
(1001, 'Juan Perez', 'juan.perez@gmail.com', '3001234567', 'Calle 10 # 15-20', '2002-05-15', 3, TRUE),

(1002, 'Maria Gomez', 'maria.gomez@gmail.com', '3012345678', 'Carrera 20 # 10-30', '2001-08-22', 5, TRUE),

(1003, 'Carlos Rodriguez', 'carlos.rodriguez@gmail.com', '3023456789', 'Calle 25 # 12-40', '2003-01-10', 2, TRUE),

(1004, 'Laura Martinez', 'laura.martinez@gmail.com', '3034567890', 'Carrera 15 # 8-25', '2000-11-30', 7, TRUE),

(1005, 'Andres Lopez', 'andres.lopez@gmail.com', '3045678901', 'Calle 30 # 20-15', '2002-03-18', 4, TRUE),

(1006, 'Daniela Ramirez', 'daniela.ramirez@gmail.com', '3056789012', 'Carrera 12 # 5-18', '2001-06-25', 6, FALSE),

(1007, 'Santiago Torres', 'santiago.torres@gmail.com', '3107890123', 'Calle 18 # 22-10', '2003-09-12', 1, FALSE),

(1008, 'Valentina Hernandez', 'valentina.hernandez@gmail.com', '3118901234', 'Carrera 8 # 14-32', '2002-12-05', 8, FALSE),

(1009, 'Sebastian Castro', 'sebastian.castro@gmail.com', '3129012345', 'Calle 40 # 18-22', '2001-04-14', 9, FALSE),

(1010, 'Camila Moreno', 'camila.moreno@gmail.com', '3130123456', 'Carrera 25 # 30-12', '2000-07-20', 10, FALSE);

INSERT INTO courses (
    name,
    description,
    credits,
    semester,
    status
) VALUES
('Programación I', 'Fundamentos de programación, algoritmos y lógica computacional.', 3, 1, TRUE),

('Matemáticas I', 'Fundamentos de álgebra, ecuaciones, funciones y operaciones matemáticas.', 4, 1, TRUE),

('Bases de Datos', 'Modelado de datos, lenguaje SQL y sistemas gestores de bases de datos.', 3, 3, TRUE),

('Programación Web I', 'Desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript y TypeScript.', 3, 4, TRUE),

('Arquitectura de Software', 'Principios, patrones y estilos arquitectónicos para el desarrollo de software.', 3, 6, TRUE),

('Ingeniería de Software', 'Procesos, metodologías ágiles y buenas prácticas para el desarrollo de software.', 3, 5, TRUE),

('Redes de Computadores', 'Fundamentos de redes, protocolos de comunicación y modelos de referencia.', 3, 4, TRUE),

('Sistemas Operativos', 'Administración de procesos, gestión de memoria y sistemas de archivos.', 3, 3, TRUE),

('Desarrollo de Aplicaciones Móviles', 'Fundamentos y desarrollo de aplicaciones para dispositivos móviles.', 3, 7, TRUE),

('Inteligencia Artificial', 'Fundamentos de inteligencia artificial, aprendizaje automático y algoritmos inteligentes.', 4, 8, TRUE);


INSERT INTO libros (
    name,
    description,
    editorial,
    status
) VALUES
('El principito', 'Novela corta poética que aborda temas profundos como el sentido de la vida, la amistad y el amor.', 'Reynal & Hitchcock', TRUE),

('Rayuela', 'Contranovela experimental que ofrece múltiples órdenes de lectura entre París y Buenos Aires.', 'Editorial Sudamericana', TRUE),

('Ficciones', 'Colección de cuentos fantásticos y filosóficos sobre laberintos, espejos y bibliotecas infinitas.', 'Editorial Sur', TRUE),

('Crónica de una muerte anunciada', 'Novela corta basada en un suceso real que reconstruye el asesinato de Santiago Nasar.', 'La Oveja Negra', TRUE),

('El código Da Vinci', 'Novela de misterio y suspenso que sigue una investigación simbólica a través de Europa.', 'Doubleday', FALSE),

('Design Patterns', 'Catálogo clásico de 23 patrones de diseño reutilizables en programación orientada a objetos.', 'Addison-Wesley', TRUE),

('Sapiens: De animales a dioses', 'Breve historia de la humanidad desde la aparición del Homo sapiens hasta las revoluciones modernas.', 'Debate', TRUE),

('Dune', 'Epopeya de ciencia ficción ambientada en el planeta desértico Arrakis y el control de la especia melange.', 'Chilton Books', TRUE);



INSERT INTO autores (
    name,
    email,
    description,
    birthdate,
    status
) VALUES
('Antoine de Saint-Exupéry', 'antoine.exupery@aviacion.fr', 'Escritor y aviador francés, autor de una de las obras más traducidas del mundo.', '1900-06-29', TRUE),

('Julio Cortázar', 'j.cortazar@cronopios.ar', 'Escritor y traductor argentino, figura clave del boom latinoamericano.', '1914-08-26', TRUE),

('Jorge Luis Borges', 'jl.borges@aleph.ar', 'Erudito escritor argentino de cuentos, ensayos y poemas fundamentales del siglo XX.', '1899-08-24', TRUE),

('Dan Brown', 'dan.brown@thriller.us', 'Escritor estadounidense especializado en novelas de suspenso histórico y simbología.', '1964-06-22', FALSE),

('Erich Gamma', 'erich.gamma@gangoffour.ch', 'Ingeniero informático suizo, coautor del libro fundacional sobre patrones de diseño de software.', '1961-03-13', TRUE),

('Yuval Noah Harari', 'yuval.harari@historia.il', 'Historiador y escritor israelí conocido por sus ensayos de divulgación sobre la evolución humana.', '1976-02-24', TRUE),

('Frank Herbert', 'frank.herbert@arrakis.us', 'Escritor estadounidense de ciencia ficción, creador del universo literario de Dune.', '1920-10-08', TRUE),

('Isabel Allende', 'isabel.allende@letras.cl', 'Escritora chilena de amplia trayectoria internacional en narrativa histórica y realismo mágico.', '1942-08-02', TRUE);
