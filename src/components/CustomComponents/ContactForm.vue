<template>
    <form method="POST" action="https://formspree.io/xknqgwbp">
        <div class="form">
            <div class="user">
                <div class="formcheck">
                    <input type="text" name="name" placeholder="Name" required>
                    <span></span>
                </div>
                <div class="formcheck">
                    <input type="email" name="email" placeholder="Email" required>
                    <span></span>
                </div>
            </div>
            <div class="text">
                <div class="formcheck">
                    <textarea name="message" placeholder="Message" required></textarea>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="submit">
            <button>Send Message</button>
        </div>
    </form>
</template>

<script>
    export default {
        props: [''],
        name: "ContactForm",
        data(){
            return {
                publicPath: process.env.BASE_URL
            }
        },
        methods: {
            sendMail: function(){
                console.log(__dirname);
                fetch(`http://localhost:8000/mail.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({name: 'Load'})
                });
            }
        }
    }
</script>

<style scoped lang="sass">
    form
        width: 100%
        display: flex
        flex-direction: column
        .form
            display: flex
            justify-content: space-between
            margin-bottom: 15px
            @media (max-width: 576px)
                flex-direction: column
            &>div
                width: 48%
                display: flex
                flex-direction: column
                justify-content: space-between
                @media (max-width: 576px)
                    width: 100%
                .formcheck
                    position: relative
                    span
                        position: absolute
                        top: 0
                        left: 0
                        bottom: 0
                        right: 0
                        transition: all .3s
                        opacity: 0
                        pointer-events: none
                        border: 2px solid #5e1ffb
                    input:hover + span, textarea:hover + span, input:focus + span, textarea:focus + span
                        opacity: 1
                input,textarea
                    font-size: 16px
                    line-height: 18px
                    padding: 10px 15px
                    font-family: Montserrat
                &.user
                    @media (max-width: 576px)
                        margin-bottom: 20px
                    .formcheck
                        margin-bottom: 20px
                        input
                            width: 100%
                        &:last-child
                            margin-bottom: 0
                &.text
                    .formcheck
                        height: 100%
                        textarea
                            width: 100%
                            height: 100%
                            resize: none
        .submit
            display: flex
            justify-content: flex-end
            button
                background-color: #5e1ffb
                color: #fff
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
                &:hover
                    box-shadow: 5px 5px 11px 0 #7b2e90
</style>