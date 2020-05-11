<template>
    <div class="container" :class="`${type}-table`">
        <component :is="`${type}-card`" v-for="(item,index) in $store.getters.getFilteredList" :card="item" :key="index"></component>
    </div>
</template>

<script>
    import GridCard from "./ProjectCard/GridCard";
    import ListCard from "./ProjectCard/ListCard";
    export default {
        props: ['type'],
        name: "ProjectTable",
        components: {ListCard, GridCard},
        data(){
            return {
            }
        }
        /*
        * Types :
        *       1) Grid
        *       2) Row
        *       3) Mobile
        *
        *
        * */
    }
</script>

<style scoped lang="sass">
    .grid-table
        display: grid
        grid-column-gap: 15px
        grid-template-columns: repeat(6, 1fr)
        grid-row-gap: 15px
        @media (max-width: 1279px)
            grid-template-columns: repeat(5, 1fr)
            grid-column-gap: 10px
        @media (max-width: 991px)
            grid-template-columns: repeat(3, 1fr)
        @media (max-width: 767px)
            grid-template-columns: 1fr 1fr
        @media (max-width: 480px)
            grid-template-columns: 1fr
</style>