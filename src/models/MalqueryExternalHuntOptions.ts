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
 * @interface MalqueryExternalHuntOptions
 */
export interface MalqueryExternalHuntOptions {
    /**
     * Limit results to files of certain types such as EMAIL, PCAP, PDF, PE32. Full list can be found in the documentation
     * @type {Array<string>}
     * @memberof MalqueryExternalHuntOptions
     */
    filterFiletypes?: Array<string>;
    /**
     * Specify a subset of metadata fields to return in the results. Possible values: sha256, md5, type, size, first_seen, label, family
     * @type {Array<string>}
     * @memberof MalqueryExternalHuntOptions
     */
    filterMeta?: Array<string>;
    /**
     * Maximum number of results to be returned
     * @type {number}
     * @memberof MalqueryExternalHuntOptions
     */
    limit?: number;
    /**
     * Limit results to files first seen before this date. The format is YYYY/MM/DD
     * @type {string}
     * @memberof MalqueryExternalHuntOptions
     */
    maxDate?: string;
    /**
     * Maximum file size. The value can be specified either in bytes or in multiples of KB/MB/GB. Examples: 128000, 1.3 KB, 8mb
     * @type {string}
     * @memberof MalqueryExternalHuntOptions
     */
    maxSize?: string;
    /**
     * Limit results to files first seen after this date. The format is YYYY/MM/DD
     * @type {string}
     * @memberof MalqueryExternalHuntOptions
     */
    minDate?: string;
    /**
     * Minimum file size. The value can be specified either in bytes or in multiples of KB/MB/GB. Examples: 128000, 1.3 KB, 8mb
     * @type {string}
     * @memberof MalqueryExternalHuntOptions
     */
    minSize?: string;
}

/**
 * Check if a given object implements the MalqueryExternalHuntOptions interface.
 */
export function instanceOfMalqueryExternalHuntOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MalqueryExternalHuntOptionsFromJSON(json: any): MalqueryExternalHuntOptions {
    return MalqueryExternalHuntOptionsFromJSONTyped(json, false);
}

export function MalqueryExternalHuntOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MalqueryExternalHuntOptions {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        filterFiletypes: !exists(json, "filter_filetypes") ? undefined : json["filter_filetypes"],
        filterMeta: !exists(json, "filter_meta") ? undefined : json["filter_meta"],
        limit: !exists(json, "limit") ? undefined : json["limit"],
        maxDate: !exists(json, "max_date") ? undefined : json["max_date"],
        maxSize: !exists(json, "max_size") ? undefined : json["max_size"],
        minDate: !exists(json, "min_date") ? undefined : json["min_date"],
        minSize: !exists(json, "min_size") ? undefined : json["min_size"],
    };
}

export function MalqueryExternalHuntOptionsToJSON(value?: MalqueryExternalHuntOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        filter_filetypes: value.filterFiletypes,
        filter_meta: value.filterMeta,
        limit: value.limit,
        max_date: value.maxDate,
        max_size: value.maxSize,
        min_date: value.minDate,
        min_size: value.minSize,
    };
}
