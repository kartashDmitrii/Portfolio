<template>
    <div class="grid-card" @click="$store.commit('changePopupState', 'ProjectPopup'), $store.commit('changeSelectedProject', card)">
        <div class="image">
            <img :src="require(`@/assets/${card.images[0]}`)" :alt="card.name[$ml.current]">
        </div>
        <b>{{card.name[$ml.current]}}</b>
        <p>{{card.date[$ml.current]}}</p>
    </div>
</template>

<script>
    export default {
        props: ['card'],
        name: "GridCard"
    }
</script>

<style scoped lang="sass">
    .grid-card
        display: flex
        flex-direction: column
        margin-bottom: 15px
        cursor: pointer
        &:hover
            background-color: #f7f7f7
            .image
                img
                    transform: scale(1.2)
        &:nth-last-child(-n+6)
            margin-bottom: 0
        .image
            position: relative
            padding-top: 60%
            overflow: hidden
            margin-bottom: 10px
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
        b
            font-family: Montserrat
            font-size: 16px
            line-height: 18px
            margin-bottom: 10px
            padding: 5px 5px 0
        p
            margin: 0
            font-family: Montserrat
            font-size: 14px
            line-height: 16px
            padding: 5px
</style>