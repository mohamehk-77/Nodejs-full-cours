const os = require('os')
// info about current user

const user = os.hostname
const userInfo = os.userInfo()

console.log(user)

// method returs the system uptime in  secconds

console.log('the system uptime is ${os.uptime()} seconds')

const currensOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currensOS)
