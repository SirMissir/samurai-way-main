import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userDefault from '../../Assets/Img/user.png'
import styles from './User.module.css'

class Users extends Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => this.props.setUsers(response.data.items));
    };

    render = () =>

// function Users(props: UsersPropsType) {
//     const {usersPage, follow, unfollow, setUsers} = props;
//
//     if (!usersPage.users.length) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(response => {
//                 debugger
//                 setUsers(response.data.items)
//             })
//     }

    const userItems = usersPage.users.map((user) => (
        <div key={user.id} className={styles.userItem}>
            <div className={styles.userSubsBlock}>
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
            <div className={styles.userInfo}>
                <div className={styles.userDetails}>
                    <h3 className={styles.username}>{user.name}</h3>
                    <p className={styles.userStatus}>{user.status}</p>
                </div>
                <div className={styles.userLocation}>
                    {/*{`${user.location.city}, ${user.location.country}`}*/}
                </div>
            </div>
        </div>
    ));

    return (
        <div className={styles.users}>
            {userItems}
        </div>
    );
};

export default Users;