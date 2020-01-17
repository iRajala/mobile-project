var server = require('ws').Server;
var s = new server({ port: 5001 });

var DECK = [];
var DECK_INDEX = 0;
var CARDS_ON_TABLE = [];
var SUIT_ON_TABLE = null;

const MESSAGE_TYPES = {
  EVENT: 'event',
  NOTIFY: 'notify',
  SETTING: 'setting'
};

const SETTINGS = {
  INIT: 'init',
};

const EVENTS = {
  START: 'start',
  SHARE_CARDS: 'shareCards',
  START_TURN: 'startTurn',
  DRAW_CARD: 'drawCard',
  PUT_CARD: 'putCard',
};

const SUITS = {
  PIKES: 'pikes',
  //CLOVERS: 'clovers',
  //HEARTS: 'hearts',
  //TILES: 'tiles'
};

class Card {
  constructor(suit, number) {
    this.suit = suit;
    this.number = number;
  }
};

class Message {
  constructor(sender, type, action, message, data) {
    this.sender = sender;
    this.type = type;
    this.action = action;
    this.message = message;
    this.data = data;
  }
};

s.on('connection', function(ws) {
  ws.on('message', function(message) {
    let response = Object.assign(new Message, JSON.parse(message));

    switch(response.type) {
      case MESSAGE_TYPES.SETTING: {
        handleSetting(response);
      }break;
      case MESSAGE_TYPES.EVENT: {
        handleEvent(response);
      }break;
      case MESSAGE_TYPES.NOTIFY: {
        sendAll(response);
      }break;
    }
  });

  function handleSetting(response) {
    if (response.action == SETTINGS.INIT) {
      var clientCount = s.clients.size;
      ws.send(JSON.stringify(new Message("Server", MESSAGE_TYPES.SETTING, SETTINGS.INIT, `Client registered as ${clientCount}`, clientCount)));
      sendAll(JSON.stringify(new Message("Server", MESSAGE_TYPES.NOTIFY, null, `Client ${clientCount} joined`, null)));
    }
  }

  function handleEvent(response) {
    if (response.action == EVENTS.START) {
      initDeck();
      shareCards();
    } else if (response.action == EVENTS.DRAW_CARD) {
      console.log("Draw card");
    } else if (response.action == EVENTS.PUT_CARD) {
      sendAll(JSON.stringify(new Message("Server", MESSAGE_TYPES.NOTIFY, null, `Client ${response.sender} puts a card (${response.data.suit}:${response.data.number}) onto table`, null)));
      drawCard();
      sendAll(JSON.stringify(new Message("Server", MESSAGE_TYPES.NOTIFY, null, `Client ${response.sender} draws a new card`, null)));
    }
  };

  function sendAll(message) {
    s.clients.forEach(function e(client) {
      client.send(message);
    });
  };

  function shareCards() {
    let cardCount = 5;
    s.clients.forEach(function e(client) {
      let cards = [];
      for (let i = DECK_INDEX; i < DECK_INDEX + cardCount; i++) {
        cards.push(DECK[i]);
      }
      client.send(JSON.stringify(new Message("Server", MESSAGE_TYPES.EVENT, EVENTS.SHARE_CARDS, "Cards updated", cards)));
      DECK_INDEX += cardCount;
    });
  };

  function drawCard() {
    if (DECK_INDEX < DECK.length) {
      let card = DECK[DECK_INDEX++];
      let message = JSON.stringify(new Message("Server", MESSAGE_TYPES.EVENT, EVENTS.DRAW_CARD, "New card draw", card));
      ws.send(message);
    } else {
      sendAll(JSON.stringify(new Message("Server", MESSAGE_TYPES.NOTIFY, null, `Out of cards`, null)));
    }
  };

  ws.on('close', function() {
    console.log("Lost connection to a client");
    sendAll(JSON.stringify(new Message("Server", MESSAGE_TYPES.NOTIFY, null, `One client left`, null)));
  });

  console.log("One more client connected");
});

function initDeck() {
  DECK = [];
  DECK_INDEX = 0;
  Object.values(SUITS).forEach(suit => {
    console.log(suit);
    for (let i = 1; i <= 13; i++) {
      let card = new Card(suit, i.toString());
      if (i == 1) {
        card.number = 'A';
      } else if (i == 11) {
        card.number = 'J';
      } else if (i == 12) {
        card.number = 'Q';
      } else if (i == 13) {
        card.number = 'K';
      }
      DECK.push(card);
    }
  });
  DECK = shuffleDeck(DECK);
}

function shuffleDeck(deck) {
  let j, x, i;
  let deckSize = deck.length;
  for (i = deckSize - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = deck[i];
      deck[i] = deck[j];
      deck[j] = x;
  }
  return deck;
};