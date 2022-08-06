export const start = 'start';
export const game = 'game';
export const result = 'result';

export const creatDeck = () => {
    const deck = [];
    const suits = ['spade', 'club', 'diamond', 'heart'];
    for(let i = 0; i < suits.length; i++){
        for(let j = 1; j <= 13; j++){
            deck.push({
                rank: j,
                suit: suits[i]
            })
        }
    }
    return deck;
}