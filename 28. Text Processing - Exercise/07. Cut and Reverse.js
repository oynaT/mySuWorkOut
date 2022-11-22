// 7. Cut and Reverse
// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves.
// Print each half on a separate line.


function cutAndReverse(string){
    let mid = string.length / 2;
    let firstPart = string.substring(0, mid).split('').reverse().join('');
    let LastPart = string.substring(mid).split('').reverse().join('');
    console.log(firstPart);
    console.log(LastPart);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');