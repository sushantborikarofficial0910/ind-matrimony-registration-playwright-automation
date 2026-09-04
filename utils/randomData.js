function generateMobileNumber() {
    return '9' + Math.floor(100000000 + Math.random() * 900000000);
}

module.exports = { generateMobileNumber };