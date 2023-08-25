import fs from 'fs'

let ids = fs.readFileSync('db.txt')


console.log(ids.toString())

if (ids.toString().indexOf('6454512') == -1) {
    fs.writeFile('db.txt', ids.toString() + "\n" + '6454512', () => {})
}




// Buffer (cile video )  stream (chastynka 5s)
// Buffer = stream + stream + stream ...

