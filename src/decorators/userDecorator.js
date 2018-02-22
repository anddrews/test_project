import { connect } from 'react-redux';
import { setUser } from '../redux/actions';

export default userDecorator = (target) => {
  const mapDispatchToProps = dispatch => ({
    setUser: (userName) => { dispatch(setUser(userName)); },
  });
  
  const mapStateToProps = state => ({
    user: state.user,
  });
  return connect(mapStateToProps, mapDispatchToProps)(target);
}