<template>
    <v-app transition="fade-transition">
        <router-view/>
        <Footer/>
    </v-app>
</template>
<script>
	import Footer from "@/components/Footer.vue";

	export default {
		"components": {
			Footer


		},
		"name": "App",
		"data": () => ({
			//
		})
	};
</script>
