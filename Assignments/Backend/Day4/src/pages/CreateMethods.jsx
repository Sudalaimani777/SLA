const CreateMethods = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6 sm:text-4xl sm:mb-8">
        Slice & Create Methods
      </h1>

      <p className="mx-auto max-w-3xl text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        These methods are used to create new arrays or extract portions of an
        existing array without modifying the original array.
      </p>

      <div className="grid gap-4 sm:gap-6">
        {/* slice */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">slice()</h2>

          <p className="mb-2">
            Returns a selected portion of an array as a new array.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

// Output
[20, 30, 40]`}
          </pre>

          <div className="mt-3 text-sm space-y-1">
            <p><strong>Original Array Modified:</strong> No ❌</p>
            <p><strong>Shallow Copy:</strong> Yes ✅</p>
          </div>
        </div>

        {/* Array.from */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Array.from()</h2>

          <p className="mb-2">
            Creates a new array from an iterable or array-like object.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`const text = "HELLO";

const result = Array.from(text);

// Output
["H", "E", "L", "L", "O"]`}
          </pre>

          <div className="mt-3 text-sm space-y-1">
            <p><strong>Original Array Modified:</strong> No ❌</p>
            <p><strong>Shallow Copy:</strong> Yes ✅</p>
          </div>
        </div>

        {/* Array.of */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Array.of()</h2>

          <p className="mb-2">
            Creates a new array from the provided arguments.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`const result = Array.of(10, 20, 30, 40);

// Output
[10, 20, 30, 40]`}
          </pre>

          <div className="mt-3 text-sm space-y-1">
            <p><strong>Original Array Modified:</strong> No ❌</p>
            <p><strong>Shallow Copy:</strong> No ❌</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-8 rounded">
        <h3 className="font-bold mb-2">What is a Shallow Copy?</h3>

        <p>
          A shallow copy creates a new array but copies references for nested
          objects instead of cloning them completely.
        </p>

        <pre className="bg-white p-3 rounded mt-3 overflow-x-auto text-sm">
{`const users = [
  { name: "John" }
];

const copiedUsers = users.slice();

copiedUsers[0].name = "Sara";

console.log(users[0].name);
// Sara`}
        </pre>

        <p className="mt-3">
          Because both arrays reference the same object, changing the object in
          one array affects the other.
        </p>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6 rounded">
        <h3 className="font-bold mb-2">Important Note</h3>

        <ul className="list-disc ml-5 space-y-1">
          <li>
            <strong>slice()</strong> creates a shallow copy of part of an array.
          </li>
          <li>
            <strong>Array.from()</strong> creates a new array and performs a
            shallow copy when copying objects.
          </li>
          <li>
            <strong>Array.of()</strong> creates a completely new array from the
            provided values.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreateMethods;