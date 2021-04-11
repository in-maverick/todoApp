import { resetTODO } from 'actions/todoActions';
import { Button, Typography } from 'components';
import React from 'react';
import { useDispatch } from 'react-redux';
function TopBar() {
  const dispatch = useDispatch();
  return (
    <nav className="navbar justify-content-space shadow-sm">
      <Typography text="O4S TODO APP" />
      <Button
        name="Reset"
        variant="outline-secondary"
        onClick={() => dispatch(resetTODO())}
        className="btn-sm float-right m-2"
      />
    </nav>
  );
}

export default TopBar;
