# web3-promisify
convert async web3 functions into promises  

example:  
```javascript
import w3p from "web3-promisify"

// all web3 async functions have similar signature
function test(...args) {
  let cb = args[args.length - 1]
  if (args[0] > args[1]) {
    cb(`${args[0]} <= ${args[1]} is FALSE`, null)
  } else {
    cb(null, `${args[0]} <= ${args[1]} is TRUE`)
  }
}

async function main() {
  try {
    console.log("SUCCESS", await w3p(f => test(1, 2, f)))
    console.log("SUCCESS", await w3p(f => test(2, 1, f)))
  } catch (e) {
    console.log("ERROR", e)
  }
}

main()
```

real example:

```javascript
let accounts = await w3p(f => web3.eth.getAccounts(f)) //etc
```
