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
import { ExternalDiff, ExternalDiffFromJSON, ExternalDiffFromJSONTyped, ExternalDiffToJSON } from "./ExternalDiff";
import { ExternalHost, ExternalHostFromJSON, ExternalHostFromJSONTyped, ExternalHostToJSON } from "./ExternalHost";
import { ExternalPolicy, ExternalPolicyFromJSON, ExternalPolicyFromJSONTyped, ExternalPolicyToJSON } from "./ExternalPolicy";

/**
 *
 * @export
 * @interface ExternalChange
 */
export interface ExternalChange {
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    actionTimestamp: string;
    /**
     * Possible values: UNKNOWN, CREATE, WRITE, DELETE, SET, RENAME.
     * @type {string}
     * @memberof ExternalChange
     */
    actionType: string;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    aid: string;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    commandLine: string;
    /**
     *
     * @type {ExternalDiff}
     * @memberof ExternalChange
     */
    diff?: ExternalDiff;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    entityPath: string;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    entityPathNew?: string;
    /**
     * Possible values: UNKNOWN, FILE, DIR, REGKEY,  REGVAL.
     * @type {string}
     * @memberof ExternalChange
     */
    entityType: string;
    /**
     *
     * @type {ExternalHost}
     * @memberof ExternalChange
     */
    host?: ExternalHost;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    ingestionTimestamp: string;
    /**
     *
     * @type {boolean}
     * @memberof ExternalChange
     */
    isSuppressed: boolean;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    platformName: string;
    /**
     *
     * @type {ExternalPolicy}
     * @memberof ExternalChange
     */
    policy?: ExternalPolicy;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    processId: string;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    processImageFileName: string;
    /**
     * Possible values: UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL
     * @type {string}
     * @memberof ExternalChange
     */
    severity: string;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof ExternalChange
     */
    userName: string;
}

/**
 * Check if a given object implements the ExternalChange interface.
 */
export function instanceOfExternalChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "actionTimestamp" in value;
    isInstance = isInstance && "actionType" in value;
    isInstance = isInstance && "aid" in value;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "commandLine" in value;
    isInstance = isInstance && "entityPath" in value;
    isInstance = isInstance && "entityType" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "ingestionTimestamp" in value;
    isInstance = isInstance && "isSuppressed" in value;
    isInstance = isInstance && "platformName" in value;
    isInstance = isInstance && "processId" in value;
    isInstance = isInstance && "processImageFileName" in value;
    isInstance = isInstance && "severity" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "userName" in value;

    return isInstance;
}

export function ExternalChangeFromJSON(json: any): ExternalChange {
    return ExternalChangeFromJSONTyped(json, false);
}

export function ExternalChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalChange {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        actionTimestamp: json["action_timestamp"],
        actionType: json["action_type"],
        aid: json["aid"],
        cid: json["cid"],
        commandLine: json["command_line"],
        diff: !exists(json, "diff") ? undefined : ExternalDiffFromJSON(json["diff"]),
        entityPath: json["entity_path"],
        entityPathNew: !exists(json, "entity_path_new") ? undefined : json["entity_path_new"],
        entityType: json["entity_type"],
        host: !exists(json, "host") ? undefined : ExternalHostFromJSON(json["host"]),
        id: json["id"],
        ingestionTimestamp: json["ingestion_timestamp"],
        isSuppressed: json["is_suppressed"],
        platformName: json["platform_name"],
        policy: !exists(json, "policy") ? undefined : ExternalPolicyFromJSON(json["policy"]),
        processId: json["process_id"],
        processImageFileName: json["process_image_file_name"],
        severity: json["severity"],
        userId: json["user_id"],
        userName: json["user_name"],
    };
}

export function ExternalChangeToJSON(value?: ExternalChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        action_timestamp: value.actionTimestamp,
        action_type: value.actionType,
        aid: value.aid,
        cid: value.cid,
        command_line: value.commandLine,
        diff: ExternalDiffToJSON(value.diff),
        entity_path: value.entityPath,
        entity_path_new: value.entityPathNew,
        entity_type: value.entityType,
        host: ExternalHostToJSON(value.host),
        id: value.id,
        ingestion_timestamp: value.ingestionTimestamp,
        is_suppressed: value.isSuppressed,
        platform_name: value.platformName,
        policy: ExternalPolicyToJSON(value.policy),
        process_id: value.processId,
        process_image_file_name: value.processImageFileName,
        severity: value.severity,
        user_id: value.userId,
        user_name: value.userName,
    };
}
