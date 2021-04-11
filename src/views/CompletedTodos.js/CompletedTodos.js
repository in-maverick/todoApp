import { Card, Divider, Typography } from 'components';
import { isEmpty } from 'lodash';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

function CompletedTodos() {
  const { completed, hashTagCompleted, hashTagFilterToggle } = useSelector((state) => state.todoReducer);

  // useEffect(() => {
  //   console.log('completed completed completed', completed);
  // }, [completed]);

  const clickToCompleted = (_index) => {
    console.log('object', _index);
  };
  const completedTodoCards = completed
    .map((item) => {
      return <Card key={item.id} cardItem={item.todoText} onClick={() => clickToCompleted(item)} />;
    })
    .reverse();

  const hasTagCompletedTodoCards = hashTagCompleted
    .map((item) => {
      return <Card key={item.id} cardItem={item.todoText} onClick={() => clickToCompleted(item)} />;
    })
    .reverse();

  return (
    (!isEmpty(completedTodoCards) || !isEmpty(hasTagCompletedTodoCards)) && (
      <>
        <Divider />
        <div style={{ background: 'rgb(245 137 71 / 74%)' }} className="p-2 rounded mb-3">
          <Typography text={`Completed`} className="text-left text-success font-weight-bold" />
          {!hashTagFilterToggle ? completedTodoCards : hasTagCompletedTodoCards}
        </div>
      </>
    )
  );
}

export default memo(CompletedTodos);
