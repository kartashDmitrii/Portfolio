<template>
    <div class="about-me container-fluid">
        <div class="container">
            <div class="desc">
                <div class="name">
                    <p v-text="$ml.get('aboutMe.name')">Dmitry</p><span>.</span>
                </div>
                <div class="about">
                    {{ $ml.get('aboutMe.about')}}
                </div>
                <div class="contacts">
                    <div>
                        <b v-text="$ml.get('aboutMe.phone')">Phone</b>
                        <p>+380509018361</p>
                    </div>
                    <div>
                        <b v-text="$ml.get('aboutMe.email')">Email</b>
                        <p>kartaschdim@gmail.com</p>
                    </div>
                    <div>
                        <b v-text="$ml.get('aboutMe.address')">Address</b>
                        <p v-text="$ml.get('aboutMe.addressLocation')">Kiev, st. Makeevska 7, 149 </p>
                    </div>
                    <div>
                        <b v-text="$ml.get('aboutMe.social')">Social</b>
                        <ul>
                            <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100013753745646"><img src="@/assets/img/svg/social/facebook.svg" alt=""></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/kartashdmitrii/?hl=ru"><img src="@/assets/img/svg/social/instagram.svg" alt=""></a></li>
                            <li><a target="_blank" href="https://t.me/Dmitry_Kartash"><img src="@/assets/img/svg/social/telegram.svg" alt=""></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/dmitrykartash/"><img src="@/assets/img/svg/social/linkedin.svg" alt=""></a></li>
                            <li><a target="_blank" href="https://github.com/kartashDmitrii"><img src="@/assets/img/svg/social/github-image.svg" alt=""></a></li>
                        </ul>
                    </div>
                </div>
                <div class="buttons">
                    <button class="contact" v-text="$ml.get('aboutMe.contactMe')" @click="$store.commit('changePopupState', 'FormPopup')">Contact Me</button>
                    <a class="cv" :href="`${publicPath}CV_kartash.docx`" download v-text="$ml.with('VueJS').get('aboutMe.downloadCV')">Download CV</a>
                </div>
            </div>
            <div class="photo">
                <div class="image">
                    <img src="@/assets/img/photo1508262441726879676.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutMe",
        data (){
            return {
                publicPath: process.env.BASE_URL
            }
        }
    }
</script>

<style scoped lang="sass">
    .about-me
        border-bottom: 1px solid #C9C7D6
        margin: 25px 0
        .container
            display: flex
            justify-content: space-between
            margin: 25px auto
            position: relative
            @media (max-width: 992px)
                flex-direction: column-reverse
            &:before
                content: ''
                width: 75px
                height: 75px
                background: url("~@/assets/img/svg/guest-star.svg") center center / 100% auto no-repeat
                bottom: 0
                left: 0
                margin: auto
                position: absolute
                @media (max-width: 445px)
                    content: none
        .desc
            width: 49%
            display: flex
            flex-direction: column
            justify-content: space-between
            @media (max-width: 992px)
                width: 100%
            .name
                display: flex
                font-family: "YanoneKaffeesatz"
                font-size: 48px
                line-height: 38px
                font-weight: 600
                margin-bottom: 10px
                @media (max-width: 768px)
                    font-size: 36px
                @media (max-width: 480px)
                    font-size: 30px
                    line-height: 32px
                p
                    margin: 0
                span
                    color: #0037ff
            .about
                font-family: Montserrat
                font-size: 14px
                line-height: 24px
                margin-bottom: 30px
            .contacts
                font-family: Montserrat
                font-size: 14px
                margin-bottom: 25px
                div
                    margin-bottom: 10px
                    width: 100%
                    display: flex
                b
                    width: 12%
                    min-width: 80px
                    margin-right: 3%
                    font-size: inherit
                    text-transform: uppercase
                p
                    font-size: inherit
                    margin: 0
                ul
                    display: flex
                    padding: 0
                    margin: 0
                    li
                        margin-right: 20px
                        font-size: 0
                        width: 12px
                        height: 12px
                        list-style: none
                        display: flex
                        align-items: center
                        justify-content: center
                        img
                            width: 100%
                            height: auto
                            transition: all .3s
                            &:hover
                                filter: invert(.5) sepia(1) saturate(5) hue-rotate(175deg);
            .buttons
                display: flex
                justify-content: flex-end
                @media (max-width: 445px)
                    justify-content: space-around
                button,a
                    background: none
                    border: 5px solid #000
                    font-family: Montserrat
                    font-weight: 700
                    font-size: 18px
                    padding: 5px 10px
                    margin-right: 15px
                    cursor: pointer
                    transition: all .3s
                    @media (max-width: 480px)
                        font-size: 14px
                    &:hover
                        box-shadow: 5px 5px 11px 0 #909090
                    &.cv
                        text-decoration: none
                        background: #1127ff
                        border-color: #1127ff
                        color: #fff
                        &:hover
                            box-shadow: 5px 5px 11px 0 #8f97e8
                    &:last-child
                        margin-right: 0
        .photo
            width: 49%
            @media (max-width: 992px)
                margin: 0 auto 15px
                width: 75%
            @media (max-width: 576px)
                width: 100%
            .image
                position: relative
                padding-top: 56.25%
                overflow: hidden
                img
                    position: absolute
                    top: 0
                    bottom: 0
                    left: 0
                    right: 0
                    margin: auto
                    width: 100%
                    height: auto
</style>