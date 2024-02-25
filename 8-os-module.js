const os=require(`os`)
// info about the current user
const user=os.userInfo()
console.log(user)


//  method return the system

console.log(`the System Uptime is ${os.uptime} seconds`);


const currentOs={
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem(),

}
console.log(currentOs)