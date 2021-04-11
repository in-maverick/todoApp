import { TopBar } from 'components';
import React from 'react';
import TodoHome from 'views/TodoHome';

function Home() {
  return (
    <div>
      <TopBar />
      <TodoHome />
    </div>
  );
}

export default Home;
