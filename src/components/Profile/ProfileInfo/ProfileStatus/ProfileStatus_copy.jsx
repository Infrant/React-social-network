import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState(() => ({ status: this.props.status }));
    }
  }

  activateEditMode = () => this.setState(() => ({ editMode: true }));
  deactivateEditMode = () => {
    this.setState(() => ({ editMode: false }));
    this.props.updateProfileStatus(this.state.status);
  };
  handleFocus = event => event.target.select();

  handleChangeStatus = event =>
    this.setState(() => ({ status: event.target.value }));

  render() {
    const { status } = this.props;
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {status || 'No status'}
            </span>
          </div>
        ) : (
          <div>
            <input
              type='text'
              onChange={this.handleChangeStatus}
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              autoFocus
              onFocus={this.handleFocus}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
