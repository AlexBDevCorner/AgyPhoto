export const changeMainColorAction = mainColor => ({
  type: 'change_main_color',
  mainColor: mainColor || ''
});

export const changeSecondaryColor = iconsColor => ({
  type: 'change_secondary_color',
  secondaryColor: secondaryColor || ''
});

export const changeHeaderBackgroundColor = headerBackgroundColor => ({
  type: 'change_header_background_color',
  headerBackgroundColor: headerBackgroundColor || ''
});
