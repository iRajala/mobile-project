# API interfaces

Updated: 9.12.2019, 20:35

## Login

Register new player.

```json
{
    sender: null,
    type: "setting",
    action: "login",
    message: null,
    data: nickname
}

```

1. `{sender: "Server", type: "setting", action: "login", message: "Joined as nickname", data: Player(client)}`
2. `{sender: "Server", type: notify, action: null, message: "nickname joined", data: null}`

## Response when client tries to login twice

>`{sender: "Server", type: "notify", action: null, message: "You have already connected", data: null}`

## Response when unauthenticated client

>`{sender: "Server", type: "notify", action: null, message: "Unauthenticated client. Register first please", data: null}`


## Chat

Player sends a message to everyone.

```json
{
    sender: nickname,
    type: "notify",
    action: "",
    message: textMessage,
    data: ""
}

```

1. `{sender: "You", type: "notify", action: null, message: "textMessage", data: null}`
2. `{sender: "nickname", type: "notify", action: null, message: "textMessage", data: null}`


## Start game

Start a new game when >= 2 players registered.

```json
{
    sender: nickname,
    type: "game",
    action: "start",
    message: null,
    data: null
}

```

1. `{sender: "Server", type: "game", action: "start", message: "A new game is about to start...", data: null}`
2. `{sender: "Server", type: "event", action: "shareCards", message: "Cards updated", data: Array(Card)}`
3. `{sender: "Server", type: "event", action: "nextTurn", message: "It's nickname's turn", data: nickname}`
4. `{sender: "Server", type: "event", action: "startTurn", message: "It's YOUR turn", data: nickname}`


## Put card on table

???.

```json
{
    sender: nickname,
    type: "event",
    action: "putCard",
    message: null,
    data: Card(card)
}

```

1. `{sender: "Server", type: "event", action: "putCard", message: "Put card.suit|card.number on table", data: Card(card)}`
2. `{sender: "Server", type: "event", action: "cardOnTable", message: "username puts a card card.suit|card.number on the table", data: Card(card)}`
2. `{sender: "Server", type: "event", action: "nextTurn", message: "It's username's turn", data: Player(client)}`


## Response when it's not player's turn

>`{sender: "Server", type: "notify", action: null, message: "Waiting for more players...", data: null}`


## Response when player doesn't own the card

>`{sender: "Server", type: "notify", action: null, message: "You don't own requested card", data: null}`


## Check winner

Compare cards on the table and set the winner. Winner starts the next round.

1. `{sender: "Server", type: "notify", action: null, message: "nickname wins the round!", data: null}`
2. `{sender: "Server", type: "game", action: "start", message: "A new round is about to start...", data: null}`
3. `{sender: "Server", type: "event", action: "nextTurn", message: "It's nickname's turn", data: Player(client)`
4. `{sender: "Server", type: "event", action: "startTurn", message: "It's YOUR turn", data: null}`

## Last round

(work in progress) calculate points. Game over if best of three winning. Otherwise random player starts a new round.

1. `{sender: "Server", type: "notify", action: null, message: "username wins the round!", data: null}`
2. `{sender: "Server", type: "game", action: "start", message: "A new round is about to start...", data: null}`
3. `{sender: "Server", type: "event", action: "shareCards", message: "Cards updated", data: Array(Card)}`
4. `{sender: "Server", type: "event", action: "nextTurn", message: "It's Teppo's turn", data: Player(client)}`


1. `{sender: "Server", type: "game", action: "end", message: "Game Over", data: GAME DATA???}`


## Player commands to end game

(work in progress) ???.

```json
{
    sender: null,
    type: "game",
    action: "end",
    message: null,
    data: null
}

```

1. `{sender: "Server", type: "game", action: "end", message: "Game Over", data: GAME DATA???`


## Player disconnects

(work in progress) ???.

```json
{
    sender: nickname,
    type: "setting",
    action: "disconnect",
    message: null,
    data: null
}

```

1. `{sender: "Server", type: "setting", action: "disconnect", message: "Disconnected...", data: null}`
2. `{sender: "Server", type: "game", action: "pause", message: "Game paused. username disconnected...", data: null}`

## Player reconnects

(work in progress) ???.

```json
{
    sender: null,
    type: "setting",
    action: "reconnect",
    message: null,
    data: nickname
}

```

1. `{sender: "Server", type: "setting", action: "reconnect", message: "Reconnected...", data: Player(client)`
2. `{sender: "Server", type: "notify", action: null, message: "nickname reconnected...", data: null`
3. `{sender: "Server", type: "event", action: "shareCards", message: "Cards updated", data: Array(Card)}`
4. `{sender: "Server", type: "event", action: "cardOnTable", message: "nickname puts a card card.suit|card.number on table", data: Card(card)}`(forEach)
5. `{sender: "Server", type: "game", action: "unpause", message: "Game is about to continue...", data: null}`
6. `{sender: "Server", type: "event", action: "nextTurn", message: "It's nickname's turn", data: Player(client)}`
7. `{sender: "Server", type: "event", action: "startTurn", message: "It's YOUR turn", data: null}`
 

## Player tries to reconnect with other player clinet nickname

???.

>`{sender: "Server", type: "notify", action: null, message: "Can't reconnect with nickname that is in use...", data: null}`

## Player tries to reconnect with nonexistent nickname

???.

>`{sender: "Server", type: "notify", action: null, message: "Player with nickname username not found", data: null}`

## Pause the game

(work in progress) ???.

## Player tries to call action while the game is paused

>`{sender: "Server", type: "notify", action: null, message: "Game is paused, please wait", data: null}`

## Unpause the game

(work in progress) ???.

## Player logs out

(work in progress) ???.

```json
{
    sender: nickname,
    type: "setting",
    action: "logout",
    message: "",
    data: ""
}

```

1. `{sender: "Server", type: "game", action: "end", message: "nicknme logged out...", data: null`
