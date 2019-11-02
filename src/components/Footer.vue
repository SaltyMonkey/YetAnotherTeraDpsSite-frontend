<template>
  <v-footer padless absolute color="transparent" >
    <v-col
      class="text-center font-weight-black"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Test</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
	"name": "footer"
};
</script>
