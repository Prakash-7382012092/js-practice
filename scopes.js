// Task 2.3: Block Scope
if (true) {
    let blockVariable = "I am in block";
    const alsoInBlock = "Me too";
    var notActuallyBlocked = "I can escape!";
    console.log(blockVariable);       // Works here
}
console.log(blockVariable);        // Will cause error
//console.log(notActuallyBlocked);     // Works! (but avoid this)