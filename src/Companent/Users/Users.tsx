import React from 'react';
import {UsersPropsType} from "./UsersContainer";




function Users(props:UsersPropsType) {
    const { usersPage, follow, unfollow } = props;

    const userItems = usersPage.users.map((user) => (
        <div key={user.id}>
            <div>
                <img
                    src={user.photoUrl}
                    alt={user.fullName}
                    width={50}
                    height={50}
                />
                {
                    user.followed ? (
                        <button onClick={() => unfollow(user.id)}>
                            Follow
                        </button>
                    ) : (
                        <button onClick={() => follow(user.id)}>
                            Unfollow
                        </button>
                    )
                }
            </div>
            <div>
                <div>
                    <h3>{user.fullName}</h3>
                    <p>{user.status}</p>
                </div>
                <div>
                    {`${user.location.city}, ${user.location.country}`}
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            {userItems}
        </div>
    );
};

export default Users;