CREATE USER 'user'@'%' IDENTIFIED BY 'P_ssw0rd';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%';
GRANT CREATE, DROP ON *.* TO 'user'@'%';
FLUSH PRIVILEGES;