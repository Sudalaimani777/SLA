import './userProfile.css'
const UserProfile = ({ userProfile = [] }) => {
    if (!userProfile.length) {
        return (
            <section className="user-profile-empty">
                <p>Unable to fetch the user</p>
            </section>
        )
    }

    return (
        <div className="user-profile-list">
            {userProfile.map((users, index) => (
                <section className="user-profile-card" key={users.id ?? index}>
                    <h2>{users.name}</h2>
                    <p>{users.email}</p>
                    <h3 className={users.isLoggedIn ? 'status signed-in' : 'status signed-out'}>
                        {users.isLoggedIn ? 'Signed In' : 'Signed Out'}
                    </h3>
                </section>
            ))}
        </div>
    )
}
export default UserProfile