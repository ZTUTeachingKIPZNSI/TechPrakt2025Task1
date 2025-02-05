class User {
    #login;
    #password;

    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }

    getLogin() {
        return this.#login;
    }

    testPassword(password) {
        return this.#password === password;
    }

    display() {
        console.log(this.#login);
    }
}

class Admin extends User {
    #role;

    constructor(login, password, role) {
        super(login, password);
        this.#role = role;
    }
}

const user = new User('admin', '123456');

let panelParams = {
    title: 'Title',
    height: 200,
    age: 30
};

let { title, height } = panelParams;
let id = 1, count = 10, price = 10.5; // Виправлено некоректне оголошення

let x = 1, y = 2;
[x, y] = [y, x];

function func2(a, b, c) {
    console.log(a, b, c);
}
