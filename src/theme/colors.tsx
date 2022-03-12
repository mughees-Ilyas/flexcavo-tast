import { darken, lighten } from "polished";
type Colors = {
  primary: string,
  secondary:string,
  base: string,
  danger:string,
  lightGray:string

  primaryLighter: string,
  secondaryLighter:string,
  baseLighter: string,
  dangerLighter:string,
  lightGrayLighter: string

  primaryDarker: string,
  secondaryDarker:string,
  baseDarker: string,
  dangerDarker:string,
  lightGrayDarker:string

}
const themeColors = {
  primary: "#AAB20A",
  secondary:"#444444",
  base: "#ffffff",
  danger:'#CB3535',
  lightGray: '#7e8c8f',
};

const colorVariations = {
  lighter: 0.2,
  darker: 0.15
};

export const colors = {
  ...makeVariations("primary", themeColors.primary),
  ...makeVariations("secondary", themeColors.secondary),
  ...makeVariations("base", themeColors.base),
  ...makeVariations("danger", themeColors.danger)
};

function makeVariations(name: string, color: string) {
  const variations : any  = {};
  variations[name] = color;
  variations[`${name}Lighter`] = lighten(colorVariations.lighter, color);
  variations[`${name}Darker`] = darken(colorVariations.darker, color);
  return variations as Colors;
}
