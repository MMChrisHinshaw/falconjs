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
import {
    DomainCIDPolicyAssignmentsCisBenchmark,
    DomainCIDPolicyAssignmentsCisBenchmarkFromJSON,
    DomainCIDPolicyAssignmentsCisBenchmarkFromJSONTyped,
    DomainCIDPolicyAssignmentsCisBenchmarkToJSON,
} from "./DomainCIDPolicyAssignmentsCisBenchmark";
import {
    DomainCIDPolicyAssignmentsNistBenchmark,
    DomainCIDPolicyAssignmentsNistBenchmarkFromJSON,
    DomainCIDPolicyAssignmentsNistBenchmarkFromJSONTyped,
    DomainCIDPolicyAssignmentsNistBenchmarkToJSON,
} from "./DomainCIDPolicyAssignmentsNistBenchmark";
import {
    DomainCIDPolicyAssignmentsPciBenchmark,
    DomainCIDPolicyAssignmentsPciBenchmarkFromJSON,
    DomainCIDPolicyAssignmentsPciBenchmarkFromJSONTyped,
    DomainCIDPolicyAssignmentsPciBenchmarkToJSON,
} from "./DomainCIDPolicyAssignmentsPciBenchmark";
import {
    DomainCIDPolicyAssignmentsSoc2Benchmark,
    DomainCIDPolicyAssignmentsSoc2BenchmarkFromJSON,
    DomainCIDPolicyAssignmentsSoc2BenchmarkFromJSONTyped,
    DomainCIDPolicyAssignmentsSoc2BenchmarkToJSON,
} from "./DomainCIDPolicyAssignmentsSoc2Benchmark";
import {
    DomainPolicySettingByAccountAndRegion,
    DomainPolicySettingByAccountAndRegionFromJSON,
    DomainPolicySettingByAccountAndRegionFromJSONTyped,
    DomainPolicySettingByAccountAndRegionToJSON,
} from "./DomainPolicySettingByAccountAndRegion";

/**
 *
 * @export
 * @interface DomainCIDPolicyAssignments
 */
export interface DomainCIDPolicyAssignments {
    /**
     *
     * @type {string}
     * @memberof DomainCIDPolicyAssignments
     */
    cid?: string;
    /**
     *
     * @type {Array<DomainCIDPolicyAssignmentsCisBenchmark>}
     * @memberof DomainCIDPolicyAssignments
     */
    cisBenchmark?: Array<DomainCIDPolicyAssignmentsCisBenchmark>;
    /**
     *
     * @type {string}
     * @memberof DomainCIDPolicyAssignments
     */
    cloudAssetType?: string;
    /**
     *
     * @type {string}
     * @memberof DomainCIDPolicyAssignments
     */
    cloudService?: string;
    /**
     *
     * @type {string}
     * @memberof DomainCIDPolicyAssignments
     */
    cloudServiceSubtype?: string;
    /**
     *
     * @type {string}
     * @memberof DomainCIDPolicyAssignments
     */
    defaultSeverity?: string;
    /**
     *
     * @type {string}
     * @memberof DomainCIDPolicyAssignments
     */
    fqlPolicy?: string;
    /**
     *
     * @type {string}
     * @memberof DomainCIDPolicyAssignments
     */
    name?: string;
    /**
     *
     * @type {Array<DomainCIDPolicyAssignmentsNistBenchmark>}
     * @memberof DomainCIDPolicyAssignments
     */
    nistBenchmark?: Array<DomainCIDPolicyAssignmentsNistBenchmark>;
    /**
     *
     * @type {Array<DomainCIDPolicyAssignmentsPciBenchmark>}
     * @memberof DomainCIDPolicyAssignments
     */
    pciBenchmark?: Array<DomainCIDPolicyAssignmentsPciBenchmark>;
    /**
     *
     * @type {number}
     * @memberof DomainCIDPolicyAssignments
     */
    policyId?: number;
    /**
     *
     * @type {Array<DomainPolicySettingByAccountAndRegion>}
     * @memberof DomainCIDPolicyAssignments
     */
    policySettings?: Array<DomainPolicySettingByAccountAndRegion>;
    /**
     *
     * @type {Date}
     * @memberof DomainCIDPolicyAssignments
     */
    policyTimestamp?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainCIDPolicyAssignments
     */
    policyType?: string;
    /**
     *
     * @type {Array<DomainCIDPolicyAssignmentsSoc2Benchmark>}
     * @memberof DomainCIDPolicyAssignments
     */
    soc2Benchmark?: Array<DomainCIDPolicyAssignmentsSoc2Benchmark>;
}

/**
 * Check if a given object implements the DomainCIDPolicyAssignments interface.
 */
export function instanceOfDomainCIDPolicyAssignments(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DomainCIDPolicyAssignmentsFromJSON(json: any): DomainCIDPolicyAssignments {
    return DomainCIDPolicyAssignmentsFromJSONTyped(json, false);
}

export function DomainCIDPolicyAssignmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainCIDPolicyAssignments {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cid: !exists(json, "cid") ? undefined : json["cid"],
        cisBenchmark: !exists(json, "cis_benchmark") ? undefined : (json["cis_benchmark"] as Array<any>).map(DomainCIDPolicyAssignmentsCisBenchmarkFromJSON),
        cloudAssetType: !exists(json, "cloud_asset_type") ? undefined : json["cloud_asset_type"],
        cloudService: !exists(json, "cloud_service") ? undefined : json["cloud_service"],
        cloudServiceSubtype: !exists(json, "cloud_service_subtype") ? undefined : json["cloud_service_subtype"],
        defaultSeverity: !exists(json, "default_severity") ? undefined : json["default_severity"],
        fqlPolicy: !exists(json, "fql_policy") ? undefined : json["fql_policy"],
        name: !exists(json, "name") ? undefined : json["name"],
        nistBenchmark: !exists(json, "nist_benchmark") ? undefined : (json["nist_benchmark"] as Array<any>).map(DomainCIDPolicyAssignmentsNistBenchmarkFromJSON),
        pciBenchmark: !exists(json, "pci_benchmark") ? undefined : (json["pci_benchmark"] as Array<any>).map(DomainCIDPolicyAssignmentsPciBenchmarkFromJSON),
        policyId: !exists(json, "policy_id") ? undefined : json["policy_id"],
        policySettings: !exists(json, "policy_settings") ? undefined : (json["policy_settings"] as Array<any>).map(DomainPolicySettingByAccountAndRegionFromJSON),
        policyTimestamp: !exists(json, "policy_timestamp") ? undefined : new Date(json["policy_timestamp"]),
        policyType: !exists(json, "policy_type") ? undefined : json["policy_type"],
        soc2Benchmark: !exists(json, "soc2_benchmark") ? undefined : (json["soc2_benchmark"] as Array<any>).map(DomainCIDPolicyAssignmentsSoc2BenchmarkFromJSON),
    };
}

export function DomainCIDPolicyAssignmentsToJSON(value?: DomainCIDPolicyAssignments | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        cid: value.cid,
        cis_benchmark: value.cisBenchmark === undefined ? undefined : (value.cisBenchmark as Array<any>).map(DomainCIDPolicyAssignmentsCisBenchmarkToJSON),
        cloud_asset_type: value.cloudAssetType,
        cloud_service: value.cloudService,
        cloud_service_subtype: value.cloudServiceSubtype,
        default_severity: value.defaultSeverity,
        fql_policy: value.fqlPolicy,
        name: value.name,
        nist_benchmark: value.nistBenchmark === undefined ? undefined : (value.nistBenchmark as Array<any>).map(DomainCIDPolicyAssignmentsNistBenchmarkToJSON),
        pci_benchmark: value.pciBenchmark === undefined ? undefined : (value.pciBenchmark as Array<any>).map(DomainCIDPolicyAssignmentsPciBenchmarkToJSON),
        policy_id: value.policyId,
        policy_settings: value.policySettings === undefined ? undefined : (value.policySettings as Array<any>).map(DomainPolicySettingByAccountAndRegionToJSON),
        policy_timestamp: value.policyTimestamp === undefined ? undefined : value.policyTimestamp.toISOString(),
        policy_type: value.policyType,
        soc2_benchmark: value.soc2Benchmark === undefined ? undefined : (value.soc2Benchmark as Array<any>).map(DomainCIDPolicyAssignmentsSoc2BenchmarkToJSON),
    };
}
