

const GrandChild = ({ data }) => {

  const { name, course } = data

  return (
    <>
      <main>
        <section>
          {name}
          {course}
        </section>
      </main>
    </>
  )
}

export default GrandChild