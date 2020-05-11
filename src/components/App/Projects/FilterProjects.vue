<template>
    <div class="filter-projects">
        <p @click="changeStatus" v-for="(elem,index) in allTags" :key="index">#{{elem}}</p>
    </div>
</template>

<script>
    export default {
        name: "FilterProjects",
        data(){
            return {
                allTags: '',
            }
        },
        created() {
            let set = new Set();
            this.$store.state.projects.forEach( (elem) => {
                elem.tags.forEach( elem => set.add(elem.toLowerCase()))
            });
            this.allTags = set
        },
        methods: {
            changeStatus(event){
                event.target.classList.toggle('selected');
                if (event.target.classList.contains('selected')){
                    this.$store.commit('addNewSelectedTag', event.target.innerText)
                } else {
                    this.$store.commit('removeSelectedTag', event.target.innerText)
                }
            }
        }
    }
</script>

<style scoped lang="sass">
    .filter-projects
        display: flex
        flex-wrap: wrap
        justify-content: flex-end
        @media (max-width: 480px)
            justify-content: center
        p
            cursor: pointer
            margin: 0 10px 0 0
            font-family: Montserrat
            font-size: 14px
            line-height: 16px
            padding: 5px
            border-radius: 20px
            background-color: #f7f7f7
            &:hover
                background-color: #c3c3c3
            &.selected
                background-color: #0097ff
                color: #fff
                font-weight: 700
            &:last-child
                margin-right: 0
</style>