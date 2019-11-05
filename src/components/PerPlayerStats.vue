<template>
    <v-container>
        <v-row>
            <v-col>
                <v-expansion-panels
                        :focusable="true">
                    <v-expansion-panel
                            v-for="player in runData.players"
                            :key="player"
                    >
                        <v-expansion-panel-header>
                            <img
                                    :src="'https://raw.githubusercontent.com/neowutran/TeraDpsMeterData/master/class-icons/' + player.class + '.png'"
                                    v-on="on" class="run-class-icon"/>{{ player.name }}
                            <template v-slot:actions>
                                <span>{{ player.dps }} DPS</span>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row class="tiny-row">
                                <v-col class="mb-6 font-weight-light text-left">
                                    <span>Name: <span class="font-weight-bold">{{ player.name }}</span></span>
                                </v-col>
                                <v-col class="mb-6 font-weight-light text-right">
                                    <span>Class: <span class="font-weight-bold">{{ player.class }}</span></span>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row class="tiny-row">
                                <v-col class="mb-6 font-weight-light text-left">
                                    <span>Server: <span class="font-weight-bold">{{ player.serverName }}</span></span>
                                </v-col>
                                <v-col class="mb-6 font-weight-light text-right">
                                    <span>DPS: <span class="font-weight-bold">{{ player.dps }}</span></span>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row class="tiny-row">
                                <v-col class="mb-6 font-weight-light text-left">
                                    <span>Total Damage: <span class="font-weight-bold">{{ player.totalDmg }}</span></span>
                                </v-col>
                                <v-col class="mb-6 font-weight-light text-right">
                                    <span>Percentage of Party: <span class="font-weight-bold">{{ player.percentageOfParty }} %</span></span>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row class="tiny-row">
                                <v-col class="mb-6 font-weight-light text-left">
                                    <span>Deaths: <span class="font-weight-bold">{{ player.deaths }}</span></span>
                                </v-col>
                                <v-col class="mb-6 font-weight-light text-right">
                                    <span>Death Duration: <span class="font-weight-bold">{{ player.deathDuration }} Seconds</span></span>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row class="tiny-row">
                                <v-col class="mb-4 font-weight-light text-left">
                                    <span>Aggro: <span class="font-weight-bold">{{ player.aggro }} %</span></span>
                                </v-col>
                                <v-col class="mb-4 font-weight-light text-center">
                                    <span>Heal Crit: <span class="font-weight-bold">{{ player.critRateHeal }} %</span></span>
                                </v-col>
                                <v-col class="mb-4 font-weight-light text-right">
                                    <span>Crit Rate: <span class="font-weight-bold">{{ player.critRate }} %</span></span>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col>
                <v-expansion-panels>
                    <v-expansion-panel
                            v-for="player in runData.players"
                            :key="player"
                    >
                        <v-expansion-panel-header>
                            <img
                                    :src="'https://raw.githubusercontent.com/neowutran/TeraDpsMeterData/master/class-icons/' + player.class + '.png'"
                                    v-on="on" class="run-class-icon"/>{{ player.name }}
                            <template v-slot:actions>
                                <v-icon v-for="death in player.deaths" :key="death" style="margin-right: 2px;">
                                    mdi-knife-military
                                </v-icon>
                            </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Skill</th>
                                        <th class="text-left">Crit %</th>
                                        <th class="text-left">DPS %</th>
                                        <th class="text-left">Hits</th>
                                        <th class="text-left">HPM</th>
                                        <th class="text-left">Average Crit</th>
                                        <th class="text-left">Highest Crit</th>
                                        <th class="text-left">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="skill in player.skills" :key="skill">
                                        <td class="align-content-center"><img class="skill-icon"
                                                                              :src="'https://storage.googleapis.com/moongourd/resources/icons/icon_skills.' + skill.skill + '_tex.png'"/>
                                        </td>
                                        <td>{{ skill.crit }} %</td>
                                        <td>{{ skill.dps }} %</td>
                                        <td>{{ skill.hits }}</td>
                                        <td>{{ skill.hpm }}</td>
                                        <td>{{ skill.avgCrit }}</td>
                                        <td>{{ skill.highestCrit }}</td>
                                        <td>{{ skill.total }}</td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    .tiny-row {
        height: 40px;
    }

    .run-class-icon {
        width: 26px;
        height: 26px;
        margin: 0 5px 0 0;
        flex: unset !important;
    }

    .skill-icon {
        margin: 8px 0 0 0;
        width: 40px;
        height: 40px;
        border-radius: 3px;
        border: 3px solid rgb(48, 48, 48);
    }
</style>

<script>
	function formatDamage(dps) {
		return dps.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	}

	export default {
		"name": "perplayerstats",
		data() {
			return {
				"runData": {
					"players": {
						0: {
							"class": "lancer",
							"name": "PlayerName1",
							"serverName": "Mystel",
                            "aggro": 99,
							"critRate": 88,
                            "critRateHeal": 0,
							"totalDmg": formatDamage(2147483647),
							"dps": formatDamage(9500234),
							"percentageOfParty": 33,
							"deaths": 3,
							"deathDuration": 55,
							"skills": [
								{
									"skill": "justiceleap",
									"crit": 100,
									"dps": 22,
									"hits": 54,
									"hpm": 8.55,
									"avgCrit": formatDamage(19000000),
									"highestCrit": formatDamage(25000000),
									"total": formatDamage(2132515212)
								},
								{
									"skill": "leaprampage",
									"crit": 100,
									"dps": 12,
									"hits": 3,
									"hpm": 3.55,
									"avgCrit": formatDamage(2453999),
									"highestCrit": formatDamage(3654923),
									"total": formatDamage(22232141)
								}
							]
						},
						1: {
							"class": "mystic",
							"name": "PlayerName2",
							"serverName": "Seren",
							"dps": formatDamage(2456221),
							"deaths": 2
						},
						2: {
							"class": "valkyrie",
							"name": "PlayerName3",
							"serverName": "Yurian",
							"dps": formatDamage(19263527),
							"deaths": 1
						},
						3: {
							"class": "archer",
							"name": "PlayerName4",
							"serverName": "Mystel",
							"dps": formatDamage(24562953),
							"deaths": 20
						},
						4: {
							"class": "berserker",
							"name": "PlayerName5",
							"serverName": "Killian",
							"dps": formatDamage(21345927),
							"deaths": 0
						}
					}
				}
			};
		}
	};
</script>
