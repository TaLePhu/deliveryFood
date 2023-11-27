export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/categories/icons8-hamburger-96.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/categories/icons8-takeout-box-96.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/categories/kem.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/categories/noodle.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/categories/drink.png'),
    },

]


export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/dishes/chicken.jpeg')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/dishes/fish.jpeg')
                },
            ]
    
        },
        {
            id: 2,
            name: 'KFC',
            image: require('../assets/restaurants/kfc.webp'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/dishes/hamburger.jpeg')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/dishes/rice.jpeg')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        }
    ]
}
