import { StorageManagementClient, StorageManagementModels } from "../lib/storageManagementClient";
import * as msrestAuth from "ms-rest-nodeauth";

const clientId = process.env["CLIENT_ID"] || "";
const secret = process.env["APPLICATION_SECRET"] || "";
const domain = process.env["DOMAIN"] || "";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"] || "";
const rg = "amar";
const accountName = "testacc7561";
async function main(): Promise<void> {
  const credentials = await msrestAuth.loginWithServicePrincipalSecret(clientId, secret, domain);
  const client = new StorageManagementClient(credentials, subscriptionId);
  let createParameters: StorageManagementModels.StorageAccountCreateParameters = {
    kind: StorageManagementModels.Kind.StorageV2,
    location: "westus",
    sku: {
      name: StorageManagementModels.SkuName.StandardGRS
    }
  }
  const storageAccount = await client.storageAccounts.create(rg, accountName, createParameters);
  console.log("Created storage account: ", storageAccount);
  let accountInfo = await client.storageAccounts.getProperties(rg, accountName);
  console.log("Get storage account: ", accountInfo);
}

main().catch((err) => {
  console.log("An error occurred: ", err);
});