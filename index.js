
let vm = new Vue({
    el: '#app',
    data: {
        green: 0,
        blue: 0,
        red: 0,
        squares: [],
        squareBackgroundColor: '',
    },
    methods: {
        resetColor() {
            this.green = this.blue = this.red = 0;
        },
        saveQuare() {
            this.squares.push(`rgb(${this.blue}, ${this.green}, ${this.red})`);
            console.log('squares', this.squares);
            this.resetColor();
        },
        reset() {
            this.resetColor();
            this.squares = [];
            this.squareBackgroundColor = '';
        },
    },
    computed: {
        nbrOfSquares() {
            return this.squares.length;
        },
    },
});