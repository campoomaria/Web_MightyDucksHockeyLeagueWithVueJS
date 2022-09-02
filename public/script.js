import { createApp } from 'vue'

createApp({
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}).mount('#app')


export default {
  props: {
    show: Boolean
  },
}
