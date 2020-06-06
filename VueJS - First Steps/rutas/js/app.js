const router = new Vuerouter({
    base: "rutas",
    routes: [{
        path: '/lists',
        components: Lists
    }]
})

var app = new Vue({
    router,
    el: '#app',
});