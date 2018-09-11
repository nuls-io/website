<template>
	<div>
		<HeaderLayout>
			<Header />
		</HeaderLayout>>
		<div v-if="loading || !item" class="center">
			<v-progress-circular
				:size="50"
				indeterminate
				color="primary"
			/>
		</div>
		<div v-else>
			<div class="container">
				<div class="markdown" v-html="compiledMarkdown" />
			</div>
		</div>
	</div>
</template>

<script>
	import marked from 'marked';
	import Header from '@/views/pages/dApps/Header';

	export default {
		components: {
			Header
		},
		data()
		{
			return {
				id: this.$store.state.route.params.id,
				title: this.$store.state.route.params.title
			};
		},
		computed: {
			loading()
			{
				return this.$store.getters['itemsPro/getLoading'];
			},
			item()
			{
				if(!this.$store.getters['itemsPro/getItem']('dApps', this.id))
				{
					this.$store.dispatch('itemsPro/loadItem', { type: 'dApps', id: this.id });
				}

				const item = this.$store.getters['itemsPro/getItem']('dApps', this.id);

				if(item && this.title !== item.title)
				{
					this.$router.push({ name: 'dAppItem', params: { id: this.id, title: item.title } });
					this.title = item.title;
				}

				return item;
			},
			compiledMarkdown()
			{
				return marked(this.item.content, { sanitize: true })
			}
		}
	};
</script>

<style scoped>
	.markdown >>> h1 {
		color: #0a2140;
	}

	.markdown >>> img {
		width: 100%;
	}
</style>
