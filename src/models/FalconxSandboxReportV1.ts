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
import { FalconxContactedHost, FalconxContactedHostFromJSON, FalconxContactedHostFromJSONTyped, FalconxContactedHostToJSON } from "./FalconxContactedHost";
import { FalconxDNSRequest, FalconxDNSRequestFromJSON, FalconxDNSRequestFromJSONTyped, FalconxDNSRequestToJSON } from "./FalconxDNSRequest";
import { FalconxExtractedFile, FalconxExtractedFileFromJSON, FalconxExtractedFileFromJSONTyped, FalconxExtractedFileToJSON } from "./FalconxExtractedFile";
import {
    FalconxExtractedInterestingString,
    FalconxExtractedInterestingStringFromJSON,
    FalconxExtractedInterestingStringFromJSONTyped,
    FalconxExtractedInterestingStringToJSON,
} from "./FalconxExtractedInterestingString";
import { FalconxFileImport, FalconxFileImportFromJSON, FalconxFileImportFromJSONTyped, FalconxFileImportToJSON } from "./FalconxFileImport";
import { FalconxFileMetadata, FalconxFileMetadataFromJSON, FalconxFileMetadataFromJSONTyped, FalconxFileMetadataToJSON } from "./FalconxFileMetadata";
import { FalconxHTTPRequest, FalconxHTTPRequestFromJSON, FalconxHTTPRequestFromJSONTyped, FalconxHTTPRequestToJSON } from "./FalconxHTTPRequest";
import { FalconxIncident, FalconxIncidentFromJSON, FalconxIncidentFromJSONTyped, FalconxIncidentToJSON } from "./FalconxIncident";
import { FalconxMITREAttack, FalconxMITREAttackFromJSON, FalconxMITREAttackFromJSONTyped, FalconxMITREAttackToJSON } from "./FalconxMITREAttack";
import { FalconxMemoryForensic, FalconxMemoryForensicFromJSON, FalconxMemoryForensicFromJSONTyped, FalconxMemoryForensicToJSON } from "./FalconxMemoryForensic";
import { FalconxProcess, FalconxProcessFromJSON, FalconxProcessFromJSONTyped, FalconxProcessToJSON } from "./FalconxProcess";
import { FalconxSignature, FalconxSignatureFromJSON, FalconxSignatureFromJSONTyped, FalconxSignatureToJSON } from "./FalconxSignature";
import { FalconxSuricataAlert, FalconxSuricataAlertFromJSON, FalconxSuricataAlertFromJSONTyped, FalconxSuricataAlertToJSON } from "./FalconxSuricataAlert";
import { FalconxVersionInfo, FalconxVersionInfoFromJSON, FalconxVersionInfoFromJSONTyped, FalconxVersionInfoToJSON } from "./FalconxVersionInfo";

/**
 *
 * @export
 * @interface FalconxSandboxReportV1
 */
export interface FalconxSandboxReportV1 {
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    architecture?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxSandboxReportV1
     */
    classification?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxSandboxReportV1
     */
    classificationTags?: Array<string>;
    /**
     *
     * @type {Array<FalconxContactedHost>}
     * @memberof FalconxSandboxReportV1
     */
    contactedHosts?: Array<FalconxContactedHost>;
    /**
     *
     * @type {Array<FalconxDNSRequest>}
     * @memberof FalconxSandboxReportV1
     */
    dnsRequests?: Array<FalconxDNSRequest>;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    environmentDescription?: string;
    /**
     *
     * @type {number}
     * @memberof FalconxSandboxReportV1
     */
    environmentId?: number;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    errorMessage?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    errorOrigin?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    errorType?: string;
    /**
     *
     * @type {Array<FalconxExtractedFile>}
     * @memberof FalconxSandboxReportV1
     */
    extractedFiles?: Array<FalconxExtractedFile>;
    /**
     *
     * @type {Array<FalconxExtractedInterestingString>}
     * @memberof FalconxSandboxReportV1
     */
    extractedInterestingStrings?: Array<FalconxExtractedInterestingString>;
    /**
     *
     * @type {Array<FalconxFileImport>}
     * @memberof FalconxSandboxReportV1
     */
    fileImports?: Array<FalconxFileImport>;
    /**
     *
     * @type {FalconxFileMetadata}
     * @memberof FalconxSandboxReportV1
     */
    fileMetadata?: FalconxFileMetadata;
    /**
     *
     * @type {number}
     * @memberof FalconxSandboxReportV1
     */
    fileSize?: number;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    fileType?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxSandboxReportV1
     */
    fileTypeShort?: Array<string>;
    /**
     *
     * @type {Array<FalconxHTTPRequest>}
     * @memberof FalconxSandboxReportV1
     */
    httpRequests?: Array<FalconxHTTPRequest>;
    /**
     *
     * @type {Array<FalconxIncident>}
     * @memberof FalconxSandboxReportV1
     */
    incidents?: Array<FalconxIncident>;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    iocReportBroadArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    iocReportStrictArtifactId?: string;
    /**
     *
     * @type {Array<FalconxMemoryForensic>}
     * @memberof FalconxSandboxReportV1
     */
    memoryForensics?: Array<FalconxMemoryForensic>;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    memoryStringsArtifactId?: string;
    /**
     *
     * @type {Array<FalconxMITREAttack>}
     * @memberof FalconxSandboxReportV1
     */
    mitreAttacks?: Array<FalconxMITREAttack>;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    packer?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    pcapReportArtifactId?: string;
    /**
     *
     * @type {Array<FalconxProcess>}
     * @memberof FalconxSandboxReportV1
     */
    processes?: Array<FalconxProcess>;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxSandboxReportV1
     */
    sampleFlags?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxSandboxReportV1
     */
    screenshotsArtifactIds?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    sha256?: string;
    /**
     *
     * @type {Array<FalconxSignature>}
     * @memberof FalconxSandboxReportV1
     */
    signatures?: Array<FalconxSignature>;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    submissionType?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    submitName?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    submitUrl?: string;
    /**
     *
     * @type {Array<FalconxSuricataAlert>}
     * @memberof FalconxSandboxReportV1
     */
    suricataAlerts?: Array<FalconxSuricataAlert>;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    targetUrl?: string;
    /**
     *
     * @type {number}
     * @memberof FalconxSandboxReportV1
     */
    threatScore?: number;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    verdict?: string;
    /**
     *
     * @type {Array<FalconxVersionInfo>}
     * @memberof FalconxSandboxReportV1
     */
    versionInfo?: Array<FalconxVersionInfo>;
    /**
     *
     * @type {number}
     * @memberof FalconxSandboxReportV1
     */
    windowsVersionBitness?: number;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    windowsVersionEdition?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    windowsVersionName?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    windowsVersionServicePack?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxReportV1
     */
    windowsVersionVersion?: string;
}

/**
 * Check if a given object implements the FalconxSandboxReportV1 interface.
 */
export function instanceOfFalconxSandboxReportV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FalconxSandboxReportV1FromJSON(json: any): FalconxSandboxReportV1 {
    return FalconxSandboxReportV1FromJSONTyped(json, false);
}

export function FalconxSandboxReportV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxSandboxReportV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        architecture: !exists(json, "architecture") ? undefined : json["architecture"],
        classification: !exists(json, "classification") ? undefined : json["classification"],
        classificationTags: !exists(json, "classification_tags") ? undefined : json["classification_tags"],
        contactedHosts: !exists(json, "contacted_hosts") ? undefined : (json["contacted_hosts"] as Array<any>).map(FalconxContactedHostFromJSON),
        dnsRequests: !exists(json, "dns_requests") ? undefined : (json["dns_requests"] as Array<any>).map(FalconxDNSRequestFromJSON),
        environmentDescription: !exists(json, "environment_description") ? undefined : json["environment_description"],
        environmentId: !exists(json, "environment_id") ? undefined : json["environment_id"],
        errorMessage: !exists(json, "error_message") ? undefined : json["error_message"],
        errorOrigin: !exists(json, "error_origin") ? undefined : json["error_origin"],
        errorType: !exists(json, "error_type") ? undefined : json["error_type"],
        extractedFiles: !exists(json, "extracted_files") ? undefined : (json["extracted_files"] as Array<any>).map(FalconxExtractedFileFromJSON),
        extractedInterestingStrings: !exists(json, "extracted_interesting_strings") ? undefined : (json["extracted_interesting_strings"] as Array<any>).map(FalconxExtractedInterestingStringFromJSON),
        fileImports: !exists(json, "file_imports") ? undefined : (json["file_imports"] as Array<any>).map(FalconxFileImportFromJSON),
        fileMetadata: !exists(json, "file_metadata") ? undefined : FalconxFileMetadataFromJSON(json["file_metadata"]),
        fileSize: !exists(json, "file_size") ? undefined : json["file_size"],
        fileType: !exists(json, "file_type") ? undefined : json["file_type"],
        fileTypeShort: !exists(json, "file_type_short") ? undefined : json["file_type_short"],
        httpRequests: !exists(json, "http_requests") ? undefined : (json["http_requests"] as Array<any>).map(FalconxHTTPRequestFromJSON),
        incidents: !exists(json, "incidents") ? undefined : (json["incidents"] as Array<any>).map(FalconxIncidentFromJSON),
        iocReportBroadArtifactId: !exists(json, "ioc_report_broad_artifact_id") ? undefined : json["ioc_report_broad_artifact_id"],
        iocReportStrictArtifactId: !exists(json, "ioc_report_strict_artifact_id") ? undefined : json["ioc_report_strict_artifact_id"],
        memoryForensics: !exists(json, "memory_forensics") ? undefined : (json["memory_forensics"] as Array<any>).map(FalconxMemoryForensicFromJSON),
        memoryStringsArtifactId: !exists(json, "memory_strings_artifact_id") ? undefined : json["memory_strings_artifact_id"],
        mitreAttacks: !exists(json, "mitre_attacks") ? undefined : (json["mitre_attacks"] as Array<any>).map(FalconxMITREAttackFromJSON),
        packer: !exists(json, "packer") ? undefined : json["packer"],
        pcapReportArtifactId: !exists(json, "pcap_report_artifact_id") ? undefined : json["pcap_report_artifact_id"],
        processes: !exists(json, "processes") ? undefined : (json["processes"] as Array<any>).map(FalconxProcessFromJSON),
        sampleFlags: !exists(json, "sample_flags") ? undefined : json["sample_flags"],
        screenshotsArtifactIds: !exists(json, "screenshots_artifact_ids") ? undefined : json["screenshots_artifact_ids"],
        sha256: !exists(json, "sha256") ? undefined : json["sha256"],
        signatures: !exists(json, "signatures") ? undefined : (json["signatures"] as Array<any>).map(FalconxSignatureFromJSON),
        submissionType: !exists(json, "submission_type") ? undefined : json["submission_type"],
        submitName: !exists(json, "submit_name") ? undefined : json["submit_name"],
        submitUrl: !exists(json, "submit_url") ? undefined : json["submit_url"],
        suricataAlerts: !exists(json, "suricata_alerts") ? undefined : (json["suricata_alerts"] as Array<any>).map(FalconxSuricataAlertFromJSON),
        targetUrl: !exists(json, "target_url") ? undefined : json["target_url"],
        threatScore: !exists(json, "threat_score") ? undefined : json["threat_score"],
        verdict: !exists(json, "verdict") ? undefined : json["verdict"],
        versionInfo: !exists(json, "version_info") ? undefined : (json["version_info"] as Array<any>).map(FalconxVersionInfoFromJSON),
        windowsVersionBitness: !exists(json, "windows_version_bitness") ? undefined : json["windows_version_bitness"],
        windowsVersionEdition: !exists(json, "windows_version_edition") ? undefined : json["windows_version_edition"],
        windowsVersionName: !exists(json, "windows_version_name") ? undefined : json["windows_version_name"],
        windowsVersionServicePack: !exists(json, "windows_version_service_pack") ? undefined : json["windows_version_service_pack"],
        windowsVersionVersion: !exists(json, "windows_version_version") ? undefined : json["windows_version_version"],
    };
}

export function FalconxSandboxReportV1ToJSON(value?: FalconxSandboxReportV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        architecture: value.architecture,
        classification: value.classification,
        classification_tags: value.classificationTags,
        contacted_hosts: value.contactedHosts === undefined ? undefined : (value.contactedHosts as Array<any>).map(FalconxContactedHostToJSON),
        dns_requests: value.dnsRequests === undefined ? undefined : (value.dnsRequests as Array<any>).map(FalconxDNSRequestToJSON),
        environment_description: value.environmentDescription,
        environment_id: value.environmentId,
        error_message: value.errorMessage,
        error_origin: value.errorOrigin,
        error_type: value.errorType,
        extracted_files: value.extractedFiles === undefined ? undefined : (value.extractedFiles as Array<any>).map(FalconxExtractedFileToJSON),
        extracted_interesting_strings: value.extractedInterestingStrings === undefined ? undefined : (value.extractedInterestingStrings as Array<any>).map(FalconxExtractedInterestingStringToJSON),
        file_imports: value.fileImports === undefined ? undefined : (value.fileImports as Array<any>).map(FalconxFileImportToJSON),
        file_metadata: FalconxFileMetadataToJSON(value.fileMetadata),
        file_size: value.fileSize,
        file_type: value.fileType,
        file_type_short: value.fileTypeShort,
        http_requests: value.httpRequests === undefined ? undefined : (value.httpRequests as Array<any>).map(FalconxHTTPRequestToJSON),
        incidents: value.incidents === undefined ? undefined : (value.incidents as Array<any>).map(FalconxIncidentToJSON),
        ioc_report_broad_artifact_id: value.iocReportBroadArtifactId,
        ioc_report_strict_artifact_id: value.iocReportStrictArtifactId,
        memory_forensics: value.memoryForensics === undefined ? undefined : (value.memoryForensics as Array<any>).map(FalconxMemoryForensicToJSON),
        memory_strings_artifact_id: value.memoryStringsArtifactId,
        mitre_attacks: value.mitreAttacks === undefined ? undefined : (value.mitreAttacks as Array<any>).map(FalconxMITREAttackToJSON),
        packer: value.packer,
        pcap_report_artifact_id: value.pcapReportArtifactId,
        processes: value.processes === undefined ? undefined : (value.processes as Array<any>).map(FalconxProcessToJSON),
        sample_flags: value.sampleFlags,
        screenshots_artifact_ids: value.screenshotsArtifactIds,
        sha256: value.sha256,
        signatures: value.signatures === undefined ? undefined : (value.signatures as Array<any>).map(FalconxSignatureToJSON),
        submission_type: value.submissionType,
        submit_name: value.submitName,
        submit_url: value.submitUrl,
        suricata_alerts: value.suricataAlerts === undefined ? undefined : (value.suricataAlerts as Array<any>).map(FalconxSuricataAlertToJSON),
        target_url: value.targetUrl,
        threat_score: value.threatScore,
        verdict: value.verdict,
        version_info: value.versionInfo === undefined ? undefined : (value.versionInfo as Array<any>).map(FalconxVersionInfoToJSON),
        windows_version_bitness: value.windowsVersionBitness,
        windows_version_edition: value.windowsVersionEdition,
        windows_version_name: value.windowsVersionName,
        windows_version_service_pack: value.windowsVersionServicePack,
        windows_version_version: value.windowsVersionVersion,
    };
}
