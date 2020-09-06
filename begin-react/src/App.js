import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
function App() {
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'Viva',
        email: 'happybird00@naver.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@naver.com',
        active: false
    },
    {
        id: 3,
        username: 'dongwook',
        email: 'wooksker',
        active: true
    }
]);
  const[inputs, setInputs] = useState({
    username:'',
    email:'',
  });
  
  const{username,email} = inputs;
  
  const nextId = useRef(4);
  
  const onChange = (e)=>{
    const {name, value}= e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  
  const onRemove = id =>{
    setUsers(users.filter(user=>user.id !==id));
  }

  const onCreate = ()=>{
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users,user]);
    setInputs({
      username:'',
      email:'',
    })
    console.log(nextId.current);
    nextId.current+=1; 
  }

  const onToggle= id=>{
    setUsers(users.map(
      user => user.id ===id
      ?{...user,active: !user.active}
      :user
    ));
  }

  return (
    <> 
    <CreateUser username={username}
    email={email}
    onChange={onChange}
    onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
