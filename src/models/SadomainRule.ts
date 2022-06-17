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
 * @interface SadomainRule
 */
export interface SadomainRule {
    /**
     *
     * @type {string}
     * @memberof SadomainRule
     */
    cid: string;
    /**
     * The creation time for a given rule
     * @type {Date}
     * @memberof SadomainRule
     */
    createdTimestamp: Date;
    /**
     * The FQL filter contained in a rule and used for searching
     * @type {string}
     * @memberof SadomainRule
     */
    filter: string;
    /**
     * The ID of a given rule
     * @type {string}
     * @memberof SadomainRule
     */
    id: string;
    /**
     * The name for a given rule
     * @type {string}
     * @memberof SadomainRule
     */
    name: string;
    /**
     * The permissions of a given rule
     * @type {string}
     * @memberof SadomainRule
     */
    permissions: string;
    /**
     * The priority of a given rule
     * @type {string}
     * @memberof SadomainRule
     */
    priority: string;
    /**
     * The status of a rule
     * @type {string}
     * @memberof SadomainRule
     */
    status: string;
    /**
     * The detailed status message
     * @type {string}
     * @memberof SadomainRule
     */
    statusMessage?: string;
    /**
     * The topic of a given rule
     * @type {string}
     * @memberof SadomainRule
     */
    topic: string;
    /**
     * The last updated time for a given rule
     * @type {Date}
     * @memberof SadomainRule
     */
    updatedTimestamp: Date;
    /**
     * The user ID of the user that created a given rule
     * @type {string}
     * @memberof SadomainRule
     */
    userId?: string;
    /**
     * The user name of the user that created a given rule
     * @type {string}
     * @memberof SadomainRule
     */
    userName?: string;
    /**
     * The UUID of the user that created a given rule
     * @type {string}
     * @memberof SadomainRule
     */
    userUuid: string;
}

/**
 * Check if a given object implements the SadomainRule interface.
 */
export function instanceOfSadomainRule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "createdTimestamp" in value;
    isInstance = isInstance && "filter" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "permissions" in value;
    isInstance = isInstance && "priority" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "topic" in value;
    isInstance = isInstance && "updatedTimestamp" in value;
    isInstance = isInstance && "userUuid" in value;

    return isInstance;
}

export function SadomainRuleFromJSON(json: any): SadomainRule {
    return SadomainRuleFromJSONTyped(json, false);
}

export function SadomainRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): SadomainRule {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cid: json["cid"],
        createdTimestamp: new Date(json["created_timestamp"]),
        filter: json["filter"],
        id: json["id"],
        name: json["name"],
        permissions: json["permissions"],
        priority: json["priority"],
        status: json["status"],
        statusMessage: !exists(json, "status_message") ? undefined : json["status_message"],
        topic: json["topic"],
        updatedTimestamp: new Date(json["updated_timestamp"]),
        userId: !exists(json, "user_id") ? undefined : json["user_id"],
        userName: !exists(json, "user_name") ? undefined : json["user_name"],
        userUuid: json["user_uuid"],
    };
}

export function SadomainRuleToJSON(value?: SadomainRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        cid: value.cid,
        created_timestamp: value.createdTimestamp.toISOString(),
        filter: value.filter,
        id: value.id,
        name: value.name,
        permissions: value.permissions,
        priority: value.priority,
        status: value.status,
        status_message: value.statusMessage,
        topic: value.topic,
        updated_timestamp: value.updatedTimestamp.toISOString(),
        user_id: value.userId,
        user_name: value.userName,
        user_uuid: value.userUuid,
    };
}
