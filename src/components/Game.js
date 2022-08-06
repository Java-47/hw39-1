import React from 'react'
import { creatDeck, result } from '../utils/contants'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.compDeck = [];
    this.playerDeck = [];
    this.compWin = 0;
    this.playerWin = 0;
    this.state = {
      compCard: 'Computer card',
      playerCard: 'Player card'
    }
  }

  handleClickNext = () => {
    if (this.playerDeck.length) {
      const comp = this.compDeck.pop();
      const player = this.playerDeck.pop();
      if (comp.rank > player.rank) {
        this.compWin++;
      }
      if (comp.rank < player.rank) {
        this.playerWin++;
      }
      this.setState({
        compCard: `${comp.rank}, ${comp.suit}`,
        playerCard: `${player.rank}, ${player.suit}`
      });
    } else {
      this.props.changePage(result);
      this.props.getScore([this.compWin, this.playerWin]);
    }

  }

  componentDidMount() {
    const deck = creatDeck();
    deck.sort(() => Math.random() - 0.5);
    this.compDeck = deck.slice(0, deck.length / 2);
    this.playerDeck = deck.slice(deck.length / 2, deck.length);
    this.handleClickNext();
  }

  render() {
    return (
      <div>
        <h2>Computer ({this.compWin})</h2>
        <p>{this.state.compCard}</p>
        <p>{this.state.playerCard}</p>
        <h2>{this.props.nickName} ({this.playerWin})</h2>
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    )
  }

}

export default Game