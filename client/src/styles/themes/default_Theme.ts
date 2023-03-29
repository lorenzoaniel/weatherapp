import { css } from "styled-components";
import { icon_Mixins, icon_MixinsType } from "../mixins/icon_Mixins";
import { flex_Mixins } from "../mixins/flex_Mixins";

export interface default_ThemeType {
	mixins: {
		icon: icon_MixinsType;
	};
}

export const default_Theme: default_ThemeType = {
	mixins: {
		icon: icon_Mixins,
	},
};
