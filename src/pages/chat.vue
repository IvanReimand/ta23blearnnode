<script setup>
import axios from 'axios';
import { ref } from 'vue';

let message = ref('');
let messages = ref([]);


// let res = await axios.get('http://localhost:3000/messages');
// messages.value.push(...res.data);

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", (event) => {
  //socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", (event) => {
  
  let data = JSON.parse(event.data);
  console.log(data);
  if(data.type === 'messages') {
    messages.value.push(...data.messages);
  }
  if(data.type === 'message') {
    messages.value.push(data);
  }
});
