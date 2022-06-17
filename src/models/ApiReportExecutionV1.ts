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
import { ApiExecutionMetadataV1, ApiExecutionMetadataV1FromJSON, ApiExecutionMetadataV1FromJSONTyped, ApiExecutionMetadataV1ToJSON } from "./ApiExecutionMetadataV1";
import { DomainResultMetadata, DomainResultMetadataFromJSON, DomainResultMetadataFromJSONTyped, DomainResultMetadataToJSON } from "./DomainResultMetadata";

/**
 *
 * @export
 * @interface ApiReportExecutionV1
 */
export interface ApiReportExecutionV1 {
    /**
     *
     * @type {boolean}
     * @memberof ApiReportExecutionV1
     */
    canWrite?: boolean;
    /**
     *
     * @type {Date}
     * @memberof ApiReportExecutionV1
     */
    createdOn: Date;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    customerId: string;
    /**
     *
     * @type {ApiExecutionMetadataV1}
     * @memberof ApiReportExecutionV1
     */
    executionMetadata?: ApiExecutionMetadataV1;
    /**
     *
     * @type {Date}
     * @memberof ApiReportExecutionV1
     */
    expirationOn: Date;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    jobReference?: string;
    /**
     *
     * @type {Date}
     * @memberof ApiReportExecutionV1
     */
    lastUpdatedOn: Date;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    reportFileReference?: string;
    /**
     *
     * @type {DomainResultMetadata}
     * @memberof ApiReportExecutionV1
     */
    resultMetadata?: DomainResultMetadata;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    scheduledReportId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiReportExecutionV1
     */
    sharedWith: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    statusDisplay: string;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    statusMsg: string;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    tracking?: string;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    triggerReference?: string;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof ApiReportExecutionV1
     */
    userUuid: string;
}

/**
 * Check if a given object implements the ApiReportExecutionV1 interface.
 */
export function instanceOfApiReportExecutionV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdOn" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "expirationOn" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "lastUpdatedOn" in value;
    isInstance = isInstance && "scheduledReportId" in value;
    isInstance = isInstance && "sharedWith" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "statusDisplay" in value;
    isInstance = isInstance && "statusMsg" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "userUuid" in value;

    return isInstance;
}

export function ApiReportExecutionV1FromJSON(json: any): ApiReportExecutionV1 {
    return ApiReportExecutionV1FromJSONTyped(json, false);
}

export function ApiReportExecutionV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiReportExecutionV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        canWrite: !exists(json, "can_write") ? undefined : json["can_write"],
        createdOn: new Date(json["created_on"]),
        customerId: json["customer_id"],
        executionMetadata: !exists(json, "execution_metadata") ? undefined : ApiExecutionMetadataV1FromJSON(json["execution_metadata"]),
        expirationOn: new Date(json["expiration_on"]),
        id: json["id"],
        jobReference: !exists(json, "job_reference") ? undefined : json["job_reference"],
        lastUpdatedOn: new Date(json["last_updated_on"]),
        reportFileReference: !exists(json, "report_file_reference") ? undefined : json["report_file_reference"],
        resultMetadata: !exists(json, "result_metadata") ? undefined : DomainResultMetadataFromJSON(json["result_metadata"]),
        scheduledReportId: json["scheduled_report_id"],
        sharedWith: json["shared_with"],
        status: json["status"],
        statusDisplay: json["status_display"],
        statusMsg: json["status_msg"],
        tracking: !exists(json, "tracking") ? undefined : json["tracking"],
        triggerReference: !exists(json, "trigger_reference") ? undefined : json["trigger_reference"],
        type: json["type"],
        userId: json["user_id"],
        userUuid: json["user_uuid"],
    };
}

export function ApiReportExecutionV1ToJSON(value?: ApiReportExecutionV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        can_write: value.canWrite,
        created_on: value.createdOn.toISOString(),
        customer_id: value.customerId,
        execution_metadata: ApiExecutionMetadataV1ToJSON(value.executionMetadata),
        expiration_on: value.expirationOn.toISOString(),
        id: value.id,
        job_reference: value.jobReference,
        last_updated_on: value.lastUpdatedOn.toISOString(),
        report_file_reference: value.reportFileReference,
        result_metadata: DomainResultMetadataToJSON(value.resultMetadata),
        scheduled_report_id: value.scheduledReportId,
        shared_with: value.sharedWith,
        status: value.status,
        status_display: value.statusDisplay,
        status_msg: value.statusMsg,
        tracking: value.tracking,
        trigger_reference: value.triggerReference,
        type: value.type,
        user_id: value.userId,
        user_uuid: value.userUuid,
    };
}
