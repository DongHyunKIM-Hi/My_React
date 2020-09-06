import React, { useEffect } from 'react';
function User({ user,onRemove }) {
    const {username,email,id,active,onToggle} = user;
    useEffect(()=>{
        console.log('user값 후')
        console.log(user);
        return()=>{
            console.log('user값 전');
            console.log(user)
        } 
    }, [user]);
    return(
    <div>
        <b 
            style={{
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
