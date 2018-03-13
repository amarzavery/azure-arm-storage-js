/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing OperationDisplay.
 * Display metadata associated with the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft Storage.
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed
   * etc.
   */
  resource?: string;
  /**
   * @member {string} [operation] Type of operation: get, read, delete, etc.
   */
  operation?: string;
}

/**
 * @interface
 * An interface representing Dimension.
 * Dimension of blobs, possiblly be blob type or access tier.
 *
 */
export interface Dimension {
  /**
   * @member {string} [name] Display name of dimension.
   */
  name?: string;
  /**
   * @member {string} [displayName] Display name of dimension.
   */
  displayName?: string;
}

/**
 * @interface
 * An interface representing MetricSpecification.
 * Metric specification of operation.
 *
 */
export interface MetricSpecification {
  /**
   * @member {string} [name] Name of metric specification.
   */
  name?: string;
  /**
   * @member {string} [displayName] Display name of metric specification.
   */
  displayName?: string;
  /**
   * @member {string} [displayDescription] Display description of metric
   * specification.
   */
  displayDescription?: string;
  /**
   * @member {string} [unit] Unit could be Bytes or Count.
   */
  unit?: string;
  /**
   * @member {Dimension[]} [dimensions] Dimensions of blobs, including blob
   * type and access tier.
   */
  dimensions?: Dimension[];
  /**
   * @member {string} [aggregationType] Aggregation type could be Average.
   */
  aggregationType?: string;
  /**
   * @member {boolean} [fillGapWithZero] The property to decide fill gap with
   * zero or not.
   */
  fillGapWithZero?: boolean;
  /**
   * @member {string} [category] The category this metric specification belong
   * to, could be Capacity.
   */
  category?: string;
  /**
   * @member {string} [resourceIdDimensionNameOverride] Account Resource Id.
   */
  resourceIdDimensionNameOverride?: string;
}

/**
 * @interface
 * An interface representing ServiceSpecification.
 * One property of operation, include metric specifications.
 *
 */
export interface ServiceSpecification {
  /**
   * @member {MetricSpecification[]} [metricSpecifications] Metric
   * specifications of operation.
   */
  metricSpecifications?: MetricSpecification[];
}

/**
 * @interface
 * An interface representing Operation.
 * Storage REST API operation definition.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] Display metadata associated with the
   * operation.
   */
  display?: OperationDisplay;
  /**
   * @member {string} [origin] The origin of operations.
   */
  origin?: string;
  /**
   * @member {ServiceSpecification} [serviceSpecification] One property of
   * operation, include metric specifications.
   */
  serviceSpecification?: ServiceSpecification;
}

/**
 * @interface
 * An interface representing StorageAccountCheckNameAvailabilityParameters.
 * The parameters used to check the availabity of the storage account name.
 *
 */
export interface StorageAccountCheckNameAvailabilityParameters {
  /**
   * @member {string} name The storage account name.
   */
  name: string;
}

/**
 * @interface
 * An interface representing SKUCapability.
 * The capability information in the specified sku, including file encryption,
 * network acls, change notification, etc.
 *
 */
export interface SKUCapability {
  /**
   * @member {string} [name] The name of capability, The capability information
   * in the specified sku, including file encryption, network acls, change
   * notification, etc.
   */
  readonly name?: string;
  /**
   * @member {string} [value] A string value to indicate states of given
   * capability. Possibly 'true' or 'false'.
   */
  readonly value?: string;
}

/**
 * @interface
 * An interface representing Restriction.
 * The restriction because of which SKU cannot be used.
 *
 */
export interface Restriction {
  /**
   * @member {string} [type] The type of restrictions. As of now only possible
   * value for this is location.
   */
  readonly type?: string;
  /**
   * @member {string[]} [values] The value of restrictions. If the restriction
   * type is set to location. This would be different locations where the SKU
   * is restricted.
   */
  readonly values?: string[];
  /**
   * @member {ReasonCode} [reasonCode] The reason for the restriction. As of
   * now this can be “QuotaId” or “NotAvailableForSubscription”. Quota Id is
   * set when the SKU has requiredQuotas parameter as the subscription does not
   * belong to that quota. The “NotAvailableForSubscription” is related to
   * capacity at DC. Possible values include: 'QuotaId',
   * 'NotAvailableForSubscription'
   */
  reasonCode?: ReasonCode;
}

/**
 * @interface
 * An interface representing Sku.
 * The SKU of the storage account.
 *
 */
export interface Sku {
  /**
   * @member {SkuName} name Gets or sets the sku name. Required for account
   * creation; optional for update. Note that in older versions, sku name was
   * called accountType. Possible values include: 'Standard_LRS',
   * 'Standard_GRS', 'Standard_RAGRS', 'Standard_ZRS', 'Premium_LRS'
   */
  name: SkuName;
  /**
   * @member {SkuTier} [tier] Gets the sku tier. This is based on the SKU name.
   * Possible values include: 'Standard', 'Premium'
   */
  readonly tier?: SkuTier;
  /**
   * @member {string} [resourceType] The type of the resource, usually it is
   * 'storageAccounts'.
   */
  readonly resourceType?: string;
  /**
   * @member {Kind} [kind] Indicates the type of storage account. Possible
   * values include: 'Storage', 'StorageV2', 'BlobStorage'
   */
  readonly kind?: Kind;
  /**
   * @member {string[]} [locations] The set of locations that the SKU is
   * available. This will be supported and registered Azure Geo Regions (e.g.
   * West US, East US, Southeast Asia, etc.).
   */
  readonly locations?: string[];
  /**
   * @member {SKUCapability[]} [capabilities] The capability information in the
   * specified sku, including file encryption, network acls, change
   * notification, etc.
   */
  readonly capabilities?: SKUCapability[];
  /**
   * @member {Restriction[]} [restrictions] The restrictions because of which
   * SKU cannot be used. This is empty if there are no restrictions.
   */
  restrictions?: Restriction[];
}

/**
 * @interface
 * An interface representing CheckNameAvailabilityResult.
 * The CheckNameAvailability operation response.
 *
 */
export interface CheckNameAvailabilityResult {
  /**
   * @member {boolean} [nameAvailable] Gets a boolean value that indicates
   * whether the name is available for you to use. If true, the name is
   * available. If false, the name has already been taken or is invalid and
   * cannot be used.
   */
  readonly nameAvailable?: boolean;
  /**
   * @member {Reason} [reason] Gets the reason that a storage account name
   * could not be used. The Reason element is only returned if NameAvailable is
   * false. Possible values include: 'AccountNameInvalid', 'AlreadyExists'
   */
  readonly reason?: Reason;
  /**
   * @member {string} [message] Gets an error message explaining the Reason
   * value in more detail.
   */
  readonly message?: string;
}

/**
 * @interface
 * An interface representing CustomDomain.
 * The custom domain assigned to this storage account. This can be set via
 * Update.
 *
 */
export interface CustomDomain {
  /**
   * @member {string} name Gets or sets the custom domain name assigned to the
   * storage account. Name is the CNAME source.
   */
  name: string;
  /**
   * @member {boolean} [useSubDomain] Indicates whether indirect CName
   * validation is enabled. Default value is false. This should only be set on
   * updates.
   */
  useSubDomain?: boolean;
}

/**
 * @interface
 * An interface representing EncryptionService.
 * A service that allows server-side encryption to be used.
 *
 */
export interface EncryptionService {
  /**
   * @member {boolean} [enabled] A boolean indicating whether or not the
   * service encrypts the data as it is stored.
   */
  enabled?: boolean;
  /**
   * @member {Date} [lastEnabledTime] Gets a rough estimate of the date/time
   * when the encryption was last enabled by the user. Only returned when
   * encryption is enabled. There might be some unencrypted blobs which were
   * written after this time, as it is just a rough estimate.
   */
  readonly lastEnabledTime?: Date;
}

/**
 * @interface
 * An interface representing EncryptionServices.
 * A list of services that support encryption.
 *
 */
export interface EncryptionServices {
  /**
   * @member {EncryptionService} [blob] The encryption function of the blob
   * storage service.
   */
  blob?: EncryptionService;
  /**
   * @member {EncryptionService} [file] The encryption function of the file
   * storage service.
   */
  file?: EncryptionService;
  /**
   * @member {EncryptionService} [table] The encryption function of the table
   * storage service.
   */
  readonly table?: EncryptionService;
  /**
   * @member {EncryptionService} [queue] The encryption function of the queue
   * storage service.
   */
  readonly queue?: EncryptionService;
}

/**
 * @interface
 * An interface representing KeyVaultProperties.
 * Properties of key vault.
 *
 */
export interface KeyVaultProperties {
  /**
   * @member {string} [keyName] The name of KeyVault key.
   */
  keyName?: string;
  /**
   * @member {string} [keyVersion] The version of KeyVault key.
   */
  keyVersion?: string;
  /**
   * @member {string} [keyVaultUri] The Uri of KeyVault.
   */
  keyVaultUri?: string;
}

/**
 * @interface
 * An interface representing Encryption.
 * The encryption settings on the storage account.
 *
 */
export interface Encryption {
  /**
   * @member {EncryptionServices} [services] List of services which support
   * encryption.
   */
  services?: EncryptionServices;
  /**
   * @member {KeySource} keySource The encryption keySource (provider).
   * Possible values (case-insensitive):  Microsoft.Storage,
   * Microsoft.Keyvault. Possible values include: 'Microsoft.Storage',
   * 'Microsoft.Keyvault'. Default value: 'Microsoft.Storage' .
   */
  keySource: KeySource;
  /**
   * @member {KeyVaultProperties} [keyVaultProperties] Properties provided by
   * key vault.
   */
  keyVaultProperties?: KeyVaultProperties;
}

/**
 * @interface
 * An interface representing VirtualNetworkRule.
 * Virtual Network rule.
 *
 */
export interface VirtualNetworkRule {
  /**
   * @member {string} virtualNetworkResourceId Resource ID of a subnet, for
   * example:
   * /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
   */
  virtualNetworkResourceId: string;
  /**
   * @member {Action} [action] The action of virtual network rule. Possible
   * values include: 'Allow'. Default value: 'Allow' .
   */
  action?: Action;
  /**
   * @member {State} [state] Gets the state of virtual network rule. Possible
   * values include: 'provisioning', 'deprovisioning', 'succeeded', 'failed',
   * 'networkSourceDeleted'
   */
  state?: State;
}

/**
 * @interface
 * An interface representing IPRule.
 * IP rule with specific IP or IP range in CIDR format.
 *
 */
export interface IPRule {
  /**
   * @member {string} iPAddressOrRange Specifies the IP or IP range in CIDR
   * format. Only IPV4 address is allowed.
   */
  iPAddressOrRange: string;
  /**
   * @member {Action} [action] The action of IP ACL rule. Possible values
   * include: 'Allow'. Default value: 'Allow' .
   */
  action?: Action;
}

/**
 * @interface
 * An interface representing NetworkRuleSet.
 * Network rule set
 *
 */
export interface NetworkRuleSet {
  /**
   * @member {Bypass} [bypass] Specifies whether traffic is bypassed for
   * Logging/Metrics/AzureServices. Possible values are any combination of
   * Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None
   * to bypass none of those traffics. Possible values include: 'None',
   * 'Logging', 'Metrics', 'AzureServices'. Default value: 'AzureServices' .
   */
  bypass?: Bypass;
  /**
   * @member {VirtualNetworkRule[]} [virtualNetworkRules] Sets the virtual
   * network rules
   */
  virtualNetworkRules?: VirtualNetworkRule[];
  /**
   * @member {IPRule[]} [ipRules] Sets the IP ACL rules
   */
  ipRules?: IPRule[];
  /**
   * @member {DefaultAction} defaultAction Specifies the default action of
   * allow or deny when no other rules match. Possible values include: 'Allow',
   * 'Deny'. Default value: 'Allow' .
   */
  defaultAction: DefaultAction;
}

/**
 * @interface
 * An interface representing Identity.
 * Identity for the resource.
 *
 */
export interface Identity {
  /**
   * @member {string} [principalId] The principal ID of resource identity.
   */
  readonly principalId?: string;
  /**
   * @member {string} [tenantId] The tenant ID of resource.
   */
  readonly tenantId?: string;
}

/**
 * @interface
 * An interface representing StorageAccountCreateParameters.
 * The parameters used when creating a storage account.
 *
 */
export interface StorageAccountCreateParameters {
  /**
   * @member {Sku} sku Required. Gets or sets the sku name.
   */
  sku: Sku;
  /**
   * @member {Kind} kind Required. Indicates the type of storage account.
   * Possible values include: 'Storage', 'StorageV2', 'BlobStorage'
   */
  kind: Kind;
  /**
   * @member {string} location Required. Gets or sets the location of the
   * resource. This will be one of the supported and registered Azure Geo
   * Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a
   * resource cannot be changed once it is created, but if an identical geo
   * region is specified on update, the request will succeed.
   */
  location: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Gets or sets a list of
   * key value pairs that describe the resource. These tags can be used for
   * viewing and grouping this resource (across resource groups). A maximum of
   * 15 tags can be provided for a resource. Each tag must have a key with a
   * length no greater than 128 characters and a value with a length no greater
   * than 256 characters.
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {Identity} [identity] The identity of the resource.
   */
  identity?: Identity;
  /**
   * @member {CustomDomain} [customDomain] User domain assigned to the storage
   * account. Name is the CNAME source. Only one custom domain is supported per
   * storage account at this time. To clear the existing custom domain, use an
   * empty string for the custom domain name property.
   */
  customDomain?: CustomDomain;
  /**
   * @member {Encryption} [encryption] Provides the encryption settings on the
   * account. If left unspecified the account encryption settings will remain
   * the same. The default setting is unencrypted.
   */
  encryption?: Encryption;
  /**
   * @member {NetworkRuleSet} [networkRuleSet] Network rule set
   */
  networkRuleSet?: NetworkRuleSet;
  /**
   * @member {AccessTier} [accessTier] Required for storage accounts where kind
   * = BlobStorage. The access tier used for billing. Possible values include:
   * 'Hot', 'Cool'
   */
  accessTier?: AccessTier;
  /**
   * @member {boolean} [enableHttpsTrafficOnly] Allows https traffic only to
   * storage service if sets to true. Default value: false .
   */
  enableHttpsTrafficOnly?: boolean;
}

/**
 * @interface
 * An interface representing Endpoints.
 * The URIs that are used to perform a retrieval of a public blob, queue, or
 * table object.
 *
 */
export interface Endpoints {
  /**
   * @member {string} [blob] Gets the blob endpoint.
   */
  readonly blob?: string;
  /**
   * @member {string} [queue] Gets the queue endpoint.
   */
  readonly queue?: string;
  /**
   * @member {string} [table] Gets the table endpoint.
   */
  readonly table?: string;
  /**
   * @member {string} [file] Gets the file endpoint.
   */
  readonly file?: string;
}

/**
 * @interface
 * An interface representing Resource.
 * Describes a storage resource.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource Id
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   */
  readonly type?: string;
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Tags assigned to a
   * resource; can be used for viewing and grouping a resource (across resource
   * groups).
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing StorageAccount.
 * The storage account.
 *
 * @extends Resource
 */
export interface StorageAccount extends Resource {
  /**
   * @member {Sku} [sku] Gets the SKU.
   */
  readonly sku?: Sku;
  /**
   * @member {Kind} [kind] Gets the Kind. Possible values include: 'Storage',
   * 'StorageV2', 'BlobStorage'
   */
  readonly kind?: Kind;
  /**
   * @member {Identity} [identity] The identity of the resource.
   */
  identity?: Identity;
  /**
   * @member {ProvisioningState} [provisioningState] Gets the status of the
   * storage account at the time the operation was called. Possible values
   * include: 'Creating', 'ResolvingDNS', 'Succeeded'
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {Endpoints} [primaryEndpoints] Gets the URLs that are used to
   * perform a retrieval of a public blob, queue, or table object. Note that
   * Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
   */
  readonly primaryEndpoints?: Endpoints;
  /**
   * @member {string} [primaryLocation] Gets the location of the primary data
   * center for the storage account.
   */
  readonly primaryLocation?: string;
  /**
   * @member {AccountStatus} [statusOfPrimary] Gets the status indicating
   * whether the primary location of the storage account is available or
   * unavailable. Possible values include: 'available', 'unavailable'
   */
  readonly statusOfPrimary?: AccountStatus;
  /**
   * @member {Date} [lastGeoFailoverTime] Gets the timestamp of the most recent
   * instance of a failover to the secondary location. Only the most recent
   * timestamp is retained. This element is not returned if there has never
   * been a failover instance. Only available if the accountType is
   * Standard_GRS or Standard_RAGRS.
   */
  readonly lastGeoFailoverTime?: Date;
  /**
   * @member {string} [secondaryLocation] Gets the location of the
   * geo-replicated secondary for the storage account. Only available if the
   * accountType is Standard_GRS or Standard_RAGRS.
   */
  readonly secondaryLocation?: string;
  /**
   * @member {AccountStatus} [statusOfSecondary] Gets the status indicating
   * whether the secondary location of the storage account is available or
   * unavailable. Only available if the SKU name is Standard_GRS or
   * Standard_RAGRS. Possible values include: 'available', 'unavailable'
   */
  readonly statusOfSecondary?: AccountStatus;
  /**
   * @member {Date} [creationTime] Gets the creation date and time of the
   * storage account in UTC.
   */
  readonly creationTime?: Date;
  /**
   * @member {CustomDomain} [customDomain] Gets the custom domain the user
   * assigned to this storage account.
   */
  readonly customDomain?: CustomDomain;
  /**
   * @member {Endpoints} [secondaryEndpoints] Gets the URLs that are used to
   * perform a retrieval of a public blob, queue, or table object from the
   * secondary location of the storage account. Only available if the SKU name
   * is Standard_RAGRS.
   */
  readonly secondaryEndpoints?: Endpoints;
  /**
   * @member {Encryption} [encryption] Gets the encryption settings on the
   * account. If unspecified, the account is unencrypted.
   */
  readonly encryption?: Encryption;
  /**
   * @member {AccessTier} [accessTier] Required for storage accounts where kind
   * = BlobStorage. The access tier used for billing. Possible values include:
   * 'Hot', 'Cool'
   */
  readonly accessTier?: AccessTier;
  /**
   * @member {boolean} [enableHttpsTrafficOnly] Allows https traffic only to
   * storage service if sets to true. Default value: false .
   */
  enableHttpsTrafficOnly?: boolean;
  /**
   * @member {NetworkRuleSet} [networkRuleSet] Network rule set
   */
  readonly networkRuleSet?: NetworkRuleSet;
}

/**
 * @interface
 * An interface representing StorageAccountKey.
 * An access key for the storage account.
 *
 */
export interface StorageAccountKey {
  /**
   * @member {string} [keyName] Name of the key.
   */
  readonly keyName?: string;
  /**
   * @member {string} [value] Base 64-encoded value of the key.
   */
  readonly value?: string;
  /**
   * @member {KeyPermission} [permissions] Permissions for the key -- read-only
   * or full permissions. Possible values include: 'Read', 'Full'
   */
  readonly permissions?: KeyPermission;
}

/**
 * @interface
 * An interface representing StorageAccountListKeysResult.
 * The response from the ListKeys operation.
 *
 */
export interface StorageAccountListKeysResult {
  /**
   * @member {StorageAccountKey[]} [keys] Gets the list of storage account keys
   * and their properties for the specified storage account.
   */
  readonly keys?: StorageAccountKey[];
}

/**
 * @interface
 * An interface representing StorageAccountRegenerateKeyParameters.
 * The parameters used to regenerate the storage account key.
 *
 */
export interface StorageAccountRegenerateKeyParameters {
  /**
   * @member {string} keyName The name of storage keys that want to be
   * regenerated, possible vaules are key1, key2.
   */
  keyName: string;
}

/**
 * @interface
 * An interface representing StorageAccountUpdateParameters.
 * The parameters that can be provided when updating the storage account
 * properties.
 *
 */
export interface StorageAccountUpdateParameters {
  /**
   * @member {Sku} [sku] Gets or sets the SKU name. Note that the SKU name
   * cannot be updated to Standard_ZRS or Premium_LRS, nor can accounts of
   * those sku names be updated to any other value.
   */
  sku?: Sku;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Gets or sets a list of
   * key value pairs that describe the resource. These tags can be used in
   * viewing and grouping this resource (across resource groups). A maximum of
   * 15 tags can be provided for a resource. Each tag must have a key no
   * greater in length than 128 characters and a value no greater in length
   * than 256 characters.
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {Identity} [identity] The identity of the resource.
   */
  identity?: Identity;
  /**
   * @member {CustomDomain} [customDomain] Custom domain assigned to the
   * storage account by the user. Name is the CNAME source. Only one custom
   * domain is supported per storage account at this time. To clear the
   * existing custom domain, use an empty string for the custom domain name
   * property.
   */
  customDomain?: CustomDomain;
  /**
   * @member {Encryption} [encryption] Provides the encryption settings on the
   * account. The default setting is unencrypted.
   */
  encryption?: Encryption;
  /**
   * @member {AccessTier} [accessTier] Required for storage accounts where kind
   * = BlobStorage. The access tier used for billing. Possible values include:
   * 'Hot', 'Cool'
   */
  accessTier?: AccessTier;
  /**
   * @member {boolean} [enableHttpsTrafficOnly] Allows https traffic only to
   * storage service if sets to true. Default value: false .
   */
  enableHttpsTrafficOnly?: boolean;
  /**
   * @member {NetworkRuleSet} [networkRuleSet] Network rule set
   */
  networkRuleSet?: NetworkRuleSet;
  /**
   * @member {Kind} [kind] Optional. Indicates the type of storage account.
   * Currently only StorageV2 value supported by server. Possible values
   * include: 'Storage', 'StorageV2', 'BlobStorage'
   */
  kind?: Kind;
}

/**
 * @interface
 * An interface representing UsageName.
 * The usage names that can be used; currently limited to StorageAccount.
 *
 */
export interface UsageName {
  /**
   * @member {string} [value] Gets a string describing the resource name.
   */
  readonly value?: string;
  /**
   * @member {string} [localizedValue] Gets a localized string describing the
   * resource name.
   */
  readonly localizedValue?: string;
}

/**
 * @interface
 * An interface representing Usage.
 * Describes Storage Resource Usage.
 *
 */
export interface Usage {
  /**
   * @member {UsageUnit} [unit] Gets the unit of measurement. Possible values
   * include: 'Count', 'Bytes', 'Seconds', 'Percent', 'CountsPerSecond',
   * 'BytesPerSecond'
   */
  readonly unit?: UsageUnit;
  /**
   * @member {number} [currentValue] Gets the current count of the allocated
   * resources in the subscription.
   */
  readonly currentValue?: number;
  /**
   * @member {number} [limit] Gets the maximum count of the resources that can
   * be allocated in the subscription.
   */
  readonly limit?: number;
  /**
   * @member {UsageName} [name] Gets the name of the type of usage.
   */
  readonly name?: UsageName;
}

/**
 * @interface
 * An interface representing AccountSasParameters.
 * The parameters to list SAS credentials of a storage account.
 *
 */
export interface AccountSasParameters {
  /**
   * @member {Services} services The signed services accessible with the
   * account SAS. Possible values include: Blob (b), Queue (q), Table (t), File
   * (f). Possible values include: 'b', 'q', 't', 'f'
   */
  services: Services;
  /**
   * @member {SignedResourceTypes} resourceTypes The signed resource types that
   * are accessible with the account SAS. Service (s): Access to service-level
   * APIs; Container (c): Access to container-level APIs; Object (o): Access to
   * object-level APIs for blobs, queue messages, table entities, and files.
   * Possible values include: 's', 'c', 'o'
   */
  resourceTypes: SignedResourceTypes;
  /**
   * @member {Permissions} permissions The signed permissions for the account
   * SAS. Possible values include: Read (r), Write (w), Delete (d), List (l),
   * Add (a), Create (c), Update (u) and Process (p). Possible values include:
   * 'r', 'd', 'w', 'l', 'a', 'c', 'u', 'p'
   */
  permissions: Permissions;
  /**
   * @member {string} [iPAddressOrRange] An IP address or a range of IP
   * addresses from which to accept requests.
   */
  iPAddressOrRange?: string;
  /**
   * @member {HttpProtocol} [protocols] The protocol permitted for a request
   * made with the account SAS. Possible values include: 'https,http', 'https'
   */
  protocols?: HttpProtocol;
  /**
   * @member {Date} [sharedAccessStartTime] The time at which the SAS becomes
   * valid.
   */
  sharedAccessStartTime?: Date;
  /**
   * @member {Date} sharedAccessExpiryTime The time at which the shared access
   * signature becomes invalid.
   */
  sharedAccessExpiryTime: Date;
  /**
   * @member {string} [keyToSign] The key to sign the account SAS token with.
   */
  keyToSign?: string;
}

/**
 * @interface
 * An interface representing ListAccountSasResponse.
 * The List SAS credentials operation response.
 *
 */
export interface ListAccountSasResponse {
  /**
   * @member {string} [accountSasToken] List SAS credentials of storage
   * account.
   */
  readonly accountSasToken?: string;
}

/**
 * @interface
 * An interface representing ServiceSasParameters.
 * The parameters to list service SAS credentials of a speicific resource.
 *
 */
export interface ServiceSasParameters {
  /**
   * @member {string} canonicalizedResource The canonical path to the signed
   * resource.
   */
  canonicalizedResource: string;
  /**
   * @member {SignedResource} resource The signed services accessible with the
   * service SAS. Possible values include: Blob (b), Container (c), File (f),
   * Share (s). Possible values include: 'b', 'c', 'f', 's'
   */
  resource: SignedResource;
  /**
   * @member {Permissions} [permissions] The signed permissions for the service
   * SAS. Possible values include: Read (r), Write (w), Delete (d), List (l),
   * Add (a), Create (c), Update (u) and Process (p). Possible values include:
   * 'r', 'd', 'w', 'l', 'a', 'c', 'u', 'p'
   */
  permissions?: Permissions;
  /**
   * @member {string} [iPAddressOrRange] An IP address or a range of IP
   * addresses from which to accept requests.
   */
  iPAddressOrRange?: string;
  /**
   * @member {HttpProtocol} [protocols] The protocol permitted for a request
   * made with the account SAS. Possible values include: 'https,http', 'https'
   */
  protocols?: HttpProtocol;
  /**
   * @member {Date} [sharedAccessStartTime] The time at which the SAS becomes
   * valid.
   */
  sharedAccessStartTime?: Date;
  /**
   * @member {Date} [sharedAccessExpiryTime] The time at which the shared
   * access signature becomes invalid.
   */
  sharedAccessExpiryTime?: Date;
  /**
   * @member {string} [identifier] A unique value up to 64 characters in length
   * that correlates to an access policy specified for the container, queue, or
   * table.
   */
  identifier?: string;
  /**
   * @member {string} [partitionKeyStart] The start of partition key.
   */
  partitionKeyStart?: string;
  /**
   * @member {string} [partitionKeyEnd] The end of partition key.
   */
  partitionKeyEnd?: string;
  /**
   * @member {string} [rowKeyStart] The start of row key.
   */
  rowKeyStart?: string;
  /**
   * @member {string} [rowKeyEnd] The end of row key.
   */
  rowKeyEnd?: string;
  /**
   * @member {string} [keyToSign] The key to sign the account SAS token with.
   */
  keyToSign?: string;
  /**
   * @member {string} [cacheControl] The response header override for cache
   * control.
   */
  cacheControl?: string;
  /**
   * @member {string} [contentDisposition] The response header override for
   * content disposition.
   */
  contentDisposition?: string;
  /**
   * @member {string} [contentEncoding] The response header override for
   * content encoding.
   */
  contentEncoding?: string;
  /**
   * @member {string} [contentLanguage] The response header override for
   * content language.
   */
  contentLanguage?: string;
  /**
   * @member {string} [contentType] The response header override for content
   * type.
   */
  contentType?: string;
}

/**
 * @interface
 * An interface representing ListServiceSasResponse.
 * The List service SAS credentials operation response.
 *
 */
export interface ListServiceSasResponse {
  /**
   * @member {string} [serviceSasToken] List service SAS credentials of
   * speicific resource.
   */
  readonly serviceSasToken?: string;
}


/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list Storage operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
}

/**
 * @interface
 * An interface representing the StorageSkuListResult.
 * The response from the List Storage SKUs operation.
 *
 * @extends Array<Sku>
 */
export interface StorageSkuListResult extends Array<Sku> {
}

/**
 * @interface
 * An interface representing the StorageAccountListResult.
 * The response from the List Storage Accounts operation.
 *
 * @extends Array<StorageAccount>
 */
export interface StorageAccountListResult extends Array<StorageAccount> {
}

/**
 * @interface
 * An interface representing the UsageListResult.
 * The response from the List Usages operation.
 *
 * @extends Array<Usage>
 */
export interface UsageListResult extends Array<Usage> {
}

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
export enum ReasonCode {
  QuotaId = 'QuotaId',
  NotAvailableForSubscription = 'NotAvailableForSubscription',
}

/**
 * Defines values for SkuName.
 * Possible values include: 'Standard_LRS', 'Standard_GRS', 'Standard_RAGRS',
 * 'Standard_ZRS', 'Premium_LRS'
 * @readonly
 * @enum {string}
 */
export enum SkuName {
  StandardLRS = 'Standard_LRS',
  StandardGRS = 'Standard_GRS',
  StandardRAGRS = 'Standard_RAGRS',
  StandardZRS = 'Standard_ZRS',
  PremiumLRS = 'Premium_LRS',
}

/**
 * Defines values for SkuTier.
 * Possible values include: 'Standard', 'Premium'
 * @readonly
 * @enum {string}
 */
export enum SkuTier {
  Standard = 'Standard',
  Premium = 'Premium',
}

/**
 * Defines values for Kind.
 * Possible values include: 'Storage', 'StorageV2', 'BlobStorage'
 * @readonly
 * @enum {string}
 */
export enum Kind {
  Storage = 'Storage',
  StorageV2 = 'StorageV2',
  BlobStorage = 'BlobStorage',
}

/**
 * Defines values for Reason.
 * Possible values include: 'AccountNameInvalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
export enum Reason {
  AccountNameInvalid = 'AccountNameInvalid',
  AlreadyExists = 'AlreadyExists',
}

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
export enum KeySource {
  MicrosoftStorage = 'Microsoft.Storage',
  MicrosoftKeyvault = 'Microsoft.Keyvault',
}

/**
 * Defines values for Action.
 * Possible values include: 'Allow'
 * @readonly
 * @enum {string}
 */
export enum Action {
  Allow = 'Allow',
}

/**
 * Defines values for State.
 * Possible values include: 'provisioning', 'deprovisioning', 'succeeded',
 * 'failed', 'networkSourceDeleted'
 * @readonly
 * @enum {string}
 */
export enum State {
  Provisioning = 'provisioning',
  Deprovisioning = 'deprovisioning',
  Succeeded = 'succeeded',
  Failed = 'failed',
  NetworkSourceDeleted = 'networkSourceDeleted',
}

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
export enum Bypass {
  None = 'None',
  Logging = 'Logging',
  Metrics = 'Metrics',
  AzureServices = 'AzureServices',
}

/**
 * Defines values for DefaultAction.
 * Possible values include: 'Allow', 'Deny'
 * @readonly
 * @enum {string}
 */
export enum DefaultAction {
  Allow = 'Allow',
  Deny = 'Deny',
}

/**
 * Defines values for AccessTier.
 * Possible values include: 'Hot', 'Cool'
 * @readonly
 * @enum {string}
 */
export enum AccessTier {
  Hot = 'Hot',
  Cool = 'Cool',
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Creating', 'ResolvingDNS', 'Succeeded'
 * @readonly
 * @enum {string}
 */
export enum ProvisioningState {
  Creating = 'Creating',
  ResolvingDNS = 'ResolvingDNS',
  Succeeded = 'Succeeded',
}

/**
 * Defines values for AccountStatus.
 * Possible values include: 'available', 'unavailable'
 * @readonly
 * @enum {string}
 */
export enum AccountStatus {
  Available = 'available',
  Unavailable = 'unavailable',
}

/**
 * Defines values for KeyPermission.
 * Possible values include: 'Read', 'Full'
 * @readonly
 * @enum {string}
 */
export enum KeyPermission {
  Read = 'Read',
  Full = 'Full',
}

/**
 * Defines values for UsageUnit.
 * Possible values include: 'Count', 'Bytes', 'Seconds', 'Percent',
 * 'CountsPerSecond', 'BytesPerSecond'
 * @readonly
 * @enum {string}
 */
export enum UsageUnit {
  Count = 'Count',
  Bytes = 'Bytes',
  Seconds = 'Seconds',
  Percent = 'Percent',
  CountsPerSecond = 'CountsPerSecond',
  BytesPerSecond = 'BytesPerSecond',
}

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
export enum Services {
  B = 'b',
  Q = 'q',
  T = 't',
  F = 'f',
}

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
export enum SignedResourceTypes {
  S = 's',
  C = 'c',
  O = 'o',
}

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
export enum Permissions {
  R = 'r',
  D = 'd',
  W = 'w',
  L = 'l',
  A = 'a',
  C = 'c',
  U = 'u',
  P = 'p',
}

/**
 * Defines values for HttpProtocol.
 * Possible values include: 'https,http', 'https'
 * @readonly
 * @enum {string}
 */
export enum HttpProtocol {
  Httpshttp = 'https,http',
  Https = 'https',
}

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
export enum SignedResource {
  B = 'b',
  C = 'c',
  F = 'f',
  S = 's',
}