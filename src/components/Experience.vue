<template>
  <v-container id="Experience">
    <v-col col-12>
      <v-row justify="center">
        <v-col cols="auto">
          <h2 class="my-5 font-weight-light orange--text text-md-h3 text-sm-h4">
            Experience
          </h2>
        </v-col>
      </v-row>
    </v-col>

    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark>
          <v-card-title class="title">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>Duration:{{ item.time }}</p>
            <p>Company:{{ item.Company }}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "Experience",
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star",
        title: "Traniee Engineer(Full-time)",
        Company: "Pixel6 Web Studio Pvt ltd",
        time: "Sept-2020-Feb 2021",
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
        title: "Web Developer(Internship)",
        Company: "TechnoJack InfoSolutions",
        time: "1 month",
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon",
        title: "Web developer",
        Company: "CSIR-CDIR",
        time: "3 month",
      },
    ],
  }),
};
</script>

<style scoped>
.v-card {
  margin: 30px;
}
</style>
