/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let consonat=[]
    for(let i=0;i<s.length;i++){
        if("aeiou".includes(s[i])){
            console.log(s[i]);
        }
        else{
            consonat.push(s[i]);
        }
    }
    for(let j=0;j<consonat.length;j++){
        console.log(consonat[j]);
    }
}