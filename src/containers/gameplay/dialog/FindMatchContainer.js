import React from 'react';
import { connect } from 'react-redux';
import FindMatch from '../../../components/gameplay/dialog/FindMatch';
import { findRoom } from '../../../actions/socketAction';

const mapStateToProps = state => ({
  ...state.GameReducer,
  user: state.ProfileReducer.user
});

class FindMatchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  componentDidMount() {
    const { userPlayer } = this.props;
    if (userPlayer !== null && userPlayer !== undefined) {
      this.setState({
        show: false
      });
    }
  }

  handleClose() {
    const { show } = this.state;
    this.setState({
      show: !show
    });
  }

  handleFightWithOther() {
    const { dispatch, user } = this.props;
    dispatch(findRoom(user));
  }

  handleFightWithMachine() {
    const { dispatch, user } = this.props;
    dispatch(findRoom(user));
  }

  render() {
    const { show } = this.state;
    const { user } = this.props;
    return (
      <FindMatch
        show={show}
        user={user}
        handleFightWithOther={() => this.handleFightWithOther()}
        handleFightWithMachine={() => this.handleFightWithMachine()}
        handleClose={() => this.handleClose()}
      />
    );
  }
}

export default connect(mapStateToProps)(FindMatchContainer);
