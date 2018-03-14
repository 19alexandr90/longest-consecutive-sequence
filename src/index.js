module.exports = function longestConsecutiveLength(array) {
  // your solution here
      if (!array.length) {
        return 0;
    }
    const arr = array.sort((a, b) => a - b);
    const length = arr.length;
    let currLength = 1, seqLength = 1;
    for (let i = 1; i < length; i++) {
        if (arr[i] - arr[i - 1] === 1) {
            currLength++;
        } else if (arr[i] - arr[i - 1] > 1) {
            seqLength = Math.max(currLength, seqLength);
            currLength = 1;
        }
    }
    return seqLength;
}
