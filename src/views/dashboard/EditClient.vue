<template>
  <div class="page-add-client">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
        </li>
        <li><router-link :to="{ name: 'Clients' }">Vendors</router-link></li>
        <li>
          <router-link :to="{ name: 'Client', params: { id: client.id } }">{{
            client.name
          }}</router-link>
        </li>
        <li class="is-active">
          <router-link
            :to="{ name: 'EditClient', params: { id: client.id } }"
            aria-current="true"
            >Edit</router-link
          >
        </li>
      </ul>
    </nav>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">Edit - {{ client.name }}</h1>
      </div>

      <div class="column is-6">
        <div class="field">
          <label>Name</label>

          <div class="control">
            <input
              type="text"
              name="name"
              class="input"
              v-model="client.name"
              placeholder="Name"
              required
            />
          </div>
        </div>
        <div class="field">
          <label>Supplier Code</label>

          <div class="control">
            <input
              type="number"
              class="input"
              v-model="client.supplier_code"
              placeholder="Supplier Code"
            />
          </div>
        </div>
        

        <div class="field">
          <label>Email</label>

          <div class="control">
            <input
              type="email"
              name="email"
              class="input"
              v-model="client.email"
              required
              placeholder="Email"
            />
          </div>
        </div>

        <div class="field">
          <label>Address 1</label>

          <div class="control">
            <input
              type="text"
              name="address1"
              class="input"
              v-model="client.address1"
              placeholder="Address 1"
              required
            />
          </div>
        </div>

        <div class="field">
          <label>Address 2</label>

          <div class="control">
            <input
              type="text"
              name="address2"
              class="input"
              v-model="client.address2"
              placeholder="Address 2"
            />
          </div>
        </div>
      </div>

      <div class="column is-6">
        <div class="field">
          <label>Zipcode</label>

          <div class="control">
            <input
              type="text"
              name="zipcode"
              class="input"
              v-model="client.zipcode"
              placeholder="Zipcode"
              required
            />
          </div>
        </div>

        <div class="field">
          <label>Place</label>

          <div class="control">
            <input
              type="text"
              name="place"
              class="input"
              v-model="client.place"
              placeholder="Place"
              required
            />
          </div>
        </div><div class="field">
          <label>City</label>

          <div class="control">
            <input
              type="text"
              name="place"
              class="input"
              v-model="client.city"
              placeholder="City"
              required
            />
          </div>
        </div>

        <div class="field">
          <label>Country</label>

          <div class="control">
            <input
              type="text"
              name="country"
              class="input"
              v-model="client.country"
              placeholder="Country"
              required
            />
          </div>
        </div>
      </div>

      <div class="column is-12">
        <div class="field">
          <div class="control">
            <button class="button is-success is-outlined" @click="submitForm">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { toast } from "bulma-toast"

export default {
  name: "EditClient",
  data() {
    return {
      client: {
        id: this.$route.params.id
      },
    }
  },
  mounted() {
    this.getClient()
  },
  methods: {
    getClient() {
      const clientID = this.$route.params.id

      axios.get(`/api/v1/clients/${clientID}`).then((response) => {
        this.client = response.data
      })
    },
    submitForm() {
      const clientID = this.$route.params.id

      axios
        .patch(`/api/v1/clients/${clientID}/`, this.client)
        .then((response) => {
          toast({
            message: "The changes was saved",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: "bottom-right",
          })

          this.$router.push({ name: "Clients" })
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
  },
}
</script>
