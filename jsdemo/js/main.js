let arr = [
    { "name": "Petro", "age": 19, "title": "Student" },
    { "name": "Sergiy", "age": 22, "title": "Engineer" },
    { "name": "Oleh", "age": 25, "title": "Designer" }
];

class UserPanels {
    #userArray;
    #stateArray;

    constructor(userArray) {
        this.#userArray = userArray;
        this.#stateArray = new Array(userArray.length).fill(false);
        this.loadState();
        this.#build();
    }

    saveState() {
        localStorage.setItem('panels-state', JSON.stringify(this.#stateArray));
    }

    loadState() {
        let savedState = localStorage.getItem('panels-state');
        if (savedState) {
            try {
                this.#stateArray = JSON.parse(savedState);
            } catch {
                this.#stateArray = new Array(this.#userArray.length).fill(false);
                this.saveState();
            }
        }
    }

    #build() {
        let container = document.getElementById('user-container');
        container.innerHTML = ''; // Очистка контейнера

        this.#userArray.forEach((user, index) => {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.dataset.id = index.toString();

            if (this.#stateArray[index]) userDiv.classList.add('selected');

            for (let key in user) {
                let divField = document.createElement('div');
                divField.classList.add(key);
                divField.textContent = `${key}: ${user[key]}`;
                userDiv.appendChild(divField);
            }

            userDiv.addEventListener('click', () => {
                this.#stateArray[index] = !this.#stateArray[index];
                this.saveState();
                userDiv.classList.toggle('selected');
            });

            container.appendChild(userDiv);
        });
    }
}

new UserPanels(arr);
