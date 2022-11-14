class User{
    constructor(username){
        this.username = username;
    }
    saymyname(){
        return `Hi! My name is ${this.username}`;
    }
}

module.exports = {
    User,
}