import React from 'react';
import SearchTodo from '../ToDoList/ToDoList';
import SearchUser from '../UserList/UserList';

const HOCMain = (props) => {
    return (
        <div className="section">
            {/* <h2>Higher Order Component</h2> */}
            <div>
                <SearchUser />
            </div>
            <div>
                <SearchTodo />
            </div>
        </div>
    );
};

export default HOCMain;