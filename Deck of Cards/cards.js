// Card class
class Card{
    constructor(suit, rank){
        this.suit = suit;
        this.rank = rank;
    }
}

// Deck class
// It will have cards in it, shuffle, deal card, reset
function Deck(){
    this.cards = [];
    let ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Page", "Knight", "King", "Queen"];
    let suits = ["Wands", "Swords", "Pentacles", "Cups"];

    for(let suit of suits){
        for(let rank of ranks){
            this.cards.push(new Card(suit, rank))
        }
    }
    this.shuffle = () => {
        for(let i=0; i<this.cards.length; i++){
            let random_index = Math.floor(Math.random()*this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[random_index];
            this.cards[random_index] = temp;
        }
    }
    this.deal = () => {
        return this.cards.pop();
    }
    this.reset = () => {
        this.cards = [];
    }
    this.reset();
}

let my_deck = new Deck()
my_deck.shuffle()
console.log(my_deck.cards)

for(let d=0; d<4; d++){
    console.log(my_deck.deal());
}