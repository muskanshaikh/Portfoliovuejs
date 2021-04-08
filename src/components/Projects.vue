<template>
  <div id="projects">
    <v-col col-12>
      <v-row justify="center">
        <v-col cols="auto">
          <h2 class="my-5 font-weight-light orange--text text-md-h3 text-sm-h4">
            Projects
          </h2>
        </v-col>
        <!-- <v-col cols="4"> </v-col> -->
      </v-row>
    </v-col>
    <div class="d-flex">
      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" src="../assets/project1.jpg"></v-img>

        <v-card-title>Roti Bank System</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div>App based project where left over food can be donated.</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Technology</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>Java</v-chip>

            <v-chip>Firebase</v-chip>

            <v-chip>Android studio</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="view">
            View More
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" src="../assets/project2.jpg"></v-img>

        <v-card-title>Restaurant management system</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>

          <div>web based project</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Technology</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>HTML</v-chip>

            <v-chip>CSS</v-chip>

            <v-chip>PHP</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="view">
            View More
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data: () => ({
    loading: false,
    selection: 1,
  }),
};
</script>
