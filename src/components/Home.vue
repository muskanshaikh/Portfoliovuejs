<template>
  <v-content>
    <About />
    <Myself />
    <v-divider></v-divider>
    <Experience />
    <v-divider></v-divider>
    <Skills />
    <v-divider></v-divider>
    <Project />
    <v-divider></v-divider>
    <Contact />
    <Footer/>
  </v-content>
</template>

<script>
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Myself from "../components/Myself";
import Project from "../components/Projects";
import Footer from "../components/Footer";

export default {
  name: "Home",

  components: {
    About,
    Contact,
    Experience,
    Skills,
    Myself,
    Project,
    Footer
  },
};
</script>
