import React from 'react'



export default function User({user}) {
    return (
        <div className="user">
            <img
                src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=64` } 
                alt={user.username}
                style={{marginRight: 12, width: 40, height: 'auto', borderRadius: '50%'}}
                />
            {user.username}
        </div>
    )
}
