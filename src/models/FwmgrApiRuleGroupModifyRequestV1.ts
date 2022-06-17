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
import { FwmgrApiJsonDiff, FwmgrApiJsonDiffFromJSON, FwmgrApiJsonDiffFromJSONTyped, FwmgrApiJsonDiffToJSON } from "./FwmgrApiJsonDiff";

/**
 *
 * @export
 * @interface FwmgrApiRuleGroupModifyRequestV1
 */
export interface FwmgrApiRuleGroupModifyRequestV1 {
    /**
     *
     * @type {Array<FwmgrApiJsonDiff>}
     * @memberof FwmgrApiRuleGroupModifyRequestV1
     */
    diffOperations: Array<FwmgrApiJsonDiff>;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupModifyRequestV1
     */
    diffType: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupModifyRequestV1
     */
    id: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FwmgrApiRuleGroupModifyRequestV1
     */
    ruleIds: Array<string>;
    /**
     *
     * @type {Array<number>}
     * @memberof FwmgrApiRuleGroupModifyRequestV1
     */
    ruleVersions: Array<number>;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiRuleGroupModifyRequestV1
     */
    tracking: string;
}

/**
 * Check if a given object implements the FwmgrApiRuleGroupModifyRequestV1 interface.
 */
export function instanceOfFwmgrApiRuleGroupModifyRequestV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "diffOperations" in value;
    isInstance = isInstance && "diffType" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "ruleIds" in value;
    isInstance = isInstance && "ruleVersions" in value;
    isInstance = isInstance && "tracking" in value;

    return isInstance;
}

export function FwmgrApiRuleGroupModifyRequestV1FromJSON(json: any): FwmgrApiRuleGroupModifyRequestV1 {
    return FwmgrApiRuleGroupModifyRequestV1FromJSONTyped(json, false);
}

export function FwmgrApiRuleGroupModifyRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrApiRuleGroupModifyRequestV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        diffOperations: (json["diff_operations"] as Array<any>).map(FwmgrApiJsonDiffFromJSON),
        diffType: json["diff_type"],
        id: json["id"],
        ruleIds: json["rule_ids"],
        ruleVersions: json["rule_versions"],
        tracking: json["tracking"],
    };
}

export function FwmgrApiRuleGroupModifyRequestV1ToJSON(value?: FwmgrApiRuleGroupModifyRequestV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        diff_operations: (value.diffOperations as Array<any>).map(FwmgrApiJsonDiffToJSON),
        diff_type: value.diffType,
        id: value.id,
        rule_ids: value.ruleIds,
        rule_versions: value.ruleVersions,
        tracking: value.tracking,
    };
}
