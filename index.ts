import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

import * as hello from "./app/hello/index";

let stack = pulumi.getStack();

// This will make life easier to find resources
const API_VERSION = 1;
const PROJ_KEY = "changethis-" + stack + "-";

// Create API GATEWAY
const my_api = new awsx.apigateway.API(PROJ_KEY + "users", {
    routes: [
        {
            path: "/hello",
            method: "GET",
            eventHandler: hello.handler_one
        }
    ],
    stageName: "v" + API_VERSION,
    stageArgs: {
        cacheClusterEnabled: false,
        cacheClusterSize: "0.5",
        variables: {
        }
    },

});

export const my_api_url = my_api.url;
