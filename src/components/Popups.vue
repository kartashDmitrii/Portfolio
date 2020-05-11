<template>
    <div id="wrapper" v-if="$store.state.showPopup" @click.stop="closePopup($event)">
        <div id="popup">
            <component @close="customClose" :is="$store.state.currentPopup"></component>
        </div>
    </div>
</template>

<script>
    import FormPopup from "./Popups/FormPopup";
    import ProjectPopup from "./Popups/ProjectPopup";

    export default {

        name: "Popups",
        components: {FormPopup,ProjectPopup},
        data(){
            return {

            }
        },
        methods: {
            closePopup(event){
                if (event.target.id === 'wrapper'){
                    document.querySelector('#popup').classList.add('removed');
                    setTimeout(()=>{
                        this.$store.commit('changePopupState', '');
                        document.querySelector('#popup').classList.remove('removed');
                    }, 450)
                }
            },
            customClose(){
                document.querySelector('#popup').classList.add('removed');
                setTimeout(()=>{
                    this.$store.commit('changePopupState', '');
                    document.querySelector('#popup').classList.remove('removed');
                }, 450)
            }
        }
    }
</script>

<style scoped lang="sass">
    @keyframes show
        from
            top: -600px
            opacity: 0
        to
            top: 40px
            opacity: 1
    @keyframes hide
        from
            top: 40px
            opacity: 1
        to
            top: -600px
            opacity: 0
    #wrapper
        z-index: 100
        position: fixed
        top: 0
        left: 0
        width: 100vw
        height: 100vh
        overflow: auto
        background-color: rgba(0,0,0,.4)
    #popup
        animation: show .5s
        z-index: 101
        max-width: 850px
        position: absolute
        overflow: auto
        top: 40px
        left: 0
        right: 0
        margin: 0 auto 40px
        padding: 20px
        border: 5px solid #000
        display: flex
        flex-direction: column
        background-color: #fff
        &.removed
            animation: hide .5s
</style>