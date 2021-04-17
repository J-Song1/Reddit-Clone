<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io"> Reddit Clone </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control" v-if="!isLoggedIn">
              <a class="button is-danger" @click="login()">
                Login with Google
              </a>
            </p>

            <p class="control logged-in" v-if="isLoggedIn">
              <section class="avatar">
                <figure>
                  <img :src="user.image" :alt="user.name" />
                </figure>
                <figcaption>{{user.name}}</figcaption>
              </section>

              <a class="button is-primary" @click="logout()"> Logout </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="main container" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout']),
};
</script>

<style lang="scss">
.main {
  margin-top: 2em;
}

.logged-in {
  display: flex;
  flex-direction: row;
}

.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
