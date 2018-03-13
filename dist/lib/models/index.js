"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines values for ReasonCode.
 * Possible values include: 'QuotaId', 'NotAvailableForSubscription'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ReasonCode = <ReasonCode>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ReasonCode;
(function (ReasonCode) {
    ReasonCode["QuotaId"] = "QuotaId";
    ReasonCode["NotAvailableForSubscription"] = "NotAvailableForSubscription";
})(ReasonCode = exports.ReasonCode || (exports.ReasonCode = {}));
/**
 * Defines values for SkuName.
 * Possible values include: 'Standard_LRS', 'Standard_GRS', 'Standard_RAGRS',
 * 'Standard_ZRS', 'Premium_LRS'
 * @readonly
 * @enum {string}
 */
var SkuName;
(function (SkuName) {
    SkuName["StandardLRS"] = "Standard_LRS";
    SkuName["StandardGRS"] = "Standard_GRS";
    SkuName["StandardRAGRS"] = "Standard_RAGRS";
    SkuName["StandardZRS"] = "Standard_ZRS";
    SkuName["PremiumLRS"] = "Premium_LRS";
})(SkuName = exports.SkuName || (exports.SkuName = {}));
/**
 * Defines values for SkuTier.
 * Possible values include: 'Standard', 'Premium'
 * @readonly
 * @enum {string}
 */
var SkuTier;
(function (SkuTier) {
    SkuTier["Standard"] = "Standard";
    SkuTier["Premium"] = "Premium";
})(SkuTier = exports.SkuTier || (exports.SkuTier = {}));
/**
 * Defines values for Kind.
 * Possible values include: 'Storage', 'StorageV2', 'BlobStorage'
 * @readonly
 * @enum {string}
 */
var Kind;
(function (Kind) {
    Kind["Storage"] = "Storage";
    Kind["StorageV2"] = "StorageV2";
    Kind["BlobStorage"] = "BlobStorage";
})(Kind = exports.Kind || (exports.Kind = {}));
/**
 * Defines values for Reason.
 * Possible values include: 'AccountNameInvalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
var Reason;
(function (Reason) {
    Reason["AccountNameInvalid"] = "AccountNameInvalid";
    Reason["AlreadyExists"] = "AlreadyExists";
})(Reason = exports.Reason || (exports.Reason = {}));
/**
 * Defines values for KeySource.
 * Possible values include: 'Microsoft.Storage', 'Microsoft.Keyvault'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: KeySource = <KeySource>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var KeySource;
(function (KeySource) {
    KeySource["MicrosoftStorage"] = "Microsoft.Storage";
    KeySource["MicrosoftKeyvault"] = "Microsoft.Keyvault";
})(KeySource = exports.KeySource || (exports.KeySource = {}));
/**
 * Defines values for Action.
 * Possible values include: 'Allow'
 * @readonly
 * @enum {string}
 */
var Action;
(function (Action) {
    Action["Allow"] = "Allow";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Defines values for State.
 * Possible values include: 'provisioning', 'deprovisioning', 'succeeded',
 * 'failed', 'networkSourceDeleted'
 * @readonly
 * @enum {string}
 */
var State;
(function (State) {
    State["Provisioning"] = "provisioning";
    State["Deprovisioning"] = "deprovisioning";
    State["Succeeded"] = "succeeded";
    State["Failed"] = "failed";
    State["NetworkSourceDeleted"] = "networkSourceDeleted";
})(State = exports.State || (exports.State = {}));
/**
 * Defines values for Bypass.
 * Possible values include: 'None', 'Logging', 'Metrics', 'AzureServices'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Bypass = <Bypass>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var Bypass;
(function (Bypass) {
    Bypass["None"] = "None";
    Bypass["Logging"] = "Logging";
    Bypass["Metrics"] = "Metrics";
    Bypass["AzureServices"] = "AzureServices";
})(Bypass = exports.Bypass || (exports.Bypass = {}));
/**
 * Defines values for DefaultAction.
 * Possible values include: 'Allow', 'Deny'
 * @readonly
 * @enum {string}
 */
var DefaultAction;
(function (DefaultAction) {
    DefaultAction["Allow"] = "Allow";
    DefaultAction["Deny"] = "Deny";
})(DefaultAction = exports.DefaultAction || (exports.DefaultAction = {}));
/**
 * Defines values for AccessTier.
 * Possible values include: 'Hot', 'Cool'
 * @readonly
 * @enum {string}
 */
var AccessTier;
(function (AccessTier) {
    AccessTier["Hot"] = "Hot";
    AccessTier["Cool"] = "Cool";
})(AccessTier = exports.AccessTier || (exports.AccessTier = {}));
/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Creating', 'ResolvingDNS', 'Succeeded'
 * @readonly
 * @enum {string}
 */
var ProvisioningState;
(function (ProvisioningState) {
    ProvisioningState["Creating"] = "Creating";
    ProvisioningState["ResolvingDNS"] = "ResolvingDNS";
    ProvisioningState["Succeeded"] = "Succeeded";
})(ProvisioningState = exports.ProvisioningState || (exports.ProvisioningState = {}));
/**
 * Defines values for AccountStatus.
 * Possible values include: 'available', 'unavailable'
 * @readonly
 * @enum {string}
 */
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["Available"] = "available";
    AccountStatus["Unavailable"] = "unavailable";
})(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));
/**
 * Defines values for KeyPermission.
 * Possible values include: 'Read', 'Full'
 * @readonly
 * @enum {string}
 */
var KeyPermission;
(function (KeyPermission) {
    KeyPermission["Read"] = "Read";
    KeyPermission["Full"] = "Full";
})(KeyPermission = exports.KeyPermission || (exports.KeyPermission = {}));
/**
 * Defines values for UsageUnit.
 * Possible values include: 'Count', 'Bytes', 'Seconds', 'Percent',
 * 'CountsPerSecond', 'BytesPerSecond'
 * @readonly
 * @enum {string}
 */
var UsageUnit;
(function (UsageUnit) {
    UsageUnit["Count"] = "Count";
    UsageUnit["Bytes"] = "Bytes";
    UsageUnit["Seconds"] = "Seconds";
    UsageUnit["Percent"] = "Percent";
    UsageUnit["CountsPerSecond"] = "CountsPerSecond";
    UsageUnit["BytesPerSecond"] = "BytesPerSecond";
})(UsageUnit = exports.UsageUnit || (exports.UsageUnit = {}));
/**
 * Defines values for Services.
 * Possible values include: 'b', 'q', 't', 'f'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Services = <Services>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var Services;
(function (Services) {
    Services["B"] = "b";
    Services["Q"] = "q";
    Services["T"] = "t";
    Services["F"] = "f";
})(Services = exports.Services || (exports.Services = {}));
/**
 * Defines values for SignedResourceTypes.
 * Possible values include: 's', 'c', 'o'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: SignedResourceTypes =
 * <SignedResourceTypes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var SignedResourceTypes;
(function (SignedResourceTypes) {
    SignedResourceTypes["S"] = "s";
    SignedResourceTypes["C"] = "c";
    SignedResourceTypes["O"] = "o";
})(SignedResourceTypes = exports.SignedResourceTypes || (exports.SignedResourceTypes = {}));
/**
 * Defines values for Permissions.
 * Possible values include: 'r', 'd', 'w', 'l', 'a', 'c', 'u', 'p'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Permissions =
 * <Permissions>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var Permissions;
(function (Permissions) {
    Permissions["R"] = "r";
    Permissions["D"] = "d";
    Permissions["W"] = "w";
    Permissions["L"] = "l";
    Permissions["A"] = "a";
    Permissions["C"] = "c";
    Permissions["U"] = "u";
    Permissions["P"] = "p";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
/**
 * Defines values for HttpProtocol.
 * Possible values include: 'https,http', 'https'
 * @readonly
 * @enum {string}
 */
var HttpProtocol;
(function (HttpProtocol) {
    HttpProtocol["Httpshttp"] = "https,http";
    HttpProtocol["Https"] = "https";
})(HttpProtocol = exports.HttpProtocol || (exports.HttpProtocol = {}));
/**
 * Defines values for SignedResource.
 * Possible values include: 'b', 'c', 'f', 's'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: SignedResource =
 * <SignedResource>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var SignedResource;
(function (SignedResource) {
    SignedResource["B"] = "b";
    SignedResource["C"] = "c";
    SignedResource["F"] = "f";
    SignedResource["S"] = "s";
})(SignedResource = exports.SignedResource || (exports.SignedResource = {}));
//# sourceMappingURL=index.js.map