class Author {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get name() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export default Author;