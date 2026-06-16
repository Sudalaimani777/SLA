

const SchoolList = ({schools}) => {
  return (
    <>
        <main>
            <section>
                <h1>School Data</h1>
                {
                    schools.map(data => (
                        
                        <div className="" key={data.id}>
                            {data.schoolName}
                            {data.city}
                        </div>
                    ))
                }
            </section>
        </main>
    </>
  )
}

export default SchoolList