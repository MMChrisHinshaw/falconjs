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
import { ApiRuleUpdateV1, ApiRuleUpdateV1FromJSON, ApiRuleUpdateV1FromJSONTyped, ApiRuleUpdateV1ToJSON } from "./ApiRuleUpdateV1";

/**
 *
 * @export
 * @interface ApiRuleUpdatesRequestV1
 */
export interface ApiRuleUpdatesRequestV1 {
    /**
     *
     * @type {string}
     * @memberof ApiRuleUpdatesRequestV1
     */
    comment: string;
    /**
     *
     * @type {Array<ApiRuleUpdateV1>}
     * @memberof ApiRuleUpdatesRequestV1
     */
    ruleUpdates: Array<ApiRuleUpdateV1>;
    /**
     *
     * @type {string}
     * @memberof ApiRuleUpdatesRequestV1
     */
    rulegroupId: string;
    /**
     *
     * @type {number}
     * @memberof ApiRuleUpdatesRequestV1
     */
    rulegroupVersion: number;
}

/**
 * Check if a given object implements the ApiRuleUpdatesRequestV1 interface.
 */
export function instanceOfApiRuleUpdatesRequestV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "comment" in value;
    isInstance = isInstance && "ruleUpdates" in value;
    isInstance = isInstance && "rulegroupId" in value;
    isInstance = isInstance && "rulegroupVersion" in value;

    return isInstance;
}

export function ApiRuleUpdatesRequestV1FromJSON(json: any): ApiRuleUpdatesRequestV1 {
    return ApiRuleUpdatesRequestV1FromJSONTyped(json, false);
}

export function ApiRuleUpdatesRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiRuleUpdatesRequestV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        comment: json["comment"],
        ruleUpdates: (json["rule_updates"] as Array<any>).map(ApiRuleUpdateV1FromJSON),
        rulegroupId: json["rulegroup_id"],
        rulegroupVersion: json["rulegroup_version"],
    };
}

export function ApiRuleUpdatesRequestV1ToJSON(value?: ApiRuleUpdatesRequestV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        comment: value.comment,
        rule_updates: (value.ruleUpdates as Array<any>).map(ApiRuleUpdateV1ToJSON),
        rulegroup_id: value.rulegroupId,
        rulegroup_version: value.rulegroupVersion,
    };
}
