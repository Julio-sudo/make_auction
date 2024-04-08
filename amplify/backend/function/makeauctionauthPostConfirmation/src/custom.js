const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const ddbClient = new DynamoDBClient({ region: "us-east-1" }); 

exports.handler = async (event, context) => {
  console.log(JSON.stringify(event, null, 2));

  const date = new Date();

  if (event.request.userAttributes.sub) {
    const params = {
      TableName: process.env.USERTABLE,
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: 'User' },
        username: { S: event.request.userAttributes.preferred_username},
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      }
    };

    const command = new PutItemCommand(params);

    try {
      const data = await ddbClient.send(command);
      console.log("Success", data);
    } catch (error) {
      console.error("Error", error);
      
    }
  } else {
    console.error("Error: No user data available to add to DynamoDB");
    // Depending on the function's behavior, you may handle the error or complete the function execution
  }
};
