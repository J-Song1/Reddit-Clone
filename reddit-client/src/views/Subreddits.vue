<template>
  <section>
    <h1>Subreddits</h1>

    <pre>{{ subreddits }}</pre>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.init();
  },
  computed: mapState('subreddits', ['subreddits']),
  methods: mapActions('subreddits', ['init']),
};
</script>
