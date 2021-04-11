import React from 'react';
import { Button } from 'components';
import ActiveTodos from 'views/ActiveTodos';
import CompletedTodos from 'views/CompletedTodos.js';
import InputBar from 'views/InputBar';
import { useDispatch } from 'react-redux';
import { resetTODO } from 'actions/todoActions';
import HashTags from 'views/HashTags';

function TodoHome() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div class="row m-0">
        <div class="col-md-4 mx-auto border mt-3 pb-3 pt-1 shadow rounded-sm">
          <Button
            name="Reset"
            variant="outline-secondary"
            onClick={() => dispatch(resetTODO())}
            className="btn-sm float-right m-2"
          />
          <InputBar />
          <HashTags />
          <ActiveTodos />
          <CompletedTodos />
        </div>
      </div>
    </div>
  );
}

export default TodoHome;
