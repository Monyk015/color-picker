import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import RandomPicker from './components/RandomPicker.vue'
import IncrementPicker from './components/IncrementPicker.vue'
import InputPicker from './components/InputPicker.vue'
import SpectrumPicker from './components/SpectrumPicker.vue'
import store from './store.js'

require('materialize-css/bin/materialize.css')
var $ = window.jQuery = require('jquery')
// require('materialize-css/package.js')
// require('materialize-css/bin/materialize.js')

Vue.use(Router)

const routes = [
    { path: '/random', component: RandomPicker },
    { path: '/increment', component: IncrementPicker },
    { path: '/input', component: InputPicker },
    { path: '/spectrum', component: SpectrumPicker }
]

const router = new Router({
    routes
})

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})
