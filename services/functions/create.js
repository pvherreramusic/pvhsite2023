import * as uuid from "uuid";
import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";



export const main = handler(async (event) => {  // Request body is passed in as a JSON encoded string in 'event.body'
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      // The attributes of the item to be created
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      linkId: uuid.v1(), // A unique uuid
      linkurl: data.linkurl, // Parsed from request body

    },
  };

  await dynamoDb.put(params);

  return params.Item;
});