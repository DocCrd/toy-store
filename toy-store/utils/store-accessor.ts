/* eslint-disable import/no-mutable-exports */
// https://github.com/championswimmer/vuex-module-decorators#accessing-modules-with-nuxtjs
import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import StuffStoreModule from "~/store/stuff";

let stuffStore: StuffStoreModule;

function initialiseStores(store: Store<any>): void {
    stuffStore = getModule(StuffStoreModule, store);
}

export { initialiseStores, stuffStore };