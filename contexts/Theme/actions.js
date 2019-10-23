export const changeMainColorAction = mainColor => ({
  type: 'change_main_color',
  mainColor: mainColor || ''
});

export const changeIconsColor = iconsColor => ({
  type: 'change_main_color',
  iconsColor: iconsColor || ''
});

export const changeHeaderBackgroundColor = headerBackgroundColor => ({
  type: 'change_header_background_color',
  headerBackgroundColor: headerBackgroundColor || ''
});
