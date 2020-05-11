<template>
    <div class="list-card" @click="$store.commit('changePopupState', 'ProjectPopup'), $store.commit('changeSelectedProject', card)">
        <div class="image">
            <img :src="require(`@/assets/${card.images[0]}`)" :alt="card.name[$ml.current]">
        </div>
        <div class="info">
            <b>{{card.name[$ml.current]}}</b>
            <p>{{card.date[$ml.current]}}</p>
            <p class="desc">
                {{card.description[$ml.current]}}
            </p>
            <div v-if="descHeight > 90" class="shadow"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['card'],
        name: "ListCard",
        mounted() {
          this.descHeight = parseInt(window.getComputedStyle(document.querySelector('.desc')).getPropertyValue('height'))
        },
        data(){
            return {
                descHeight: 0
            }
        },
    }
</script>

<style scoped lang="sass">
    .list-card
        width: 100%
        display: flex
        height: 150px
        margin-bottom: 15px
        cursor: pointer
        &:hover
            background-color: #f7f7f7
            img
                transform: scale(1.2)
        .image
            width: 10%
            position: relative
            padding-top: 10%
            overflow: hidden
            @media (max-width: 1278px)
                width: 15%
                padding-top: 15%
            @media (max-width: 991px)
                width: 20%
                padding-top: 20%
            @media (max-width: 480px)
                width: 25%
                padding-top: 25%
            @media (max-width: 320px)
                width: 30%
                padding-top: 30%
            img
                transition: all .3s
                position: absolute
                top: 0
                bottom: 0
                left: 0
                right: 0
                margin: auto
                width: 100%
                height: auto
        .info
            width: calc(90% - 15px)
            margin-left: 15px
            flex-grow: 1
            display: flex
            flex-direction: column
            overflow: hidden
            position: relative
            @media (max-width: 1278px)
                width: calc(85% - 15px)
            @media (max-width: 991px)
                width: calc(80% - 15px)
            @media (max-width: 480px)
                width: calc(75% - 15px)
            @media (max-width: 320px)
                width: calc(70% - 15px)
            .shadow
                position: absolute
                width: 100%
                bottom: -13px
                left: 0
                box-shadow: 0px -13px 20px 19px #fff
            b
                font-family: Montserrat
                font-size: 16px
                line-height: 18px
                margin-bottom: 10px
                padding: 5px 5px 0
            p,.desc
                margin: 0
                font-family: Montserrat
                font-size: 14px
                line-height: 16px
                padding: 5px
</style>