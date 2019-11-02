<template>
<v-container>
    <v-row>
      <v-col cols="4" offset="4">
        <v-card>
          <v-card-title class="info white--text subheading" primary-title>
            <span class="title">Oops</span>
          </v-card-title>
          <v-card-text class="display-1 ma-7 text-center">
            404. There is no page here.
          </v-card-text>
          <v-card-actions>
            <v-btn text block class="info darken-3 white--text" to="/">
              <v-icon left v-text="'mdi-arrow-left'" />
              Back
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
	"props": ["message"],
	"data": () => ({
		"ecosystem": [
			{
				"text": "vuetify-loader",
				"href": "https://github.com/vuetifyjs/vuetify-loader"
			},
			{
				"text": "github",
				"href": "https://github.com/vuetifyjs/vuetify"
			},
			{
				"text": "awesome-vuetify",
				"href": "https://github.com/vuetifyjs/awesome-vuetify"
			}
		],
		"importantLinks": [
			{
				"text": "Documentation",
				"href": "https://vuetifyjs.com"
			},
			{
				"text": "Chat",
				"href": "https://community.vuetifyjs.com"
			},
			{
				"text": "Made with Vuetify",
				"href": "https://madewithvuejs.com/vuetify"
			},
			{
				"text": "Twitter",
				"href": "https://twitter.com/vuetifyjs"
			},
			{
				"text": "Articles",
				"href": "https://medium.com/vuetify"
			}
		],
		"whatsNext": [
			{
				"text": "Explore components",
				"href": "https://vuetifyjs.com/components/api-explorer"
			},
			{
				"text": "Select a layout",
				"href": "https://vuetifyjs.com/layout/pre-defined"
			},
			{
				"text": "Frequently Asked Questions",
				"href": "https://vuetifyjs.com/getting-started/frequently-asked-questions"
			}
		]
	})
};
</script>
