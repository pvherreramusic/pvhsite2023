import { Bucket, Table } from "@serverless-stack/resources";


export function StorageStack({ stack, app }) {
  // Create the DynamoDB table
  const bucket = new Bucket(stack, "Uploads", {
    cors: [
      {
        maxAge: "1 day",
        allowedOrigins: ["*"],
        allowedHeaders: ["*"],
        allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
      },
    ],
  });
  const table = new Table(stack, "Links", {
    fields: {
      userId: "string",
      linkId: "string",
      
    },
    primaryIndex: { partitionKey: "userId", sortKey: "linkId" },
  });

  return {
    table,
    bucket,
  };
}
