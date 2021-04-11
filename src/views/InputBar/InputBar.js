import { hashTagFilterToggle, setTODOText, TODOHashTagKeys } from 'actions/todoActions';
import { uniqBy } from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateID } from 'utils';

function InputBar() {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const filterHashTag = () => {
    console.log('todoText?.match', todoText?.match(/#\w+/g));
    const hashTagMatched = todoText?.match(/#\w+/g);
    // console.log('hashTagMatched hashTagMatched ==== ', hashTagMatched);
    if (hashTagMatched) {
      dispatch(TODOHashTagKeys({ id: generateID(), hashTag: hashTagMatched[0] })); //unique items
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todoText) {
      dispatch(
        setTODOText({
          id: generateID(),
          todoText: todoText
        })
      );
      setTodoText('');
      dispatch(hashTagFilterToggle(false));
      filterHashTag();
    }
  };
  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          id="todo"
          name="todo"
          value={todoText}
          placeholder="Add todo"
          onChange={(e) => setTodoText(e.target.value)}
        />
      </div>
    </form>
  );
}

export default InputBar;
