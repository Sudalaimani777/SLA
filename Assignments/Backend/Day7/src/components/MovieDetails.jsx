const MovieDetails = () => {
  return (
    <section className="w-full max-w-md rounded-lg border border-gray-300 bg-white p-5">
      <h2 className="mb-3 text-xl font-semibold text-gray-900 text-center">Movie Details</h2>
      <div className="space-y-2 text-sm text-gray-700">
        <p><span className="font-medium text-gray-900">Movie Name:</span> M.S. Dhoni: The Untold Story</p>
        <p><span className="font-medium text-gray-900">Hero Name:</span> Sushant Singh Rajput</p>
        <p><span className="font-medium text-gray-900">Director Name:</span> Neeraj Pandey</p>
        <p><span className="font-medium text-gray-900">Release Year:</span> 2016</p>
      </div>
    </section>
  )
}

export default MovieDetails