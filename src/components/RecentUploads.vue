<template>
    <v-layout child-flex>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-center">Party</th>
                    <th class="text-center">Dungeon</th>
                    <th class="text-center">Party DPS</th>
                    <th class="text-center">Fight Duration</th>
                    <th class="text-center">Uploaded</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="upload in recentUploads" :key="upload">
                    <td class="text-center">
                        <v-tooltip color="rgba(48, 48, 48, 1)" content-class="tooltip" v-for="player in upload.players"
                                   :key="player" top>
                            <template v-slot:activator="{ on }">
                                <img :src="'https://raw.githubusercontent.com/neowutran/TeraDpsMeterData/master/class-icons/' + player.class + '.png'"
                                     v-on="on" class="class-icon"/>
                            </template>
                            <span>{{ player.name }}<br>{{ player.serverName }}<br>{{ player.dps }} DPS</span>
                        </v-tooltip>
                    </td>
                    <td class="text-center">
                        <v-btn class="btn-clear" text
                               :to="region + '/run/' + upload.id">
                            {{ upload.dungeon.name }}<br>
                            {{ upload.dungeon.boss.name }}
                        </v-btn>
                    </td>
                    <td class="text-center">{{ upload.partyDps }}</td>
                    <td class="text-center">{{ upload.fightDuration }}</td>
                    <td class="text-center">{{ upload.uploaded }}</td>
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

    .class-icon {
        color: #fafafa;
        border-spacing: 0;
        border-collapse: collapse;
        max-width: 100%;
        border: 0;
        vertical-align: middle;
        background-color: #303030;
        margin: 5px 5px 5px 0;
        height: 48px;
        widht: 48px;
    }

    .tooltip {
        border: 1px solid #616161 !important;
        border-radius: unset;
    }

    .tooltip span {
        text-align: center;
        border-radius: unset;
    }
</style>

<script>
	function formatDPS(dps) {
		return dps.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	}

	function formatDuration(duration) {
		let minutes = Math.floor(duration / 60);
		let seconds = duration - minutes * 60;
		return `${padTime(minutes, "0", 2)}:${padTime(seconds, "0", 2)}`;
	}

	function padTime(string, pad, length) {
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
						"id": "f3d47250da5f",
						"players": {
							0: {
								"class": "lancer",
								"name": "PlayerName1",
								"serverName": "Mystel",
								"dps": formatDPS(95000000)
							},
							1: {
								"class": "mystic",
								"name": "PlayerName2",
								"serverName": "Seren",
								"dps": formatDPS(95000000)
							},
							2: {
								"class": "valkyrie",
								"name": "PlayerName3",
								"serverName": "Yurian",
								"dps": formatDPS(95000000)
							},
							3: {
								"class": "archer",
								"name": "PlayerName4",
								"serverName": "Mystel",
								"dps": formatDPS(95000000)
							},
							4: {
								"class": "berserker",
								"name": "PlayerName5",
								"serverName": "Killian",
								"dps": formatDPS(95000000)
							}
						},
						"dungeon": {
							"id": 3023,
							"name": "Akalath Quarantine",
							"boss": {
								"id": 1000,
								"name": "Akalath Travan"
							}
						},
						"partyDps": formatDPS(133742069),
						"fightDuration": formatDuration(1262),
						"uploaded": new Date().toLocaleString()
					}
				]
			};
		}
	};
</script>