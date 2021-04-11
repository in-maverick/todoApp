import { hashTagActiveTODO, hashTagCompletedTODO, setActiveTODO, setCompletedTODO } from 'actions/todoActions';
import { Card, Typography } from 'components';
import { isEmpty } from 'lodash';
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ActiveTodos() {
  const { active, completed, hashTagActive, hashTagCompleted, hashTagFilterToggle } = useSelector(
    (state) => state.todoReducer
  );
  const dispatch = useDispatch();
  console.log('active', active);
  const moveTodoToCompleted = (_item) => {
    console.log('object', _item);
    const activeTodos = active.filter((item) => item.id !== _item.id);
    const completedTodos = active.filter((item) => item.id === _item.id);
    console.log('[moveTodoToCompleted] activeTodos, completedTodos', activeTodos, completedTodos);
    dispatch(setActiveTODO(activeTodos));
    dispatch(setCompletedTODO(completed.concat(completedTodos)));
    moveTodoToCompletedHasTagFilter(_item);
  };

  const moveTodoToCompletedHasTagFilter = (_item) => {
    const activeTodos = hashTagActive.filter((item) => item.id !== _item.id);
    const completedTodos = hashTagActive.filter((item) => item.id === _item.id);
    dispatch(hashTagActiveTODO(activeTodos));
    dispatch(hashTagCompletedTODO(hashTagCompleted.concat(completedTodos)));
  };

  const activeTodoCards = active
    .map((item) => {
      return <Card key={item.id} cardItem={item.todoText} onClick={() => moveTodoToCompleted(item)} />;
    })
    .reverse();

  const filteredActiveTodoCards = hashTagActive
    .map((item) => {
      return <Card key={item.id} cardItem={item.todoText} onClick={() => moveTodoToCompleted(item)} />;
    })
    .reverse();

  return (
    (!isEmpty(active) || !isEmpty(hashTagActive)) && (
      <div style={{ background: '#9fd09945' }} className="p-2 rounded mb-3">
        <Typography text={`Active`} className="text-left text-success font-weight-bold" />
        {!hashTagFilterToggle ? activeTodoCards : filteredActiveTodoCards}
      </div>
    )
  );
}

export default memo(ActiveTodos);
