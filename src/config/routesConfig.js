import React from "react";
import { Redirect } from "react-router-dom";

import { AuthPageConfig } from "../pages/auth/AuthPageConfig";
import { HomePageConfig } from "../pages/home/HomePageConfig";
import { LinkPageConfig } from "../pages/link/LinkPageConfig";
import { ErrorPageConfig } from "../pages/error/ErrorPageConfig";

const routeConfigs = [
  ...AuthPageConfig.routes,
  ...LinkPageConfig.routes,
  ...ErrorPageConfig.routes,
  ...HomePageConfig.routes,
];

const routes = [
  ...routeConfigs,
  {
    component: () => <Redirect to="/not-found" />,
  },
];

export default routes;
