const Array = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">
                What is an Array in JavaScript?
            </h1>

            <p className="text-center text-gray-600 mb-10">
                An array is used to store multiple values in a single variable.
                Each value has an index starting from 0.
            </p>

            <div className="grid gap-6">
                <div className="bg-white shadow-md rounded-lg p-5 border">
                    <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
                    <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
                        {`const arrayName = [value1, value2, value3];`}
                    </pre>
                </div>

                <div className="bg-white shadow-md rounded-lg p-5 border">
                    <h2 className="text-2xl font-semibold mb-2">Array of Numbers</h2>
                    <p className="mb-2">An array can hold multiple numeric values.</p>
                    <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm mb-2">
                        {`const numbers = [10, 20, 30, 40, 50];`}
                    </pre>
                    <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm text-gray-600">
                        {`numbers[0]      → 10\nnumbers[2]      → 30\nnumbers.length  → 5`}
                    </pre>
                </div>

                <div className="bg-white shadow-md rounded-lg p-5 border">
                    <h2 className="text-2xl font-semibold mb-2">Array of Strings</h2>
                    <p className="mb-2">Strings can also be stored in arrays.</p>
                    <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm mb-2">
                        {`const fruits = ["apple", "banana", "mango"];`}
                    </pre>
                    <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm text-gray-600">
                        {`fruits[0]      → "apple"\nfruits[1]      → "banana"\nfruits.length  → 3`}
                    </pre>
                </div>

                <div className="bg-white shadow-md rounded-lg p-5 border">
                    <h2 className="text-2xl font-semibold mb-2">Mixed Array</h2>
                    <p className="mb-2">An array can store different data types together.</p>
                    <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm mb-2">
                        {`const mixed = [42, "hello", true, null];`}
                    </pre>
                    <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm text-gray-600">
                        {`mixed[0]  → 42\nmixed[1]  → "hello"\nmixed[2]  → true\nmixed[3]  → null`}
                    </pre>
                </div>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-8 rounded">
                <h3 className="font-bold mb-2">Key Points</h3>

                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Arrays use square brackets <code className="bg-gray-100 px-1 rounded">[ ]</code></li>
                    <li>Index starts from <strong>0</strong></li>
                    <li>Use <code className="bg-gray-100 px-1 rounded">.length</code> to get the number of elements</li>
                    <li>An array can store any data type</li>
                </ul>
            </div>

        </div>
    );
}

export default Array;