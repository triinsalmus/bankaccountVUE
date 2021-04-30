<template>
  <div class="about">
    <h1>Log in to your account:</h1>
    <input v-model="username" placeholder="Username"/>
    <input type="password" v-model="password" placeholder="Password"/>
    <button v-on:click="login()">Log in</button>
    <!--    {{ loginUser }}-->
    <h1>Log out from your account:</h1>
    <button v-on:click="logout()">Log out</button>
    {{ logoutUser }}
    <h1>Create new user:</h1>
    <input v-model="createUsername" placeholder="Username"/>
    <input type="password" v-model="createPassword" placeholder="Password"/>
    <button v-on:click="create()">Create</button>
    {{ createUser }}
  </div>
</template>
<script>
function login() {
  this.$http.post('/banksql2/public/login', {
    username: this.username,
    password: this.password
  })
      .then(response => {
        localStorage.setItem('user-token', response.data) //salvesta token
        this.$http.defaults.headers.common['Authorization'] = "Bearer " + response.data
        this.loginUser = "Log in successful"
        this.username = ''
        this.password = ''
      })
      .catch(response => {
        this.loginUser = response.response.data.message
      })
}

function logout() {
  localStorage.removeItem('user-token')
  location.reload() //laeb lehe peale väljalogimist uuesti
  this.logoutUser = "Log out successful"
}

function create() {
  this.$http.post('/banksql2/public/createuser', {
    username: this.createUsername,
    password: this.createPassword
  })
      .then(response => {
        this.createUser = response.data
        this.username = ''
        this.password = ''
      })
      .catch(response => {
        this.createUser = response.response.data.message
      })
}

export default {
  data: function () {
    return {
      'username': '',
      'password': '',
      'loginUser': '',
      'createUsername': '',
      'createPassword': '',
      'createUser': '',
      'logoutUser': ''
    }
  },

  methods: {
    'login': login,
    'create': create,
    'logout': logout
  }
}
</script>