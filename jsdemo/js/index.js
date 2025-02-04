// Оголошення констант
const PANEL_WIDTH = 300;
const PANEL_HEIGHT = 200;
const PANEL_AGE = 30;
const DEFAULT_LOGIN = 'admin';
const DEFAULT_PASSWORD = '123456';

class User {
    #login;
    #password;

    constructor(login = DEFAULT_LOGIN, password = DEFAULT_PASSWORD) {
        this.#login = login;
        this.#password = password;
    }

    getLogin() {
        console.log(this);
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

    constructor(login = DEFAULT_LOGIN, password = DEFAULT_PASSWORD, role) {
        super(login, password);
        this.#role = role;
    }
}

const user = new User(DEFAULT_LOGIN, DEFAULT_PASSWORD);

let panelParams = {
    width: PANEL_WIDTH,
    title: 'Title',
    height: PANEL_HEIGHT,
    age: PANEL_AGE
};

let {title, height} = panelParams;
let [id, panelTitle, count, price] = [1, 'title', 10, 10.5]; // Оновлено значення, де потрібно
let x = 1;
let y = 2;
[x, y] = [y, x];

function func2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

/*let arr2 = [1, 2, 3, 4, 5];
func2(...arr2);*/

/*
let myf = user.getLogin;
console.log(myf.bind(user));

console.log(user.getLogin());
const admin = new Admin('admin', '123456', 'all');
*/
