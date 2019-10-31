describe('header component integration test', () => {
  it('should show menu on hamburger icon click', () => {
    expect(true).toBe(false);
  });

  it('should close menu on hamburger icon click', () => {
    expect(true).toBe(false);
  });

  it('should switch hamburger icon to X icon on click', () => {
    const wrapper = shallowHeaderWrapper();
    const hamburgerMenuIcon = findInWrapper(
      wrapper,
      "[data-test='hamburger-menu-icon']"
    );

    hamburgerMenuIcon.simulate('click');
    const xMenuIcon = findInWrapper(wrapper, "[data-test='x-menu-icon']");

    expect(xMenuIcon.length).toBe(1);
  });

  it('should show X icon to hamburger icon on click', () => {
    const wrapper = shallowHeaderWrapper();
    const hamburgerMenuIcon = findInWrapper(
      wrapper,
      "[data-test='hamburger-menu-icon']"
    );

    hamburgerMenuIcon.simulate('click');
    const xMenuIcon = findInWrapper(wrapper, "[data-test='x-menu-icon']");

    xMenuIcon.simulate('click');
    const hamburgerMenuIconAfterXClosed = findInWrapper(
      wrapper,
      "[data-test='hamburger-menu-icon']"
    );

    expect(hamburgerMenuIconAfterXClosed.length).toBe(1);
  });
});
