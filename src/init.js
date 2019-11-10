const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs-extra')

const { getFolderName } = require('./tools/tools')

const repositories = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'repositories.json')))
const branch = execSync('git branch').toString()
console.log(branch)

Object.keys(repositories).forEach(key => {
    const repo = repositories[key]
    const folderName = getFolderName(repo.url)
    
    if (branch.includes(key)) {
        execSync(`git branch -D ${key}`)
    }
    execSync(`git checkout -b ${key}`)
    execSync(`git clone ${repo.url}#${repo.version}`)
    // execSync(`cp -rf ./${folderName}/** ./`)
    // execSync('git add .')
    // execSync(`git commit -m "upload ${key}"`)
    // execSync(`git push origin ${key}`)
    // execSync(`git checkout master`)
})
