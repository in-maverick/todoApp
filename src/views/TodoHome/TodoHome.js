import React from 'react';
import { Button } from 'components';
import ActiveTodos from 'views/ActiveTodos';
import CompletedTodos from 'views/CompletedTodos.js';
import InputBar from 'views/InputBar';
import HashTags from 'views/HashTags';

function TodoHome() {
  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-md-6 mx-auto border mt-3 mb-3 shadow rounded-sm">
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
