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
 * @interface ResponsesSensorUpdateKernelV1
 */
export interface ResponsesSensorUpdateKernelV1 {
    /**
     *
     * @type {string}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    architecture: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    basePackageSupportedSensorVersions: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    createdTimestamp: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    distro: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    distroVersion: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    flavor: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    modifiedTimestamp: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    release: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    vendor: string;
    /**
     *
     * @type {string}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    version: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    ztlModuleSupportedSensorVersions: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ResponsesSensorUpdateKernelV1
     */
    ztlSupportedSensorVersions: Array<string>;
}

/**
 * Check if a given object implements the ResponsesSensorUpdateKernelV1 interface.
 */
export function instanceOfResponsesSensorUpdateKernelV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "architecture" in value;
    isInstance = isInstance && "basePackageSupportedSensorVersions" in value;
    isInstance = isInstance && "createdTimestamp" in value;
    isInstance = isInstance && "distro" in value;
    isInstance = isInstance && "distroVersion" in value;
    isInstance = isInstance && "flavor" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "modifiedTimestamp" in value;
    isInstance = isInstance && "release" in value;
    isInstance = isInstance && "vendor" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "ztlModuleSupportedSensorVersions" in value;
    isInstance = isInstance && "ztlSupportedSensorVersions" in value;

    return isInstance;
}

export function ResponsesSensorUpdateKernelV1FromJSON(json: any): ResponsesSensorUpdateKernelV1 {
    return ResponsesSensorUpdateKernelV1FromJSONTyped(json, false);
}

export function ResponsesSensorUpdateKernelV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponsesSensorUpdateKernelV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        architecture: json["architecture"],
        basePackageSupportedSensorVersions: json["base_package_supported_sensor_versions"],
        createdTimestamp: json["created_timestamp"],
        distro: json["distro"],
        distroVersion: json["distro_version"],
        flavor: json["flavor"],
        id: json["id"],
        modifiedTimestamp: json["modified_timestamp"],
        release: json["release"],
        vendor: json["vendor"],
        version: json["version"],
        ztlModuleSupportedSensorVersions: json["ztl_module_supported_sensor_versions"],
        ztlSupportedSensorVersions: json["ztl_supported_sensor_versions"],
    };
}

export function ResponsesSensorUpdateKernelV1ToJSON(value?: ResponsesSensorUpdateKernelV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        architecture: value.architecture,
        base_package_supported_sensor_versions: value.basePackageSupportedSensorVersions,
        created_timestamp: value.createdTimestamp,
        distro: value.distro,
        distro_version: value.distroVersion,
        flavor: value.flavor,
        id: value.id,
        modified_timestamp: value.modifiedTimestamp,
        release: value.release,
        vendor: value.vendor,
        version: value.version,
        ztl_module_supported_sensor_versions: value.ztlModuleSupportedSensorVersions,
        ztl_supported_sensor_versions: value.ztlSupportedSensorVersions,
    };
}
