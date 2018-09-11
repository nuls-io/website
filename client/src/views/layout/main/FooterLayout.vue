<template>
	<div class="section footer">
		<div class="container social">
			<div>
				<h3>
					<I18N id="footer.social.title.body">
						<I18N id="footer.social.title.nuls" place="nuls" />
					</I18N>
				</h3>
				<p><I18N id="footer.social.cuttingEdge" /></p>
			</div>
			<div class="buttons">
				<Button
					:shadow="false"
					routeLink="team"
					colour="white"
					textClass="blue"
				>
					<I18N id="footer.social.viewTeam" />
				</Button>
				<!--<Button colour="transparent" routeLink="jobs"><I18N id="footer.social.joinUs" /></Button>-->
			</div>
			<div class="links">
				<a href="https://join.slack.com/t/nuls/shared_invite/enQtMjQ4MTM4ODAyNTI4LWJjNGMwYTE0YjRlYmFlZGUwM2JhOGE4MDIwZmE4MzA2MDg1YzUyMmVkN2RhZjkyNWMzZjY5ZDU5ZmViMjZjNGQ" target="_blank"><img src="@/assets/images/icons/slack.png" alt="Slack"></a>
				<a href="https://gitter.im/nuls_io" target="_blank"><img src="@/assets/images/icons/gitter.png" alt="Gitter"></a>
				<a href="https://steemit.com/@nuls" target="_blank"><img src="@/assets/images/icons/steemit.png" alt="Steemit"></a>
				<a href="https://discord.gg/cUeafst" target="_blank"><img src="@/assets/images/icons/discord.png" alt="Discord"></a>
				<a href="https://www.reddit.com/r/nulsservice/" target="_blank"><img src="@/assets/images/icons/reddit.png" alt="Reddit"></a>
				<a href="https://medium.com/@nuls" target="_blank"><img src="@/assets/images/icons/medium.png" alt="Medium"></a>
				<a href="https://github.com/nuls-io/" target="_blank"><img src="@/assets/images/icons/github.png" alt="Github"></a>
				<a href="https://twitter.com/nulsservice" target="_blank"><img src="@/assets/images/icons/twitter.png" alt="Twitter"></a>
				<a href="https://t.me/Nulsio" target="_blank"><img src="@/assets/images/icons/telegram.png" alt="Telegram"></a>
			</div>
		</div>
		<div class="container">
			<hr class="top">
			<h4>
				<I18N id="footer.contact.title" />
				<!--<Button class="contactUs" :onClick="goTo" :onClickVars="['contact']"><I18N id="footer.contact.button" /></Button>-->
				<Button class="contactUs" routeLink="contact"><I18N id="footer.contact.button" /></Button>
			</h4>
			<hr class="bottom">
			<v-container grid-list-md text-xs-center>
				<v-layout row wrap>
					<v-flex
						xs12
						sm3
						md2
					>
						<div class="disclaimer">
							<div class="logo" />
							<p><I18N id="footer.links.copyright" /></p>
							<p><I18N id="footer.links.singapore" /></p>
							<p><I18N id="footer.links.design" /></p>
						</div>
					</v-flex>
					<v-flex
						xs12
						sm9
						md10
					>
						<v-layout row wrap>
							<v-flex
								xs6
								sm6
								md3
							>
								<div>
									<h5><I18N id="footer.links.about.title" /></h5>
									<ul>
										<li><router-link :to="{ name: 'about' }"><I18N id="footer.links.about.nuls" /></router-link></li>
										<li><router-link :to="{ name: 'team' }"><I18N id="footer.links.about.team" /></router-link></li>
										<li><router-link :to="{ name: 'partners' }"><I18N id="footer.links.about.partners" /></router-link></li>
										<li><router-link :to="{ name: 'news' }"><I18N id="footer.links.about.news" /></router-link></li>
									</ul>
								</div>
							</v-flex>
							<v-flex
								xs6
								sm6
								md3
							>
								<div>
									<h5><I18N id="footer.links.downloads.title" /></h5>
									<ul>
										<li><router-link :to="{ name: 'papers' }"><I18N id="footer.links.downloads.whitepaper" /></router-link></li>
										<li><router-link :to="{ name: 'papers' }"><I18N id="footer.links.downloads.yellowpaper" /></router-link></li>
										<li><router-link :to="{ name: 'wallet' }"><I18N id="footer.links.downloads.wallet" /></router-link></li>
										<li><router-link :to="{ name: 'dApps' }"><I18N id="footer.links.downloads.dApps" /></router-link></li>
									</ul>
								</div>
							</v-flex>
							<v-flex
								xs6
								sm6
								md3
							>
								<div>
									<h5><I18N id="footer.links.social.title" /></h5>

									<ul>
										<li><a href="https://t.me/Nulsio" target="_blank"><I18N id="footer.links.social.telegram" /></a></li>
										<li><a href="https://twitter.com/nulsservice" target="_blank"><I18N id="footer.links.social.twitter" /></a></li>
										<li><a href="https://github.com/nuls-io/" target="_blank"><I18N id="footer.links.social.github" /></a></li>
										<li><a href="https://medium.com/@nuls" target="_blank"><I18N id="footer.links.social.medium" /></a></li>
										<li><a href="https://www.reddit.com/r/nulsservice/" target="_blank"><I18N id="footer.links.social.reddit" /></a></li>
										<li><a href="https://discord.gg/cUeafst" target="_blank"><I18N id="footer.links.social.discord" /></a></li>
										<li><a href="https://steemit.com/@nuls" target="_blank"><I18N id="footer.links.social.steemit" /></a></li>
										<li><a href="https://gitter.im/nuls_io" target="_blank"><I18N id="footer.links.social.gitter" /></a></li>
										<li><a href="https://join.slack.com/t/nuls/shared_invite/enQtMjQ4MTM4ODAyNTI4LWJjNGMwYTE0YjRlYmFlZGUwM2JhOGE4MDIwZmE4MzA2MDg1YzUyMmVkN2RhZjkyNWMzZjY5ZDU5ZmViMjZjNGQ" target="_blank"><I18N id="footer.links.social.slack" /></a></li>
									</ul>

									<!--<ul>
										<li><a href="https://twitter.com/nulsservice" target="_blank"><I18N id="footer.links.social.twitter" /></a></li>
										<li><a href="https://www.facebook.com/nulscommunity" target="_blank"><I18N id="footer.links.social.facebook" /></a></li>
										<li><a href="https://medium.com/@nuls" target="_blank"><I18N id="footer.links.social.medium" /></a></li>
										<li><I18N id="footer.links.social.youtube" /></li>
										<li><I18N id="footer.links.social.weChat" /></li>
										<li><I18N id="footer.links.social.weibo" /></li>
									</ul>-->
								</div>
							</v-flex>
							<v-flex
								xs6
								sm6
								md3
							>
								<div>
									<h5><I18N id="footer.links.support.title" /></h5>
									<ul>
										<li><router-link :to="{ name: 'faq' }"><I18N id="footer.links.support.faq" /></router-link></li>
										<!--<li><router-link :to="{ name: 'jobs' }"><I18N id="footer.links.support.joinUs" /></router-link></li>-->
									</ul>
								</div>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-container>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/vuetify/Button';

	export default {
		components: {
			Button
		}
	};
</script>

<style scoped>
	.section {
		margin-top: 140px;
	}

	.footer {
		background: url('~@/assets/images/footer.png') bottom repeat-x, linear-gradient(-1deg, #04265f 0%, #021131 97%);
		color: #fff;
		letter-spacing: 0;
		line-height: 23px;
		display: block;
	}

	li,
	p {
		opacity: 0.5;
	}

	li {
		list-style: none;
		padding: 6px 0;
	}

	ul {
		margin-top: 30px;
	}

	.social {
		background-image: linear-gradient(-133deg, #002e5e 0%, #092243 89%, #0a2140 100%);
		box-shadow: 0 16px 64px 0 rgba(0, 0, 0, 0.24);
		border-radius: 8px;
		position: relative;
		top: -60px;
		padding: 50px 85px;
	}

	@media screen and (max-width: 800px) {
		.social {
			padding: 50px 60px;
		}
	}

	@media screen and (max-width: 600px) {
		.social {
			padding: 50px 40px;
		}
	}

	@media screen and (max-width: 350px) {
		.social {
			padding: 50px 10px;
		}
	}

	@media screen and (max-width: 600px) {
		h5 {
			margin-top: 20px;
		}

		ul {
			margin: 0;
		}
	}

	.links {
		display: inline-block;
	}

	li a {
		color: inherit;
	}

	.social a {
		border: none;
		float: right;
		width: 42px;
		height: 42px;
		margin: 12px 28px;
	}

	.social .buttons {
		display: inline-block;
		vertical-align: top;
	}

	.disclaimer {
		font-size: 14px;
		letter-spacing: -0.47px;
		line-height: 26px;
	}

	hr {
		opacity: 0.1;
		border: 1px solid #fff;
	}

	hr.top {
		margin: -30px 0 25px 0;
	}

	hr.bottom {
		margin: 25px 0 70px 0;
	}

	h3,
	h4,
	h5 {
		opacity: 1;
		color: #fff;
	}

	.logo {
		background: url('~@/assets/images/nuls-footer-logo.png') no-repeat center;
		width: 100%;
		height: 75px;
	}

	h4 {
		text-align: center;
	}
</style>
