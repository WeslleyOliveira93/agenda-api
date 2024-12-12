CREATE DATABASE agenda;

DROP DATABASE agenda;

USE agenda;

CREATE TABLE agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente TEXT NOT NULL,
    data_agendamento DATE NOT NULL,
    hora_agendamento TIME NOT NULL,
    descricao TEXT
);
DESCRIBE agendamentos;

DROP TABLE agendamentos;

INSERT INTO agendamentos (cliente, data_agendamento, hora_agendamento, descricao)
VALUES
('Ana Costa', '2024-12-12', '10:00', 'Corte de cabelo feminino com camadas desfiadas para um visual mais leve e moderno.'),
('Bruno Almeida', '2024-12-13', '14:30', 'Corte reto e uniforme, ideal para quem busca um look elegante e sofisticado.'),
('Camila Souza', '2024-12-14', '09:15', 'Corte curto e prático, perfeito para um estilo ousado e contemporâneo.'),
('Daniel Silva', '2024-12-15', '16:00', 'Corte de cabelo na altura do queixo, com um toque de leveza nas pontas.'),
('Eduardo Pereira', '2024-12-16', '11:30', 'Corte masculino com transição suave de comprimento, ideal para um look moderno e clean.'),
('Fernanda Martins', '2024-12-17', '13:00', 'Corte de cabelo com franjas frontais e volume nas pontas, dando um toque clássico ao visual.'),
('Gustavo Rocha', '2024-12-18', '15:45', 'Corte masculino com as laterais bem baixas e o topo mais longo, com estilo ousado e moderno.'),
('Helena Lima', '2024-12-19', '10:45', 'Corte feminino com transição gradual de comprimento, ideal para quem gosta de um visual elegante e versátil.'),
('Igor Ferreira', '2024-12-20', '17:00', 'Corte para cabelos crespos, deixando o volume natural e um visual cheio de personalidade.'),
('Juliana Barbosa', '2024-12-21', '08:30', 'Corte masculino bem curto e alinhado, ideal para quem busca praticidade e estilo.'); 


SELECT * FROM agendamentos;

SELECT * FROM agendamentos WHERE id = 1;

ALTER TABLE `agendamentos` ADD `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE `agendamentos` ADD `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

