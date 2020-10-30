import colors from './color'

export const theme = {
  colors,
  fontSizes: [
    '0.7rem',
    '0.8rem',
    '0.9rem',
    '1rem',
    '1.1rem',
    '1.2rem',
    '1.5rem',
    '1.7rem',
    '2rem'
  ],
  borders: [
    0,
    '1px solid',
    '2px solid',
    '3px solid',
    '4px solid',
    '5px solid',
    '6px solid'
  ],
  lineHeights: [1, 1.25, 1.5],
  radius: [3, 4, 5, 6, '50%'],
  maxWidths: [320, 500, 768, 1024, 1200, 1536],
  pageHeight: 'calc(100vh - 200px)',
  spaces: ['0.5rem', '0.7rem', '1rem', '1.5rem', '2rem'],
  inputs: {
    marginTop: '-4px',
    borderRadius: '5px',
    marginBottom: '5px',
    width: '365px',
    height: '40px'
  },
  buttons: {
    primary: {
      color: colors.white,
      backgroundColor: colors.primary,
      border: 'none',
      '&:hover': {
        color: colors.white,
        backgroundColor: colors.primaryHover
      },
      '&:focus': {
        color: colors.white,
        backgroundColor: colors.primary,
        border: colors.primary
      }
    },
    secondary: {
      color: colors.primary,
      backgroundColor: colors.white,
      border: 'none',
      '&:hover': {
        color: colors.white,
        backgroundColor: colors.primary
      },
      '&:focus': {
        color: colors.white,
        backgroundColor: colors.primary,
        border: colors.primary
      }
    }
  }
}
