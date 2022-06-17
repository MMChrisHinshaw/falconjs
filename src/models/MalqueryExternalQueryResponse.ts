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
import { MalqueryExternalResource, MalqueryExternalResourceFromJSON, MalqueryExternalResourceFromJSONTyped, MalqueryExternalResourceToJSON } from "./MalqueryExternalResource";
import { MalqueryQueryError, MalqueryQueryErrorFromJSON, MalqueryQueryErrorFromJSONTyped, MalqueryQueryErrorToJSON } from "./MalqueryQueryError";
import { MalqueryQueryMetaInfo, MalqueryQueryMetaInfoFromJSON, MalqueryQueryMetaInfoFromJSONTyped, MalqueryQueryMetaInfoToJSON } from "./MalqueryQueryMetaInfo";

/**
 *
 * @export
 * @interface MalqueryExternalQueryResponse
 */
export interface MalqueryExternalQueryResponse {
    /**
     * Query errors
     * @type {Array<MalqueryQueryError>}
     * @memberof MalqueryExternalQueryResponse
     */
    errors?: Array<MalqueryQueryError>;
    /**
     *
     * @type {MalqueryQueryMetaInfo}
     * @memberof MalqueryExternalQueryResponse
     */
    meta: MalqueryQueryMetaInfo;
    /**
     * Query results
     * @type {Array<MalqueryExternalResource>}
     * @memberof MalqueryExternalQueryResponse
     */
    resources: Array<MalqueryExternalResource>;
}

/**
 * Check if a given object implements the MalqueryExternalQueryResponse interface.
 */
export function instanceOfMalqueryExternalQueryResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function MalqueryExternalQueryResponseFromJSON(json: any): MalqueryExternalQueryResponse {
    return MalqueryExternalQueryResponseFromJSONTyped(json, false);
}

export function MalqueryExternalQueryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MalqueryExternalQueryResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: !exists(json, "errors") ? undefined : (json["errors"] as Array<any>).map(MalqueryQueryErrorFromJSON),
        meta: MalqueryQueryMetaInfoFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(MalqueryExternalResourceFromJSON),
    };
}

export function MalqueryExternalQueryResponseToJSON(value?: MalqueryExternalQueryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: value.errors === undefined ? undefined : (value.errors as Array<any>).map(MalqueryQueryErrorToJSON),
        meta: MalqueryQueryMetaInfoToJSON(value.meta),
        resources: (value.resources as Array<any>).map(MalqueryExternalResourceToJSON),
    };
}
