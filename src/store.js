import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
            r: 0,
            g: 0,
            b: 0
    },
    mutations: {
        changeFromString(state, color) {
            state.r = parseInt(color.substring(1, 3), 16)
            state.g = parseInt(color.substring(3, 5), 16)
            state.b = parseInt(color.substring(5, 7), 16)
        },
        changeFromNumbers(state, r, g, b) {
            state.r = r
            state.g = g
            state.b = b
        },
        generateColorRandomly(state)
        {
            state.r = Math.floor((Math.random()*255))
            state.g = Math.floor((Math.random()*255))
            state.b = Math.floor((Math.random()*255))
        },
        incrementColor(state)
        {
            state.b++
            if(state.b > 255)
            {
                state.b = 0
                state.g++
            }
            if(state.g > 255)
            {
                state.g = 0
                state.r++
            }
            if(state.r > 255)
            {
                state.r = 0
            }
        }
    },
    getters: {
        getAsString:(state) => {
            let r = state.r < 16 ? '0' + state.r.toString(16) : state.r.toString(16)  
            let g = state.g < 16 ? '0' + state.g.toString(16) : state.g.toString(16)  
            let b = state.b < 16 ? '0' + state.b.toString(16) : state.b.toString(16)  
            return '#' + r + g + b
        },
        getAsObject(state){
            return state
        }
    }
})
export default store