const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 100,
            details: ['80% cotton', '30% wool', '20% polyester'],
        }
    }
})
