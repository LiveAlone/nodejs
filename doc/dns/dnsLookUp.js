const dns = require('dns')

dns.lookup('nodejs.org', (error, addresses, family)=>{
    console.log(error);
    console.log(addresses);
    console.log(family);
});

console.log(dns.ADDRCONFIG);