const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient({region: 'us-west-2', apiVersion: '2019-04-29'});
console.log('Loading function');

exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  for (const { messageId, body } of event.Records) {
    console.log('SQS message %s: %j', messageId, body);
    const params = {
      TableName: 'answers',
      Item: JSON.parse(body)
    };

    await dynamoDb.update(params, function(err, data) {
      if (err) {
        console.error("[AWS_DOC_CLIENT] Error: ", err);
      } else {
        console.info("[AWS_DOC_CLIENT] Success: ", data);
      }
    }).promise();
  }
  return `Successfully processed ${event.Records.length} messages.`;
};
