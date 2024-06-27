function oldEnough(age) {
    if (age > 59) {
        throw Error("Too old!");
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
console.log(oldEnough(20));
console.log(oldEnough(80));
