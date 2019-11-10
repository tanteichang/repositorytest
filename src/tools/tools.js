const getFolderName = (gitUrl) => {
    const infoArr = gitUrl.split('github.com/')[1].split('/')
    return infoArr[infoArr.length - 1].split('.git')[0]
}

module.exports = {
    getFolderName,
}