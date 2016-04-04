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

## Some interesting APIs

### Board

* [Get a board](https://developers.trello.com/advanced-reference/board#get-1-boards-board-id)
* [Get board's lists](https://developers.trello.com/advanced-reference/board#get-1-boards-board-id-lists)
* [Get board's members](https://developers.trello.com/advanced-reference/board#get-1-boards-board-id-members)

### Card

* [Get a card](https://developers.trello.com/advanced-reference/card#get-1-cards-card-id-or-shortlink)
* [Get Card's actions](https://developers.trello.com/advanced-reference/card#get-1-cards-card-id-or-shortlink-actions)
* [Get Card's attachments](https://developers.trello.com/advanced-reference/card#get-1-cards-card-id-or-shortlink-attachments)
* [Get Card's members](https://developers.trello.com/advanced-reference/card#get-1-cards-card-id-or-shortlink-members)
* [Get a Card's specific field](https://developers.trello.com/advanced-reference/card#get-1-cards-card-id-or-shortlink-field)
* [Get a list from a card](https://developers.trello.com/advanced-reference/card#get-1-cards-card-id-or-shortlink-list)

### List

* [Get a list](https://developers.trello.com/advanced-reference/list#get-1-lists-idlist)
* [Get list's cards](https://developers.trello.com/advanced-reference/list#get-1-lists-idlist-cards)

### Member

* [Get a member](https://developers.trello.com/advanced-reference/member#get-1-members-idmember-or-username)
* [Get all member's boards](https://developers.trello.com/advanced-reference/member#get-1-members-idmember-or-username-boards)
* [Get all member's cards](https://developers.trello.com/advanced-reference/member#get-1-members-idmember-or-username-cards)
* [Get filtered member's cards](https://developers.trello.com/advanced-reference/member#get-1-members-idmember-or-username-cards-filter)

### Token

* [Get token's informations](https://developers.trello.com/advanced-reference/token#get-1-tokens-token)

## Help and Resources

* [Connecting to the Trello API](https://larry-price.com/blog/2014/03/18/connecting-to-the-trello-api)

## Tips

> How to use Webhooks on localhost?

* [Configuring Your Server](https://developer.github.com/webhooks/configuring/)
* [Exposing Callback and Webhook URLs on Localhost](https://www.lullabot.com/articles/exposing-callback-and-webhook-urls-on-localhost)
