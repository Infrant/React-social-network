import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => this.setState(() => ({ editMode: true }));
  deactivateEditMode = () => this.setState(() => ({ editMode: false }));
  handleFocus = event => event.target.select();

  render() {
    const { status } = this.props;
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>{status}</span>
          </div>
        ) : (
          <div>
            <input
              type='text'
              value={status}
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
