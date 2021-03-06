import React from 'react';
import FriendCard from './FriendCard';

const FriendList = props => {
    return(
        <div className='friends-list'>
            {props.friends.map(friend => (
               <FriendCard 
                    key={friend.id} 
                    data={friend}
                    updateFriend={props.updateFriend}
                    deleteFriend={props.deleteFriend}
                />
            ))}
        </div>
    );
}

export default FriendList;