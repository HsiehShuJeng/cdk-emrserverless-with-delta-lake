import json
from typing import List

import boto3
from botocore.exceptions import ClientError, ParamValidationError


def lambda_handler(event, context):
    print(json.dumps(event, indent=4))
    request_type = event["RequestType"]
    props = event["ResourceProperties"]
    vpc_id: str = props.get('VpcId')
    subnet_ids: List[str] = props.get('SubnetIds').split(',')
    resources_list = [vpc_id] + subnet_ids
    ec2_client = boto3.client('ec2')
    if(request_type in ['Create']):
        try:
            response = ec2_client.create_tags(
                Resources=resources_list,
                Tags=[
                    {
                        'Key': 'for-use-with-amazon-emr-managed-policies',
                        'Value': 'true'
                    }
                ]
            )
            metadata = response.get('ResponseMetadata')
            status_code = metadata.get('HTTPStatusCode')
            print(f'HTTP status code: {status_code}')
            if status_code == 200:
                resources = ','.join(resources_list)
                tag_value = json.dumps({
                    'Key': 'for-use-with-amazon-emr-managed-policies',
                    'Value': 'true'
                }, indent=4)
                print(f'{resources} has been added {tag_value}')
        except ClientError as e:
            print(f'Unexpected error: {e}')
        except ParamValidationError as e:
            print(f'Parameter validation error: {e}')
    if(request_type == 'Delete'):
        try:
            response = ec2_client.delete_tags(
                Resources=resources_list,
                Tags=[
                    {
                        'Key': 'for-use-with-amazon-emr-managed-policies',
                        'Value': 'true'
                    }
                ]
            )
            metadata = response.get('ResponseMetadata')
            status_code = metadata.get('HTTPStatusCode')
            print(f'HTTP status code: {status_code}')
            if status_code == 200:
                resources = ','.join(resources_list)
                tag_value = json.dumps({
                    'Key': 'for-use-with-amazon-emr-managed-policies',
                    'Value': 'true'
                }, indent=4)
                print(f'{resources} has been removed {tag_value}')
        except ClientError as e:
            print(f'Unexpected error: {e}')
        except ParamValidationError as e:
            print(f'Parameter validation error: {e}')
