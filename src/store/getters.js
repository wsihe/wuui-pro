const getters = {
  opened: state => state.common.opened,
  name: state => state.user.name,
  token: state => state.user.token
}

export default getters
