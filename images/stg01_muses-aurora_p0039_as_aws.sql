-- DMS CDC required permission
GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'all_p0039_as_aws'@'10.128.8.0/255.255.248.0' IDENTIFIED BY 'all_p0039_as_aws';

-- For RDS named 'muses-aurora' in the AWS account named stg01
GRANT SELECT ON `muses`.* TO 'all_p0039_as_aws'@'10.128.8.0/255.255.248.0';
GRANT SELECT ON `ai_interview_tool`.* TO 'all_p0039_as_aws'@'10.128.8.0/255.255.248.0';
GRANT SELECT ON `highschool_ai_interview`.* TO 'all_p0039_as_aws'@'10.128.8.0/255.255.248.0';
GRANT SELECT ON `sprint_ai_interview`.* TO 'all_p0039_as_aws'@'10.128.8.0/255.255.248.0';
