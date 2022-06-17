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
import { FwmgrApiQueryPaging, FwmgrApiQueryPagingFromJSON, FwmgrApiQueryPagingFromJSONTyped, FwmgrApiQueryPagingToJSON } from "./FwmgrApiQueryPaging";
import { FwmgrMsaResources, FwmgrMsaResourcesFromJSON, FwmgrMsaResourcesFromJSONTyped, FwmgrMsaResourcesToJSON } from "./FwmgrMsaResources";

/**
 *
 * @export
 * @interface FwmgrApiMetaInfo
 */
export interface FwmgrApiMetaInfo {
    /**
     *
     * @type {FwmgrApiQueryPaging}
     * @memberof FwmgrApiMetaInfo
     */
    pagination?: FwmgrApiQueryPaging;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiMetaInfo
     */
    poweredBy?: string;
    /**
     *
     * @type {number}
     * @memberof FwmgrApiMetaInfo
     */
    queryTime: number;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiMetaInfo
     */
    traceId: string;
    /**
     *
     * @type {FwmgrMsaResources}
     * @memberof FwmgrApiMetaInfo
     */
    writes?: FwmgrMsaResources;
}

/**
 * Check if a given object implements the FwmgrApiMetaInfo interface.
 */
export function instanceOfFwmgrApiMetaInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "queryTime" in value;
    isInstance = isInstance && "traceId" in value;

    return isInstance;
}

export function FwmgrApiMetaInfoFromJSON(json: any): FwmgrApiMetaInfo {
    return FwmgrApiMetaInfoFromJSONTyped(json, false);
}

export function FwmgrApiMetaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrApiMetaInfo {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        pagination: !exists(json, "pagination") ? undefined : FwmgrApiQueryPagingFromJSON(json["pagination"]),
        poweredBy: !exists(json, "powered_by") ? undefined : json["powered_by"],
        queryTime: json["query_time"],
        traceId: json["trace_id"],
        writes: !exists(json, "writes") ? undefined : FwmgrMsaResourcesFromJSON(json["writes"]),
    };
}

export function FwmgrApiMetaInfoToJSON(value?: FwmgrApiMetaInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        pagination: FwmgrApiQueryPagingToJSON(value.pagination),
        powered_by: value.poweredBy,
        query_time: value.queryTime,
        trace_id: value.traceId,
        writes: FwmgrMsaResourcesToJSON(value.writes),
    };
}
