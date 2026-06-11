const MovieCard = () => {
	return (
		<section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
			<h2 className="mb-4 text-2xl font-bold text-slate-900">Movie Details</h2>
			<div className="space-y-3 text-slate-700">
				<p><span className="font-semibold text-slate-900">Movie Name:</span> Skybound</p>
				<p><span className="font-semibold text-slate-900">Hero Name:</span> Arjun Kapoor</p>
				<p><span className="font-semibold text-slate-900">Director Name:</span> Priya Nair</p>
				<p><span className="font-semibold text-slate-900">Release Year:</span> 2026</p>
			</div>
		</section>
	)
}

export default MovieCard
