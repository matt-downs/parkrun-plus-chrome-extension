import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import RunTimeline from '../components/RunTimeline'


const mapStateToProps = state => ({
  athletes: state.athletes
})

const mapDispatchToProps = dispatch => ({
  // toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RunTimeline)