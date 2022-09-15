<template>
  <v-card
    tile
    outlined
    width="100%"
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
              v-model="userid"
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

</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data: () => ({
    userid: null,
    password: null,
  }),

  created(){
  },
  methods:{
    ...mapActions([
      'login'
    ]),
    async signIn(){

      await this.login({userid: this.userid, password: this.password})
      this.$emit('login')
    }

  }
}
</script>
<style lang="">

</style>
