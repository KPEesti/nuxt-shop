import {defineStore} from "pinia";
import {AppStatus} from "~/utils/consts";

interface State {
    appStatus: AppStatus
}

export const useAppStore = defineStore('app', {
    state: (): State => ({
        appStatus: AppStatus.LOADING
    }),
    getters: {
        getAppStatus(state) {
            return state.appStatus;
        }
    },
    actions: {
        setAppStatus(newStatus: AppStatus) {
            this.appStatus = newStatus;
        }
    }
});
