# webmethods.io-Bigcommerce-Community-Connector
This is a Webmethods.io community connector for [Bigcommerce](https://www.bigcommerce.com/dm/start-online-store-offer/?irgwc=1&utm_term=yqP1P028kxyOW95wUx0Mo3QwUknVvazefwKTxU0&utm_content=504907&utm_campaign=56411&utm_medium=affiliates&utm_source=ImpactRadius), a ecommerce platform which allows you to create an online store. The connector uses the [Bigcommerce REST API](https://developer.bigcommerce.com/api-docs) to make HTTP requests to access or modify a resource. The actions supported by this community connector are:
#### 1. [Add a Coupon to a product](https://developer.bigcommerce.com/api-reference/marketing/marketing-api)
#### 2. [Add an order](https://developer.bigcommerce.com/api-reference/orders/orders-api)
#### 3. [Create a new product](https://developer.bigcommerce.com/api-reference/catalog/catalog-api)
#### 4.  [Add Review to a Product](https://developer.bigcommerce.com/api-reference/marketing/store-content-api)
#### 5. [Get details of all the orders](https://developer.bigcommerce.com/api-docs/orders/orders-api-overview)
#### 6. [Get details of all the product](https://developer.bigcommerce.com/api-reference/catalog/catalog-api)
#### 7. [Get details of Channels](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api)
#### 8. [Get Details Of The Store](https://developer.bigcommerce.com/api-reference/store-management/store-information-api)
#### 9. [Get List Of Transaction Of A Order](https://developer.bigcommerce.com/api-reference/orders/orders-transactions-api)
#### 10. [Get Product Images](https://developer.bigcommerce.com/api-reference/catalog/catalog-api)
#### 11. [Get Review of a specific product](https://developer.bigcommerce.com/api-reference/marketing/store-content-api)
#### 12. [Get Shipping Address](https://developer.bigcommerce.com/api-reference/store-management/shipping-api)
#### 13. [Get Single Customer Details](https://developer.bigcommerce.com/api-reference/customer-subscribers/customers-api)
#### 14. [Get Themes](https://developer.bigcommerce.com/api-reference/storefront/themes-api)
#### 15. [Get Variant Options of a product](https://developer.bigcommerce.com/api-reference/catalog/catalog-api)
#### 16.[Get details of all the customers](https://developer.bigcommerce.com/api-reference/customer-subscribers/customers-api)
#### 17. [View All Coupon](https://developer.bigcommerce.com/api-reference/marketing/marketing-api)
Learn about other supported actions [here](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication).
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
### Getting the Access token , Store Hash and Client Secret 
To generate store API Credentials, log into the store, then:

Navigate to Advanced Settings > API Accounts > Create API Account.
Give the account a name (internal only).
In the OAuth Scopes section, select the minimum scopes the app will require.
Select Save.
A successful save will display a pop-up containing the API credentials that your app will need to run authenticated requests – your Client ID and Access Token. A .txt file containing the same credentials will (on most browsers) automatically download to your computer. This file also contains the base API Path for your store, preconfigured for the v3 API.

The base api path will look something like this: https://api.bigcommerce.com/stores/123456/. In the base path, the store hash is the 123456. This will be used to make API requests.
### Installing
1. Clone the repo `https://github.com/yuvanmytri/webmethods.io-BambooHR-Community-Connector.git`.
2. Run `npm install -g @webmethodsio/wmiocli`.
3. Login to your webmethods.io tenant using `wmio login`.
4. Execute `wmio init` to get started.
5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.

## Running the tests
To test, you can execute `wmio test`.

## Deployment
Execute `wmio deploy` to deploy this connector to your webmethods.io tenant. And `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.

![BambooHR Connector](https://user-images.githubusercontent.com/16189220/74911246-3b403780-53e2-11ea-8789-be34e42a1d4f.png)

## Built With
Node v8.14.0 and [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI.

## Contributors
[Anshuman Saikia](https://github.com/anshu96788) |
[Dipankar Dutta](https://github.com/DipankarDDUT) |
[Nawajish Laskar](https://github.com/Nawajish)

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/SoftwareAG/webmethods-microservicesruntime-samples/blob/master/LICENSE) file for details
