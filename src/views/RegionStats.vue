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

<script>
export default {
	"name": "region-stats",
	"components": {
	}
};
</script>
