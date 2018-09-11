<template>
	<div data-app>
		<v-progress-linear v-if="loadingStack > 0" :indeterminate="true" height="3" />
		<div v-if="Object.keys(appLoaded).length !== 0">
			<v-content>
				<v-container fill-height>
					<v-layout justify-center align-center>
						<v-flex shrink>
							<v-progress-circular
								:size="100"
								:width="15"
								:rotate="-90"
								:value="percentageLoader"
								color="primary"
							>
								{{ percentageLoader }}%
							</v-progress-circular>
						</v-flex>
					</v-layout>
				</v-container>
			</v-content>
		</div>
		<div v-else>
			<HeaderMeta />
			<MobileNavigation />
			<router-view />
			<FooterLayout />
		</div>
	</div>
</template>

<script>
	import MobileNavigation from '@/views/layout/main/MobileNavigation';
	import FooterLayout from '@/views/layout/main/FooterLayout';

	export default {
		components: {
			MobileNavigation,
			FooterLayout
		},
		computed: {
			loadingStack()
			{
				return this.$store.getters['app/loadingStack'].length;
			},
			appLoaded()
			{
				return this.$store.getters['app/appLoaded'];
			},
			percentageLoader()
			{
				if(this.loadingStack === 0) return 100;

				return ((this.loadingStack - Object.keys(this.appLoaded).length) * 100) / Object.keys(this.appLoaded).length;
			}
			// pageLoading()
			// {
			// 	return this.$store.getters['app/pageLoading'];
			// }
		}
	};
</script>

<style>
	body {
		font-family: SofiaProLight, sans-serif;
		font-size: 16px;
		color: #445569;
		letter-spacing: 0;
		line-height: 25px;
	}

	h1 {
		font-family: NeuzeitGro-Bol, sans-serif;
		font-size: 72px;
		color: #fff;
		text-align: center;
		width: 75%;
		margin: 60px auto 0 auto;
		letter-spacing: -0.77px;
		line-height: 88px;
	}

	h2 {
		font-family: NeuzeitGro-Bol, sans-serif;
		font-size: 56px;
		color: #0a2140;
		letter-spacing: 0;
		line-height: 77px;
	}

	h3 {
		font-family: NeuzeitGro-Bol, sans-serif;
		font-size: 48px;
		color: #0a2140;
		letter-spacing: -1.37px;
		line-height: 77px;
		padding-bottom: 30px;
	}

	h4 {
		font-family: NeuzeitGro-Bol, sans-serif;
		font-size: 28px;
		color: #0a2140;
		letter-spacing: -0.88px;
		line-height: 34px;
	}

	h5 {
		font-family: SofiaProLight, sans-serif;
		font-size: 24px;
		opacity: 0.7;
		color: #445569;
		letter-spacing: 0;
		line-height: 32px;
	}

	@media screen and (max-width: 600px) {
		body {
			font-size: 14px;
			line-height: 20.74px;
		}

		h1 {
			font-size: 40px;
			letter-spacing: -0.43px;
			line-height: 40px;
		}

		h2 {
			font-size: 32px;
			letter-spacing: -0.91px;
			line-height: 46.08px;
		}

		h3 {
			font-size: 28px;
			letter-spacing: -0.8px;
			line-height: 32px;
		}

		h4 {
			font-size: 21px;
			letter-spacing: -0.66px;
			line-height: 25.5px;
		}

		h5 {
			font-size: 15px;
			letter-spacing: 0;
			line-height: 18.8px;
		}
	}

	.container {
		padding-top: 40px;
		margin: auto;
		max-width: 1280px;
	}

	.section {
		padding-top: 0;
	}

	.section.white {
		background: white;
	}

	.section.grey {
		background-image:
			linear-gradient(
					-134deg,
					#f1f4f8 0%,
					#eff4f8 14%,
					#eff4f8 18%,
					#eff4f8 20%,
					#ecf4f9 46%,
					#ebf4f9 49%,
					#ebf4f9 54%,
					#ebf4f9 57%,
					#eaf4f9 65%,
					#e7f4fa 86%,
					#e7f4fa 90%,
					#e7f4fa 90%,
					#e6f4fa 92%,
					#e6f4fa 100%
				);
		padding-bottom: 70px;
	}

	.section.grey.noClip {
		clip-path: none;
		margin-bottom: -140px;
		padding-bottom: 140px;
	}

	.section.blue {
		background: url('~@/assets/images/wallet-section-bg.jpg') no-repeat center, linear-gradient(to right, #08265e 40%, #021234 60%);
	}

	.clipPath {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 93%);
	}

	@media screen and (max-width: 900px) {
		.clipPath {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
		}
	}

	@media screen and (max-width: 800px) {
		.clipPath {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%);
		}
	}

	@media screen and (max-width: 500px) {
		.clipPath {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 97%);
		}
	}

	@media screen and (max-width: 400px) {
		.clipPath {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 98%);
		}
	}

	@media screen and (max-width: 350px) {
		.clipPath {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 98.5%);
		}
	}

	.center {
		text-align: center;
	}

	.header p {
		font-size: 20px;
		color: #fff;
		letter-spacing: 0;
		line-height: 29px;
	}

	.container .centered {
		padding: 110px 0;
		text-align: center;
		max-width: 810px;
		margin: 0 auto;
	}

	.header .centered {
		padding: 35px 0;
	}

	.container .centered p {
		font-size: 20px;
	}

	.menu__content {
		box-shadow: none;
	}

	.menu__content .list__tile {
		padding: 0;
	}

	.menu__content .list__tile__title {
		height: initial;
	}

	.menu__content .item:not(:first-child) .list__tile {
		border-top: 1px solid #445569;
	}

	.menu__content .item:first-child .list__tile {
		padding-top: 10px;
	}

	.header {
		/*position: absolute;*/
		/*top: 120px;*/
		width: 100%;
		padding-bottom: 35px;
	}

	.header .container {
		padding: 0;
	}

	.header .iconContainer {
		width: 90px;
		margin: 40px auto 0 auto;
	}

	a {
		color: #0a2140;
		text-decoration: none;
		border-bottom: 1px solid #0a2140;
	}

	a.green {
		color: #56c100;
		border-bottom: 1px solid #56c100;
		background: none !important;
	}

	a:hover {
		border-bottom: 1px dashed;
	}

	.input-group label {
		margin-left: 10px;
	}

	.input-group.input-group--text-field:not(.input-group--focused):not(.input-group--dirty) label {
		text-align: center;
		max-width: 100%;
	}

	.input-group {
		background-image: linear-gradient(-134deg, #f1f4f8 0%, #eff4f8 14%, #eff4f8 18%, #eff4f8 20%, #ecf4f9 46%, #ebf4f9 49%, #ebf4f9 54%, #eaf4f9 65%, #e7f4fa 90%, #e7f4fa 90%, #e6f4fa 92%, #e6f4fa 100%);
		border-radius: 10px;
		font-size: 18px;
		color: #0a2140;
		letter-spacing: 0.24px;
		margin: 55px 0;
	}

	.input-group.input-group--disabled {
		opacity: 0.5;
	}

	.input-group .input-group__input {
		margin: 0 10px;
	}

	.input-group .input-group__details {
		min-height: 10px;
	}

	.input-group .input-group__error {
		margin-left: 10px;
		color: red !important;
	}

	.pagination__item:hover,
	.pagination__item--active {
		background: #56c400;
		color: #fff;
	}

	.overlay--active::before {
		opacity: 0.7;
	}

	.overlay::before {
		background-color: #0a2140;
	}

	.card__text ul {
		padding-left: 15px;
	}

	.progress-linear {
		position: absolute;
		margin: 0;
	}

	.progress-linear .progress-linear__bar__indeterminate {
		background: #56c100;
	}
</style>
