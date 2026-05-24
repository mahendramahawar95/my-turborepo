class UserModel {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Method to save user to the database (pseudo-code)
    save() {
        // Logic to save user to the database
    }

    // Method to find a user by email (pseudo-code)
    static findByEmail(email) {
        // Logic to find user by email
    }

    // Method to update user information (pseudo-code)
    update(data) {
        // Logic to update user information
    }

    // Method to delete user (pseudo-code)
    static delete(userId) {
        // Logic to delete user
    }
}

export default UserModel;