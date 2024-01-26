
class user{
    constructor(){
        this.name = "johnny"
        this.age = 26
    }
}

class TitlePrincipal extends user{
    constructor(){
        super()
        this.title = document.createElement("h1");
        this.title.innerText="Prueba";
        this.button = document.createElement("button");
        this.button.innerText="Ingresar";
        this.button.addEventListener("click", () => {
            this.title.innerText = "Cambiando"
            alert("Se realizo un click")
        })
    }
    printInfo(){
        return '<h1>Hola ' + this.name + '</h1>' + '<h1>' + this.age + '</h1>'
    }
    AddTitlePrincipal(){
        return document.body.append(this.title), document.body.append(this.button)
    }
}

const user1 = new user()

const title1 = new TitlePrincipal();

document.body.innerHTML = title1.printInfo()
title1.AddTitlePrincipal()