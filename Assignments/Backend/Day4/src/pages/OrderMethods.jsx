const OrderMethods = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6 sm:text-4xl sm:mb-8">
        Order & Combine Methods
      </h1>

      <p className="mx-auto max-w-3xl text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        These methods are used to sort, reverse, combine, and convert arrays
        into strings.
      </p>

      <div className="grid gap-4 sm:gap-6">
        {/* sort */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">sort()</h2>

          <p className="mb-2">
            Sorts the elements of an array in place.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const numbers = [40, 10, 30, 20];

numbers.sort((a, b) => a - b);

// Output
[10, 20, 30, 40]`}
          </pre>

          <div className="mt-3 text-sm space-y-1">
            <p><strong>Original Array Modified:</strong> Yes ✅</p>
            <p><strong>Shallow Copy:</strong> No ❌</p>
          </div>
        </div>

        {/* reverse */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">reverse()</h2>

          <p className="mb-2">
            Reverses the order of elements in an array.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const numbers = [1, 2, 3, 4];

numbers.reverse();

// Output
[4, 3, 2, 1]`}
          </pre>

          <div className="mt-3 text-sm space-y-1">
            <p><strong>Original Array Modified:</strong> Yes ✅</p>
            <p><strong>Shallow Copy:</strong> No ❌</p>
          </div>
        </div>

        {/* concat */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">concat()</h2>

          <p className="mb-2">
            Combines two or more arrays and returns a new array.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const arr1 = [1, 2];
const arr2 = [3, 4];

const result = arr1.concat(arr2);

// Output
[1, 2, 3, 4]`}
          </pre>

          <div className="mt-3 text-sm space-y-1">
            <p><strong>Original Array Modified:</strong> No ❌</p>
            <p><strong>Shallow Copy:</strong> Yes ✅</p>
          </div>
        </div>

        {/* join */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">join()</h2>

          <p className="mb-2">
            Converts array elements into a string.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.join(" - ");

// Output
Apple - Banana - Mango`}
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
          A shallow copy creates a new array but copies only the references of
          nested objects. Among the methods in this category, only{" "}
          <strong>concat()</strong> creates a shallow copy.
        </p>

        <pre className="bg-white p-3 rounded mt-3 overflow-x-auto text-sm">
          {`const users = [{ name: "John" }];

const copiedUsers = users.concat();

copiedUsers[0].name = "Sara";

console.log(users[0].name);
// Sara (original array object also changed)`}
        </pre>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6 rounded">
        <h3 className="font-bold mb-2">Important Note</h3>

        <p>
          sort() and reverse() modify the original array, concat() creates a
          shallow copy, and join() returns a string representation of the array.
        </p>
      </div>
    </div>
  );
};

export default OrderMethods;