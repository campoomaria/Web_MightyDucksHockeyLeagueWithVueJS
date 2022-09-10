const { createApp } = Vue;
createApp({
  components: {
    template: "#modal-template"
  },
  data() {
    return {
      mostrarmapa: false,
      mapa: `mapa1`,
      urlmap: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6572038332524!2d-87.63125808459743!3d41.900228779220456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f69da7%3A0x15e198c063fc787c!2sAJ%20Katzenmaier%20Elementary!5e0!3m2!1ses-419!2sar!4v1654568785582!5m2!1ses-419!2sar"`,
      page: `home`,
    };
  },
  created() {},
  methods: {
    showModal: function (element) {
      // limpio los links (sacando la clase on)
      const allLinks = document.querySelectorAll(".button_game");
      allLinks.forEach((e) => e.classList.remove("on"));

      // seteo el nuevo lugar / pagina
      this.mapa = element;

      // lo prendo (le doy la clase on)
      document.querySelector(`#${element}`).classList.add("on");
      this.urlmaps();
      this.mostrarmapa = true;
    },
    urlmaps: function () {
      this.urlmap = ``;
      if (this.mapa === "mapa1") {
        this.urlmap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6572038332524!2d-87.63125808459743!3d41.900228779220456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f69da7%3A0x15e198c063fc787c!2sAJ%20Katzenmaier%20Elementary!5e0!3m2!1ses-419!2sar!4v1654568785582!5m2!1ses-419!2sar`;
      }

      if (this.mapa === "mapa2") {
        this.urlmap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.022981686594!2d-87.64002218459702!3d41.91386467921937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3407260c45b%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses-419!2sar!4v1654569332033!5m2!1ses-419!2sar`;
      }

      if (this.mapa === "mapa3") {
        this.urlmap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5852694079276!2d-87.66512358463311!3d41.92327347056509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward%20A%20Yeager%20Elementary!5e0!3m2!1ses!2sar!4v1654569556874!5m2!1ses!2sar`;
      }
      if (this.mapa === "mapa4") {
        this.urlmap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.022981686594!2d-87.64002218459702!3d41.91386467921937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3407260c45b%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses-419!2sar!4v1654569332033!5m2!1ses-419!2sar`;
      }
      if (this.mapa === "mapa5") {
        this.urlmap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3353630140205!2d-87.64831158463355!3d41.90714887157485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af14860a5%3A0x5736e62f19086c62!2sNorth%20Elementary!5e0!3m2!1ses!2sar!4v1654569811150!5m2!1ses!2sar`;
      }
      if (this.mapa === "mapa6") {
        this.urlmap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.117187982298!2d-74.70157078441592!3d40.095100083060935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c144b2638ff551%3A0x7d8ba7c4c7e2bf98!2sS%20Hockey%20Dr%2C%20Mansfield%2C%20NJ%2008022%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1651157948661!5m2!1ses!2sar`;
      }
    },
  },
}).mount("#app");
