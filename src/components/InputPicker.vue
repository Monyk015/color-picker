<template>
    <div id="input-picker">
        <div class="valign">
            <div>Input desired color</div>
            <input v-model="color" v-bind:class="{'invalid-input': isInvalid}" class="valign color"/>
        </div>
    </div>
</template>

<script>
    export default {
        name:'input-picker',
        data() {
            return {
                isInvalid : false,
                currentString : this.$store.getters.getAsString
            }
        },
        computed: {
            color:{
                set(value){
                    if(/^#[0-9a-f]{6}$/i.test(value))
                    {
                        this.isInvalid = false
                        this.$store.commit('changeFromString', value)
                        this.currentString = value
                    }
                    else
                    {
                        this.currentString = value
                        this.isInvalid = true
                    }
                },
                get(){
                    if(this.isInvalid)
                        return this.currentString
                    return this.$store.getters.getAsString
                }
            }
        }
    }
</script>

<style scoped>
    input{
        width: 100px !important;
    }

    .invalid-input{
        border-bottom-color: #ff1719 !important;
    }
    .invalid-input:active{
        border-bottom-color: #ff1719 !important;
        border-bottom-width: 2px !important;
        box-shadow:0 1px 0 #ff1719 !important;
    }
</style>