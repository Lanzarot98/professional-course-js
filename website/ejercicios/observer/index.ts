// Observer recibe actualización de los datos
interface Observer {
    update: (data: any) => void // puede regresar undefined (void)
}

interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

// clase bitcoin va a implementar la interface subject. va ser quien recibe los cambios de precio e informa a los subscriptores
class BitcoinPrice implements Subject {
    observers: Observer[] = []; //lista de suscriptores

    constructor() {
        const el: HTMLInputElement = document.querySelector("#value") as HTMLInputElement;
        el.addEventListener('input', () => {
            this.notify(el.value);
        })
    }

    // añade los suscriptores
    subscribe (observer: Observer) {
        this.observers.push(observer);
    }

    // saca el suscriptor
    unsubscribe(observer: Observer) {
        //queremos encontrar el indice de ese observer
        const index = this.observers.findIndex((obs) => {
            return obs === observer
        })

        // a partir de ese indice cuantos elementos sacar? 1 y con eso sacamos el observer de la lista observers
        this.observers.splice(index,1);
    }

    // cuando el precio cambie hay que notificar a todos nuestros subscriptores
    notify(data: any) {
        this.observers.forEach((observer) => observer.update(data))
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement;
    constructor( ) {
        this.el = document.querySelector('#price') as HTMLElement;
    }


    update(data: any) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display); //suscribir al display

setTimeout(() => value.unsubscribe(display), 5000);











