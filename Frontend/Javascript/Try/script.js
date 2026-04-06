const arr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            arr[i] = "*";
        }
    }
    console.log(arr);
};
arr([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const obj = {
    fName: "John",
    lName: "Doe",
    age: 30,
    city: "New York",
    getUser : function(){
        return `${this.fName} ${this.lName} is ${this.age} years old and lives in ${this.city}.`;
    }
}
console.log(obj.getUser());

const smallest =(arr) => {
    let min = arr[0];
    for(let i = arr[1] ; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }    }
    return min;
}
console.log(smallest([5, 2, 9, 1, 5, 6]));


function int(num) {
    let i = 0;
    const timerId = setInterval(() => {
        console.log(i);
        i++;
        if (i >= num) {
            clearInterval(timerId);
        }
    }, 1000);
}
int(10);

// --- Coding round solutions (1-12) ---

// 1) Array Rotation (right by k)
function rotateRight(arr, k) {
    if (!Array.isArray(arr) || arr.length === 0) return arr;
    const steps = k % arr.length;
    return arr.slice(-steps).concat(arr.slice(0, -steps));
}
console.log(rotateRight([1, 2, 3, 4, 5], 2));

// 2) Anagram Check (case-insensitive, ignore spaces)
function isAnagram(a, b) {
    const clean = (str) => str.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
    return clean(a) === clean(b);
}
console.log(isAnagram("Listen", "Silent"));

// 3) First Non-Repeating Char
function firstNonRepeatingChar(str) {
    const counts = {};
    for (const ch of str) {
        counts[ch] = (counts[ch] || 0) + 1;
    }
    for (const ch of str) {
        if (counts[ch] === 1) return ch;
    }
    return null;
}
console.log(firstNonRepeatingChar("swiss"));

// 4) Two Sum (return indices)
function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        if (seen.has(needed)) return [seen.get(needed), i];
        seen.set(nums[i], i);
    }
    return null;
}
console.log(twoSum([2, 7, 11, 15], 9));

// 5) Longest Word (strip punctuation)
function longestWord(sentence) {
    const words = sentence.replace(/[^a-zA-Z0-9\s]/g, "").split(/\s+/).filter(Boolean);
    let best = "";
    for (const w of words) {
        if (w.length > best.length) best = w;
    }
    return best;
}
console.log(longestWord("I love solving problems!"));

// 6) Flatten Array (depth 1 only)
function flattenDepth1(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(flattenDepth1([1, [2, 3], [4, [5]]]));

// 7) Palindrome Number (no string conversion)
function isPalindromeNumber(num) {
    if (num < 0) return false;
    let original = num;
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return original === reversed;
}
console.log(isPalindromeNumber(121));

// 8) Frequency Map (characters)
function charFrequency(str) {
    const freq = {};
    for (const ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    return freq;
}
console.log(charFrequency("aabcc"));

// 9) Debounce Function
function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn.apply(this, args), delay);
    };
}
const debouncedLog = debounce((msg) => console.log(msg), 300);
debouncedLog("debounced call");

// 10) Fibonacci (memoized)
function fib(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
console.log(fib(10));

// 11) DOM Task (event delegation)
if (typeof document !== "undefined") {
    const parent = document.querySelector(".button-list");
    if (parent) {
        parent.addEventListener("click", (event) => {
            const target = event.target;
            if (target && target.matches("button")) {
                console.log(target.textContent);
            }
        });
    }
}

// 12) Promise Chain
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof id !== "number") {
                reject(new Error("Invalid id"));
                return;
            }
            resolve({ id, name: "Alice", role: "Developer" });
        }, 300);
    });
}
fetchUser(1)
    .then((user) => ({ ...user, isActive: true }))
    .then((user) => console.log(user))
    .catch((err) => console.error(err.message));