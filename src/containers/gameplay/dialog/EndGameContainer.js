import React from 'react';
import { connect } from 'react-redux';
import EndGame from '../../../components/gameplay/dialog/EndGame';
import { resetGame } from '../../../actions';

const mapStateToProps = state => ({
  ...state.GameReducer,
  user: state.ProfileReducer.user
});

class EndGameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  handleEndGame() {
    this.setState({
      show: false
    });
    const { dispatch } = this.props;
    dispatch(resetGame());
  }

  render() {
    const { show } = this.state;
    const { message } = this.props;

    return (
      <EndGame
        message={message}
        show={show}
        handleClose={() => this.handleEndGame()}
      />
    );
  }
}

export default connect(mapStateToProps)(EndGameContainer);
