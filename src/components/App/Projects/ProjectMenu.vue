<template>
    <div class="container project-menu">
        <div class="project-type">
            <label class="squares">
                <img src="@/assets/img/svg/four-squares.svg" alt="">
                <input type="radio" name="asass" @click="changeType" value="grid">
            </label>
            <label class="list">
                <img src="@/assets/img/svg/list.svg" alt="">
                <input type="radio" name="asass" @click="changeType" value="list">
            </label>
        </div>
        <FilterProjects/>
    </div>
</template>

<script>
    import FilterProjects from "./FilterProjects";
    export default {
        name: "ProjectMenu",
        components: {FilterProjects},
        data(){
            return {
                type: 'grid'
            }
        },
        methods: {
            changeType(event){
                this.type = event.target.value;
                this.$emit('changeType', this.type)
            }
        }
    }
</script>

<style scoped lang="sass">
.project-menu
    margin-top: 15px
    margin-bottom: 20px
    padding-bottom: 20px
    border-bottom: 1px solid #c0c0c0
    display: flex
    align-items: center
    justify-content: space-between
    @media (max-width: 480px)
        flex-direction: column
        align-items: flex-start
    .project-type
        display: flex
        align-items: center
        @media (max-width: 480px)
            margin-bottom: 20px
            align-items: flex-start
        label
            cursor: pointer
            border-radius: 5px
            height: 35px
            width: 35px
            display: flex
            justify-content: center
            align-items: center
            background-color: #cfcfcf
            margin-right: 10px
            &:hover
                background-color: #d6d6d6
            &:last-child
                margin-right: 0
            input
                display: none
            &.squares
                img
                    width: 15px
                    height: 15px
            &.list
                img
                    height: 20px
                    height: 20px
</style>