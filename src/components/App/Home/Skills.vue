<template>
    <div class="skills container-fluid">
        <div class="container">
            <div class="desc">
                <div class="name"><p v-html="$ml.get('skills.name')">Skills</p><span>.</span></div>
                <div class="text">
                    <p v-text="$ml.get('skills.desc')">My dream is to work in a company with people who are also involved in the development of something amazing, like me</p>
                </div>
            </div>
            <div class="skill-border">
                <div v-for="(elem, index) in $store.state.skills" :key="index" class="elem">
                    <b>{{elem.global_name[$ml.current]}}</b>
                    <p>{{elem.stack.join(', ')}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style scoped lang="sass">
    .skills
        border-bottom: 1px solid #C9C7D6
        margin: 25px 0
        .container
            display: flex
            position: relative
            margin: 25px auto
            @media (max-width: 992px)
                flex-direction: column
            &:before
                content: ''
                width: 75px
                height: 75px
                background: url("~@/assets/img/svg/dragon.svg") center center / 100% auto no-repeat
                bottom: 0
                left: 0
                margin: auto
                position: absolute
                z-index: 2
                @media (max-width: 576px)
                    bottom: auto
                    left: auto
                    top: 0
                    right: 0
                    width: 40px
                    height: 40px
            .desc
                width: calc(35% - 50px)
                margin-right: 50px
                display: flex
                flex-direction: column
                justify-content: flex-start
                margin-bottom: 75px
                @media (max-width: 992px)
                    width: 100%
                    margin-right: 0
                    border-bottom: 1px solid #e3e3e3
                    margin-bottom: 20px
                .name
                    display: flex
                    font-family: "YanoneKaffeesatz"
                    font-size: 38px
                    line-height: 36px
                    font-weight: 600
                    p
                        margin: 0 0 10px
                    span
                        color: #0037ff
                .text
                    font-family: Montserrat
                    font-size: 14px
                    line-height: 24px
                    margin-bottom: 30px
                    p
                        margin: 0
            .skill-border
                width: 65%
                display: grid
                grid-template-columns: 1fr 1fr
                grid-column-gap: 30px
                grid-auto-rows: 1fr
                @media (max-width: 992px)
                    width: 100%
                    grid-template-columns: 1fr
                    grid-auto-rows: auto
                .elem
                    display: flex
                    flex-direction: column
                    font-family: Montserrat
                    margin-bottom: 35px
                    border-bottom: 1px solid #e3e3e3
                    @media (max-width: 992px)
                        margin-bottom: 20px
                        padding-bottom: 15px
                        &:last-child
                            margin-bottom: 85px
                            @media (max-width: 576px)
                                margin-bottom: 20px
                    b
                        font-weight: 500
                        font-size: 18px
                        margin-bottom: 20px
                        &:after
                            content: '.'
                            color: #0037ff
                    p
                        margin: 0
                        font-size: 16px
                        line-height: 21px
                        color: #4F4F4F
</style>