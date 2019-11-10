import Vue from 'vue';
import { createAPI } from 'cube-ui';
import tree from './components/tree.vue'
import downlist from './components/downlist.vue'
createAPI(Vue,tree);
createAPI(Vue,downlist);


// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.

