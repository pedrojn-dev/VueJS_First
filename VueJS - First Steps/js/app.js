var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        sum: 3 + 6,
        value: 6,
        isVisible: true,
        filtro_edad: 18,
        people: ["Andres", "Juan", "Pepe", "Alejandro"],
        CopyArrayObjects: [],
        ArrayObjects: [
            { name: "Pedro", surname: "cruz", age: 28 },
            { name: "Fernando", surname: "veracruz", age: 14 },
            { name: "Samuel", surname: "omega", age: 21 },
            { name: "Andrea", surname: "santacruz", age: 12 },
            { name: "Sara", surname: "flores", age: 19 }
        ],
        content_html: "<h1>Hola Mundo</h1>",
        src: "img/logo1.png",
        text: "Descripción de nuestra image",
        numero: 13,
        v_model: "Hola V-model",
        p_error: false
    },
    created: function() {
        this.CopyArrayObjects = this.ArrayObjects;
    },
    computed: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        filterPeopleObjects: function() {
            this.ArrayObjects = this.CopyArrayObjects;
            this.ArrayObjects = this.ArrayObjects.filter(
                person => {
                    return person.age > this.filtro_edad
                }
            )
        },
        filterPeople: function() {
            this.people.filter(
                person => {
                    return person.length > 5
                })
        },
        calculateSum(value1, value2) {
            return value1 + value2;
        },
        incrementar() {
            this.numero++
        },
        decrementar() {
            this.numero--
        }
    },
    watch: {
        numero: function(val) {
            console.log("watch: " + val);
        }
    }
});