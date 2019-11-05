<template>
    <v-container>
        <v-row>
            <Header transition="fade-transition" :region="region"/>
        </v-row>
        <v-row>
            <PerPlayerStats :id="$route.params.id"/>
<!--            <v-col class="mb-6">-->
<!--                <DPSBreakdown :id="$route.params.id"/>-->
<!--            </v-col>-->
<!--            <v-col class="mb-6">-->
<!--                <EncounterInfo :id="$route.params.id"/>-->
<!--            </v-col>-->
        </v-row>
    </v-container>
</template>

<script>
	import Header from "@/components/Header.vue";
	import PerPlayerStats from "@/components/PerPlayerStats.vue";
	import DPSBreakdown from "@/components/DPSBreakdown.vue";
	import EncounterInfo from "@/components/EncounterInfo.vue";

	export default {
		"props": ["id", "region"],
		"components": {
			Header,
			PerPlayerStats,
			DPSBreakdown,
			EncounterInfo
		}
	};
</script>
