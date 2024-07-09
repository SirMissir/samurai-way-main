import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userDefault from '../../Assets/Img/user.png'




function Users(props:UsersPropsType) {
    const { usersPage, follow, unfollow, setUsers } = props;

    if (!usersPage.users.length) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                debugger
                setUsers(response.data.items)
            })
    }

    const userItems = usersPage.users.map((user) => (
        <div key={user.id}>
            <div>
                <img
                    src={user.photos.large ? user.photos.large : userDefault}
                    alt={user.name}
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
                    <h3>{user.name}</h3>
                    <p>{user.status}</p>
                </div>
                <div>
                    {/*{`${user.location.city}, ${user.location.country}`}*/}
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