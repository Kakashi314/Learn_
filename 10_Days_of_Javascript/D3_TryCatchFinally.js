/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        let a=s.split("");
        let b=a.reverse();
        let c=b.join("");
        console.log(c);
    }catch(err){
        console.log(err.message);
        console.log(s);
    }
}