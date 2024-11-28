module.exports = {
    answers: [
        `
#include <vector>
#include <iostream>
using namespace std;
int simpleArraySum(const vector<int>& ar) {
    int sum = 0;
    for (int num : ar) {
        sum += num;
    }
    return sum;
}
int main() {
    int n;
    cin >> n;
    vector<int> ar(n);
    for (int i = 0; i < n; i++) {
       cin >> ar[i];
    }
    
    int result = simpleArraySum(ar);
    cout << result << endl;
    return 0;
}

        `,
        `
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) alice++;
        else if (a[i] < b[i]) bob++;
    }
    return [alice, bob];
}
        `,
        `
function aVeryBigSum(ar) {
    return ar.reduce((sum, num) => sum + num, 0n);
}
        `,
        `
function diagonalDifference(arr) {
    let primary = 0;
    let secondary = 0;
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        primary += arr[i][i];
        secondary += arr[i][n - 1 - i];
    }
    
    return Math.abs(primary - secondary);
}
        `,
        `
function plusMinus(arr) {
    let positive = 0, negative = 0, zero = 0;
    const n = arr.length;
    
    arr.forEach(num => {
        if (num > 0) positive++;
        else if (num < 0) negative++;
        else zero++;
    });
    
    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((zero / n).toFixed(6));
}
        `,
        `
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
}
        `,
        `
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
    const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);
    console.log(minSum + ' ' + maxSum);
}
        `,
        `
function birthdayCakeCandles(candles) {
    const maxHeight = Math.max(...candles);
    return candles.filter(candle => candle === maxHeight).length;
}
        `
    ]
}