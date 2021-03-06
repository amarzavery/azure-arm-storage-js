/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import {CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const OperationDisplay = {
  required: false,
  serializedName: 'Operation_display',
  type: {
    name: 'Composite',
    className: 'OperationDisplay',
    modelProperties: {
      provider: {
        required: false,
        serializedName: 'provider',
        type: {
          name: 'String'
        }
      },
      resource: {
        required: false,
        serializedName: 'resource',
        type: {
          name: 'String'
        }
      },
      operation: {
        required: false,
        serializedName: 'operation',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Dimension = {
  required: false,
  serializedName: 'Dimension',
  type: {
    name: 'Composite',
    className: 'Dimension',
    modelProperties: {
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      displayName: {
        required: false,
        serializedName: 'displayName',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const MetricSpecification = {
  required: false,
  serializedName: 'MetricSpecification',
  type: {
    name: 'Composite',
    className: 'MetricSpecification',
    modelProperties: {
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      displayName: {
        required: false,
        serializedName: 'displayName',
        type: {
          name: 'String'
        }
      },
      displayDescription: {
        required: false,
        serializedName: 'displayDescription',
        type: {
          name: 'String'
        }
      },
      unit: {
        required: false,
        serializedName: 'unit',
        type: {
          name: 'String'
        }
      },
      dimensions: {
        required: false,
        serializedName: 'dimensions',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'DimensionElementType',
              type: {
                name: 'Composite',
                className: 'Dimension'
              }
          }
        }
      },
      aggregationType: {
        required: false,
        serializedName: 'aggregationType',
        type: {
          name: 'String'
        }
      },
      fillGapWithZero: {
        required: false,
        serializedName: 'fillGapWithZero',
        type: {
          name: 'Boolean'
        }
      },
      category: {
        required: false,
        serializedName: 'category',
        type: {
          name: 'String'
        }
      },
      resourceIdDimensionNameOverride: {
        required: false,
        serializedName: 'resourceIdDimensionNameOverride',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const ServiceSpecification = {
  required: false,
  serializedName: 'ServiceSpecification',
  type: {
    name: 'Composite',
    className: 'ServiceSpecification',
    modelProperties: {
      metricSpecifications: {
        required: false,
        serializedName: 'metricSpecifications',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'MetricSpecificationElementType',
              type: {
                name: 'Composite',
                className: 'MetricSpecification'
              }
          }
        }
      }
    }
  }
};

export const Operation = {
  required: false,
  serializedName: 'Operation',
  type: {
    name: 'Composite',
    className: 'Operation',
    modelProperties: {
      name: {
        required: false,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      display: {
        required: false,
        serializedName: 'display',
        type: {
          name: 'Composite',
          className: 'OperationDisplay'
        }
      },
      origin: {
        required: false,
        serializedName: 'origin',
        type: {
          name: 'String'
        }
      },
      serviceSpecification: {
        required: false,
        serializedName: 'properties.serviceSpecification',
        type: {
          name: 'Composite',
          className: 'ServiceSpecification'
        }
      }
    }
  }
};

export const StorageAccountCheckNameAvailabilityParameters = {
  required: false,
  serializedName: 'StorageAccountCheckNameAvailabilityParameters',
  type: {
    name: 'Composite',
    className: 'StorageAccountCheckNameAvailabilityParameters',
    modelProperties: {
      name: {
        required: true,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      type: {
        required: true,
        isConstant: true,
        serializedName: 'type',
        defaultValue: 'Microsoft.Storage/storageAccounts',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const SKUCapability = {
  required: false,
  serializedName: 'SKUCapability',
  type: {
    name: 'Composite',
    className: 'SKUCapability',
    modelProperties: {
      name: {
        required: false,
        readOnly: true,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      value: {
        required: false,
        readOnly: true,
        serializedName: 'value',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Restriction = {
  required: false,
  serializedName: 'Restriction',
  type: {
    name: 'Composite',
    className: 'Restriction',
    modelProperties: {
      type: {
        required: false,
        readOnly: true,
        serializedName: 'type',
        type: {
          name: 'String'
        }
      },
      values: {
        required: false,
        readOnly: true,
        serializedName: 'values',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      },
      reasonCode: {
        required: false,
        serializedName: 'reasonCode',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Sku = {
  required: false,
  serializedName: 'Sku',
  type: {
    name: 'Composite',
    className: 'Sku',
    modelProperties: {
      name: {
        required: true,
        serializedName: 'name',
        type: {
          name: 'Enum',
          allowedValues: [ 'Standard_LRS', 'Standard_GRS', 'Standard_RAGRS', 'Standard_ZRS', 'Premium_LRS' ]
        }
      },
      tier: {
        required: false,
        readOnly: true,
        serializedName: 'tier',
        type: {
          name: 'Enum',
          allowedValues: [ 'Standard', 'Premium' ]
        }
      },
      resourceType: {
        required: false,
        readOnly: true,
        serializedName: 'resourceType',
        type: {
          name: 'String'
        }
      },
      kind: {
        required: false,
        readOnly: true,
        serializedName: 'kind',
        type: {
          name: 'Enum',
          allowedValues: [ 'Storage', 'StorageV2', 'BlobStorage' ]
        }
      },
      locations: {
        required: false,
        readOnly: true,
        serializedName: 'locations',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      },
      capabilities: {
        required: false,
        readOnly: true,
        serializedName: 'capabilities',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'SKUCapabilityElementType',
              type: {
                name: 'Composite',
                className: 'SKUCapability'
              }
          }
        }
      },
      restrictions: {
        required: false,
        serializedName: 'restrictions',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'RestrictionElementType',
              type: {
                name: 'Composite',
                className: 'Restriction'
              }
          }
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult = {
  required: false,
  serializedName: 'CheckNameAvailabilityResult',
  type: {
    name: 'Composite',
    className: 'CheckNameAvailabilityResult',
    modelProperties: {
      nameAvailable: {
        required: false,
        readOnly: true,
        serializedName: 'nameAvailable',
        type: {
          name: 'Boolean'
        }
      },
      reason: {
        required: false,
        readOnly: true,
        serializedName: 'reason',
        type: {
          name: 'Enum',
          allowedValues: [ 'AccountNameInvalid', 'AlreadyExists' ]
        }
      },
      message: {
        required: false,
        readOnly: true,
        serializedName: 'message',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const CustomDomain = {
  required: false,
  serializedName: 'CustomDomain',
  type: {
    name: 'Composite',
    className: 'CustomDomain',
    modelProperties: {
      name: {
        required: true,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      useSubDomain: {
        required: false,
        serializedName: 'useSubDomain',
        type: {
          name: 'Boolean'
        }
      }
    }
  }
};

export const EncryptionService = {
  required: false,
  serializedName: 'EncryptionService',
  type: {
    name: 'Composite',
    className: 'EncryptionService',
    modelProperties: {
      enabled: {
        required: false,
        serializedName: 'enabled',
        type: {
          name: 'Boolean'
        }
      },
      lastEnabledTime: {
        required: false,
        readOnly: true,
        serializedName: 'lastEnabledTime',
        type: {
          name: 'DateTime'
        }
      }
    }
  }
};

export const EncryptionServices = {
  required: false,
  serializedName: 'EncryptionServices',
  type: {
    name: 'Composite',
    className: 'EncryptionServices',
    modelProperties: {
      blob: {
        required: false,
        serializedName: 'blob',
        type: {
          name: 'Composite',
          className: 'EncryptionService'
        }
      },
      file: {
        required: false,
        serializedName: 'file',
        type: {
          name: 'Composite',
          className: 'EncryptionService'
        }
      },
      table: {
        required: false,
        readOnly: true,
        serializedName: 'table',
        type: {
          name: 'Composite',
          className: 'EncryptionService'
        }
      },
      queue: {
        required: false,
        readOnly: true,
        serializedName: 'queue',
        type: {
          name: 'Composite',
          className: 'EncryptionService'
        }
      }
    }
  }
};

export const KeyVaultProperties = {
  required: false,
  serializedName: 'KeyVaultProperties',
  type: {
    name: 'Composite',
    className: 'KeyVaultProperties',
    modelProperties: {
      keyName: {
        required: false,
        serializedName: 'keyname',
        type: {
          name: 'String'
        }
      },
      keyVersion: {
        required: false,
        serializedName: 'keyversion',
        type: {
          name: 'String'
        }
      },
      keyVaultUri: {
        required: false,
        serializedName: 'keyvaulturi',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Encryption = {
  required: false,
  serializedName: 'Encryption',
  type: {
    name: 'Composite',
    className: 'Encryption',
    modelProperties: {
      services: {
        required: false,
        serializedName: 'services',
        type: {
          name: 'Composite',
          className: 'EncryptionServices'
        }
      },
      keySource: {
        required: true,
        serializedName: 'keySource',
        defaultValue: 'Microsoft.Storage',
        type: {
          name: 'String'
        }
      },
      keyVaultProperties: {
        required: false,
        serializedName: 'keyvaultproperties',
        type: {
          name: 'Composite',
          className: 'KeyVaultProperties'
        }
      }
    }
  }
};

export const VirtualNetworkRule = {
  required: false,
  serializedName: 'VirtualNetworkRule',
  type: {
    name: 'Composite',
    className: 'VirtualNetworkRule',
    modelProperties: {
      virtualNetworkResourceId: {
        required: true,
        serializedName: 'id',
        type: {
          name: 'String'
        }
      },
      action: {
        required: false,
        serializedName: 'action',
        defaultValue: 'Allow',
        type: {
          name: 'Enum',
          allowedValues: [ 'Allow' ]
        }
      },
      state: {
        required: false,
        serializedName: 'state',
        type: {
          name: 'Enum',
          allowedValues: [ 'provisioning', 'deprovisioning', 'succeeded', 'failed', 'networkSourceDeleted' ]
        }
      }
    }
  }
};

export const IPRule = {
  required: false,
  serializedName: 'IPRule',
  type: {
    name: 'Composite',
    className: 'IPRule',
    modelProperties: {
      iPAddressOrRange: {
        required: true,
        serializedName: 'value',
        type: {
          name: 'String'
        }
      },
      action: {
        required: false,
        serializedName: 'action',
        defaultValue: 'Allow',
        type: {
          name: 'Enum',
          allowedValues: [ 'Allow' ]
        }
      }
    }
  }
};

export const NetworkRuleSet = {
  required: false,
  serializedName: 'NetworkRuleSet',
  type: {
    name: 'Composite',
    className: 'NetworkRuleSet',
    modelProperties: {
      bypass: {
        required: false,
        serializedName: 'bypass',
        defaultValue: 'AzureServices',
        type: {
          name: 'String'
        }
      },
      virtualNetworkRules: {
        required: false,
        serializedName: 'virtualNetworkRules',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'VirtualNetworkRuleElementType',
              type: {
                name: 'Composite',
                className: 'VirtualNetworkRule'
              }
          }
        }
      },
      ipRules: {
        required: false,
        serializedName: 'ipRules',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'IPRuleElementType',
              type: {
                name: 'Composite',
                className: 'IPRule'
              }
          }
        }
      },
      defaultAction: {
        required: true,
        serializedName: 'defaultAction',
        defaultValue: 'Allow',
        type: {
          name: 'Enum',
          allowedValues: [ 'Allow', 'Deny' ]
        }
      }
    }
  }
};

export const Identity = {
  required: false,
  serializedName: 'Identity',
  type: {
    name: 'Composite',
    className: 'Identity',
    modelProperties: {
      principalId: {
        required: false,
        readOnly: true,
        serializedName: 'principalId',
        type: {
          name: 'String'
        }
      },
      tenantId: {
        required: false,
        readOnly: true,
        serializedName: 'tenantId',
        type: {
          name: 'String'
        }
      },
      type: {
        required: true,
        isConstant: true,
        serializedName: 'type',
        defaultValue: 'SystemAssigned',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const StorageAccountCreateParameters = {
  required: false,
  serializedName: 'StorageAccountCreateParameters',
  type: {
    name: 'Composite',
    className: 'StorageAccountCreateParameters',
    modelProperties: {
      sku: {
        required: true,
        serializedName: 'sku',
        type: {
          name: 'Composite',
          className: 'Sku'
        }
      },
      kind: {
        required: true,
        serializedName: 'kind',
        type: {
          name: 'Enum',
          allowedValues: [ 'Storage', 'StorageV2', 'BlobStorage' ]
        }
      },
      location: {
        required: true,
        serializedName: 'location',
        type: {
          name: 'String'
        }
      },
      tags: {
        required: false,
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      },
      identity: {
        required: false,
        serializedName: 'identity',
        type: {
          name: 'Composite',
          className: 'Identity'
        }
      },
      customDomain: {
        required: false,
        serializedName: 'properties.customDomain',
        type: {
          name: 'Composite',
          className: 'CustomDomain'
        }
      },
      encryption: {
        required: false,
        serializedName: 'properties.encryption',
        type: {
          name: 'Composite',
          className: 'Encryption'
        }
      },
      networkRuleSet: {
        required: false,
        serializedName: 'properties.networkAcls',
        type: {
          name: 'Composite',
          className: 'NetworkRuleSet'
        }
      },
      accessTier: {
        required: false,
        serializedName: 'properties.accessTier',
        type: {
          name: 'Enum',
          allowedValues: [ 'Hot', 'Cool' ]
        }
      },
      enableHttpsTrafficOnly: {
        required: false,
        serializedName: 'properties.supportsHttpsTrafficOnly',
        defaultValue: false,
        type: {
          name: 'Boolean'
        }
      }
    }
  }
};

export const Endpoints = {
  required: false,
  serializedName: 'Endpoints',
  type: {
    name: 'Composite',
    className: 'Endpoints',
    modelProperties: {
      blob: {
        required: false,
        readOnly: true,
        serializedName: 'blob',
        type: {
          name: 'String'
        }
      },
      queue: {
        required: false,
        readOnly: true,
        serializedName: 'queue',
        type: {
          name: 'String'
        }
      },
      table: {
        required: false,
        readOnly: true,
        serializedName: 'table',
        type: {
          name: 'String'
        }
      },
      file: {
        required: false,
        readOnly: true,
        serializedName: 'file',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Resource = {
  required: false,
  serializedName: 'Resource',
  type: {
    name: 'Composite',
    className: 'Resource',
    modelProperties: {
      id: {
        required: false,
        readOnly: true,
        serializedName: 'id',
        type: {
          name: 'String'
        }
      },
      name: {
        required: false,
        readOnly: true,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      type: {
        required: false,
        readOnly: true,
        serializedName: 'type',
        type: {
          name: 'String'
        }
      },
      location: {
        required: false,
        serializedName: 'location',
        type: {
          name: 'String'
        }
      },
      tags: {
        required: false,
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      }
    }
  }
};

export const StorageAccount = {
  required: false,
  serializedName: 'StorageAccount',
  type: {
    name: 'Composite',
    className: 'StorageAccount',
    modelProperties: {
      id: {
        required: false,
        readOnly: true,
        serializedName: 'id',
        type: {
          name: 'String'
        }
      },
      name: {
        required: false,
        readOnly: true,
        serializedName: 'name',
        type: {
          name: 'String'
        }
      },
      type: {
        required: false,
        readOnly: true,
        serializedName: 'type',
        type: {
          name: 'String'
        }
      },
      location: {
        required: false,
        serializedName: 'location',
        type: {
          name: 'String'
        }
      },
      tags: {
        required: false,
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      },
      sku: {
        required: false,
        readOnly: true,
        serializedName: 'sku',
        type: {
          name: 'Composite',
          className: 'Sku'
        }
      },
      kind: {
        required: false,
        readOnly: true,
        serializedName: 'kind',
        type: {
          name: 'Enum',
          allowedValues: [ 'Storage', 'StorageV2', 'BlobStorage' ]
        }
      },
      identity: {
        required: false,
        serializedName: 'identity',
        type: {
          name: 'Composite',
          className: 'Identity'
        }
      },
      provisioningState: {
        required: false,
        readOnly: true,
        serializedName: 'properties.provisioningState',
        type: {
          name: 'Enum',
          allowedValues: [ 'Creating', 'ResolvingDNS', 'Succeeded' ]
        }
      },
      primaryEndpoints: {
        required: false,
        readOnly: true,
        serializedName: 'properties.primaryEndpoints',
        type: {
          name: 'Composite',
          className: 'Endpoints'
        }
      },
      primaryLocation: {
        required: false,
        readOnly: true,
        serializedName: 'properties.primaryLocation',
        type: {
          name: 'String'
        }
      },
      statusOfPrimary: {
        required: false,
        readOnly: true,
        serializedName: 'properties.statusOfPrimary',
        type: {
          name: 'Enum',
          allowedValues: [ 'available', 'unavailable' ]
        }
      },
      lastGeoFailoverTime: {
        required: false,
        readOnly: true,
        serializedName: 'properties.lastGeoFailoverTime',
        type: {
          name: 'DateTime'
        }
      },
      secondaryLocation: {
        required: false,
        readOnly: true,
        serializedName: 'properties.secondaryLocation',
        type: {
          name: 'String'
        }
      },
      statusOfSecondary: {
        required: false,
        readOnly: true,
        serializedName: 'properties.statusOfSecondary',
        type: {
          name: 'Enum',
          allowedValues: [ 'available', 'unavailable' ]
        }
      },
      creationTime: {
        required: false,
        readOnly: true,
        serializedName: 'properties.creationTime',
        type: {
          name: 'DateTime'
        }
      },
      customDomain: {
        required: false,
        readOnly: true,
        serializedName: 'properties.customDomain',
        type: {
          name: 'Composite',
          className: 'CustomDomain'
        }
      },
      secondaryEndpoints: {
        required: false,
        readOnly: true,
        serializedName: 'properties.secondaryEndpoints',
        type: {
          name: 'Composite',
          className: 'Endpoints'
        }
      },
      encryption: {
        required: false,
        readOnly: true,
        serializedName: 'properties.encryption',
        type: {
          name: 'Composite',
          className: 'Encryption'
        }
      },
      accessTier: {
        required: false,
        readOnly: true,
        serializedName: 'properties.accessTier',
        type: {
          name: 'Enum',
          allowedValues: [ 'Hot', 'Cool' ]
        }
      },
      enableHttpsTrafficOnly: {
        required: false,
        serializedName: 'properties.supportsHttpsTrafficOnly',
        defaultValue: false,
        type: {
          name: 'Boolean'
        }
      },
      networkRuleSet: {
        required: false,
        readOnly: true,
        serializedName: 'properties.networkAcls',
        type: {
          name: 'Composite',
          className: 'NetworkRuleSet'
        }
      }
    }
  }
};

export const StorageAccountKey = {
  required: false,
  serializedName: 'StorageAccountKey',
  type: {
    name: 'Composite',
    className: 'StorageAccountKey',
    modelProperties: {
      keyName: {
        required: false,
        readOnly: true,
        serializedName: 'keyName',
        type: {
          name: 'String'
        }
      },
      value: {
        required: false,
        readOnly: true,
        serializedName: 'value',
        type: {
          name: 'String'
        }
      },
      permissions: {
        required: false,
        readOnly: true,
        serializedName: 'permissions',
        type: {
          name: 'Enum',
          allowedValues: [ 'Read', 'Full' ]
        }
      }
    }
  }
};

export const StorageAccountListKeysResult = {
  required: false,
  serializedName: 'StorageAccountListKeysResult',
  type: {
    name: 'Composite',
    className: 'StorageAccountListKeysResult',
    modelProperties: {
      keys: {
        required: false,
        readOnly: true,
        serializedName: 'keys',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'StorageAccountKeyElementType',
              type: {
                name: 'Composite',
                className: 'StorageAccountKey'
              }
          }
        }
      }
    }
  }
};

export const StorageAccountRegenerateKeyParameters = {
  required: false,
  serializedName: 'StorageAccountRegenerateKeyParameters',
  type: {
    name: 'Composite',
    className: 'StorageAccountRegenerateKeyParameters',
    modelProperties: {
      keyName: {
        required: true,
        serializedName: 'keyName',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const StorageAccountUpdateParameters = {
  required: false,
  serializedName: 'StorageAccountUpdateParameters',
  type: {
    name: 'Composite',
    className: 'StorageAccountUpdateParameters',
    modelProperties: {
      sku: {
        required: false,
        serializedName: 'sku',
        type: {
          name: 'Composite',
          className: 'Sku'
        }
      },
      tags: {
        required: false,
        serializedName: 'tags',
        type: {
          name: 'Dictionary',
          value: {
              required: false,
              serializedName: 'stringElementType',
              type: {
                name: 'String'
              }
          }
        }
      },
      identity: {
        required: false,
        serializedName: 'identity',
        type: {
          name: 'Composite',
          className: 'Identity'
        }
      },
      customDomain: {
        required: false,
        serializedName: 'properties.customDomain',
        type: {
          name: 'Composite',
          className: 'CustomDomain'
        }
      },
      encryption: {
        required: false,
        serializedName: 'properties.encryption',
        type: {
          name: 'Composite',
          className: 'Encryption'
        }
      },
      accessTier: {
        required: false,
        serializedName: 'properties.accessTier',
        type: {
          name: 'Enum',
          allowedValues: [ 'Hot', 'Cool' ]
        }
      },
      enableHttpsTrafficOnly: {
        required: false,
        serializedName: 'properties.supportsHttpsTrafficOnly',
        defaultValue: false,
        type: {
          name: 'Boolean'
        }
      },
      networkRuleSet: {
        required: false,
        serializedName: 'properties.networkAcls',
        type: {
          name: 'Composite',
          className: 'NetworkRuleSet'
        }
      },
      kind: {
        required: false,
        serializedName: 'kind',
        type: {
          name: 'Enum',
          allowedValues: [ 'Storage', 'StorageV2', 'BlobStorage' ]
        }
      }
    }
  }
};

export const UsageName = {
  required: false,
  serializedName: 'UsageName',
  type: {
    name: 'Composite',
    className: 'UsageName',
    modelProperties: {
      value: {
        required: false,
        readOnly: true,
        serializedName: 'value',
        type: {
          name: 'String'
        }
      },
      localizedValue: {
        required: false,
        readOnly: true,
        serializedName: 'localizedValue',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const Usage = {
  required: false,
  serializedName: 'Usage',
  type: {
    name: 'Composite',
    className: 'Usage',
    modelProperties: {
      unit: {
        required: false,
        readOnly: true,
        serializedName: 'unit',
        type: {
          name: 'Enum',
          allowedValues: [ 'Count', 'Bytes', 'Seconds', 'Percent', 'CountsPerSecond', 'BytesPerSecond' ]
        }
      },
      currentValue: {
        required: false,
        readOnly: true,
        serializedName: 'currentValue',
        type: {
          name: 'Number'
        }
      },
      limit: {
        required: false,
        readOnly: true,
        serializedName: 'limit',
        type: {
          name: 'Number'
        }
      },
      name: {
        required: false,
        readOnly: true,
        serializedName: 'name',
        type: {
          name: 'Composite',
          className: 'UsageName'
        }
      }
    }
  }
};

export const AccountSasParameters = {
  required: false,
  serializedName: 'AccountSasParameters',
  type: {
    name: 'Composite',
    className: 'AccountSasParameters',
    modelProperties: {
      services: {
        required: true,
        serializedName: 'signedServices',
        type: {
          name: 'String'
        }
      },
      resourceTypes: {
        required: true,
        serializedName: 'signedResourceTypes',
        type: {
          name: 'String'
        }
      },
      permissions: {
        required: true,
        serializedName: 'signedPermission',
        type: {
          name: 'String'
        }
      },
      iPAddressOrRange: {
        required: false,
        serializedName: 'signedIp',
        type: {
          name: 'String'
        }
      },
      protocols: {
        required: false,
        serializedName: 'signedProtocol',
        type: {
          name: 'Enum',
          allowedValues: [ 'https,http', 'https' ]
        }
      },
      sharedAccessStartTime: {
        required: false,
        serializedName: 'signedStart',
        type: {
          name: 'DateTime'
        }
      },
      sharedAccessExpiryTime: {
        required: true,
        serializedName: 'signedExpiry',
        type: {
          name: 'DateTime'
        }
      },
      keyToSign: {
        required: false,
        serializedName: 'keyToSign',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const ListAccountSasResponse = {
  required: false,
  serializedName: 'ListAccountSasResponse',
  type: {
    name: 'Composite',
    className: 'ListAccountSasResponse',
    modelProperties: {
      accountSasToken: {
        required: false,
        readOnly: true,
        serializedName: 'accountSasToken',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const ServiceSasParameters = {
  required: false,
  serializedName: 'ServiceSasParameters',
  type: {
    name: 'Composite',
    className: 'ServiceSasParameters',
    modelProperties: {
      canonicalizedResource: {
        required: true,
        serializedName: 'canonicalizedResource',
        type: {
          name: 'String'
        }
      },
      resource: {
        required: true,
        serializedName: 'signedResource',
        type: {
          name: 'String'
        }
      },
      permissions: {
        required: false,
        serializedName: 'signedPermission',
        type: {
          name: 'String'
        }
      },
      iPAddressOrRange: {
        required: false,
        serializedName: 'signedIp',
        type: {
          name: 'String'
        }
      },
      protocols: {
        required: false,
        serializedName: 'signedProtocol',
        type: {
          name: 'Enum',
          allowedValues: [ 'https,http', 'https' ]
        }
      },
      sharedAccessStartTime: {
        required: false,
        serializedName: 'signedStart',
        type: {
          name: 'DateTime'
        }
      },
      sharedAccessExpiryTime: {
        required: false,
        serializedName: 'signedExpiry',
        type: {
          name: 'DateTime'
        }
      },
      identifier: {
        required: false,
        serializedName: 'signedIdentifier',
        constraints: {
          MaxLength: 64
        },
        type: {
          name: 'String'
        }
      },
      partitionKeyStart: {
        required: false,
        serializedName: 'startPk',
        type: {
          name: 'String'
        }
      },
      partitionKeyEnd: {
        required: false,
        serializedName: 'endPk',
        type: {
          name: 'String'
        }
      },
      rowKeyStart: {
        required: false,
        serializedName: 'startRk',
        type: {
          name: 'String'
        }
      },
      rowKeyEnd: {
        required: false,
        serializedName: 'endRk',
        type: {
          name: 'String'
        }
      },
      keyToSign: {
        required: false,
        serializedName: 'keyToSign',
        type: {
          name: 'String'
        }
      },
      cacheControl: {
        required: false,
        serializedName: 'rscc',
        type: {
          name: 'String'
        }
      },
      contentDisposition: {
        required: false,
        serializedName: 'rscd',
        type: {
          name: 'String'
        }
      },
      contentEncoding: {
        required: false,
        serializedName: 'rsce',
        type: {
          name: 'String'
        }
      },
      contentLanguage: {
        required: false,
        serializedName: 'rscl',
        type: {
          name: 'String'
        }
      },
      contentType: {
        required: false,
        serializedName: 'rsct',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const ListServiceSasResponse = {
  required: false,
  serializedName: 'ListServiceSasResponse',
  type: {
    name: 'Composite',
    className: 'ListServiceSasResponse',
    modelProperties: {
      serviceSasToken: {
        required: false,
        readOnly: true,
        serializedName: 'serviceSasToken',
        type: {
          name: 'String'
        }
      }
    }
  }
};

export const OperationListResult = {
  required: false,
  serializedName: 'OperationListResult',
  type: {
    name: 'Composite',
    className: 'OperationListResult',
    modelProperties: {
      value: {
        required: false,
        serializedName: '',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'OperationElementType',
              type: {
                name: 'Composite',
                className: 'Operation'
              }
          }
        }
      }
    }
  }
};

export const StorageSkuListResult = {
  required: false,
  serializedName: 'StorageSkuListResult',
  type: {
    name: 'Composite',
    className: 'StorageSkuListResult',
    modelProperties: {
      value: {
        required: false,
        readOnly: true,
        serializedName: '',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'SkuElementType',
              type: {
                name: 'Composite',
                className: 'Sku'
              }
          }
        }
      }
    }
  }
};

export const StorageAccountListResult = {
  required: false,
  serializedName: 'StorageAccountListResult',
  type: {
    name: 'Composite',
    className: 'StorageAccountListResult',
    modelProperties: {
      value: {
        required: false,
        readOnly: true,
        serializedName: '',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'StorageAccountElementType',
              type: {
                name: 'Composite',
                className: 'StorageAccount'
              }
          }
        }
      }
    }
  }
};

export const UsageListResult = {
  required: false,
  serializedName: 'UsageListResult',
  type: {
    name: 'Composite',
    className: 'UsageListResult',
    modelProperties: {
      value: {
        required: false,
        serializedName: '',
        type: {
          name: 'Sequence',
          element: {
              required: false,
              serializedName: 'UsageElementType',
              type: {
                name: 'Composite',
                className: 'Usage'
              }
          }
        }
      }
    }
  }
};
