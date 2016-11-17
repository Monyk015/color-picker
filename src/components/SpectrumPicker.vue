<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="spectrum-picker">
        <div>Choose the color</div>
        <div class="color">{{color}}</div>
        <input id="spectrum" v-model="color"/>
    </div>
</template>

<script>
    var $ = window.jQuery = require('jquery')
    require('bgrins-spectrum/spectrum.js')
    require('bgrins-spectrum/spectrum.css')
    export default {
        name:'spectrum-picker',
        data() {
            return {
                a: 'lol'
            }
        },
        computed: {
            color() {
                return this.$store.getters.getAsString
            }
        },
        methods:{
        },
        mounted(){
            $("#spectrum").spectrum({
                flat: true
            }).on('move.spectrum', (event, color) => {
                console.log(color)
                this.$store.commit('changeFromString', color.toHexString())
            })
        }
    }
</script>

<style>
    #spectrum-picker{
        height: 150px;
    }

    #spectrum-picker *{
        margin: 0 !important;
        /*padding: 0 !important;*/
        /*border: 0;*/
    }
    .sp-button-container{
        display: none;
    }

    .sp-picker-container{
        padding: 5px !important;
        background-color: white;
    }
    .sp-container{
        border: 0 !important;
    }
</style>