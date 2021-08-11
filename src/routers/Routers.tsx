import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import DashboardLayout from "../templates/DashboardLayout";
import { Suspense } from "react";
const Home = React.lazy(() => import("../pages/Home"));

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <DashboardLayout>
            <>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact />
            </>
          </DashboardLayout>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routers;
