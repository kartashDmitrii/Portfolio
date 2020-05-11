<template>
  <div id="main">
    <AboutMe/>
    <Skills/>
    <Experience/>
    <Education/>
    <Feedback/>
    <Contact/>
  </div>
</template>

<script>

import AboutMe from "../components/App/Home/AboutMe";
import Skills from "../components/App/Home/Skills";
import Experience from "../components/App/Home/Experience";
import Education from "../components/App/Home/Education";
import Feedback from "../components/App/Home/Feedback";
import Contact from "../components/App/Home/Contact";
export default {
  name: 'Home',
  components: {Contact, Feedback, Education, Experience, Skills, AboutMe},
}
</script>
