

const UserSkills = ({ technicalSkills }) => {
    return (
        <>
            <main>
                <section>
                    <h1>My Skills</h1>
                    <div>
                        {
                            technicalSkills.map(skill => (
                                <p key={skill}>{skill}</p>
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
}

export default UserSkills