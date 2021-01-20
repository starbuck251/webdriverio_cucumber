class Random_Data {
    generateRandomString(length) {
        return Math.random().toString(20).substr(2, length);
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 100000000000);
    }

    generateRandomXDigitNumber(length) {
        return this.generateRandomNumber().toString().substr(0, length);
    }
}
module.exports = new Random_Data();
