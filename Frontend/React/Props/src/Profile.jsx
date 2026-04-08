const Profile = ({userData}) => {
    console.log(userData);
    return (
        <>
            <section>
                {
                    userData.map(data =>(
                        <section key={data.userName}>
                            <h1>{data.userName}</h1>
                        </section>
                    ))
                }
            </section>
        </>
    )
}

export default Profile;