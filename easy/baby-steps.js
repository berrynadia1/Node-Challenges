let outcome = 0

for(i = 2; i < process.argv.length; i++){
    outcome += Number(process.argv[i])
}

console.log(outcome)