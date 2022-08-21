<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-img 
        src="../assets/ez2on_title.jpg"
        max-height="250"
        max-width="300"
      >
      </v-img>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card
          width="460"
        >
          <v-card-text class="text-center px-12 py-16">
            <validation-observer
              ref="observer"
              v-slot="{ invalid }"
            >
              <v-form
                ref="form"
                @submit.prevent="signIn"
              >
                <div class="text-h4 font-weight-black mb-10">
                  로그인
                </div>
                <validation-provider
                  v-slot="{ errors }"
                  name="ID"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="email"
                    label="ID"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="PW"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="password"
                    type="password"
                    label="PW"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </validation-provider>
                <v-btn
                  class="mt-6"
                  type="submit"
                  block
                  x-large
                  rounded
                  color="primary"
                  :disabled="invalid"
                >
                  로그인
                </v-btn>
     
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'SignIn',
  components:{

  },
  data: () => ({
    email: null,
    password: null,
  }),

  created(){
  },
}
</script>
<style lang="">

</style>
