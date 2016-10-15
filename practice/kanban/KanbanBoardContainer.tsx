import * as React from 'react';

import {KanbanBoard} from './KanbanBoard';
import {cardsList} from "./data";

export class KanbanBoardContainer extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            cards: [],
        };
    }

    public componentDidMount() {
        setTimeout(()=> {
            this.setState({
                cards: cardsList
            })
        }, 1000);
    }

    public render() {
        return <KanbanBoard cards={this.state.cards}/>
    }
}