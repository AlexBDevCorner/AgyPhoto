function themeReducer(state, action) {
  switch (action.type) {
    case 'change_main_color':
      return {
        ...state,
        mainColor: action.mainColor
      };
    case 'change_secondary_color':
      return {
        ...state,
        secondaryColor: action.secondaryColor
      };
    case 'change_header_background_color':
      return {
        ...state,
        headerBackgroundColor: action.headerBackgroundColor
      };
    default:
      return state;
  }
}

export default themeReducer;
