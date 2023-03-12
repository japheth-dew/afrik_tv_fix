import { Outlet } from "react-router-dom";
import Layout from "../../containers/Layout";

export const Root = () => (
  <Layout>
    <Outlet />
  </Layout>
)
