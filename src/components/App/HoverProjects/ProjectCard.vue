<template>
    <li class="example" @click="$store.commit('changePopupState', 'ProjectPopup'), $store.commit('changeSelectedProject', elem)">
        <div class="image">
            <img :src="require(`@/assets/${elem.images[0]}`)" alt="">
        </div>
        <p class="name">
            {{elem.name[$ml.current]}}
        </p>
        <div class="tags">
            <ul>
                <li v-for="(tag, index) in elem.tags" :key="index">#{{tag.trim().toLowerCase()}}</li>
            </ul>
        </div>
        <div class="description">
            <p>
                {{elem.description[$ml.current]}}
            </p>
        </div>
    </li>
</template>

<script>
    export default {
        props: ['elem'],
        name: "ProjectCard"
    }
</script>

<style scoped lang="sass">
    .example
        padding: 10px
        list-style: none
        display: flex
        flex-direction: column
        height: 100%
        cursor: pointer
        &:hover
            background-color: #f4fbfa
        .image
            position: relative
            padding-top: 75%
            overflow: hidden
            img
                position: absolute
                top: 0
                bottom: 0
                left: 0
                right: 0
                margin: auto
                width: 100%
                height: auto
        .name
            margin: 10px 0
            font-family: Montserrat
            font-size: 21px
            line-height: 24px
            height: 48px
            font-weight: 700
            text-align: center
            display: flex
            align-items: center
            justify-content: center
            @media (max-width: 1534px)
                font-size: 18px
                line-height: 21px
        .tags
            ul
                padding: 0
                margin: 0
                display: flex
                align-items: center
                flex-wrap: wrap
                justify-content: center
                li
                    list-style: none
                    font-family: "FjallaOne"
                    font-size: 10px
                    border-radius: 10px
                    background-color: #dedede
                    margin: 0 1px 2px
                    padding: 5px 10px
        .description
            font-family: Montserrat
            font-size: 14px
            line-height: 16px
            text-align: justify
            max-height: 112px
            overflow: hidden
            box-sizing: border-box
            margin: 10px 0
            p
                margin: 0
</style>