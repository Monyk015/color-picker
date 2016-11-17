<template>
    <div id="increment-picker">
        <div>Click until you get what you desire</div>
        <div class="row">
            <div class="color">{{color}}</div>
            <button v-on:click="increment" class="waves-effect waves-light btn">+</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'increment-picker',
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
            increment(){
                this.$store.commit('incrementColor')
            }
        }
    }
</script>

<style scoped>
    button{
        display: inline-block;
    }
</style>