<template>
    <div class="projects" :class="{show: showProjects}">
        <ul class="container">
            <ProjectCard :elem="$store.state.projects[n-1]" v-for="n in mediaList" :key="n" />
        </ul>
        <router-link to="/portfolio" class="ref">All projects</router-link>
    </div>
</template>

<script>
    import ProjectCard from '@/components/App/HoverProjects/ProjectCard.vue'

    export default {
        props: {
            showProjects: Boolean
        },
        name: "HoverProjects",
        components:{
            ProjectCard
        },
        computed: {
            mediaList(){
                if (window.innerWidth >= 1279 && this.$store.state.projects.length >= 6){
                    return 6
                } else if (window.innerWidth >= 992 && this.$store.state.projects.length >= 5) {
                    return 5
                } else if (this.$store.state.projects.length >= 4) {
                    return 4
                } else {
                    return this.$store.state.projects.length
                }
            }
        }
    }
</script>

<style scoped lang="sass">
    .projects
        z-index: 1
        width: 100%
        box-sizing: border-box
        position: absolute
        padding: 0
        top: 104px
        transform: translateY(-100%)
        left: 0
        transition: all .3s
        margin: 0
        border-bottom: 5px solid #000
        background-color: #fff
        display: flex
        flex-direction: column
        &:hover
            transform: translateY(0)
        &.show
            transform: translateY(0)
        @media (max-width: 768px)
            display: none
        ul
            margin: 0 auto
            width: 100%
            height: 390px
            overflow: hidden
            display: grid
            grid-template-columns: repeat(6, 1fr)
            grid-column-gap: 20px
            @media (max-width: 1279px)
                grid-template-columns: repeat(5, 1fr)
            @media (max-width: 992px)
                grid-template-columns: repeat(4, 1fr)
        .ref
            align-self: center
            font-family: "Montserrat"
            color: #000
            margin-bottom: 5px
            font-size: 12px
            &:hover
                text-decoration: none
</style>