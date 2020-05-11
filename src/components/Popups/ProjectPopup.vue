<template>
    <div class="project-popup">
        <div class="name">
            {{$store.state.selectedProject.name[$ml.current]}}<span>.</span>
        </div>
        <div class="images">
            <div class="image" v-for="(elem, index) in $store.state.selectedProject.images" :key="index">
                <img :src="require(`@/assets/${elem}`)" alt="example" ref="big-image">
            </div>
        </div>
        <div class="description">
            <p>
                {{$store.state.selectedProject.description[$ml.current]}}
            </p>
        </div>
        <div class="stack">
            <p>stack:</p>
            <ul>
                <li v-for="(tag, index) in $store.state.selectedProject.tags" :key="index">#{{tag.trim().toLowerCase()}}</li>
            </ul>
        </div>
        <div class="date">
            <p>{{$store.state.selectedProject.date[$ml.current]}}</p>
        </div>
        <div class="buttons">
            <button v-if="$store.state.selectedProject.site"><a :href="$store.state.selectedProject.site" target="_blank">Visit Website</a></button>
            <button class="close-btn" @click.stop="closePopup($event)">Back to CV</button>
            <button v-if="$store.state.selectedProject.page">Open Full Description</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectPopup",
        data(){
            return {
            }
        },
        methods: {
            closePopup(){
                this.$emit('close')
            }
        }
    }
</script>

<style scoped lang="sass">
    .project-popup
        .name
            font-size: 32px
            font-family: "YanoneKaffeesatz"
            font-weight: 600
            margin-bottom: 15px
            span
                color: #0037ff
        .images
            display: flex
            flex-direction: column
            margin-bottom: 20px
            .image
                position: relative
                padding-top: 56.25%
                overflow: hidden
                background-color: #f3f3f3
                margin: 5px 0
                img
                    position: absolute
                    top: 0
                    bottom: 0
                    left: 0
                    right: 0
                    margin: auto
                    width: 100%
                    height: auto
        .description
            margin-bottom: 35px
            *
                font-size: 24px
                line-height: 26px
                font-family: "YanoneKaffeesatz"
                margin: 0 0 10px
                &:last-child
                    margin-bottom: 0
        .stack
            margin-bottom: 35px
            display: flex
            align-items: flex-start
            p
                text-transform: uppercase
                font-weight: 600
                font-family: "YanoneKaffeesatz"
                font-size: 18px
                margin: 4px 10px 4px 0
            ul
                padding: 0
                margin: 0
                display: flex
                flex-wrap: wrap
                li
                    list-style: none
                    font-family: "FjallaOne"
                    font-size: 14px
                    border-radius: 15px
                    background-color: #dedede
                    margin: 0 1px 2px
                    padding: 5px 10px
                    &:nth-last-child(-n+5)
                        margin-bottom: 0
        .date
            margin-bottom: 35px
            display: flex
            justify-content: flex-end
            font-weight: 700
            font-family: "FjallaOne"
            font-size: 18px
            p
                margin: 0
        .buttons
            display: flex
            align-items: center
            button
                margin-right: 15px
                background: transparent
                font-family: Montserrat
                font-size: 21px
                padding: 5px 10px
                border: 5px solid #000
                font-weight: 700
                cursor: pointer
                text-transform: uppercase
                transition: all .3s
                color: #000
                a
                    text-decoration: none
                    color: inherit
                &:hover
                    background-color: #316fbb
                    color: #fff
                &:last-child
                    margin-right: 0
</style>