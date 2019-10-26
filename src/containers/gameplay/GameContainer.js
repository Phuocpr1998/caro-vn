import React from 'react';
import { connect } from 'react-redux';
import Game from '../../components/gameplay/Game';
import { getProfile } from '../../actions/actionFunction';

const mapStateToProps = state => ({
  ...state.BoardReducer,
  HomeReducer: { ...state.HomeReducer }
});

class GameContainer extends React.Component {
  componentDidMount() {
    const { dispatch, isRequest, user } = this.props;
    console.log(this.props);

    if (user === null || user === undefined) {
      console.log({ dispatch, isRequest, user });
      dispatch(getProfile());
    }
  }

  render() {
    return <Game />;
  }
}

export default connect(mapStateToProps)(GameContainer);
