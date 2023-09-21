<script setup lang="ts">
import * as signalR from '@microsoft/signalr'
import { ref } from 'vue'

const onlineUsers = ref(0)

//create SignalR connection
const connection = new signalR.HubConnectionBuilder()
  .withUrl('http://192.168.1.100:8080/hub')
  .build()

connection.on('NumberOfOnlineUsers', (data) => {
  onlineUsers.value = data
})

connection.start()
// .then(() => connection.invoke("NumberOfOnlineUsers"));
</script>

<template>
  <main>{{ onlineUsers }}</main>
</template>
