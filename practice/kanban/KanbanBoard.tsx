import * as React  from 'react';
import {List} from './List';

export class KanbanBoard extends React.Component<any, any> {
    render() {
        return (
            <div className="app">
                <List id='todo'
                      title="To Do"
                      cards={this.props.cards.filter((card) => card.status === "todo")}/>
                <List id='in-progress'
                      title="In Progress"
                      cards={this.props.cards.filter((card) => card.status === "in-progress")}/>
                <List id='done'
                      title='Done'
                      cards={this.props.cards.filter((card) => card.status === "done")}/>
            </div>
        );
    }

    /**
     * 使用静态方法定义class级别方法
     */
    /*static propTypes = {
        test: React.PropTypes.string.isRequired
    };
    static defaultProps = {
        test: "Hello world"
    };*/
}