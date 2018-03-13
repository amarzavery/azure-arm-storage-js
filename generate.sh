autorest --output-folder=./lib --license-header=MICROSOFT_MIT_NO_VERSION  --package-name=azure-arm-storage-js --package-version=0.1.0 --generate-metadata=true --typescript.azure-arm=true --override-client-name=StorageManagementClient https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master/specification/storage/resource-manager/readme.md
npm install
npm run build