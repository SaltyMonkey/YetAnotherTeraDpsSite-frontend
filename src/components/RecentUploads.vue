<template>
    <v-layout child-flex>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-center">Party</th>
                    <th class="text-center">Dungeon</th>
                    <th class="text-center">Party DPS</th>
                    <th class="text-center">Duration</th>
                    <th class="text-center">Uploaded</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in recentUploads" :key="item">
                    <td class="text-center">
                        <v-tooltip v-for="player in item.players" :key="player" top>
                            <template v-slot:activator="{ on }">
                                <img :src="'https://storage.googleapis.com/moongourd/resources/class-icons-t/' + player.class.charAt(0).toUpperCase() + player.class.slice(1) + '.svg'"
                                     v-on="on"/>
                            </template>
                            <span>{{ player.name }}<br>{{ player.serverName }} - {{ player.guildName }}<br>{{ player.dps }} DPS</span>
                        </v-tooltip>
                    </td>
                    <td class="text-center">
                        <v-btn class="btn-clear" text :to="region + item.url">{{ item.dungeon.id }}<br>{{
                            item.dungeon.boss }}
                        </v-btn>
                    </td>
                    <td class="text-center">{{ item.partyDps }}</td>
                    <td class="text-center">{{ item.duration }}</td>
                    <td class="text-center">{{ item.uploaded }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-layout>
</template>

<style>
    .btn-clear {
        text-transform: capitalize;
    }

    .btn-clear > span {
        font-weight: normal;
    }
</style>

<script>
	function formatDPS(dps) {
		// eslint-disable-next-line no-mixed-spaces-and-tabs
		return dps.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	}

	function formatDuration(duration) {
		let minutes = Math.floor(duration / 60);
		let seconds = duration - minutes * 60;
		return `${str_pad_left(minutes, "0", 2)}:${str_pad_left(seconds, "0", 2)}`;
	}

	function str_pad_left(string, pad, length) {
		return (new Array(length + 1).join(pad) + string).slice(-length);
	}

	export default {
		"props": ["region"],
		"name": "RecentUploads",
		data() {
			// TODO: remove sample data and include data from backend
			return {
				"recentUploads": [
					{
						// eslint-disable-next-line no-mixed-spaces-and-tabs
						"players": {
							0: {
								"class": "lancer",
								"name": "Lancer",
								"guildName": "uwu",
								"serverName": "Mystel",
								"dps": formatDPS(95000000)
							},
							1: {
								"class": "mystic",
								"name": "Mystic",
								"guildName": "uwu",
								"serverName": "Seren",
								"dps": formatDPS(95000000)
							},
							2: {
								"class": "valkyrie",
								"name": "Valkyrie",
								"guildName": "uwu",
								"serverName": "Yurian",
								"dps": formatDPS(95000000)
							},
							3: {
								"class": "archer",
								"name": "Archer",
								"guildName": "uwu",
								"serverName": "Mystel",
								"dps": formatDPS(95000000)
							},
							4: {
								"class": "berserker",
								"name": "Zerk",
								"guildName": "uwu",
								"serverName": "Killian",
								"dps": formatDPS(95000000)
							}
						},
						"dungeon": {
							"id": "Akalath Quarantine",
							"boss": "Akalath Travan"
						},
						"partyDps": formatDPS(133742069),
						"duration": formatDuration(574),
						"uploaded": new Date(),
						"url": "/run?id=f3d47250da5f"
					},
					{
						// eslint-disable-next-line no-mixed-spaces-and-tabs
						"classes": ["brawler", "mystic", "berserker", "gunner", "reaper"],
						"dungeon": {
							"id": 3023,
							"boss": 2000
						},
						"partyDps": formatDPS(999999999),
						"duration": formatDuration(2),
						"uploaded": new Date(),
						"url": "/run?id=f9fee8666ca6"
					}
					,
					{
						// eslint-disable-next-line no-mixed-spaces-and-tabs
						"classes": ["lancer", "lancer", "lancer", "lancer", "lancer"],
						"dungeon": {
							"id": 3023,
							"boss": 2000
						},
						"partyDps": formatDPS(999999999),
						"duration": formatDuration(1),
						"uploaded": new Date(),
						"url": "/run?id=20af30ad26b4"
					}
				]
			};
		}
	};
</script>