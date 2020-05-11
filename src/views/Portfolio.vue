<template>
    <div id="projects">
        <ProjectMenu @changeType="changeType"/>
        <ProjectTable :type="type"/>
    </div>
</template>

<script>
    import ProjectMenu from "../components/App/Projects/ProjectMenu";
    import ProjectTable from "../components/App/Projects/ProjectTable";
    export default {
        name: "Projects",
        components: {ProjectTable, ProjectMenu},
        data () {
            return {
                type: 'grid'
            }
        },
        methods: {
            changeType(type){
                this.type = type;
            }
        }
    }
</script>

<style scoped lang="sass">

</style>