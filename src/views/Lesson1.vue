<template>
  <div class="home">
    <h1>Show minimal number</h1>
    <input v-model.number="minA"/>
    <input v-model.number="minB"/>
    <button v-on:click="min()">Show</button>
    {{ minAnswer }}

    <h1>Show maximal number</h1>
    <input v-model.number="maxA"/>
    <input v-model.number="maxB"/>
    <button v-on:click="max()">Show</button>
    {{ maxAnswer }}

    <h1>Show absolute number</h1>
    <input v-model.number="number"/>
    <button v-on:click="absolute()">Show</button>
    {{ absAnswer }}

    <h1>Is the number even?</h1>
    <input v-model.number="evenNr"/>
    <button v-on:click="even()">Show</button>
    {{ evenAnswer }}

    <h1>Show minimal of three numbers</h1>
    <input v-model.number="min3A"/>
    <input v-model.number="min3B"/>
    <input v-model.number="min3C"/>
    <button v-on:click="min3()">Show</button>
    {{ min3Answer }}

    <h1>Show maximal of three numbers</h1>
    <input v-model.number="max3A"/>
    <input v-model.number="max3B"/>
    <input v-model.number="max3C"/>
    <button v-on:click="max3()">Show</button>
    {{ max3Answer }}
  </div>
</template>

<script>
function min() {
  if (this.minA < this.minB) {
    this.minAnswer = this.minA;
  } else {
    this.minAnswer = this.minB;
  }
}

function max() {
  if (this.maxA > this.maxB) {
    this.maxAnswer = this.maxA;
  } else {
    this.maxAnswer = this.maxB;
  }
}

function absolute() {
  if (this.number < 0) {
    this.absAnswer = -this.number;
  } else {
    this.absAnswer = this.number;
  }
}

function even() {
  if (this.evenNr % 2 === 0) {
    this.evenAnswer = 'yes';
  } else {
    this.evenAnswer = 'no';
  }
}

function min3() {
  if (this.min3A <= this.min3B && this.min3A <= this.min3C) {
    this.min3Answer = this.min3A;
  } else if (this.min3B <= this.min3A && this.min3B <= this.min3C) {
    this.min3Answer = this.min3B;
  } else {
    this.min3Answer = this.min3C;
  }
}

function max3() {
  if (this.max3A >= this.max3B && this.max3A >= this.max3C) {
    this.max3Answer = this.max3A;
  } else if (this.max3B >= this.max3A && this.max3B >= this.max3C) {
    this.max3Answer = this.max3B;
  } else {
    this.max3Answer = this.max3C;
  }
}

export default {
  data: function () {
    return {
      'minA': '',
      'minB': '',
      'minAnswer': '',
      'maxA': '',
      'maxB': '',
      'maxAnswer': '',
      'number': '',
      'absAnswer': '',
      'evenNr': '',
      'evenAnswer': '',
      'min3A': '',
      'min3B': '',
      'min3C': '',
      'min3Answer': '',
      'max3A': '',
      'max3B': '',
      'max3C': '',
      'max3Answer': ''
    }
  },
  methods: {
    'min': min,
    'max': max,
    'absolute': absolute,
    'even': even,
    'min3': min3,
    'max3': max3
  }
}
</script>
