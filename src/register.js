import Vue from 'vue';
import { createAPI } from 'cube-ui';
import tree from './components/tree.vue'
createAPI(Vue,tree);


// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.

