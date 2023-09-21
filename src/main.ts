import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import * as signalR from '@microsoft/signalr'

const connection = new signalR.HubConnectionBuilder()
.withUrl("http://192.168.1.100:8080/hub")
.build();

connection.on("NumberOfOnlineUsers", data => {
  console.log(data);
});

connection.start()
    // .then(() => connection.invoke("NumberOfOnlineUsers"));

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
