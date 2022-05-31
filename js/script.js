const app = new Vue({
  el: "#app",
  data: {
    albums: [],
    genere: [],
    selectedGenre: [],
    apiPath: "./server.php",
  },
  methods: {
    changeSearch() {
      this.getData(this.selectedGenre);
    },
    getData(genre = null) {
      let path;
      if (genre) {
        path = `${this.apiPath}?genre=${genre}`;
      } else {
        path = this.apiPath;
      }
      axios.get(path).then((res) => {
        this.albums = res.data;
        if (this.genere.length < 1) {
          this.albums.forEach((album) => {
            if (!this.genere.includes(album.genre)) {
              this.genere.push(album.genre);
            }
          });
        }
      });
    },
  },
  mounted() {
    this.getData();
  },
});
 