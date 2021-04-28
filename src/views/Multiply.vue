<template>
  <div class="home">
    <h1>Multiply table</h1>
    <input v-model.number="multi1"/>
    <input v-model.number="multi2"/>
    <button v-on:click="multiply()">Show</button>
    <table border="1">
      <!-- table = [[1,2],[2,4]]-->
      <tr v-for="row in table"> <!--row1=[1,2]; row2=[2,4] teeme alla valmis ja paneme siia-->
        <td v-for="column in row">{{ column }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'multi1': '',
      'multi2': '',
      'table': [[]]
    }
  },
  methods: {
    'multiply': function () {
      for (let i = 1; i <= this.multi1; i++) {
        this.table[i - 1] = []
        for (let j = 1; j <= this.multi2; j++) {
          this.table[i - 1][j - 1] = i * j;
        }
      }
      this.table.splice();
    }
  }
}
</script>
