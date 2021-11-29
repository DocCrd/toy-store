import { Store } from "vuex";
import { Context } from "@nuxt/types";
import { initialiseStores } from "~/utils/store-accessor";
export * from "~/utils/store-accessor";

export const actions = {
    async nuxtServerInit(store: Store<any>, context:Context) {
        //console.log(store)
        //console.log(context);
    }
};
const initializer = (store: Store<any>) => initialiseStores(store);
export const plugins = [initializer];