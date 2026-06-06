const TransformMethods = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Transform / Iterate Methods in JavaScript Arrays
      </h1>

      <p className="text-center text-gray-600 mb-10">
        These methods do not change the original array. Instead they return a new array
        or run a function on each element.
      </p>

      <div className="grid gap-6">
        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">map()</h2>
          <p className="mb-2">Creates a new array by applying a function to every element.</p>
          <p className="mt-2 text-sm text-blue-700 mb-2">Shallow Copy: Yes, but nested objects are still referenced</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]
console.log(nums);    // [1, 2, 3]  (original unchanged)`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">filter()</h2>
          <p className="mb-2">Returns a new array with only the elements that pass the condition.</p>
          <p className="mt-2 text-sm text-blue-700 mb-2">Shallow Copy: Yes, but nested objects are still referenced</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const nums = [1, 2, 3, 4, 5];
const evens = nums.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]
console.log(nums);  // [1, 2, 3, 4, 5]  (original unchanged)`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">forEach()</h2>
          <p className="mb-2">Runs a function on each element. Does not return anything.</p>
          <p className="mt-2 text-sm text-red-600 mb-2">Not a Copy: returns undefined</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit) => {
  console.log(fruit);
});
// apple
// banana
// mango`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">flat()</h2>
          <p className="mb-2">Creates a new array with sub-arrays merged into it up to the given depth.</p>
          <p className="mt-2 text-sm text-blue-700 mb-2">Shallow Copy: Yes, only one level deep by default</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat());    // [1, 2, 3, 4, [5, 6]]  (depth 1)
console.log(arr.flat(2));   // [1, 2, 3, 4, 5, 6]   (depth 2)`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">flatMap()</h2>
          <p className="mb-2">Same as calling map() followed by flat(1). Useful when each element maps to multiple values.</p>
          <p className="mt-2 text-sm text-blue-700 mb-2">Shallow Copy: Yes, flattens only one level deep</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const nums = [1, 2, 3];
const result = nums.flatMap((n) => [n, n * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]`}
          </pre>
        </div>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-8 rounded">
        <h3 className="font-bold mb-2">Important Note</h3>

        <p>
          Transform methods usually return a new array. <code className="bg-yellow-50 px-1 rounded">forEach</code> is different because it returns undefined and is used for side effects.
        </p>
      </div>

    </div>
  );
};

export default TransformMethods;