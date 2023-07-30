
class User {
    constructor(id, username, fullname, password, email, gender){
        this.id = id,
        this.username = username,
        this.email = email,
        this.password = password,
        this.fullname = fullname,
        this.gender = gender
    }
}

module.exports = User