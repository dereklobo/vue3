const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            details: ['80% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 1, color: 'green'
                },
                {
                    id: 2, color: 'blue'
                }
            ]
        }
    }
})
