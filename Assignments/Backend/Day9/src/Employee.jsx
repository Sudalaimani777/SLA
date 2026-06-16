
const Employee = ({companyDetails}) => {
    const { companyName, employeeName, employeeRole, employeeSalary } = companyDetails;
  return (
    <>
        <main>
            <section>
                {companyName}
                {employeeName}
                {employeeRole}
                {employeeSalary}
            </section>
        </main>
    </>
  )
}

export default Employee