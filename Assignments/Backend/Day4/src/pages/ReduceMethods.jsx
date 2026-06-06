const ReduceMethods = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6 sm:text-4xl sm:mb-8">
        Reduce & Accumulate Methods
      </h1>

      <p className="mx-auto max-w-3xl text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        Reduce methods process all elements of an array and accumulate them into
        a single value such as a number, string, object, or array.
      </p>

      <div className="grid gap-4 sm:gap-6">
        {/* reduce */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">reduce()</h2>

          <p className="mb-2">
            Executes a reducer function on each element and returns a single
            accumulated value.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`const numbers = [10, 20, 30, 40];

const total = numbers.reduce(
  (accumulator, currentValue) =>
    accumulator + currentValue,
  0
);

// Output
100`}
          </pre>

          <div className="mt-3 space-y-1 text-sm">
            <p>
              <strong>Original Array Modified:</strong> No ❌
            </p>
            <p>
              <strong>Shallow Copy:</strong> No ❌
            </p>
            <p>
              <strong>Return Type:</strong> Any Value
            </p>
          </div>
        </div>

        {/* reduceRight */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">reduceRight()</h2>

          <p className="mb-2">
            Similar to reduce(), but processes the array from right to left.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`const words = ["I", "Love", "JavaScript"];

const sentence = words.reduceRight(
  (accumulator, currentValue) =>
    accumulator + " " + currentValue
);

// Output
JavaScript Love I`}
          </pre>

          <div className="mt-3 space-y-1 text-sm">
            <p>
              <strong>Original Array Modified:</strong> No ❌
            </p>
            <p>
              <strong>Shallow Copy:</strong> No ❌
            </p>
            <p>
              <strong>Return Type:</strong> Any Value
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-8 rounded">
        <h3 className="font-bold mb-2">How reduce() Works</h3>

        <pre className="bg-white p-3 rounded overflow-x-auto text-sm">
{`[10, 20, 30, 40]

Step 1: 0 + 10 = 10
Step 2: 10 + 20 = 30
Step 3: 30 + 30 = 60
Step 4: 60 + 40 = 100

Final Result = 100`}
        </pre>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6 rounded">
        <h3 className="font-bold mb-2">Important Note</h3>

        <p>
          reduce() and reduceRight() do not create shallow copies and do not
          modify the original array. Instead, they iterate through the array and
          return a single accumulated value.
        </p>
      </div>
    </div>
  );
};

export default ReduceMethods;