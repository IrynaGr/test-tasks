const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image});
const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car('Audi', 'A6', 'Max', '2015','+7 929 123 45 67', 'images/audi.jpg'),
    car('Fiat', 'Egea', 'Alex', '2012','+7 929 891 23 45', 'images/fiat.png'),
    car('Toyota', 'Camry', 'Bob', '2017','+7 929 678 91 23', 'images/toyota.jpg'),
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },

        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },

        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cancel')
        )
        }
    },
    computed: {
        phoneBtnText() {
            return  this.phoneVisibility ? 'Hide phone' : 'Show Phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1;
            });
        },
        filters:{
            date(value){
                return value.toLocaleString()
            }
        }
    }
})