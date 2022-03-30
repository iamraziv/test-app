import React,{useState, useEffect} from 'react';
import './UserList.scss';
import ToDoList from '../ToDoList/ToDoList';
import HOC from '../HOC';
const UserList = ({data}) => {
    // const [users, setUsers] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");
    // const loadUserList = async() =>{
    //        await fetch("https://jsonplaceholder.typicode.com/users")
    //           .then(res => res.json())
    //           .then(
    //             (result) => {
    //               setUsers(result);
    //             },
    //             (error) => {
    //               console.log(error);
    //             }
    //           )
    // }
    // useEffect(()=>{
    //     loadUserList();
    // }, [])

    const renderItem = data.map((user)=>(
        <div key={user.id}>
            <p>{user.name}</p>
        </div>
    ))

    // let filterUser = users.filter(({name}) =>{
    //     debugger;
    //         return name.toLowerCase().indexOf(searchTerm) >= 0
    // }).map((user)=>(
    //     <div key={user.id}>
    //         <p>{user.name}</p>
    //     </div>
    // ))

    return (
     
            <div className="users">
                <div>{renderItem}</div>
            </div>
  

    );
};
const SearchUser = HOC(UserList, 'users')
export default SearchUser;