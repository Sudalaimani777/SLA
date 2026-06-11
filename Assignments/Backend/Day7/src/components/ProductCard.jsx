const ProductCard = () => {
	return (
		<section className="w-full max-w-md rounded-lg border border-gray-300 bg-white p-5">
			<h2 className="mb-3 text-xl font-semibold text-gray-900 text-center">Product Card</h2>
			<div className="space-y-2 text-sm text-gray-700">
				<p><span className="font-medium text-gray-900">Product Name:</span> Wireless Headphones</p>
				<p><span className="font-medium text-gray-900">Product Price:</span> $149</p>
				<p><span className="font-medium text-gray-900">Product Category:</span> Electronics</p>
				<p><span className="font-medium text-gray-900">Product Description:</span> Premium noise-cancelling headphones with long battery life.</p>
			</div>
		</section>
	)
}

export default ProductCard
