let x = 13;
let y = 29;
console.log("x equals ",x, "y equals ",y);
x += y;
y = x - y;
x = x - y;
console.log("x equals ",x, "y equals ",y);
[x,y] = [y, x];
console.log("x equals ",x, "y equals ",y);



const checkSubarraySum = (nums, k) => {
	let sum = 0;
	let prefix = 0;
	const hash = new Set();
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		if (k != 0) sum %= k
		if(hash.has(sum)) return true
		hash.add(prefix);
		prefix = sum;
	}
	return false;
};

console.log(checkSubarraySum([23,2,6,4,7], 6));