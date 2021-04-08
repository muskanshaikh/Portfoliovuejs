<template>
  <section class="about" id="about">
    <v-container>
      <h2 class="my-5 font-weight-light orange--text text-md-h3 text-sm text-center">
        About me
      </h2>
      <v-row wrap class="text-h6 font-weight-thin">
        <v-col class="col-md-4 col-sm-12">
          <p class="font-weight-light">
            I am a front end developer with 6 months of experience who is adept
            at creating client side apps that are accessible, performant,
            responsive and scalable. My attention to detail, keen eye for good
            designs, and problem solving skills gives me the ability to
            implement amazing UI (User Interface) which in turn leads to a
            superb UX (User Experience).
          </p>
        </v-col>

        <v-col
          class="text-right text-uppercase text-no-wrap hidden-sm-and-down col-md-4 d-flex "
        >
          <v-img src="../assets/man.png" height="400px" width="400px" contain>
          </v-img>
          <div>
            <v-col class="py-auto col-md-4 col-sm-12 hidden-sm-and-down">
              <v-row>
                <h4 class="mx-4">Location:</h4>
                <span>Kalyan, Mumbai</span>
              </v-row>
              <v-row>
                <h4 class="mx-4">Email:</h4>
                <span>muskan@gmail.com</span>
              </v-row>
              <v-row>
                <h4 class="mx-4">Phone:</h4>
                <span>+918882828288</span>
              </v-row>
            </v-col>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Myself",
};
</script>

<style>
.image__filter--orange {
  filter: invert(50%) sepia(150%) saturate(2500%) hue-rotate(10deg)
    brightness(100%) contrast(100%);
  margin-top: -200px;
}
.font-weight-light {
  color: black;
}
</style>
