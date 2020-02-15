This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

# `Welcome Devs to my version of the Game`
## `Rock Paper Scissors and Lizard Spock for who knows it.`
---
Firstly, this code is all based on one javascript file, two if you count the welcome page, then as first thing to change here it to separate few things in different files with their own classes or functions.

Secondly, the logic here are all based on ifs/else that could easily be switch/cases but what would be really great is to make it with object literals with their own functions.

So, a` mix of both paragraph would make this code more clean`.

I have made it using react-hooks (new thing from reactjs v16.8+) previous than that I would have to use classes with constructor/super/this/ComponentDidMount/ComponentDidUpdate/etc.

## `How to play`

You can access the game [here](https://digoo.github.io/rockpaperscissors) and I would highly recommend you to use google Chrome to play, Firefox has an odd behavior that tries to run a seach on the page everytime you press a key to play and I haven't tested it using other browsers.

`This game is browser only, that means you cannot play this game using your smartphone without physical keys.`

I might add a resposive version for this game, this is not difficult but I haven't enough time to that.

## `Keys`

keyboard keys 1 to 5 and numlock keys numpad 1 to numpad 5.

- 1 - Rock
- 2 - Paper
- 3 - Scissors
- 4 - Lizard
- 5 - Spock

The keys 4 and 5 are only resposives if you select `The big bang theory` game.

## `Logic`
As soon you select a key and a second player or the computer does the same it will shows you a message of the winner and add a number, higher than before, to the winner side. After this moment I pause the game to avoid players to hit multiple times and break the game instantly and I unpause the game after 2 seconds. `If draw no points are added`.

- `Player`: Each player will have to select their own hand.
- `Computer`: Player 1 select a hand and the computer will select a random one based on math.
- `AdvComputer`: That is the tatical computer it will always select the previous hand that could beat you but it will only select `rock paper or scissors`.

The `BestOf`: Always an odd number higher than 1 ( - shh: 1 breaks the game) and can be set on the welcome page, if you choose `best of 3` and player one `scores two` then the game will declare it `the winner`, `best of 5` if the player `scores 3` it will be declared `winner` and so on.

---

# `About the game rules`

You have been asked to create a simple application to process a match of [ rock, paper, scissors ](http://en.wikipedia.org/wiki/Rock-paper-scissors).


## `Game Rules`
A match takes place between 2 players and is made up of 3 games, with the overall winner being the player who wins the most games.

Each game consists of both players selecting one of Rock, Paper or Scissors; the game winner is determined based on the following rules:

- Rock beats scissors
- Scissors beats paper
- Paper beats rock


## `Requirements`
Your application `must` support three types of player:

-	`Human Player`

The user must be prompted for a selection of Rock, Paper or Scissors for each turn
-	`Random Computer Player`

The random computer player should automatically select one of Rock, Paper or Scissors at random for each turn
-	`Tactical Computer Player`

The tactical computer player should always select the choice that would have beaten its last choice, e.g. if it played Scissors in game 2, it should play Rock in game 3. It does not need to take the other player’s move into account.

You `must` include a user interface of some kind, but the choice of how this is implemented is up to you: console application, web site, WPF application, etc. – any are acceptable.

You `must` demonstrate that your solution implements all the above requirements correctly.

You `must` write high-quality code, using whatever principles you decide appropriate, and list any refactoring that you could make in the future.

You `must` use any high-level language – C#, Java, JavaScript, Python, PHP are all acceptable.

## `Extensions`

The following are some of the possible extensions that may be made to the application at a later date.  You do not need to implement these, but they should be considered in your design.

-	`New player types:` we may want to add new computer player implementations as tactics improve
-	`Longer matches:` we may want to change the match format to “best of 5” at a later date
-	`New “moves”:` we may expand the possible moves that each player can make (e.g. [Rock, Paper, Scissors, Lizard, Spock](https://www.youtube.com/watch?v=iapcKVn7DdY))

---

About the four `must` above:

1. Implemented using javascript and ReactJS
2. I have shown all solutions plus `two` extentions. (Missed only New player types)
3. Wrote it using high-quality code, and at the beginner of this readme stated the refactoring that I could make in the future.
4. Languaged used: JavaScript.
