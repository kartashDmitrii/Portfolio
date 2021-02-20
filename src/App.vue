<template>
  <div id="app" :class="{fixed: $store.state.showPopup}">
    <div class="main-content">
      <h1>ON DEVELOP</h1>
      <p>PLEASE STAND BY</p>
    </div>
    <!--<header id="nav" class="container-fluid">
      <div class="container">
        <router-link to="/" v-slot="{href ,navigate}">
          <div class="name">
            <a :href="href" @click="navigate">
              <p>Dmitry<span>.</span></p>
            </a>
          </div>
        </router-link>
        <div class="portfolio" @mouseenter="showProjects = true" @mouseleave="showProjects = false">
          <router-link to="/portfolio" v-slot="{href ,navigate}">
            <a :href="href" @click="navigate" class="link">
              <img src="@/assets/img/svg/portfolio.svg" alt="portfolio">
              <p>Portfolio</p>
            </a>
          </router-link>
        </div>
        <div class="langs">
          <button
                  v-for="lang in $ml.list"
                  :key="lang"
                  @click="$ml.change(lang)"
                  v-text="lang"
          />
        </div>
      </div>
    </header>
    <hoverProjects :show-projects="showProjects"/>
    <router-view class="main-content"/>
    <Popups/>
    <footer class="container-fluid">
      <div class="container">
        <p>Copyright 2020 Dmitry</p>
      </div>
    </footer>-->
  </div>
</template>

<script>
  // import HoverProjects from '@/components/App/HoverProjects.vue'
  // import Popups from '@/components/Popups.vue'

  export default {
    // components: {
    //   HoverProjects,
    //   Popups
    // },
    data() {
      return {
        showProjects: false
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="sass">
#app
  min-height: 100vh
  display: flex
  flex-direction: column
  font-family: 'BebasNeue'
  &.fixed
    height: 100vh
    overflow: hidden
  .main-content
    flex: 1
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    background: url("~@/assets/img/BG.jpg") center center / cover no-repeat
    text-align: center
    h1
      font-size: 89px
      margin: 0 15px 15px
      @media (max-width: 1550px)
        font-size: 72px
      @media (max-width: 1075px)
        font-size: 58px
        margin-top: 55px
      @media (max-width: 380px)
        font-size: 46px
    p
      font-size: 89px
      margin: 0 15px
      @media (max-width: 1550px)
        font-size: 72px
      @media (max-width: 1075px)
        font-size: 58px
      @media (max-width: 380px)
        font-size: 46px
//#nav
//  min-height: 105px
//  border-bottom: 5px solid #000
//  background-color: #fff
//  position: relative
//  z-index: 2
//  padding-bottom: 10px
//  @media (max-width: 576px)
//    padding-bottom: 0
//    height: auto
//  &>.container
//    width: 100%
//    display: flex
//    justify-content: space-between
//    align-items: center
//    position: relative
//    a
//      text-decoration: none
//      color: #000
//      padding: 20px
//      @media (max-width: 576px)
//        padding: 10px
//      p
//        margin: 0
//        border-bottom: 2px solid black
//        position: relative
//        &:after
//          content: ''
//          position: absolute
//          width: 100%
//          right: 0
//          bottom: -2px
//          margin: auto
//          height: 2px
//          background-color: #fff
//          transition: width .3s
//        &:hover:after
//          right: auto
//          left: 0
//          width: 0
//    .name
//      display: flex
//      justify-content: center
//      align-items: center
//      a
//        font-family: "BalooThambi2"
//        font-size: 36px
//        line-height: 38px
//        @media (max-width: 576px)
//          font-size: 32px
//          line-height: 34px
//        @media (max-width: 480px)
//          font-size: 26px
//          line-height: 28px
//        span
//          color: #0037ff
//    .portfolio
//      .link
//        display: flex
//        align-items: center
//        font-family: "FjallaOne"
//        font-size: 24px
//        @media (max-width: 576px)
//          font-size: 21px
//          line-height: 24px
//        @media (max-width: 480px)
//          font-size: 18px
//          line-height: 21px
//        img
//          margin-right: 10px
//          width: 26px
//          height: 26px
//          @media (max-width: 576px)
//            width: 24px
//            height: 24px
//          @media (max-width: 480px)
//            width: 23px
//            height: 23px
//    .langs
//      position: absolute
//      bottom: -10px
//      left: 20px
//      @media (max-width: 576px)
//        width: 100px
//        left: 0
//        right: 0
//        margin: auto
//        bottom: 10px
//        display: flex
//        justify-content: center
//      button
//        cursor: pointer
//        background: none
//        border: none
//        font-family: "FjallaOne"
//        font-size: 16px
//        margin-right: 15px
//        outline: none
//        transition: all 0.3s
//        border-bottom: 2px solid black
//        position: relative
//        &:after
//          color: #6b6b6b
//          content: ''
//          position: absolute
//          width: 100%
//          right: 0
//          bottom: -2px
//          margin: auto
//          height: 2px
//          background-color: #fff
//          transition: width .3s
//        &:hover:after
//          right: auto
//          left: 0
//          width: 0
//        &:last-child
//          margin-right: 0
//footer
//  background-color: #e5e5e5
//  padding: 20px
//  .container
//    display: flex
//    justify-content: center
//    p
//      margin: 0
//      font-family: Montserrat
//      font-size: 12px
//      line-height: 14px
//        color: #989898
</style>
