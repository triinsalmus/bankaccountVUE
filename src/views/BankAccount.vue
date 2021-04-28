<template>
  <div class="home">
    <h1>Create account</h1>
    <p>Please fill in the blanks:</p>
    <input v-model="createName" placeholder="Name"/>
    <input v-model="createAccountNr" placeholder="Account number"/>
    <input v-model="createBalance" placeholder="Balance"/>
    <input v-model="createLocked" placeholder="Locked"/>
    <button v-on:click="createAccount()">Create</button>
    {{ create }}

    <h1>Check balance</h1>
    <p>Please enter account number:</p>
    <input v-model="checkAccountNr" placeholder="Account number"/>
    <button v-on:click="checkBalance()">Check</button>
    {{ check }}

    <h1>Deposit money</h1>
    <p>Please enter account number:</p>
    <input v-model="depositAccountNr" placeholder="Account number">
    <p>Please enter amount:</p>
    <input v-model="depositAmount" placeholder="Amount">
    <button v-on:click="depositIt()">Deposit</button>
    {{ deposit }}

    <h1>Withdraw money</h1>
    <p>Please enter account number:</p>
    <input v-model="withdrawAccountNr" placeholder="Account number">
    <p>Please enter amount:</p>
    <input v-model="withdrawAmount" placeholder="Amount">
    <button v-on:click="withdrawIt()">Withdraw</button>
    {{ withdraw }}

    <h1>Transfer money</h1>
    <p>Please enter the from account number:</p>
    <input v-model="fromAccountNr" placeholder="From account number">
    <p>Please enter the to account number:</p>
    <input v-model="toAccountNr" placeholder="To account number">
    <p>Please enter amount:</p>
    <input v-model="transferAmount" placeholder="Amount">
    <button v-on:click="transferIt()">Transfer</button>
    {{ transfer }}

    <h1>Lock account</h1>
    <p>Please enter account number:</p>
    <input v-model="lockAccountNr" placeholder="Account number">
    <button v-on:click="lockIt()">Lock</button>
    {{ lock }}

    <h1>Unlock account</h1>
    <p>Please enter account number:</p>
    <input v-model="unlockAccountNr" placeholder="Account number">
    <button v-on:click="unlockIt()">Unlock</button>
    {{ unlock }}

    <h1>Transaction history</h1>
    <p>Please enter account number:</p>
    <input v-model="historyAccountNr" placeholder="Account number">
    <button v-on:click="getHistory">Show</button>
    {{getAccountHistory}}

  </div>
</template>


<script>
function createAccount() {
  this.$http.post('http://localhost:8080/banksql2/create',
      {
        ownerName: this.createName,
        accountNr: this.createAccountNr,
        balance: this.createBalance,
        locked: this.createLocked
      })
      .then(response => {
        this.create = "Account successfully created!"
        this.createName = ''
        this.createAccountNr = ''
        this.createBalance = ''
        this.createLocked = ''
      })
      .catch(response => {
        alert("Cannot create account, please try again")
      })
}

function checkBalance() {
  this.$http.get('http://localhost:8080/banksql2/check/' + this.checkAccountNr)
      .then(response => {
        this.check = response.data
        this.checkAccountNr = ''
      })
      .catch(response => {
        this.check = response.response.data.message
        // alert("Please try again")
      })
}

function depositIt() {
  this.$http.put('http://localhost:8080/banksql2/deposit', {
    accountNr: this.depositAccountNr,
    amount: this.depositAmount
  })
      .then(response => {
        this.deposit = response.data
        this.depositAccountNr = ''
        this.depositAmount = ''
      })
      .catch(response => {
        this.deposit = response.response.data.message
      })
}

function withdrawIt() {
  this.$http.put('http://localhost:8080/banksql2/withdraw', {
    accountNr: this.withdrawAccountNr,
    amount: this.withdrawAmount
  })
      .then(response => {
        this.withdraw = response.data
        this.withdrawAccountNr = ''
        this.withdrawAmount = ''
      })
      .catch(response => {
        this.withdraw = response.response.data.message
      })
}

function transferIt() {
  this.$http.put('http://localhost:8080/banksql2/transfer', {
    accountFromNr: this.fromAccountNr,
    accountToNr: this.toAccountNr,
    amount: this.transferAmount
  })
      .then(response => {
        this.transfer = response.data
        this.fromAccountNr = ''
        this.toAccountNr = ''
        this.transferAmount = ''
      })
      .catch(response => {
        this.transfer = response.response.data.message
      })
}

function lockIt() {
  this.$http.put('http://localhost:8080/banksql2/lock/' + this.lockAccountNr)
      .then(response => {
        this.lock = response.data
        this.lockAccountNr = ''
      })
      .catch(response => {
        this.lock = response.response.data.message
      })
}

function unlockIt() {
  this.$http.put('http://localhost:8080/banksql2/unlock/' + this.unlockAccountNr)
      .then(response => {
        this.unlock = response.data
        this.unlockAccountNr = ''
      })
      .catch(response => {
        this.unlock = response.response.data.message
      })
}


export default {
  data: function () {
    return {
      'check': '',
      'checkAccountNr': '',
      'createName': '',
      'createAccountNr': '',
      'createBalance': '',
      'createLocked': '',
      'create': '',
      'depositAccountNr': '',
      'depositAmount': '',
      'deposit': '',
      'withdrawAccountNr': '',
      'withdrawAmount': '',
      'withdraw': '',
      'fromAccountNr': '',
      'toAccountNr': '',
      'transferAmount': '',
      'transfer': '',
      'lockAccountNr': '',
      'lock': '',
      'unlockAccountNr':'',
      'unlock':''
    }
  },
  methods: {
    'checkBalance': checkBalance,
    'createAccount': createAccount,
    'depositIt': depositIt,
    'withdrawIt': withdrawIt,
    'transferIt': transferIt,
    'lockIt': lockIt,
    'unlockIt': unlockIt
  }
}
</script>
