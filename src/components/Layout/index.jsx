import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { routes } from '../../Routes';
import { Layout } from 'antd';
import HeaderCommon from '../../components/Header';
import FooterComponent from '../../components/Footer';
const { Content } = Layout;

function LayoutCommon() {
  return (
    <Layout className="layout">
      {/* <HeaderCommon /> */}
      <Content>
        <Switch>
          {routes.map((route, index) => (
            <Route path={route.path} component={route.component} exact={route.exact} key={index} />
          ))}
        </Switch>
      </Content>
      {/* <FooterComponent /> */}
    </Layout>
  );
}
export default withRouter(LayoutCommon);
