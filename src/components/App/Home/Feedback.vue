<template>
    <div class="feedback container-fluid">
        <div class="container">
            <div class="desc">
                <div class="name"><p v-text="$ml.get('feedback.name')">Feedback</p><span>.</span></div>
                <div class="text">
                    <p v-text="$ml.get('feedback.desc')">Some comments about my work</p>
                </div>
            </div>
            <div class="feedback-border">
                <div class="elem" v-for="(elem, index) in $store.state.feedback" :key="index">
                    <div class="image">
                        <img :src="require(`@/assets/${elem.photo}`)" :alt="elem.name['Eng']">
                    </div>
                    <div class="info">
                        <b class="name">{{elem.name[$ml.current]}}</b>
                        <p class="position">{{elem.position[$ml.current]}}</p>
                        <a href="#" class="job">{{elem.work}}</a>
                    </div>
                    <div class="comment">
                        <i>{{elem.comment[$ml.current]}}</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Feedback"
    }
</script>

<style scoped lang="sass">
    .feedback
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
                background: url("~@/assets/img/svg/jellyfish.svg") center center / 100% auto no-repeat
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
            .feedback-border
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
                    align-items: flex-start
                    font-family: Montserrat
                    margin-bottom: 15px
                    border-bottom: 1px solid #f1f1f1
                    width: 100%
                    position: relative
                    @media (max-width: 992px)
                        margin-bottom: 20px
                        &:last-child
                            margin-bottom: 85px
                            @media (max-width: 576px)
                                margin-bottom: 20px
                    .image
                        min-width: 50px
                        height: 50px
                        position: absolute
                        overflow: hidden
                        border-radius: 5px
                        margin-right: 20px
                        top: 0
                        left: 0
                        img
                            position: absolute
                            top: 0
                            bottom: 0
                            left: 0
                            right: 0
                            margin: auto
                            width: 100%
                            height: auto
                    .info
                        display: flex
                        align-items: center
                        flex-wrap: wrap
                        height: 50px
                        margin: 0 0 10px 60px
                        @media (max-width: 576px)
                            margin-top: 0
                        p
                            margin: 0 5px 0 0
                        b
                            margin-right: 15px
                            @media (max-width: 576px)
                                width: 100%
                        a
                            text-decoration: none
                            color: #6b6b6b
                            &:before
                                content: "@"
                                margin-right: 5px
                    .comment
                        margin-bottom: 10px
                        i
                            color: #858585
                            &:before
                                content: '"'
                            &:after
                                content: '"'
</style>