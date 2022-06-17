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
 * @interface RequestsMlExclusionCreateReqV1
 */
export interface RequestsMlExclusionCreateReqV1 {
    /**
     *
     * @type {string}
     * @memberof RequestsMlExclusionCreateReqV1
     */
    comment?: string;
    /**
     *
     * @type {Array<object>}
     * @memberof RequestsMlExclusionCreateReqV1
     */
    excludedFrom?: Array<object>;
    /**
     *
     * @type {Array<string>}
     * @memberof RequestsMlExclusionCreateReqV1
     */
    groups?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof RequestsMlExclusionCreateReqV1
     */
    value?: string;
}

/**
 * Check if a given object implements the RequestsMlExclusionCreateReqV1 interface.
 */
export function instanceOfRequestsMlExclusionCreateReqV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequestsMlExclusionCreateReqV1FromJSON(json: any): RequestsMlExclusionCreateReqV1 {
    return RequestsMlExclusionCreateReqV1FromJSONTyped(json, false);
}

export function RequestsMlExclusionCreateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestsMlExclusionCreateReqV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        comment: !exists(json, "comment") ? undefined : json["comment"],
        excludedFrom: !exists(json, "excluded_from") ? undefined : json["excluded_from"],
        groups: !exists(json, "groups") ? undefined : json["groups"],
        value: !exists(json, "value") ? undefined : json["value"],
    };
}

export function RequestsMlExclusionCreateReqV1ToJSON(value?: RequestsMlExclusionCreateReqV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        comment: value.comment,
        excluded_from: value.excludedFrom,
        groups: value.groups,
        value: value.value,
    };
}
