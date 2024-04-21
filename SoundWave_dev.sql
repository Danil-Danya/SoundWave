-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 21 2024 г., 21:23
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `SoundWave_dev`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `preferences` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`id`, `email`, `username`, `password`, `avatar`, `preferences`, `createdAt`, `updatedAt`) VALUES
(1, 'danil@mail.com', 'dan2004', '123456789', NULL, NULL, '2024-04-21 18:07:23', '2024-04-21 18:07:23'),
(2, 'akbarka@mail.ru', '@lil_akbar', 'testqwerty', NULL, NULL, '2024-04-21 18:09:01', '2024-04-21 18:09:01'),
(3, 'umid@mail.ru', '@umid', '$2b$10$amztLKOGaVMhjXJyXAoQE.n1XPuRxS8agGyhDL5sao0KYzMqU1RGy', NULL, NULL, '2024-04-21 18:21:44', '2024-04-21 18:21:44');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
