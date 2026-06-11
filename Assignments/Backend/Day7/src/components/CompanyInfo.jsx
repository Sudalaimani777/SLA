const CompanyInfo = () => {
	return (
		<section className="w-full max-w-md rounded-lg border border-gray-300 bg-white p-5">
			<h2 className="mb-3 text-xl font-semibold text-gray-900 text-center">Company Info</h2>
			<div className="space-y-2 text-sm text-gray-700">
				<p><span className="font-medium text-gray-900">Company Name:</span> Nova Tech Labs</p>
				<p><span className="font-medium text-gray-900">Location:</span> Bengaluru</p>
				<p><span className="font-medium text-gray-900">Founder:</span> Ankit Verma</p>
				<p><span className="font-medium text-gray-900">Established Year:</span> 2018</p>
			</div>
		</section>
	)
}

export default CompanyInfo