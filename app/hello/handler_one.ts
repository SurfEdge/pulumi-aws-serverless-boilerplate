import * as aws from "@pulumi/aws";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import * as pulumi from "@pulumi/pulumi";

// Will be useful in the future tasks
let stack = pulumi.getStack();

export const handler: aws.lambda.EventHandler<APIGatewayProxyEvent, APIGatewayProxyResult> = async (event) => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            status: true,
            data: "Hello from Lambda! Pulumi is great! 🚀"
        }),
    };

};

export default handler;
