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
 * @interface RegistrationPolicyExtV1
 */
export interface RegistrationPolicyExtV1 {
    /**
     *
     * @type {string}
     * @memberof RegistrationPolicyExtV1
     */
    accountId: string;
    /**
     *
     * @type {boolean}
     * @memberof RegistrationPolicyExtV1
     */
    enabled: boolean;
    /**
     *
     * @type {number}
     * @memberof RegistrationPolicyExtV1
     */
    policyId: number;
    /**
     *
     * @type {Array<string>}
     * @memberof RegistrationPolicyExtV1
     */
    regions: Array<string>;
    /**
     *
     * @type {string}
     * @memberof RegistrationPolicyExtV1
     */
    severity: string;
    /**
     *
     * @type {boolean}
     * @memberof RegistrationPolicyExtV1
     */
    tagExcluded: boolean;
}

/**
 * Check if a given object implements the RegistrationPolicyExtV1 interface.
 */
export function instanceOfRegistrationPolicyExtV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "policyId" in value;
    isInstance = isInstance && "regions" in value;
    isInstance = isInstance && "severity" in value;
    isInstance = isInstance && "tagExcluded" in value;

    return isInstance;
}

export function RegistrationPolicyExtV1FromJSON(json: any): RegistrationPolicyExtV1 {
    return RegistrationPolicyExtV1FromJSONTyped(json, false);
}

export function RegistrationPolicyExtV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationPolicyExtV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        accountId: json["account_id"],
        enabled: json["enabled"],
        policyId: json["policy_id"],
        regions: json["regions"],
        severity: json["severity"],
        tagExcluded: json["tag_excluded"],
    };
}

export function RegistrationPolicyExtV1ToJSON(value?: RegistrationPolicyExtV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        account_id: value.accountId,
        enabled: value.enabled,
        policy_id: value.policyId,
        regions: value.regions,
        severity: value.severity,
        tag_excluded: value.tagExcluded,
    };
}
