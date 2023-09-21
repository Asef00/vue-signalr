<script setup lang="ts">
import * as signalR from '@microsoft/signalr'

const connection = new signalR.HubConnectionBuilder()
  .withUrl('http://192.168.1.100:8080/hub')
  .build()

connection.on('NumberOfOnlineUsers', (data) => {
  console.log(data)
})

connection.start()
// .then(() => connection.invoke("NumberOfOnlineUsers"));
</script>

<template>
  <main></main>
</template>
