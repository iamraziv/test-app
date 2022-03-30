import React,{useState, useEffect} from 'react';
import HOC from '../HOC';
import './ToDoList.scss';
const ToDoList = ({data}) => {
    // const [todos, setTodos] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");
    // const loadTodoList = async() =>{
    //        await fetch("https://jsonplaceholder.typicode.com/todos")
    //           .then(res => res.json())
    //           .then(
    //             (result) => {
    //              setTodos(result);
    //             },
    //             (error) => {
    //               console.log(error);
    //             }
    //           )
    // }
    // useEffect(()=>{
    //     loadTodoList();
    // }, [])

    const renderItem = data.map((todo)=>(
        <div key={todo.id}>
            <p>{todo.title}</p>
        </div>
    ))

    // let filterTodo = todos.slice(0,10).filter(({title}) =>{
    //     debugger;
    //         return title.toLowerCase().indexOf(searchTerm) >= 0
    // }).map((todo)=>(
    //     <div key={todo.id}>
    //         <p>{todo.title}</p>
    //     </div>
    // ))

    return (
        <div className="users">
            <div>{renderItem}</div>
        </div>
    );
};

const SearchTodo = HOC(ToDoList, 'todos');

export default SearchTodo;