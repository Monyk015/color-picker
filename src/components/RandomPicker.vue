<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="random-picker">
        <div>Did you want this color?</div>
        <div class="color">{{color}}</div>
        <button v-on:click="generate" class="waves-effect waves-light btn">Nope.</button>
    </div>
</template>

<script>
    export default {
        name:'random-picker',
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
            generate(){
                this.$store.commit('generateColorRandomly')
            }
        }
    }
</script>

<style>

</style>