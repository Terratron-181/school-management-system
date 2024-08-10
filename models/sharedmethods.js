
function getFullName() {
    return `${this.first_name} ${this.second_name} ${this.third_name} ${this.fourth_name}`
};

function getInitialName() {
    return `${this.first_name} ${this.second_name}`
};

async function setName(first_name, second_name, third_name, fourth_name, ...fifth_name) {
    try {
        this.first_name = first_name;
        this.second_name = second_name;
        this.third_name = third_name;
        this.fourth_name = fourth_name;
        this.fifth_name = fifth_name[0];
        await this.save();
    } catch (error) {
        console.log(`Failed: setName(${first_name}, ${second_name}, ${third_name}, ${fourth_name}, ${fifth_name}) for student(${this._id}). \n err.msg: ${error.message}.`);        
    }
};

module.exports = {
    getFullName,
    getInitialName,
    setName
}