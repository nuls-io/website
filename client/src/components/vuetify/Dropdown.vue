<template>
	<v-menu
		:open-on-hover="true"
		offset-y
		class="dropdown"
		content-class="test"
	>
		<div slot="activator">
			<Button
				v-if="useButton"
				:colour="buttonColour"
				class="button"
			>
				{{ $t(title) }}
				<img
					:src="imagePath"
					alt=""
					class="arrow"
				>
			</Button>
			<div v-else-if="title">
				{{ $t(title) }}
				<img
					:src="imagePath"
					alt=""
					class="arrow"
				>
			</div>
			<slot v-else />
		</div>
		<v-list :class="{hide: !viewable }" class="items">
			<v-list-tile
				v-for="(item, index) in items"
				:key="index"
				class="item"
			>
				<v-list-tile-title v-if="item.click" @click="item.click(item)"><span>{{ $t(item.title) }}</span></v-list-tile-title>
				<v-list-tile-title v-else-if="item.link"><router-link :to="{ name: item.link }">{{ $t(item.title) }}</router-link></v-list-tile-title>
				<v-list-tile-title v-else-if="item.url"><a :href="item.url" target="_blank">{{ $t(item.title) }}</a></v-list-tile-title>
				<v-list-tile-title v-else><span>{{ $t(item.title) }}</span></v-list-tile-title>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script>
	import Button from '@/components/vuetify/Button';

	export default {
		components: {
			Button
		},
		props: {
			viewable: {
				type: Boolean,
				default: true
			},
			buttonColour: {
				type: String,
				default: ''
			},
			useButton: {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				default: ''
			},
			items: {
				type: Array,
				required: true
			},
			arrow: {
				type: String,
				default: ''
			}
		},
		computed: {
			navigationMenuOpen()
			{
				return this.$store.getters['app/navigationMenuOpen'];
			},
			imagePath()
			{
				return require(`@/assets/images/icons/arrow-down${this.arrow}.png`)
			}
		}
	};
</script>

<style scoped>
	.hide {
		display: none;
	}

	.dropdown {
		box-shadow: none;
		border-radius: 0;
	}

	.items {
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
					#eaf4f9 65%,
					#e7f4fa 90%,
					#e7f4fa 90%,
					#e6f4fa 92%,
					#e6f4fa 100%
				);
		/*box-shadow: 0 14px 28px 0 rgba(10, 33, 64, 0.85);*/
		border-radius: 16px;
		padding: 0;
	}

	.item {
		font-size: 17px;
		color: #445569;
		text-align: center;
		padding: 0 15px;
		margin-top: 4px;
		cursor: pointer;
	}

	.button img {
		margin-left: 12px;
	}

	.button:hover img {
		opacity: 0.6;
		transform: rotate(-180deg);
	}

	a,
	span {
		color: inherit;
		text-decoration: inherit;
		padding: 10px 30px;
		display: block;
		border: none;
	}
</style>
