class Navbar { //Dichiaro la classe
    constructor(element) { //Costruttore della classe
        this.navbar = element; //L'elemento che passo al costruttore la salva nella var navbar
        this.navbar.querySelectorAll('.ar-navitem').forEach((
            item) => { //scorre tutti gli elementi che hanno come classe .ar-item
            item.addEventListener('click', (
                event) => { //al click richiama la funzione toggleActive dichiarata sotto e gli passo come parametro l'elemento cliccato item
                this.toggleActive(item);
            });
        });
    }
    toggleActive(currentElement) { //Dichiaro la funzione toggleActive
        this.navbar.querySelectorAll('.ar-navitem').forEach((
            item) => { //scorre tutti gli elementi che hanno come classe .ar-item
            item.classList.remove('active'); //rimuove la classe active a tutti gli elementi

        });
        currentElement.classList.toggle('active'); //solo all'elemento corrente passato alla funzione aggiunge la classe active (in modo da colorarla di rosso)
    }
}

new Navbar(document.querySelector('.ar-navlinks')); //dichiaro un nuovo elemento di tipo Navbar (che esiste perchè ho creato la classe sopra )e al costruttore della classe gli passo come elemento del documento la navbar dell'html.

