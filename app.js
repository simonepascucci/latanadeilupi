let app = Vue.createApp({
    e1 : 'app',
    data(){
        return {
            cocktails : [{
                nome : 'Cosmopolitan',
                ingredienti : ['Vodka', 'Triple sec', 'Succo di mirtillo', 'Succo di lime'],
                foto : 'Cocktails/cosmopolitan.jpg',
                famiglia: 'Shake & Strain'
            },
            {
                nome : 'Torquoise Blue',
                ingredienti : ['Rum', 'Blue Curacao', 'Sweet & Sour', "Succo d'ananas"],
                foto : 'Cocktails/tblue.jpg',
                famiglia : 'Shake & Strain'
            },
            {
                nome : 'Kamikaze',
                ingredienti : ['Vodka', 'Triple sec', "Succo di lime"],
                famiglia : 'Shake & Strain'
            },
            {
                nome : 'White Lady',
                ingredienti : ['Gin', 'Triple sec', "Succo di lime"],
                famiglia : 'Shake & Strain'
            },
            {
                nome : 'Margarita',
                ingredienti : ['Tequila', 'Triple sec', "Succo di lime"],
                famiglia : 'Shake & Strain'
            },
            {
                nome : 'Japanese Ice Tea',
                ingredienti : ['Vodka', 'Rum', 'Gin', 'Midori', 'Sweet & Sour', 'Lemon soda'],
                foto : 'Cocktails/japan.jpg',
                famiglia : 'Ice Tea'
            },
            {
                nome : 'Italian Ice Tea',
                ingredienti : ['Vodka', 'Rum', 'Gin', 'Amaretto', 'Sweet & Sour', 'Fanta'],
                foto : 'Cocktails/italian.jpg',
                famiglia : 'Ice Tea'
            },
            {
                nome : 'Long Beach Ice Tea',
                ingredienti : ['Vodka', 'Rum', 'Gin', 'Triple sec', 'Sweet & Sour', 'Succo di mirtillo'],
                foto : 'Cocktails/lbeach.jpg',
                famiglia : 'Ice Tea'
            },
            {
                nome : 'Miami Ice Tea',
                ingredienti : ['Vodka', 'Rum', 'Gin', 'Blue Curacao', 'Sweet & Sour', 'Lemon soda'],
                foto : 'Cocktails/miami.jpg',
                famiglia : 'Ice Tea'
            },
            {
                nome : 'Texas Ice Tea',
                ingredienti : ['Vodka', 'Rum', 'Tequila', 'Triple Sec', 'Sweet & Sour', 'Coca Cola'],
                foto : 'Cocktails/texas.jpg',
                famiglia : 'Ice Tea'
            },
            {
                nome : 'Long Island Ice Tea',
                ingredienti : ['Vodka', 'Rum', 'Gin', 'Triple sec', 'Sweet & Sour', 'Coca Cola'],
                famiglia : 'Ice Tea'
            },
            {
                nome : 'Beverly Hills Ice Tea',
                ingredienti : ['Vodka', 'Rum', 'Gin', 'Triple sec', 'Sweet & Sour', 'Prosecco'],
                famiglia : 'Ice Tea'
            },
            {
                nome : 'Negroni',
                ingredienti : ['Campari', 'Vermouth rosso', 'Gin'],
                foto : 'Cocktails/negroni.jpg',
                famiglia : 'No Family'
            },
            {
                nome : 'Negroski',
                ingredienti : ['Campari', 'Vermouth rosso', 'Vodka'],
                famiglia : 'No Family'
            },
            {
                nome : 'Negroni sbagliato',
                ingredienti : ['Campari', 'Vermouth rosso', 'Prosecco'],
                famiglia : 'No Family'
            },
            {
                nome : 'Americano',
                ingredienti : ['Campari', 'Vermouth rosso', 'Soda'],
                famiglia : 'No Family'
            },
            {
                nome : 'Boulevardier',
                ingredienti : ['Campari', 'Vermouth rosso', 'Whisky'],
                famiglia : 'No Family'
            },
            {
                nome : 'Malibu Sour',
                ingredienti : ['Malibu', 'Sweet & Sour'],
                foto : 'Cocktails/malibusour.jpg',
                famiglia : 'Sour'
            },
            {
                nome : 'Disaronno Sour',
                ingredienti : ['Amaretto disaronno', 'Sweet & Sour'],
                foto : 'Cocktails/tirannosauro.jpg',
                famiglia : 'Sour'
            },
            {
                nome : 'Midori Sour',
                ingredienti : ['Midori', 'Sweet & Sour'],
                foto : 'Cocktails/midorisour.jpg',
                famiglia : 'Sour'
            },
            {
                nome : 'Il Tuo Sour',
                ingredienti : ['Bevanda alcolica', 'Sweet & Sour'],
                famiglia : 'Sour'
            },
            {
                nome : 'Gin Lemon',
                ingredienti : ['Gin', 'Lemon soda'],
                foto : 'Cocktails/ginlemon.jpg',
                famiglia : 'Highball'
            },
            {
                nome : 'Gin Tonic',
                ingredienti : ['Gin', 'Acqua tonica'],
                foto : 'Cocktails/gintonic.jpg',
                famiglia : 'Highball'
            },
            {
                nome : 'Garibaldi',
                ingredienti : ['Campari', "Succo d'arancia"],
                foto : 'Cocktails/garibaldi.jpg',
                famiglia : 'Highball'
            },
            {
                nome : 'Screwdriver',
                ingredienti : ['Vodka', "Succo d'arancia"],
                famiglia : 'Highball'
            },
            {
                nome : 'Vodka Lemon',
                ingredienti : ['Vodka', 'Lemon soda'],
                famiglia : 'Highball'
            },
            {
                nome : 'Cap Code',
                ingredienti : ['Vodka', "Succo di mirtillo"],
                famiglia : 'Highball'
            },
            {
                nome : 'Melon Ball',
                ingredienti : ['Midori', "Succo d'arancia"],
                famiglia : 'Highball'
            }],
            categoria : null,
            scopri : null
        }

    },
    computed : {
        condizioni(){
            return this.cocktails.filter(c => (c.famiglia == this.categoria || this.categoria == null) &&
                                                (c == this.scopri || this.scopri == null));
        }
    }
}).mount('#app')