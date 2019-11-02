<template>
	<v-container>
    <v-row>
     <Header transition="fade-transition" :region="region"/>
    </v-row>
		<v-row>
			</v-row>
	</v-container>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
	"props": ["region"],
	"components": {
		Header
	},
	data() {
		return {
			"tab": null,
			"items": ["Recent", "Entrees", "Deserts", "Cocktails"],
			"text":
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		};
	}
};
</script>
