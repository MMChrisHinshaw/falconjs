/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface ApiRuleGroupCreateRequestV1
 */
export interface ApiRuleGroupCreateRequestV1 {
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupCreateRequestV1
     */
    comment: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupCreateRequestV1
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupCreateRequestV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupCreateRequestV1
     */
    platform: string;
}

/**
 * Check if a given object implements the ApiRuleGroupCreateRequestV1 interface.
 */
export function instanceOfApiRuleGroupCreateRequestV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "comment" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "platform" in value;

    return isInstance;
}

export function ApiRuleGroupCreateRequestV1FromJSON(json: any): ApiRuleGroupCreateRequestV1 {
    return ApiRuleGroupCreateRequestV1FromJSONTyped(json, false);
}

export function ApiRuleGroupCreateRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiRuleGroupCreateRequestV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        comment: json["comment"],
        description: json["description"],
        name: json["name"],
        platform: json["platform"],
    };
}

export function ApiRuleGroupCreateRequestV1ToJSON(value?: ApiRuleGroupCreateRequestV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        comment: value.comment,
        description: value.description,
        name: value.name,
        platform: value.platform,
    };
}
