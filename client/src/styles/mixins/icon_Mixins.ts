import {
	DefaultTheme,
	FlattenSimpleInterpolation,
	ThemedCssFunction,
	css,
} from "styled-components";

export interface icon_MixinsType {
	navButtonStyle: FlattenSimpleInterpolation;
}

export const icon_Mixins: icon_MixinsType = {
	navButtonStyle: css`
		height: 100%;
		width: 100%;
	`,
};
