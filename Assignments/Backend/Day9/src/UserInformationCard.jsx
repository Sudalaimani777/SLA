

const UserInformationCard = ({userData}) => {
    const {userName, userEmail, mobileNumber, native} = userData;
  return (
    <>
        <main>
            <section>
                {userName}
                {userEmail}
                {mobileNumber}
                {native}
            </section>
        </main>
    </>
  )
}

export default UserInformationCard