import { icon_Mixins } from "../mixins/icon_Mixins";
import { flex_Mixins } from "../mixins/flex_Mixins";

export const default_Theme = {
	mixins: {
		icon: icon_Mixins,
	},
	color: {
		spring1: "255, 181, 167",
		spring2: "252, 213, 206",
		spring3: "248, 237, 235",
		spring4: "249, 220, 196",
		spring5: "254, 200, 154",
		summer1: "255,123,0",
		summer2: "255,136,0",
		summer3: "255,149,0",
		summer4: "255,162,0",
		summer5: "255,170,0",
		summer6: "255,183,0",
		summer7: "255,195,0",
		summer8: "255,208,0",
		summer9: "255,221,0",
		summer10: "255,234,0",
		fall1: "3,7,30",
		fall2: "55,6,23",
		fall3: "106,4,15",
		fall4: "157,2,8",
		fall5: "208,0,0",
		fall6: "220,47,2",
		fall7: "232,93,4",
		fall8: "244,140,6",
		fall9: "250,163,7",
		fall10: "255,186,8",
		winter1: "3,4,94",
		winter2: "2,62,138",
		winter3: "0,119,182",
		winter4: "0,150,199",
		winter5: "0,180,216",
		winter6: "72,202,228",
		winter7: "144,224,239",
		winter8: "173,232,244",
		winter9: "202,240,248",
	},
	layout: {
		background: {
			springinitial:
				"linear-gradient(rgb(255,181,167) 100%, rgb(252,213,206) 100%, rgb(248,237,235) 100%, rgb(249,220,196) 100%, rgb(254,200,154) 100%)",
			springanimate:
				"linear-gradient(rgb(255,181,167) 20%, rgb(252,213,206) 40%, rgb(248,237,235) 60%, rgb(249,220,196) 80%, rgb(254,200,154) 100%)",
			summerinitial:
				"linear-gradient(rgb(255,123,0) 100%, rgb(255,136,0) 100%, rgb(255,149,0) 100%, rgb(255,162,0) 100%, rgb(255,170,0) 100%, rgb(255,183,0) 100%, rgb(255,195,0) 100%, rgb(255,208,0) 100%, rgb(255,221,0) 100%, rgb(255,234,0) 100%)",
			summeranimate:
				"linear-gradient(rgb(255,123,0) 5%, rgb(255,136,0) 15%, rgb(255,149,0) 25%, rgb(255,162,0) 35%, rgb(255,170,0) 45%, rgb(255,183,0) 55%, rgb(255,195,0) 65%, rgb(255,208,0) 75%, rgb(255,221,0) 85%, rgb(255,234,0) 95%)",
			fallinitial:
				"linear-gradient(rgb(3,7,30) 100%, rgb(55,6,23) 100%, rgb(106,4,15) 100%, rgb(157,2,8) 100%, rgb(208,0,0) 100%, rgb(220,47,2) 100%, rgb(232,93,4) 100%, rgb(244,140,6) 100%, rgb(250,163,7) 100%, rgb(255,186,8) 100%)",
			fallanimate:
				"linear-gradient(rgb(3,7,30) 5%, rgb(55,6,23) 15%, rgb(106,4,15) 25%, rgb(157,2,8) 35%, rgb(208,0,0) 45%, rgb(220,47,2) 55%, rgb(232,93,4) 65%, rgb(244,140,6) 75%, rgb(250,163,7) 85%, rgb(255,186,8) 95%)",
			winterinitial:
				"linear-gradient(rgb(3,4,94) 100%, rgb(2,62,138) 100%, rgb(0,119,182) 100%, rgb(0,150,199) 100%, rgb(0,180,216) 100%, rgb(72,202,228) 100%, rgb(144,224,239) 100%, rgb(173,232,244) 100%, rgb(202,240,248) 100%)",
			winteranimate:
				"linear-gradient(rgb(3,4,94) 10%, rgb(2,62,138) 20%, rgb(0,119,182) 30%, rgb(0,150,199) 40%, rgb(0,180,216) 50%, rgb(72,202,228) 60%, rgb(144,224,239) 70%, rgb(173,232,244) 80%, rgb(202,240,248) 90%)",
		},
	},
};
