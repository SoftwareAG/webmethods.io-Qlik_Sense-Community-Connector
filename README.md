# webmethods.io-Capsule-CRM-Community-Connector
This is a Webmethods.io community connector for [Qlik Sense](https://www.qlik.com/us/trial/qlik-sense-business), a self-service data discovery and analysis tool which focuses on ease of use for the user. The connector uses the following APIs to make HTTP requests to access or modify a resource:
- [Quick Engine REST API](https://help.qlik.com/en-US/sense-developer/February2020/APIs/QIXAPI/index.html?page=38#V1)
- [Qlik Sense Audit Service API](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/CloudAPI/Content/Sense_CloudAPIs/Sense_AuditServiceAPI/AuditServiceAPI-Introduction.htm)
- [Qlik Sense Reload Service API](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/CloudAPI/Content/Sense_CloudAPIs/Sense_ReloadAPI/ReloadServiceAPI-Introduction.htm)
- [Qlik Sense Collections Service API](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/CloudAPI/Content/Sense_CloudAPIs/Sense_CollectionsAPI/CollectionsServiceAPI-Introduction.htm)


![logo](https://user-images.githubusercontent.com/16189220/75766576-62deba80-5d67-11ea-911f-0d55970fee3a.png)


The actions supported by this community connector are:

#### 1. [Create a Collection](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/CollectionsAPI/Content/methods-post-collections.htm)
#### 2. [Get Collection](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/CollectionsAPI/Content/methods-get-collections.htm)
#### 3. [Delete App](https://help.qlik.com/en-US/sense-developer/February2020/APIs/QIXAPI/index.html?page=10)
#### 4. [Get App Info](https://help.qlik.com/en-US/sense-developer/February2020/APIs/QIXAPI/index.html?page=12)
#### 5. [Get App Metadata](https://help.qlik.com/en-US/sense-developer/February2020/APIs/QIXAPI/index.html?page=9)
#### 6. [Get App Privileges](https://help.qlik.com/en-US/sense-developer/February2020/APIs/QIXAPI/index.html?page=26)
#### 7. [Get Details of a Specific Collection](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/CollectionsAPI/Content/methods-get-collections-collectionId.htm)
#### 8. [Reload an App](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/QIXDataReloadAPI/Content/methods-post-v1-reloads.htm)
#### 9. [Retrieve a List of Audit Events](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/AuditAPI/Content/methods-get-audits.htm)
#### 10. [Retrieve a Specific Audit Event](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/AuditAPI/Content/methods-get-audits-id.htm)
#### 11. [Retrieve All Reload Status](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/QIXDataReloadAPI/Content/methods-get-v1-reloads.htm)
#### 12. [Retrieve Reload Status of an App](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/QIXDataReloadAPI/Content/methods-get-v1-reloads-reloadId.htm)

Learn about other supported actions [here](https://help.qlik.com/en-US/sense-developer/February2020/Subsystems/CloudAPI/Content/Sense_CloudAPIs/API%20reference%20for%20cloud%20environments.htm).

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
This connector requires any [Node](https://nodejs.org/dist/) version between 8.14.0 and 10.14.2.

Note: If you have installed any other Node version on your system, you can:
1. Use tools to switch between different versions of Node

  - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
  
  - For Mac, use [homebrew](https://brew.sh/).
2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).

The connector has been built with [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI tool, which must be installed. 

### Getting the API key
API requests are made via HTTPS using the {your-tenant-name}.ap.qlikcloud.com subdomain. Each request must be authenticated with a user's Bearer token containing a valid API key. As this connector is a one-off integration for internal use, we can generate an API key directly from our Qlik Sense account. You can create these from the My Account > Settings > API Keys page in your Qlik Sense account:

![API](https://user-images.githubusercontent.com/16189220/75769152-aa674580-5d6b-11ea-89e9-032bbea5e561.png)

Note: Ensure you have 'Developer' as a role to be able to generate new API keys. To add 'Developer' to your roles, go to My Account > Administration > Users > Edit Roles > Select 'Developer'.

### Installing
1. Clone the repo `https://github.com/SoftwareAG/webmethods.io-Qlik_Sense-Community-Connector.git`.
2. Run `npm install -g @webmethodsio/wmiocli`.
3. Login to your webmethods.io tenant using `wmio login`.
4. Execute `wmio init` to get started.
5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.

## Running the tests
To test, you can execute `wmio test`.

## Deployment
Execute `wmio deploy` to deploy this connector to your webmethods.io tenant. And `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.

![Qlik Connecto](https://user-images.githubusercontent.com/16189220/75769324-fd40fd00-5d6b-11ea-9f4b-385ba2814347.png)

## Built With
Node v8.14.0 and [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI.

## Contributors
[Anshuman Saikia](https://github.com/anshu96788) |
[Dipankar Dutta](https://github.com/DipankarDDUT) |
[Nawajish Laskar](https://github.com/Nawajish)

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/SoftwareAG/webmethods-microservicesruntime-samples/blob/master/LICENSE) file for details
