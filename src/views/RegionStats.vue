<template>
	<v-content>
		<v-container class="bg" fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-layout align-center justify-center>
						<v-btn class="ma-2" tile x-large to="/eu">
							<!-- H
							<v-icon left>mdi-format-align-left</v-icon>-->
							EU
						</v-btn>

						<v-btn class="ma-2" tile x-large to="/ru">
								<!-- H
							<v-icon left>mdi-format-align-left</v-icon>-->
							RU
						</v-btn>

						<v-btn class="ma-2" tile x-large to="/na">
								<!-- H
							<v-icon left>mdi-format-align-left</v-icon>-->
							NA
						</v-btn>
						<v-btn class="ma-2" tile x-large to="/kr">
								<!-- H
							<v-icon left>mdi-format-align-left</v-icon>-->
							KR
						</v-btn>
					</v-layout>
				</v-flex>
					
			</v-layout>
		
		</v-container>
	
	</v-content>
</template>

<style>
.bg {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: url("https://cdn.discordapp.com/attachments/518904754190155778/606972859746746379/illust_76043657_20190802_181113.png")
		no-repeat center center;
	background-size: cover;
	background-color: red;
	transform: scale(1.1);
}
</style>

<script>
export default {
	"name": "region-stats",
	"components": {
	}
};
</script>
