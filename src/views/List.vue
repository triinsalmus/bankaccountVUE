<template>
  <div class="about">
    <h1>List</h1>
<!--    {{ accountsList }}-->
    <table>
      <tr>
        <th>Name</th>
        <th>Account number</th>
        <th>Balance</th>
        <th>Locked</th>
      </tr>
      <tr v-for="account in accountsList"> <!--anname muutuja, mis on seotud alusclassiga, loopime üle kõige-->
        <td>{{ account.ownerName }}</td>
        <td>{{ account.accountNr }}</td>
        <td>{{ account.balance }}</td>
        <td>{{ account.locked }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      accountsList: []
    }
  },
  mounted() {
    this.$http.get('http://localhost:8080/banksql2/list')
        .then(response => this.accountsList = response.data);
  }
}
</script>
