<template>
  <div class="page-add-client">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/dashboard/clients">Vendors</router-link></li>
        <li class="is-active">
          <router-link to="/dashboard/clients/add" aria-current="true"
            >Add</router-link
          >
        </li>
      </ul>
    </nav>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">Add Vendors</h1>
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
              name="name"
              class="input"
              v-model="client.supplier_code"
              placeholder="supplier Code"
              required
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
              placeholder="Email"
              required
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
        </div>
<div class="field">
          <label>city</label>

          <div class="control">
            <input
              type="text"
              name="place"
              class="input"
              v-model="client.city"
              placeholder="city"
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
              Submit
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
  name: "AddClient",
  data() {
    return {
      client: {
        supplier_code:"",
        name: "",
        email: "",
        address1: "",
        address2: "",
        country: "",
        place: "",
        zipcode: "",
      },
    }
  },
  methods: {
    submitForm() {
      axios
        .post("/api/v1/clients/", this.client)
        .then((response) => {
          toast({
            message: "The client was added",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: "bottom-right",
          })

          this.$router.push("/dashboard/clients")
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
  },
}
</script>
