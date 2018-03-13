"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const storageManagementClient_1 = require("../lib/storageManagementClient");
const msrestAuth = require("ms-rest-nodeauth");
const clientId = process.env["CLIENT_ID"] || "";
const secret = process.env["APPLICATION_SECRET"] || "";
const domain = process.env["DOMAIN"] || "";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"] || "";
const rg = "amar";
const accountName = "testacc7561";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = yield msrestAuth.loginWithServicePrincipalSecret(clientId, secret, domain);
        const client = new storageManagementClient_1.StorageManagementClient(credentials, subscriptionId);
        let createParameters = {
            kind: storageManagementClient_1.StorageManagementModels.Kind.StorageV2,
            location: "westus",
            sku: {
                name: storageManagementClient_1.StorageManagementModels.SkuName.StandardGRS
            }
        };
        const storageAccount = yield client.storageAccounts.create(rg, accountName, createParameters);
        console.log("Created storage account: ", storageAccount);
        let accountInfo = yield client.storageAccounts.getProperties(rg, accountName);
        console.log("Get storage account: ", accountInfo);
    });
}
main().catch((err) => {
    console.log("An error occurred: ", err);
});
//# sourceMappingURL=simple.js.map