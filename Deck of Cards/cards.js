// Card class
class Card{
    constructor(suit, rank){
        this.suit = suit;
        this.rank = rank;
    }
}

// Deck class
// It will have cards in it, shuffle, deal card, reset
class Deck {
    constructor(){
        this.cards = [];
        this.ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Page", "Knight", "King", "Queen"];
        this.suits = ["Wands", "Swords", "Pentacles", "Cups"];
    }
    makeDeck(){
    
        for(let suit of this.suits){
            for(let rank of this.ranks){
                this.cards.push(new Card(suit, rank))
            }
        }
    }
    shuffle() {
        for(let i=0; i<this.cards.length; i++){
            let random_index = Math.floor(Math.random()*this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[random_index];
            this.cards[random_index] = temp;
        }
    }
    deal() {
        return this.cards.pop();
    }
    reset () {
        this.cards = []
        this.makeDeck();
    }

}
class Player extends Deck {
    constructor(name){
        super()
        this.name = name
        this.hand = []
    }
    makeHand() {
        super.reset()
        super.shuffle()
        for(let d=0; d<4; d++){
            let draw = super.deal()
            this.hand.push(draw)
        }
    }
    discard(chosen) {
        // return this.hand.splice(chosen, 1)
        return this.hand.pop()
    }
}

let my_deck = new Deck()
my_deck.makeDeck()
my_deck.shuffle()
console.log(my_deck.cards)

let player1 = new Player("Scotty")
player1.makeHand()
console.log(player1.hand)
player1.discard(1)
console.log(player1.hand)
