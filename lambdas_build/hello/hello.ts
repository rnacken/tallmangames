import { APIGatewayProxyEvent, APIGatewayProxyCallback } from "aws-lambda";

exports.handler = async (
  event: APIGatewayProxyEvent,
  context: any,
  callback: APIGatewayProxyCallback
) => {
  // Do some stuff here
  return {
    statusCode: 200,
    body: "hello " + event.queryStringParameters.name,
  };
};
