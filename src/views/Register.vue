<template>
  <div class="home">
    <input placeholder="Enter your email" v-model="email"/>
    <button v-on:click="register()">Register</button>
    <table>
      <tr v-for="email in emails">
        <td>{{email}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'email': '',
      'emails':['a.email', 'b.email']
    }
  },
  methods: {
    'register': function () {
      this.emails.push(this.email);
    }
  }
}
</script>
