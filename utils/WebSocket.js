import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'

const SERVER_SOCKET_API = "/websockethandler"
let stompClient = null

export const WebSocket = {

  connect() {
    const socket = new SockJS(SERVER_SOCKET_API)
    stompClient = Stomp.over(socket)
    stompClient.connect({}, function () {
      stompClient.subscribe('/topic', function () {
      })
    })
  }
}
