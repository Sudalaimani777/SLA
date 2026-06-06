

const MutatingMethods = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Mutating Methods in JavaScript Arrays
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Mutating methods directly change the original array. After calling these methods,
        the original array is modified.
      </p>

      <div className="grid gap-6">
        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">push()</h2>
          <p className="mb-2">Adds one or more elements to the end of the array.</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">pop()</h2>
          <p className="mb-2">Removes the last element from the array and returns it.</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const fruits = ["apple", "banana", "mango"];
fruits.pop();
console.log(fruits); // ["apple", "banana"]`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">shift()</h2>
          <p className="mb-2">Removes the first element from the array and returns it.</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const fruits = ["apple", "banana", "mango"];
fruits.shift();
console.log(fruits); // ["banana", "mango"]`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">unshift()</h2>
          <p className="mb-2">Adds one or more elements to the beginning of the array.</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const fruits = ["banana", "mango"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "mango"]`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">splice()</h2>
          <p className="mb-2">Can remove, replace, or insert elements at a given index.</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const nums = [1, 2, 3, 4, 5];
nums.splice(2, 1);       // removes 1 element at index 2
console.log(nums);       // [1, 2, 4, 5]

nums.splice(2, 0, 10);   // inserts 10 at index 2
console.log(nums);       // [1, 2, 10, 4, 5]`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">sort()</h2>
          <p className="mb-2">Sorts elements in place. Use a compare function for numbers.</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 1, 3, 4, 5]`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">reverse()</h2>
          <p className="mb-2">Reverses the order of elements in the array.</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // [5, 4, 3, 2, 1]`}
          </pre>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 border">
          <h2 className="text-2xl font-semibold mb-2">fill()</h2>
          <p className="mb-2">Fills all or part of the array with a static value.</p>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
            {`const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr); // [1, 0, 0, 4]`}
          </pre>
        </div>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-8 rounded">
        <h3 className="font-bold mb-2">Important Note</h3>

        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
          <li><strong>Mutating</strong> means the original array is changed</li>
          <li><code className="bg-gray-100 px-1 rounded">push</code> and <code className="bg-gray-100 px-1 rounded">pop</code> work on the end</li>
          <li><code className="bg-gray-100 px-1 rounded">shift</code> and <code className="bg-gray-100 px-1 rounded">unshift</code> work on the beginning</li>
          <li><code className="bg-gray-100 px-1 rounded">splice</code> works at any position</li>
          <li><code className="bg-gray-100 px-1 rounded">sort</code> and <code className="bg-gray-100 px-1 rounded">reverse</code> change the order</li>
        </ul>

      </div>
    </div>
  );
}

export default MutatingMethods