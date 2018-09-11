import Vue from 'vue';
import dot from 'dot-object';

const state = {
	locale: 'en',
	languages: {},
	updating: false,
	updatedCounter: 0
};

const mutations = {
	UPDATE_LANGUAGE(state)
	{
		state.updating = false;
		state.updatedCounter += 1;
	},
	CHANGE_LOCALE(state, locale)
	{
		state.updating = true;
		state.locale = locale;
	},
	SET_LANGUAGE(state, { locale, data })
	{
		Vue.set(state.languages, locale, data);
	}
};

const actions = {
	async load({ dispatch, state, commit }, locale = null)
	{
		locale = locale || state.locale;

		// Check for allowed locales
		if(!['en', 'zh'].includes(locale)) return;

		if(state.languages[locale])
		{
			dispatch('app/appCallLoaded', 'i18n', { root: true });
			dispatch('updateLocale', locale);

			return;
		}

		const data = await require(`@/assets/data/i18n/${locale}`);

		commit('SET_LANGUAGE', { locale, data });
		dispatch('updateLocale', locale);
		dispatch('app/appCallLoaded', 'i18n', { root: true });
	},
	changeLocale({ dispatch }, locale)
	{
		dispatch('load', locale);
	},
	saveUsersLocaleState({ commit }, locale)
	{
		localStorage.setItem('locale', locale);
		commit('CHANGE_LOCALE', locale);
	},
	updateLocale({ commit, dispatch }, locale)
	{
		dispatch('saveUsersLocaleState', locale);
		commit('UPDATE_LANGUAGE');
	}
};

const getters = {
	updatedCounter: (state) =>
	{
		return state.updatedCounter;
	},
	get: (state) => (key) =>
	{
		if(!key) return null;

		return dot.pick(key, state.languages[state.locale]);
	},
	locale: (state) => state.locale,
	exists: (state, getters) => (key) => typeof getters.get(key) !== 'undefined'
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
