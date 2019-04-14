import { css, CSSObject, FlattenSimpleInterpolation } from 'styled-components';

export const sizes: { [index: string]: number } = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576,
};

const display = Object.keys(sizes).reduce(
  (
    acc: {
      [index: string]: FlattenSimpleInterpolation;
    },
    label: string
  ) => {
    acc[label] = css`
      display: none;
      @media (max-width: ${sizes[label]}px) {
        display: block;
      }
    `;

    return acc;
  },
  {}
);

const media = Object.keys(sizes).reduce(
  (
    acc: {
      [index: string]: (...args: [TemplateStringsArray | CSSObject]) => FlattenSimpleInterpolation;
    },
    label: string
  ) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
      }
    `;

    return acc;
  },
  {}
);

export interface ITheme {
  colors: {
    [index: string]: string;
  };
  media: {
    [index: string]: (...args: [TemplateStringsArray | CSSObject]) => FlattenSimpleInterpolation;
  };
  display: {
    [index: string]: (displayType: string) => FlattenSimpleInterpolation;
  };
  shadow: {
    common: string;
  };
}

const Theme: ITheme = {
  colors: {
    dark: 'rgb(47, 47, 47)',
    background: '#e7efec',
  },
  display,
  media,
  shadow: {
    common: 'box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);',
  },
};

export default Theme;
