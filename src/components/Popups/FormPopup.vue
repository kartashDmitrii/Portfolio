<template>
   <div class="form-popup">
       <h2>Let’s work together<span>.</span></h2>
       <p>Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.</p>
       <ContactForm/>
       <button class="back" @click="closePopup()">Back to CV</button>
   </div>
</template>

<script>
    import ContactForm from "../CustomComponents/ContactForm";
    export default {
        name: "Popup",
        components: {ContactForm},
        methods: {
            closePopup(){
                this.$emit('close')
            }
        }
    }
</script>

<style scoped lang="sass">
    .form-popup
        position: relative
        margin: 15px
        @media (max-width: 576px)
            margin: 0
            padding-bottom: 35px
        h2
            margin: 0 0 5px
            font-size: 36px
            line-height: 38px
            font-family: "YanoneKaffeesatz"
            @media (max-width: 576px)
                font-size: 32px
                line-height: 34px
            span
                color: #0037ff
        p
            margin: 0 0 15px
            font-family: Montserrat
            font-size: 16px
            line-height: 18px
            @media (max-width: 576px)
                font-size: 14px
                line-height: 16px
    .back
        position: absolute
        bottom: 0
        left: 0
        background-color: #eaeaea
        color: #696278
        border: none
        cursor: pointer
        padding: 6px 10px
        font-family: Montserrat
        font-size: 16px
        line-height: 18px
        font-weight: 700
        transition: all .3s
        @media (max-width: 576px)
            width: 100%
            bottom: 0
            left: 0
        &:hover
            box-shadow: 1px 1px 8px 0 #817690
</style>