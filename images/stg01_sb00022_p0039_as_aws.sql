-- DMS CDC required permission
GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'sb00022_p0039_as_aws'@'172.30.%' IDENTIFIED BY 'password';
GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'sb00022_p0039_as_aws'@'172.21.%' IDENTIFIED BY 'password';
GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'sb00022_p0039_as_aws'@'172.26.%' IDENTIFIED BY 'password';
GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'sb00022_p0039_as_aws'@'10.144.8.0/255.255.248.0' IDENTIFIED BY 'password';

/*
如果 MySQL 版本低於 5.6.6，則需要給予 SUPER 權限，細節可參考以下 AWS 官方文件：
https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.Prerequisites
*/
-- GRANT SUPER ON *.* TO 'sb00022_p0039_as_aws'@'172.30.%' IDENTIFIED BY 'password';
-- GRANT SUPER ON *.* TO 'sb00022_p0039_as_aws'@'172.21.%' IDENTIFIED BY 'password';
-- GRANT SUPER ON *.* TO 'sb00022_p0039_as_aws'@'172.26.%' IDENTIFIED BY 'password';
-- GRANT SUPER ON *.* TO 'sb00022_p0039_as_aws'@'10.152.8.0/255.255.248.0' IDENTIFIED BY 'password';

-- For the AWS account named stg01
GRANT SELECT ON sb00022.* TO 'sb00022_p0039_as_aws'@'10.144.8.0/255.255.248.0';