/**
 * sum all natural numbers less than <num> which are mutilples of 3 or 5
 * @param {number} num 
 */
function sumOfMultiples(num: number): number {
    var sum = 0
    for(var i = 1; i < num; i++) {
        if(i % 3 == 0) {
            sum+=i;
        }
        if(i % 5 == 0) {
            sum+=i;
        }
    }
    return sum
}