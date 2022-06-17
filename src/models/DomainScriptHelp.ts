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
import { ModelArgument, ModelArgumentFromJSON, ModelArgumentFromJSONTyped, ModelArgumentToJSON } from "./ModelArgument";

/**
 *
 * @export
 * @interface DomainScriptHelp
 */
export interface DomainScriptHelp {
    /**
     *
     * @type {Array<ModelArgument>}
     * @memberof DomainScriptHelp
     */
    args: Array<ModelArgument>;
    /**
     *
     * @type {string}
     * @memberof DomainScriptHelp
     */
    command: string;
    /**
     *
     * @type {string}
     * @memberof DomainScriptHelp
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof DomainScriptHelp
     */
    examples: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainScriptHelp
     */
    internalOnly: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DomainScriptHelp
     */
    runnable: boolean;
    /**
     *
     * @type {Array<DomainScriptHelp>}
     * @memberof DomainScriptHelp
     */
    subCommands: Array<DomainScriptHelp>;
}

/**
 * Check if a given object implements the DomainScriptHelp interface.
 */
export function instanceOfDomainScriptHelp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "args" in value;
    isInstance = isInstance && "command" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "examples" in value;
    isInstance = isInstance && "internalOnly" in value;
    isInstance = isInstance && "runnable" in value;
    isInstance = isInstance && "subCommands" in value;

    return isInstance;
}

export function DomainScriptHelpFromJSON(json: any): DomainScriptHelp {
    return DomainScriptHelpFromJSONTyped(json, false);
}

export function DomainScriptHelpFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainScriptHelp {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        args: (json["args"] as Array<any>).map(ModelArgumentFromJSON),
        command: json["command"],
        description: json["description"],
        examples: json["examples"],
        internalOnly: json["internal_only"],
        runnable: json["runnable"],
        subCommands: (json["sub_commands"] as Array<any>).map(DomainScriptHelpFromJSON),
    };
}

export function DomainScriptHelpToJSON(value?: DomainScriptHelp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        args: (value.args as Array<any>).map(ModelArgumentToJSON),
        command: value.command,
        description: value.description,
        examples: value.examples,
        internal_only: value.internalOnly,
        runnable: value.runnable,
        sub_commands: (value.subCommands as Array<any>).map(DomainScriptHelpToJSON),
    };
}
