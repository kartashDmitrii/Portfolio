<template>
    <div class="education container-fluid">
        <div class="container">
            <div class="desc">
                <div class="name"><p v-text="$ml.get('education.name')">Education</p><span>.</span></div>
                <div class="text">
                    <p v-text="$ml.get('education.desc')">My goal is to achieve independence in life, so I try to learn something new every day</p>
                </div>
            </div>
            <div class="education-border">
                <div class="elem" v-for="(elem, index) in $store.state.education" :key="index">
                    <div class="about">
                        <b class="title">{{elem.name[$ml.current]}}</b>
                        <p class="company">{{elem.company[$ml.current]}}</p>
                    </div>
                    <p class="date">
                        {{elem.dates}}
                    </p>
                    <p class="desc">
                        {{elem.desc[$ml.current]}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Education"
    }
</script>

<style scoped lang="sass">
    .education
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
                background: url("~@/assets/img/svg/rock.svg") center center / 100% auto no-repeat
                bottom: 0
                left: 0
                margin: auto
                position: absolute
                z-index: 2
                @media (max-width: 576px)
                    bottom: auto
                    left: auto
                    right: 0
                    top: 0
                    width: 40px
                    height: 40px
            &>.desc
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
            .education-border
                width: 65%
                display: grid
                grid-template-columns: 1fr
                grid-auto-rows: 1fr
                @media (max-width: 992px)
                    width: 100%
                    grid-auto-rows: auto
                .elem
                    display: flex
                    flex-direction: column
                    font-family: Montserrat
                    margin-bottom: 15px
                    border-bottom: 1px solid #e3e3e3
                    width: 100%
                    @media (max-width: 992px)
                        margin-bottom: 20px
                        &:last-child
                            margin-bottom: 85px
                            @media (max-width: 576px)
                                margin-bottom: 20px
                    p
                        margin: 0
                    .about
                        font-family: "YanoneKaffeesatz"
                        display: flex
                        align-items: center
                        .title
                            font-weight: 500
                            font-size: 24px
                            margin-right: 5px
                            vertical-align: center
                        .company
                            vertical-align: center
                            font-size: 18px
                            color: #8b8b8b
                    .date
                        font-size: 14px
                        color: #575757
                        margin-bottom: 15px
                    .desc
                        width: 100%
                        margin-bottom: 10px
                        font-size: 16px
</style>