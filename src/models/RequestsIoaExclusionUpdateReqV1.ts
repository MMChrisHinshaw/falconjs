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
 * @interface RequestsIoaExclusionUpdateReqV1
 */
export interface RequestsIoaExclusionUpdateReqV1 {
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionUpdateReqV1
     */
    clRegex: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionUpdateReqV1
     */
    comment?: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionUpdateReqV1
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionUpdateReqV1
     */
    detectionJson: string;
    /**
     *
     * @type {Array<string>}
     * @memberof RequestsIoaExclusionUpdateReqV1
     */
    groups: Array<string>;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionUpdateReqV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionUpdateReqV1
     */
    ifnRegex: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionUpdateReqV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionUpdateReqV1
     */
    patternId: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionUpdateReqV1
     */
    patternName: string;
}

/**
 * Check if a given object implements the RequestsIoaExclusionUpdateReqV1 interface.
 */
export function instanceOfRequestsIoaExclusionUpdateReqV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "clRegex" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "detectionJson" in value;
    isInstance = isInstance && "groups" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "ifnRegex" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "patternId" in value;
    isInstance = isInstance && "patternName" in value;

    return isInstance;
}

export function RequestsIoaExclusionUpdateReqV1FromJSON(json: any): RequestsIoaExclusionUpdateReqV1 {
    return RequestsIoaExclusionUpdateReqV1FromJSONTyped(json, false);
}

export function RequestsIoaExclusionUpdateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestsIoaExclusionUpdateReqV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        clRegex: json["cl_regex"],
        comment: !exists(json, "comment") ? undefined : json["comment"],
        description: json["description"],
        detectionJson: json["detection_json"],
        groups: json["groups"],
        id: json["id"],
        ifnRegex: json["ifn_regex"],
        name: json["name"],
        patternId: json["pattern_id"],
        patternName: json["pattern_name"],
    };
}

export function RequestsIoaExclusionUpdateReqV1ToJSON(value?: RequestsIoaExclusionUpdateReqV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        cl_regex: value.clRegex,
        comment: value.comment,
        description: value.description,
        detection_json: value.detectionJson,
        groups: value.groups,
        id: value.id,
        ifn_regex: value.ifnRegex,
        name: value.name,
        pattern_id: value.patternId,
        pattern_name: value.patternName,
    };
}
