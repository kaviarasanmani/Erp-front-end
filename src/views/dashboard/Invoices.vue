<template>
  <div class="page-invoices">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
        </li>
        <li class="is-active">
          <router-link :to="{ name: 'Invoices' }" aria-current="true"
            >Purchase orders</router-link
          >
        </li>
      </ul>
    </nav>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">Purchase orders</h1>
      </div>

      <div class="column is-12">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>#</th>
              <th>Vendor</th>
              <th>Amount</th>
              <!-- <th>Due date</th> -->
              <th>Is paid</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="invoice in invoices" v-bind:key="invoice.id">
              <td>{{ invoice.id }}</td>
              <td>{{ invoice.client_name }}</td>
              <td>{{ invoice.gross_amount }}</td>
              <!-- <td>{{ invoice.get_due_date_formatted }}</td> -->
              <td>{{ getStatusLabel(invoice) }}</td>
              <td>
                <router-link
                  :to="{ name: 'Invoice', params: { id: invoice.id } }"
                  >Details</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Invoices",
  data() {
    return {
      invoices: [],
    }
  },
  mounted() {
    this.getInvoices()
  },
  methods: {
    getInvoices() {
      axios
        .get("/api/v1/invoices/")
        .then((response) => {
          this.invoices = response.data
          // for (let i = 0; i < response.data.length; i++) {
          //   this.invoices.push(response.data[i])
          // }
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    getStatusLabel(invoice) {
      if (invoice.is_paid) {
        return "Yes"
      } else {
        return "No"
      }
    },
  },
}
</script>
