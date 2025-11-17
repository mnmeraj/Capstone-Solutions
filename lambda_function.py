import json
import os
import mysql.connector
from mysql.connector import Error
import boto3

# the code is for the backend lambda function and it connects the lambda to the sql database
# using an external environment for security purposes as the credentials won't be seen in the code
def lambda_handler(event, context):
    try:
        body = json.loads(event['body'])

        connection = mysql.connector.connect(
            host=os.environ['DB_Host'],
            user=os.environ['DB_User'],
            password=os.environ['DB_Pw'],
            database=os.environ['DB_Name']
        )

        cursor = connection.cursor()

        insert_query = """
        INSERT INTO Submissions (First_Name, Last_Name, Email, Phone, Message)
        VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(insert_query, (
            body['First_Name'], 
            body['Last_Name'],
            body['Email'],
            body['Phone'], 
            body['Message']))
        connection.commit()

        cursor.close()
        connection.close()

# the boto3 client is for the sns client as it is in the aws kit for python
# its purpose is for the api interactions and task automation
# the code itself is to create the message (also utilizes the os environment)
        sns = boto3.client('sns')

        sns.publish(
            TopicArn=os.environ['SNS_Topic_Arn'],
            Subject="New Customer Inquiry Submitted",
            Message=(
                "A new customer inquiry has been received:\n\n"
                f"First Name: {body['First_Name']}\n"
                f"Last Name: {body['Last_Name']}\n"
                f"Email: {body['Email']}\n"
                f"Phone: {body['Phone']}\n"
                f"Message:\n{body['Message']}\n"
            )
        )

#the code is to help make sure the backend is running sufficiently
#when conducting deployment tests, there should be a message for success or an error saying what is wrong.
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Customer Inquiry saved successfully!'})
        }

    except Error as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': f'Database connection failed: {str(e)}'})
        }

