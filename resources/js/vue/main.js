import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import "bootstrap";
import "./assets/style.scss";

// Font Awesome
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowsRotate, faEdit, faTrash, faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faArrowsRotate);
library.add(faEdit);
library.add(faTrash);
library.add(faPlay);

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
