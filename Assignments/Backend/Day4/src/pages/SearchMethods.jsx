const SearchMethods = () => {


  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6 sm:text-4xl sm:mb-8">
        Search & Test Array Methods
      </h1>

      <p className="mx-auto max-w-3xl text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
        These methods are used to search for elements or test conditions in an
        array. They do not modify the original array and do not create shallow
        copies.
      </p>

      <div className="grid gap-4 sm:gap-6">
        {/* find */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">find()</h2>

          <p className="mb-2">
            Returns the first element that matches a condition.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const result = users.find(user => user.age > 22);

// Output
{ id: 2, name: "Sara", age: 25 }`}
          </pre>

          <p className="mt-2 text-sm text-red-600">
            Shallow Copy: No ❌
          </p>
        </div>

        {/* findIndex */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">findIndex()</h2>

          <p className="mb-2">
            Returns the index of the first matching element.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const result = users.findIndex(user => user.age > 22);

// Output
1`}
          </pre>

          <p className="mt-2 text-sm text-red-600">
            Shallow Copy: No ❌
          </p>
        </div>

        {/* includes */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">includes()</h2>

          <p className="mb-2">
            Checks whether an element exists in an array.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.includes("Banana");

// Output
true`}
          </pre>

          <p className="mt-2 text-sm text-red-600">
            Shallow Copy: No ❌
          </p>
        </div>

        {/* indexOf */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">indexOf()</h2>

          <p className="mb-2">
            Returns the index of an element.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.indexOf("Mango");

// Output
2`}
          </pre>

          <p className="mt-2 text-sm text-red-600">
            Shallow Copy: No ❌
          </p>
        </div>

        {/* some */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">some()</h2>

          <p className="mb-2">
            Returns true if at least one element satisfies the condition.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const numbers = [10, 20, 30, 40];

const result = numbers.some(num => num > 35);

// Output
true`}
          </pre>

          <p className="mt-2 text-sm text-red-600">
            Shallow Copy: No ❌
          </p>
        </div>

        {/* every */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-5 border">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">every()</h2>

          <p className="mb-2">
            Returns true if all elements satisfy the condition.
          </p>

          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const numbers = [10, 20, 30, 40];

const result = numbers.every(num => num > 5);

// Output
true`}
          </pre>

          <p className="mt-2 text-sm text-red-600">
            Shallow Copy: No ❌
          </p>
        </div>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-8 rounded">
        <h3 className="font-bold mb-2">Important Note</h3>

        <p>
          Search & Test methods do not modify the original array and do not
          create shallow copies. They simply return an element, index, or
          boolean value based on the search condition.
        </p>
      </div>
    </div>
  );
};

export default SearchMethods;