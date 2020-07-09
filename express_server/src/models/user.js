class User {
    username;
    email;
    password;
    constructor(data){
        Object.assign(this, data);
    }
}
module.exports = User;