<template>
    <v-container>
        <v-row>
            <v-col>
                <v-expansion-panels>
                    <v-expansion-panel
                            v-for="(item,i) in 5"
                            :key="i"
                    >
                        <v-expansion-panel-header>Item</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip
                            ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col>
                <v-expansion-panels>
                    <v-expansion-panel
                            v-for="(item,i) in 5"
                            :key="i"
                    >
                        <v-expansion-panel-header>Item</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut
                            aliquip
                            ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
	export default {
		"name": "perplayerstats"
	};
</script>
