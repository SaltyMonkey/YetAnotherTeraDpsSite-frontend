<template>
	<v-content>
		<v-app-bar app dense>
			<v-toolbar-title class="display-1 font-weight-bold">{{region.toUpperCase()}}</v-toolbar-title>
			<v-layout align-center justify-center>
				<v-menu text offset-y>
					<template v-slot:activator="{ on }">
						<v-btn text v-on="on">Uploads</v-btn>
					</template>

					<v-list>
						<v-list-item v-for="(item, index) in items" :key="index" @click="1">
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
				<v-btn class="ma-2" text to="/">Rankings</v-btn>
					<v-menu text offset-y>
					<template v-slot:activator="{ on }">
						<v-btn text v-on="on">Stats</v-btn>
					</template>

					<v-list>
						<v-list-item v-for="(item, index) in items" :key="index" @click="1">
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
				<v-btn class="ma-2" text to="/">Search</v-btn>
				
			</v-layout>
			<v-btn class="ma-2" text to="/">Login</v-btn>
		</v-app-bar>
	</v-content>
</template>

<script>
export default {
	"props": ["region"],
	"name": "header",
	"data": () => ({
		"items": [
			{ "title": "Recent" },
			{ "title": "My uploads" },
			{ "title": "Wall of Shame" }
		]
	})
};
</script>
