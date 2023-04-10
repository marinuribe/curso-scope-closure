// In this case userName can be usen in the function 
//and in the if block, but not out of the function
function greeting() {
    let userName = 'Anna'
    console.log(userName);

    if (userName === 'Anna') {
        console.log(`Hello ${userName}`);
    }
}
greeting()