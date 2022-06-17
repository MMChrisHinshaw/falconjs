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
import { FalconxMetaInfo, FalconxMetaInfoFromJSON, FalconxMetaInfoFromJSONTyped, FalconxMetaInfoToJSON } from "./FalconxMetaInfo";
import { FalconxSubmissionV1, FalconxSubmissionV1FromJSON, FalconxSubmissionV1FromJSONTyped, FalconxSubmissionV1ToJSON } from "./FalconxSubmissionV1";
import { MsaAPIError, MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";

/**
 *
 * @export
 * @interface FalconxSubmissionV1Response
 */
export interface FalconxSubmissionV1Response {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof FalconxSubmissionV1Response
     */
    errors: Array<MsaAPIError>;
    /**
     *
     * @type {FalconxMetaInfo}
     * @memberof FalconxSubmissionV1Response
     */
    meta: FalconxMetaInfo;
    /**
     *
     * @type {Array<FalconxSubmissionV1>}
     * @memberof FalconxSubmissionV1Response
     */
    resources: Array<FalconxSubmissionV1>;
}

/**
 * Check if a given object implements the FalconxSubmissionV1Response interface.
 */
export function instanceOfFalconxSubmissionV1Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function FalconxSubmissionV1ResponseFromJSON(json: any): FalconxSubmissionV1Response {
    return FalconxSubmissionV1ResponseFromJSONTyped(json, false);
}

export function FalconxSubmissionV1ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxSubmissionV1Response {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: FalconxMetaInfoFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(FalconxSubmissionV1FromJSON),
    };
}

export function FalconxSubmissionV1ResponseToJSON(value?: FalconxSubmissionV1Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        meta: FalconxMetaInfoToJSON(value.meta),
        resources: (value.resources as Array<any>).map(FalconxSubmissionV1ToJSON),
    };
}
