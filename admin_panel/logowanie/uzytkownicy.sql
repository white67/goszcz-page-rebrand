SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS `uzytkownicy` (
`id` int(11) NOT NULL,
  `user` text COLLATE utf8_polish_ci NOT NULL,
  `pass` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;


INSERT INTO `uzytkownicy` (`id`, `user`, `pass`) VALUES
(1, 'admin', 'admin'),
(2, 'login', 'haslo'),
(3, 'grzes', 'slowik');


ALTER TABLE `uzytkownicy`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `id` (`id`);


ALTER TABLE `uzytkownicy`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;