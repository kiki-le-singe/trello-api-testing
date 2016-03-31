# Testing Trello API

## Requirements

 * [Get your Application Key](https://trello.com/app-key)

## Installation

```shell
$ git clone git@github.com:kiki-le-singe/testing-trello-api.git
$ cd testing-trello-api
$ npm install
```

> Do not forget to replace some configuration keys with your own informations.

~/config/index.js :

```js
// Trello Configuration
TRELLO: {
  KEY: '<KEY>',
  TOKEN: '<TOKEN>',
}
```

~/src/config/trello.json :

```js
// Trello Configuration
{
  "list": {
    "id": "<IDList>"
  }
}
```

## Official Documentation

* [Trello - Get started](https://developers.trello.com/get-started/start-building)
* [Trello's API](https://developers.trello.com/advanced-reference)
* [Authorizing a Client](https://developers.trello.com/authorize)
* [Webhooks's API](https://developers.trello.com/apis/webhooks)

## Help and Resources

* [Connecting to the Trello API](https://larry-price.com/blog/2014/03/18/connecting-to-the-trello-api)

## Tips

> How to use Webhooks on localhost?

* [Configuring Your Server](https://developer.github.com/webhooks/configuring/)
* [Exposing Callback and Webhook URLs on Localhost](https://www.lullabot.com/articles/exposing-callback-and-webhook-urls-on-localhost)
