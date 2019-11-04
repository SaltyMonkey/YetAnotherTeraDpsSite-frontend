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
                        <img v-for="x in item.classes" :key="x" :src="'https://storage.googleapis.com/moongourd/resources/class-icons-t/' + x.charAt(0).toUpperCase() + x.slice(1) + '.svg'"/>
                    </td>
                    <td class="text-center"><a :href="item.url">{{ item.dungeon }}</a></td>
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
    table {
        width: 100%;
    }
</style>

<script>
	function formatPartyDPS(dps) {
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
		"name": "RecentUploads",
		data() {
			// TODO: remove sample data and include data from backend
			return {
				"recentUploads": [
					{
						// eslint-disable-next-line no-mixed-spaces-and-tabs
						"classes": ["lancer", "priest", "warrior", "ninja", "slayer"],
						"dungeon": "Akalath Quarantine",
						"partyDps": formatPartyDPS(133742069),
						"duration": formatDuration(574),
						"uploaded": new Date(),
						"url": "/run?id=f3d47250da5f"
					},
					{
						// eslint-disable-next-line no-mixed-spaces-and-tabs
						"classes": ["brawler", "mystic", "berserker", "gunner", "reaper"],
						"dungeon": "Akalath Quarantine",
						"partyDps": formatPartyDPS(999999999),
						"duration": formatDuration(2),
						"uploaded": new Date(),
						"url": "/run?id=f9fee8666ca6"
					}
					,
					{
						// eslint-disable-next-line no-mixed-spaces-and-tabs
						"classes": ["lancer", "lancer", "lancer", "lancer", "lancer"],
						"dungeon": "Akalath Quarantine",
						"partyDps": formatPartyDPS(999999999),
						"duration": formatDuration(2),
						"uploaded": new Date(),
						"url": "/run?id=20af30ad26b4"
					}
				]
			};
		}
	};
</script>