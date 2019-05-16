const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      const good = {
        good: state.good + 1,
        ok: state.ok,
        bad: state.bad
      }
      return good

    case 'OK':
      const ok = {
        good: state.good,
        ok: state.ok + 1,
        bad: state.bad
      }
      return ok

    case 'BAD':
      const bad = {
        good: state.good,
        ok: state.ok,
        bad: state.bad + 1
      }
      return bad

    case 'ZERO':
      return initialState

    default:
      return state
  }

}

export default counterReducer