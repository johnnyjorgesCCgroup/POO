import { handleConcatNames } from "./concatNames.js";

class User {
    constructor() {
        this.names = ["ryan", "joe", "maria"]
        this.otherNames = ["marcos", "mario", "john"]
        this.background = "red"
        this.color = "white"
        this.isAuthorized = false
        this.result = `background: ${this.isAuthorized ? this.background : this.color}`
        this.button = document.createElement('button')
        this.button.innerText = "ON";
        this.button.style = this.result
        this.button.addEventListener("click", () => {
            if (this.isAuthorized) {
                return alert("aca toy 🐶")
            }
            alert("No estas autorizado")
        }
        )
    }
    start() {
        return console.log("Starting....")
    }
    handleClick() {
        return document.body.append(this.button)
    }
    handleNewNames() {
        this.newNames = this.names.map(function (name) {
            return console.log(`Hola ${name}`)
        })
    }
    handleSearchName() {
        this.searchName = this.names.find(function (name) {
            if (name === "joe") {
                return console.log(`Eres tu ${name}`)
            } console.log("No eres JOE :O")
        })
    }
    handleNewArrayNames() {
        this.ArrayNames = this.names.filter(function (name) {
            if (name !== "joe") {
                return name
            }
        })
    }
    async handleListJson(){
        const ul = document.createElement("ul");
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
        data.forEach(function (post){
            const li = document.createElement("li");
            li.innerText = post.title;
            ul.append(li);
        });
        document.body.append(ul);
    }
}

const user = new User()

user.handleClick()
user.handleNewNames()
user.handleSearchName()
user.start()

user.handleNewArrayNames()
console.log(user.ArrayNames)

console.log((handleConcatNames(user.names, user.otherNames)))

user.handleListJson()

