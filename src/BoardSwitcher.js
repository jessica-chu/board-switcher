import React from 'react';

class Board extends React.Component {
  render() {
    let className = "board";
    
    if (this.props.selected) {
      className += " selected";
    }
    
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
}

class BoardSwitcher extends React.Component {
    state = {
        toggled: 0
    };

    handleToggle(event) {
        this.setState = ({
            toggled: (this.state.toggled + 1) % this.props.numBoards
        });
    }

    render() {
        let boards = [];
        for (let ii = 0; ii < this.props.numBoards; ii++) {
            let isSelected = ii === this.state.toggled;
            boards.push(
                <Board index={ii} selected={isSelected} key={ii} />
            );
        }
    
        return (
            <div>
                <div className="boards">{boards}</div>
                <button onClick={ e => this.handleToggle(e) }>Toggle</button>
            </div>
        );
    }
}

export default BoardSwitcher;
