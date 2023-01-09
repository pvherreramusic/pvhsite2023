const bucket = new Bucket(stack, "Uploads");
import { Table } from "@serverless-stack/resources";
import { Bucket, Table } from "@serverless-stack/resources";


export function StorageStack({ stack, app }) {
  // Create the DynamoDB table
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
