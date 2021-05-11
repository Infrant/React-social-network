import React, { useEffect, useState } from 'react';

const ProfileStatus = ({ status, ...props }) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  useEffect(() => setLocalStatus(status), [status]);

  const activateEditMode = () => setEditMode(true);
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateProfileStatus(localStatus);
  };
  const handleFocus = event => event.target.select();
  const handleChangeStatus = event => setLocalStatus(event.target.value);

  return (
    <>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
        </div>
      ) : (
        <div>
          <input
            type='text'
            onChange={handleChangeStatus}
            value={localStatus}
            onBlur={deactivateEditMode}
            autoFocus
            onFocus={handleFocus}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
