<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="app">
        <div class="container">
            <div class="row">
                <div id="color" class="card col s6" v-bind:style="{'background-color': color}"></div>
                <div id="right" class="card col s6">
                    <ul class="tabs">
                        <li class="tab col s3">
                            <router-link v-bind:class="{active: $route.path=='/random'}" to="/random">Way 1
                            </router-link>
                        </li>
                        <li class="tab col s3">
                            <router-link v-bind:class="{active: $route.path=='/increment'}" to="/increment">Way 2
                            </router-link>
                        </li>
                        <li class="tab col s3">
                            <router-link v-bind:class="{active: $route.path=='/input'}" to="/input">Way 3</router-link>
                        </li>
                        <li class="tab col s3">
                            <router-link v-bind:class="{active: $route.path=='/spectrum'}" to="/spectrum">Way 4</router-link>
                        </li>
                    </ul>
                    <router-view class="router-view"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function()
        {
            return {
                msg: 'Welcome to Your Vue.js'
            }
        },
        methods: {
            increment (){
                this.counter++
            }
        },
        computed: {
            color()  {
                return this.$store.getters.getAsString
            }
        },
        created: function()
        {
            // this.$store.commit('changeFromString',"#123123")
        }
    }
</script>

<style>
    body
    {
        min-height: 250px;
    }

    *
    {
        box-sizing: border-box;
    }

    .active
    {
        border-bottom: #ee6e73 solid 2px;
    }

    #app
    {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        margin-right: auto;
        margin-left: auto;
        height: auto;
    }

    h1,
    h2
    {
        font-weight: normal;
    }

    a
    {
        color: #42b983;
    }

    #color
    {
        height: 300px;
        width: 300px;
    }

    #right
    {
        height: 300px;
    }

    .card
    {
        padding-bottom: 15px;
    }

    .router-view
    {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 80px;
    }

    .color{
        font-weight:300;
        font-size: 25px !important;
    }

</style>