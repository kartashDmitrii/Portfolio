<template>
    <div class="contact container-fluid">
        <div class="container">
            <div class="desc">
                <div class="name"><p v-text="$ml.get('contact.name')">Contact</p><span>.</span></div>
<!--                <div class="text">-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae delectus eos nisi quae quaerat totam. Adipisci cupiditate deserunt, fugiat id maiores repudiandae saepe sequi tempora.</p>-->
<!--                </div>-->
            </div>
            <div class="form">
                <div class="contact-form">
                    <ContactForm/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ContactForm from "../../CustomComponents/ContactForm";
    export default {
        name: "Contact",
        components: {ContactForm}
    }
</script>

<style scoped lang="sass">
    .contact
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
                background: url("~@/assets/img/svg/smartphone.svg") center center / 100% auto no-repeat
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
            .form
                width: 60%
                @media (max-width: 992px)
                    width: 100%
                .contact-form
                    display: flex
                    align-items: center
                    @media (max-width: 992px)
                        grid-auto-rows: auto
                        margin-bottom: 75px
                    @media (max-width: 576px)
                        margin-bottom: 0
</style>