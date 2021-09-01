function factorial(n) {
    return (n == 1 || n == 0) ? 1 :
        n * factorial(n - 1);
}

function NPR(n, k) {
    return factorial(n) / factorial(n - k);
}

function cntNumLessThanEqualNRepeatedDigits(N) {
    var temp = N;
    var X = 0;
    var nums = [];
    while (temp) {
        X += 1;
        nums.push(temp % 10);
        temp = parseInt(temp / 10);
    }
    nums.reverse();
    var cntNumbers = 0;
    for (var i = 1; i < X; i++) {
        cntNumbers += 9 * (factorial(9) / factorial(10 - i));
    }
    var vis = new Set();
    for (var i = 0; i < nums.length; i++) {
        var k = 0;
        var Min = 0;
        if (i == 0) {
            Min = 1;
        }
        else {
            Min = 0;
        }
        var Max = 0;
        if (i == X - 1) {
            Max = nums[i];
        }
        else {
            Max = nums[i] - 1;
        }
        for (var j = Min; j <= Max; j++) {
            if (vis.has(j)) {
                continue;
            }
            k += 1;
        }
        cntNumbers += k * (NPR(9 - i, X - i - 1));
        if (vis.has(nums[i])) {
            break;
        }
        vis.add(nums[i]);
    }
    return (N - cntNumbers);
}
var N = 100;
console.log(cntNumLessThanEqualNRepeatedDigits(N));