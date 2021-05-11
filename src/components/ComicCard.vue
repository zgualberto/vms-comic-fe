<template>
  <b-card class="m-1" align="left" no-body>
    <b-card-img :src="comic.thumbnail_url"></b-card-img>
    <b-card-body>
      <b-card-text>
        <p class="font-weight-normal text-primary">{{ comic.series_name }}</p>
        <strong>{{ comic.title }}</strong>
        <p class="font-weight-light text-truncate">{{ comic.description }}</p>
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    comic: {
      required: true,
    },
  },
};
</script>
