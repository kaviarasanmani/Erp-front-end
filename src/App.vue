<template>
  <div id="wrapper">
    <nav class="navbar is-dark" ole="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"
          ><strong>Poorvika Mobiles</strong></router-link
        >
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <template v-if="$store.state.isAuthenticated">
            <router-link to="/dashboard" class="navbar-item"
              >Dashboard</router-link
            >
            <router-link to="/dashboard/clients" class="navbar-item"
              >Vendors</router-link
            >
            <router-link to="/dashboard/invoices" class="navbar-item"
              >purchase orders</router-link
            >
            <!-- <router-link to="/dashboard/" class="navbar-item"
              > Edit purchase orders</router-link
            > -->

            <div class="navbar-item">
              <div class="buttons">
                <router-link
                  to="/dashboard/invoices/add"
                  class="button is-success"
                  >Add purchase order</router-link
                >
                <router-link to="/dashboard/my-account" class="button is-light"
                  >My account</router-link
                >
              </div>
            </div>
          </template>

          <template v-else>
            <router-link to="/" class="navbar-item">Home</router-link>

            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/sign-up" class="button is-success"
                  ><strong>Sign up</strong></router-link
                >
                <router-link to="/log-in" class="button is-light"
                  >Log in</router-link
                >
              </div>
            </div>
          </template>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view />
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2021</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "App",
  beforeCreate() {
    this.$store.commit("initializeStore")

    const token = this.$store.state.token

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token
    } else {
      axios.defaults.headers.common["Authorization"] = ""
    }
  },
}
</script>

<style lang="scss">
@import "../node_modules/bulma";
</style>
