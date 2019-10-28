import React from 'react';
import { connect } from 'react-redux';
import FindMatch from '../../../components/gameplay/dialog/FindMatch';

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

  handleClose() {
    const { show } = this.state;
    this.setState({
      show: !show
    });
  }

  render() {
    const { show } = this.state;
    const { user } = this.props;
    return (
      <FindMatch
        show={show}
        user={user}
        handleClose={() => this.handleClose()}
      />
    );
  }
}

export default connect(mapStateToProps)(FindMatchContainer);
