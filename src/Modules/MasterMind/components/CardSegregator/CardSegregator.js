import React, { Component } from 'react';

import Card from './Card/Card';
import NewCardForm from './NewCardForm/NewCardForm'

class CardSegregator extends Component {
    state = {
        cards: [
        ],
        newCard: {
        },
        currentId: 0,
        showCards: true
    };

    clicked = () => {
        const doesShow = this.state.showCards;
        this.setState({showCards: !doesShow});
    };

    nameChangeHandler = (event, id) => {
        const cardIndex = this.state.cards.findIndex(c => {
            return c.id === id;
        });
        const card = {
            ...this.state.cards[cardIndex]
        };

        const cards = [...this.state.cards];
        cards[cardIndex] = card;
        card.name = event.target.value;
        this.setState({
            cards: cards
        })
    };

    newCardNameValue = (event) => {
        const newCard = [...this.state.newCard];
        newCard.name = event.target.value;
        this.setState({
            newCard: newCard
        });
    };

    addNewCard = () => {
        const cards = [...this.state.cards];
        let newCard = {...this.state.newCard};
        let currentId = this.state.currentId;

        newCard.id = ++currentId;
        cards.push(newCard);

        this.setState({
            cards: cards,
            currentId: currentId,
            newCard: newCard
        });

        this.clearName();
    };

    clearName = () => {
        let newCard = {...this.state.newCard};
        newCard.name = '';
        this.setState({
            newCard: newCard
        });
    };

    deleteCardHandler = (cardIndex) => {
        const cards = [...this.state.cards];
        cards.splice(cardIndex, 1);
        this.setState({
            cards: cards
        })
    };


    render () {
        let cards = null;

        if (this.state.showCards) {
            cards = (
                <div>
                    {this.state.cards.map((card, index) => {
                        return <Card
                            key={card.id}
                            name={card.name}
                            id={card.id}
                            click={() => this.deleteCardHandler(index)}
                            changed={(event) => this.nameChangeHandler(event, card.id)}
                        />
                        })
                    }
                </div>
            )
        }

        return (
            <div className={'CardSegregator'}>
                <NewCardForm
                    name={this.state.newCard.name}
                    newValue={(event) => this.newCardNameValue(event)}
                    commit={this.addNewCard}
                />
                <button onClick={this.clicked}>Show/Hide</button>
                {cards}
            </div>
        )
    }
}

export default CardSegregator;