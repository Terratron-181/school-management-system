
function getFullName() {
    return `${this.first_name} ${this.second_name} ${this.third_name} ${this.fourth_name}`
};

function getInitialName() {
    return `${this.first_name} ${this.second_name}`
};


module.exports = {
    getFullName,
    getInitialName
}