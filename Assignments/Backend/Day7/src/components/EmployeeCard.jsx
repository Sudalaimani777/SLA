const EmployeeCard = () => {
	return (
		<section className="w-full max-w-md rounded-lg border border-gray-300 bg-white p-5">
			<h2 className="mb-3 text-xl font-semibold text-gray-900 text-center">Employee Card</h2>
			<div className="space-y-2 text-sm text-gray-700">
				<p><span className="font-medium text-gray-900">Employee Name:</span> Sudalaimani Kannan</p>
				<p><span className="font-medium text-gray-900">Employee ID:</span> EMP1024</p>
				<p><span className="font-medium text-gray-900">Department:</span> Software Development</p>
				<p><span className="font-medium text-gray-900">Salary:</span> $72,000</p>
			</div>
		</section>
	)
}

export default EmployeeCard
