import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        modal: false,
        success: false,
        locale: false,
        ipLocation: null,
        geoLocation: null,
        url:null,
        hook:null,
        redirectTo: "http://uppercase.group/"
    },
    getters: {
        isModal: state => state.modal,
        isSuccess: state => state.success,
        ipLocation: state => state.ipLocation,
        geoLocation: state => state.geoLocation,
        locale: state => state.locale,
        redirectTo: state => state.redirectTo,
        url: state => state.url,
        hook: state => state.hook
    },
    mutations: {
        SET_MODAL: state => (state.modal = true),
        UNSET_MODAL: state => (state.modal = false),
        SET_SUCCESS: state => (state.success = true),
        UNSET_SUCCESS: state => (state.success = false),
        SET_IP_LOCATION: (state, ipLocation) => (state.ipLocation = ipLocation),
        SET_GEO_LOCATION: (state, geoLocation) =>
            (state.geoLocation = geoLocation),
        SET_LOCALE: (state, locale) => (state.locale = locale),
        SET_URL: (state, url) => (state.url = url),
        SET_HOOK: (state, hook) => (state.hook = hook)
    },
    actions: {
        setModal: context => context.commit("SET_MODAL"),
        unsetModal: context => context.commit("UNSET_MODAL"),
        setSuccess: context => context.commit("SET_SUCCESS"),
        unsetSuccess: context => context.commit("UNSET_SUCCESS"),
        setIpLocation: (context, payload) =>
            context.commit("SET_IP_LOCATION", payload),
        setGeoLocation: (context, payload) =>
            context.commit("SET_GEO_LOCATION", payload),
        setLocale: (context, payload) => context.commit("SET_LOCALE", payload)
    }
});
