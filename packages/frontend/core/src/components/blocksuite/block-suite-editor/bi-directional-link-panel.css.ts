import { cssVar } from '@toeverything/theme';
import { cssVarV2 } from '@toeverything/theme/v2';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: cssVar('--affine-editor-width'),
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: cssVar('--affine-editor-side-padding', '24'),
  paddingRight: cssVar('--affine-editor-side-padding', '24'),
  fontSize: cssVar('--affine-font-base'),
  '@container': {
    [`viewport (width <= 640px)`]: {
      padding: '0 24px',
    },
  },
  '@media': {
    print: {
      display: 'none',
    },
  },
});

export const dividerContainer = style({
  height: '16px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const divider = style({
  background: cssVar('--affine-border-color'),
  height: '0.5px',
  width: '100%',
});

export const titleLine = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  fontWeight: 500,
  fontSize: '15px',
  lineHeight: '24px',
  color: cssVar('--affine-text-primary-color'),
});

export const showButton = style({
  height: '28px',
  borderRadius: '8px',
  border: '1px solid ' + cssVar('--affine-border-color'),
  backgroundColor: cssVar('--affine-white'),
  textAlign: 'center',
  fontSize: '12px',
  lineHeight: '28px',
  fontWeight: '500',
  color: cssVar('--affine-text-primary-color'),
  cursor: 'pointer',
});

export const linksContainer = style({
  marginBottom: '16px',
});

export const linksTitles = style({
  color: cssVar('--affine-text-secondary-color'),
  height: '32px',
  lineHeight: '32px',
});

export const link = style({
  width: '100%',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  whiteSpace: 'nowrap',
});

globalStyle(`${link} .affine-reference-title`, {
  borderBottom: 'none',
});

export const linkPreviewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const linkPreview = style({
  border: `1px solid ${cssVarV2('layer/insideBorder/border')}`,
  borderRadius: '8px',
  padding: '8px',
  color: cssVarV2('text/primary'),
  ':hover': {
    backgroundColor: cssVarV2('layer/background/hoverOverlay'),
  },
});

export const linkPreviewRenderer = style({
  cursor: 'pointer',
});

export const collapsedIcon = style({
  transition: 'all 0.2s ease-in-out',
  color: cssVarV2('icon/primary'),
  fontSize: 20,
  selectors: {
    '&[data-collapsed="true"]': {
      transform: 'rotate(90deg)',
      color: cssVarV2('icon/secondary'),
    },
  },
});
