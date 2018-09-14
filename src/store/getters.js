const getters = {
  opened: state => state.common.opened,
  name: state => state.user.name,
  token: state => state.user.token,
  activeStep: state => state.product.activeStep
}

export default getters
