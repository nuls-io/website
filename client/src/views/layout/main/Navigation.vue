<template>
	<div :class="{ whiteBackground: whiteBackground }" class="containerParent">
		<div class="container">
			<!--<SwitchLanguage />-->
			<router-link :to="{ name: 'home' }"><div class="logo" /></router-link>
			<div class="desktop">
				<div class="navigation">
					<ul>
						<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.home" /></router-link></li>
						<!--<li><router-link :to="{ name: 'wallet' }"><I18N id="header.navigation.wallet" /></router-link></li>-->
						<li>
							<Dropdown
								:useButton="false"
								:items="[
									{ title: 'header.navigation.wallet', link: 'wallet' },
									{ title: 'header.navigation.webWallet', url: 'https://wallet.nuls.io/' }
								]"
								:arrow="whiteBackground ? '-black' : ''"
								title="header.navigation.wallet"
								class="dropdownPadding"
							/>
						</li>
						<!--<li><router-link :to="{ name: 'dApps' }"><I18N id="header.navigation.dApps" /></router-link></li>-->
						<li><a href="https://dev.nuls.io" target="_blank">Developer</a></li>
						<!--<li><a href="#"><I18N id="header.navigation.documents" /></a></li>-->
						<li><a href="https://nulscan.io" target="_blank"><I18N id="header.navigation.blockchainExplorer" /></a></li>
						<li><a href="https://swap.nuls.io/swap.html" target="_blank"><I18N id="header.navigation.token" /></a></li>
						<li>
							<Dropdown
								:useButton="false"
								:items="[
									{ title: 'header.navigation.whatIsNuls', url: 'https://nuls.community/' },
									{ title: 'header.navigation.team', link: 'team' },
									{ title: 'header.navigation.partners', link: 'partners' },
									{ title: 'header.navigation.joinUs', link: 'jobs' },
									{ title: 'header.navigation.news', link: 'news' }
								]"
								:arrow="whiteBackground ? '-black' : ''"
								title="header.navigation.about"
								class="dropdownPadding"
							/>
						</li>
						<!--<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.forum" /></router-link></li>-->
					</ul>
				</div>
			</div>
			<div class="laptop">
				<div class="navigation">
					<ul>
						<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.home" /></router-link></li>
						<!--<li><router-link :to="{ name: 'wallet' }"><I18N id="header.navigation.wallet" /></router-link></li>-->
						<li>
							<Dropdown
								:useButton="false"
								:items="[
									{ title: 'header.navigation.wallet', link: 'wallet' },
									{ title: 'header.navigation.webWallet', url: 'https://wallet.nuls.io/' }
								]"
								:arrow="whiteBackground ? '-black' : ''"
								title="header.navigation.wallet"
								class="dropdownPadding"
							/>
						</li>
						<li><a href="https://dev.nuls.io" target="_blank">Developer</a></li>
						<li><a href="https://nulscan.io"><I18N id="header.navigation.blockchainExplorer" /></a></li>
						<li><a href="https://swap.nuls.io/swap.html" target="_blank"><I18N id="header.navigation.token" /></a></li>
						<li>
							<Dropdown
								:useButton="false"
								:items="[
									/*{ title: 'header.navigation.dApps', link: 'dApps' },*/
									/*{ title: 'header.navigation.documents', link: 'home' },*/
									{ title: 'header.navigation.whatIsNuls', link: 'about' },
									{ title: 'header.navigation.team', link: 'team' },
									{ title: 'header.navigation.partners', link: 'partners' },
									{ title: 'header.navigation.joinUs', link: 'jobs' },
									{ title: 'header.navigation.news', link: 'news' }
								]"
								title="header.navigation.more"
								class="dropdownPadding"
							/>
						</li>
					</ul>
				</div>
			</div>
			<div class="mobile">
				<div class="hamburger" @click="toggleMobileNavigation(true)" />
			</div>
		</div>
		<slot />
	</div>
</template>

<script>
	import SwitchLanguage from '@/components/SwitchLanguage';
	import Dropdown from '@/components/vuetify/Dropdown';

	export default {
		components: {
			Dropdown,
			SwitchLanguage
		},
		props: {
			whiteBackground: {
				type: Boolean,
				default: false
			}
		},
		destroyed()
		{
			document.documentElement.removeEventListener('click', this.clickAway, false);
		},
		computed: {
			navigationMenuOpen()
			{
				return this.$store.getters['app/navigationMenuOpen'];
			}
		},
		methods: {
			toUrl(url)
			{
				window.open(url, 'target');
			},
			async toggleMobileNavigation(force = false)
			{
				await this.$store.dispatch('app/toggleNavigationMenu', force);

				document.documentElement.removeEventListener('click', this.clickAway, false);

				if(this.navigationMenuOpen)
				{
					this.$nextTick(() => document.documentElement.addEventListener('click', this.clickAway, false));
				}
			},
			clickAway(e)
			{
				if(!e.target.closest('.mobile.navigation') && this.navigationMenuOpen)
				{
					this.toggleMobileNavigation();
				}
			}
		}
	};
</script>

<style scoped>
	.dropdownPadding {
		padding: 15px;
	}

	.containerParent {
		font-family: SofiaProLight, sans-serif;
		font-size: 18px;
		color: #fff;
		letter-spacing: 0.24px;
		position: inherit;
		top: 0;
		left: 0;
		width: 100%;
	}

	.whiteBackground {
		color: #0a2140;
		margin-bottom: 70px;
	}

	.logo {
		background: url('~@/assets/images/nuls-logo-white.png') no-repeat;
		float: left;
		width: 135px;
		height: 53px;
		margin-top: 10px;
	}

	.whiteBackground .logo {
		background-image: url('~@/assets/images/nuls-logo-black.png');
	}

	a {
		border: none;
	}

	.mobile .navigation {
		position: absolute;
		top: 0;
		left: 0;
		background: #0a2140;
		width: 100%;
		z-index: 1;
		font-size: 20px;
		overflow-y: hidden;
		max-height: 500px;
		transition-property: all;
		transition-duration: 1s;
		transition-timing-function: ease;
	}

	.mobile .navigation.closed {
		max-height: 0;
	}

	.mobile ul {
		margin: 90px 0 50px 0;
	}

	.mobile li {
		text-align: center;
	}

	.mobile a {
		color: #fff;
		display: block;
		padding: 15px;
	}

	.mobile .logo {
		margin: 25px;
	}

	.desktop .navigation,
	.laptop .navigation {
		margin: auto;
		width: 100%;
	}

	.desktop .navigation ul,
	.laptop .navigation ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		text-align: center;
	}

	.desktop .navigation ul li,
	.laptop .navigation ul li {
		display: inline-block;
	}

	.desktop .navigation ul li a,
	.laptop .navigation ul li a {
		display: block;
		padding: 23px;
		text-decoration: none;
		color: #fff;
	}

	.whiteBackground .desktop .navigation ul li a,
	.whiteBackground .laptop .navigation ul li a {
		color: #0a2140;
	}

	.laptop,
	.mobile {
		display: none;
	}

	.hamburger {
		float: right;
		background: url('~@/assets/images/icons/hamburger.png') no-repeat center;
		width: 27px;
		height: 16px;
		padding: 37px;
	}

	.whiteBackground .hamburger {
		background-image: url('~@/assets/images/icons/hamburger-black.png');
	}

	.close {
		float: right;
		background: url('~@/assets/images/icons/close.png') no-repeat center;
		width: 21px;
		height: 22px;
		padding: 37px;
	}

	@media screen and (max-width: 1279px) {
		.desktop {
			display: none;
		}

		.laptop {
			display: block;
		}
	}

	@media screen and (max-width: 950px) {
		.laptop {
			display: none;
		}

		.mobile {
			display: block;
		}

		.whiteBackground .mobile {
			height: 71px;
		}
	}
</style>
