<template>
  <v-content>
    <section class="pa-5" id="contact">
      <v-container>
        <v-col col-12>
          <v-row justify="center">
            <v-col cols="auto">
              <h2
                class="my-5 font-weight-light orange--text text-md-h3 text-sm-h4"
              >
                Contact us
              </h2>
            </v-col>
            <!-- <v-col cols="4"> </v-col> -->
          </v-row>
        </v-col>
      </v-container>
    </section>
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-textarea
            v-model="message"
            :rules="messageRules"
            label="Message"
            required
          ></v-textarea>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >Submit</v-btn
          >
          <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
        </v-form>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "Message is required",
      (v) => (v && v.length >= 10) || "Message must be more than 10 characters",
    ],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
