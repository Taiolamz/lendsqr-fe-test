import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { auth_route_group } from "./routes/auth";
import { Dashboard_route_group } from "./routes/dashboard";
import Layout from "./dashboard/layout";

function App() {
  return (
    <React.Fragment>
      {/* <LoadingBar color="#55a2ff" progress={progress} /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* authentication route group start */}
        {auth_route_group.map((route: any, idx: any) => {
          const { path } = route;
          return <Route key={idx} path={path} element={<route.element />} />;
        })}
        {/* authentication route group end */}

        {/* dashboard route group start */}
        {Dashboard_route_group.map((route: any, idx: any) => {
          const { path } = route;
          return (
            <Route
              key={idx}
              path={path}
              element={
                <Layout>
                  <route.element />
                </Layout>
              }
            />
          );
        })}
        {/* dashboard route group end */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
