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
 * @interface ApiCustomerSettingsResourceV1
 */
export interface ApiCustomerSettingsResourceV1 {
    /**
     *
     * @type {number}
     * @memberof ApiCustomerSettingsResourceV1
     */
    maxActiveTokens?: number;
    /**
     *
     * @type {boolean}
     * @memberof ApiCustomerSettingsResourceV1
     */
    tokensRequired: boolean;
}

/**
 * Check if a given object implements the ApiCustomerSettingsResourceV1 interface.
 */
export function instanceOfApiCustomerSettingsResourceV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tokensRequired" in value;

    return isInstance;
}

export function ApiCustomerSettingsResourceV1FromJSON(json: any): ApiCustomerSettingsResourceV1 {
    return ApiCustomerSettingsResourceV1FromJSONTyped(json, false);
}

export function ApiCustomerSettingsResourceV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCustomerSettingsResourceV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        maxActiveTokens: !exists(json, "max_active_tokens") ? undefined : json["max_active_tokens"],
        tokensRequired: json["tokens_required"],
    };
}

export function ApiCustomerSettingsResourceV1ToJSON(value?: ApiCustomerSettingsResourceV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        max_active_tokens: value.maxActiveTokens,
        tokens_required: value.tokensRequired,
    };
}
