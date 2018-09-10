import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from '../layout/Menu';
class AuthRoute extends PureComponent {
  render() {
    const auth = this.props.auth.login.isAuthenticated;
    const {
      component: Component,
      componentLogin: ComponentLogin,
      needAuth,
      needGuest,
      isLoading,
      ...rest
    } = this.props;

    if (auth && needGuest) {
      return <Route {...rest} render={props => <Redirect to="/" />} />;
    }

    if (!auth && needAuth) {
      return <Route {...rest} render={props => <Redirect to="/login" />} />;
    }
    if (ComponentLogin) {
      return (
        <Route {...rest} render={props => <ComponentLogin {...props} />} />
      );
    } else {
      return (
        <Route
          {...rest}
          render={props => (
            <Menu>
              <Component {...props} />
            </Menu>
          )}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

AuthRoute.propTypes = {
  needAuth: PropTypes.bool,
  needGuest: PropTypes.bool
};

AuthRoute.defaultProps = {
  needAuth: false,
  needGuest: false
};

export default withRouter(connect(mapStateToProps)(AuthRoute));
