import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/404.vue";
import Uploads from "../views/Uploads.vue";
import Run from "../views/Run.vue";

Vue.use(VueRouter);

const routes = [
	{
		"path": "/",
		"name": "home",
		"alias": "/home",
		"component": Home
	},
	{
		"path": "/404",
		"name": "notFound",
		"component": NotFound
	},
	{
		"path": "/eu",
		"component": Uploads,
		"props": {"region": "eu"}
	},
	{
		"path": "/eu/run/:id",
		"component": Run,
		"props": {"region": "eu"}
	},
	{
		"path": "/na",
		"component": Uploads,
		"props": {"region": "na"}
	},
	{
		"path": "/na/run/:id",
		"component": Run,
		"props": {"region": "na"}
	},
	{
		"path": "/kr",
		"component": Uploads,
		"props": {"region": "kr"}
	},
	{
		"path": "/kr/run/:id",
		"component": Run,
		"props": {"region": "kr"}
	},
	{
		"path": "/ru",
		"component": Uploads,
		"props": {"region": "ru"}
	},
	{
		"path": "/ru/run/:id",
		"component": Run,
		"props": {"region": "ru"}
	}
];

const router = new VueRouter({
	routes
});

export default router;
