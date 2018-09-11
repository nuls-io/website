import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import VueI18N from 'vue-i18n';
import VeeValidate from 'vee-validate';
import VueMasonry from 'vue-masonry-css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import 'flexboxgrid/css/flexboxgrid.min.css';
import 'vuetify/dist/vuetify.min.css';
import I18N from '@/components/I18N';
import HeaderLayout from '@/views/layout/main/HeaderLayout';
import App from '@/components/App';
import HeaderMeta from '@/components/HeaderMeta';
import router from '@/router';
import store from '@/store';
import icons from '@/utils/fontAwesomeIcons';

fontawesome.library.add({ ...icons });

store.dispatch('app/load');
sync(store, router);

Vue.use(VueAwesomeSwiper);
Vue.use(VueMasonry);
Vue.use(VueI18N);
Vue.use(Vuetify);
Vue.use(VeeValidate, {
	fieldsBagName: 'fieldsBag'
});

/*
 * Register some global components
 */
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.component('I18N', I18N);
Vue.component('HeaderMeta', HeaderMeta);
Vue.component('HeaderLayout', HeaderLayout);

const i18n = new VueI18N({
	locale: store.state.i18n.locale,
	fallbackLocale: 'en'
});

const app = new Vue({
	router,
	store,
	i18n,
	...App
});

/*
 * Dynamically set the language when it's loaded and per user request
 */
store.watch(
	() => // This will check if the language has been changed
	{
		// Yes it's only checking a counter, but this is counting how many times it's changed because using a variable is too quick
		return store.getters['i18n/updatedCounter'];
	},
	() => // The counter has changed value
	{
		if(!store.state.i18n.updating) // If we've finished getting the language (ie we have it in memory)
		{
			// Updates frontend language being displayed
			// app.$i18n.locale = null; // First we turn it off so the damn thing actually detects changes by Admin -.-
			app.$i18n.setLocaleMessage(store.state.i18n.locale, store.state.i18n.languages[store.state.i18n.locale]);
			app.$i18n.locale = store.state.i18n.locale;
		}
	}
);

export { app, router, store };
