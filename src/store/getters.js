const getters = {
  opened: state => state.common.opened,
  name: state => state.user.name,
  token: state => state.user.token,

  visitedViews: state => state.tabMenu.visitedViews,
  cachedViews: state => state.tabMenu.cachedViews,

  activeStep: state => state.product.activeStep
}

export default getters
