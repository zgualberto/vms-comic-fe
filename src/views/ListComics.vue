<template>
  <b-container v-if="undefined !== comics">
    <div>
      <h1 class="text-center">Comics</h1>
      <b-pagination
        v-if="undefined !== comics.meta"
        class="m-1"
        v-model="currentPage"
        :total-rows="comics.meta.total"
        :per-page="comics.meta.per_page"
      ></b-pagination>
      <b-row>
        <b-col v-for="comic in comics.data" :key="comic.id" sm="12" md="4">
          <ComicCard :comic="comic" />
        </b-col>
      </b-row>

      <b-pagination
        v-if="undefined !== comics.meta"
        class="m-1"
        v-model="currentPage"
        :total-rows="comics.meta.total"
        :per-page="comics.meta.per_page"
      ></b-pagination>
      <b-overlay
        :show="showOverlay"
        rounded="sm"
        no-wrap
        class="b-overlay position-fixed"
      ></b-overlay>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ComicCard from "@/components/ComicCard";

export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  watch: {
    currentPage(val) {
      this.$store.dispatch("getComics", val);
    },
  },
  components: {
    ComicCard,
  },
  computed: mapState([
    // map this.count to store.state.count
    "comics",
    "showOverlay",
  ]),
  methods: {
    ...mapActions({
      getComics: "getComics",
    }),
  },
  created() {
    this.$store.dispatch("getComics");
  },
};
</script>

<style lang="scss" scoped>
.b-overlay {
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
