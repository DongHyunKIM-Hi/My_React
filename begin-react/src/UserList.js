import React, { useEffect } from 'react';
function User({ user,onRemove }) {
    const {username,email,id,active,onToggle} = user;
    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남');
        return ()=>{
            console.log('컴포넌트가 화면에서 사라짐')
        }
    }, []);
    return(
    <div>
        <b style={{
            color: active ? 'green' : 'black',
            cursor:"pointer"
        }}
        onClick={()=> onToggle(id)}
        >{username}</b><span>({email})</span>
        <button onClick={()=> onRemove(id)}>삭제</button>
    </div>
    )}
function UserList({users, onRemove}) {
    
    return (
        <div>
            {
           users.map(
               (user,index)=>(
                   <User 
                   user={user} 
                   key={user.id} 
                   onRemove={onRemove}/>
               )
           )}
        </div>
    )
}

export default UserList;
