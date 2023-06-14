-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2023 at 06:21 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apex`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `details` text NOT NULL,
  `photo` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`id`, `title`, `details`, `photo`, `number`) VALUES
(1, 'Building Construction mahmud', 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos', '34594764009c63142ff7a735983c138f.jpg', ''),
(2, 'Mechanical', 'Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet', 'fact-2.jpg', '2'),
(3, 'Architecture', 'Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet', 'fact-3.jpg', '3'),
(4, 'Interior Design', 'Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet', 'fact-4.jpg', '4');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `services` text NOT NULL,
  `massage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `name`, `email`, `phone`, `services`, `massage`) VALUES
(1, 'mahmud', 'mahmud@gmail.com', '01245587', 'lkjgbkjfgb', 'kljgkljjgf'),
(2, 'Md.Mahmudun nabi', 'mahmudunnabi140@gmail.com', '01759526830', 'trrtrt', 'fggffgfg'),
(3, 'Mahmud', 'mahmudunnabi140@gmail.com', '+8801759526830', 'bilding constraction', 'hi');

-- --------------------------------------------------------

--
-- Table structure for table `choose_us`
--

CREATE TABLE `choose_us` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `choose_us`
--

INSERT INTO `choose_us` (`id`, `title`, `details`) VALUES
(1, ' Large number of services provided', 'Magna sea eos sit dolor, ipsum amet ipsum lorem diam'),
(2, '25+ years of professional experience', 'Magna sea eos sit dolor, ipsum amet ipsum lorem diam'),
(3, 'A large number of grateful customers', 'Magna sea eos sit dolor, ipsum amet ipsum lorem diam'),
(4, 'Magna sea eos sit dolor, ipsum amet ipsum lorem diam', 'Magna sea eos sit dolor, ipsum amet ipsum lorem diam');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `subject` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `id` int(11) NOT NULL,
  `massage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `msg`
--

CREATE TABLE `msg` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` text NOT NULL,
  `massage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `msg`
--

INSERT INTO `msg` (`id`, `name`, `email`, `subject`, `massage`) VALUES
(1, 'mahmud', 'mahmud@gmail.com', 'hi', 'this is for test'),
(2, 'mahbub', 'mahbub@gmail.com', 'i nead your help', 'test'),
(3, 'mahbub', 'mahmudunnabi140@gmail.com', 'hellow', 'hi');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `photo` varchar(150) NOT NULL,
  `title` varchar(255) NOT NULL,
  `details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `photo`, `title`, `details`) VALUES
(1, 'service-1.jpg', 'Building Construction', 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos'),
(2, 'service-2.jpg', 'Home Maintainance', 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos'),
(3, 'service-3.jpg', 'Renovation and Painting', 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos'),
(4, 'service-4.jpg', 'Wiring and installation', 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos'),
(5, 'service-5.jpg', 'Tiling and Painting', 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos'),
(6, 'service-6.jpg', 'Interior Design', 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `photo` varchar(150) NOT NULL,
  `name` varchar(150) NOT NULL,
  `title` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `photo`, `name`, `title`) VALUES
(1, 'team-1.jpg', 'Md.Asfaqur', 'Engineer'),
(2, 'team-2.jpg', 'Md.Mahbud', 'Engineer'),
(3, 'team-3.jpg', 'Md.Maksud', 'Engineer');

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `id` int(11) NOT NULL,
  `details` text NOT NULL,
  `name` varchar(150) NOT NULL,
  `profetion` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testimonial`
--

INSERT INTO `testimonial` (`id`, `details`, `name`, `profetion`, `photo`) VALUES
(2, '  Dolores sed duo clita tempor justo dolor et stet lorem kasd                                 labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy                                 et labore et tempor diam tempor erat.', 'Md.maruf', 'Enginer', '318d0cf9dadd1a0493b3525666b0789f.jpg'),
(3, '    Dolores sed duo clita tempor justo dolor et stet lorem kasd                                 labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy                                 et labore et tempor diam tempor erat.', 'Md.Alamin', 'Enginier', '991d1c60f3d6334af326a037cb440cb3.jpg'),
(5, 'Business may offer to many differing activitie, such as the activity of buying or selling in trade. Business activity [....]', 'Md.Mahmudun nabi', 'Web devloper', '49c8889a2512986892c99ba787638324.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'mahmud', 'mahmudunnabi140@gmail.com', '01759526830');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `choose_us`
--
ALTER TABLE `choose_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `msg`
--
ALTER TABLE `msg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `choose_us`
--
ALTER TABLE `choose_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `msg`
--
ALTER TABLE `msg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
