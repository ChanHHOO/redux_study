import React from 'react';

const UserList = ({userList, wrongCount})=>{

    const userItems = userList.map(i =>{
        return(
            <div className="userItems">
                <div className="idValue">id : {i.id} &nbsp;&nbsp;&nbsp;
                wrong count : {i.wrong_count}</div>

            </div>
        )
    })
    return(
        <div className="userList">
            {userItems}
        </div>
    )
}
export default UserList;