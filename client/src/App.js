import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Import pages and page content
import Battle from "./pages/Battle";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import Harbor from "./pages/Harbor";
import Splash from "./pages/Splash";
import LoginPage from "./pages/LoginPage";
import ContUserStat from "./pages/page-content/ContUserStat";

// Import Logo Image
import Logo from "./assets/01-logos/logo-gray.png";

// Ant Design icons import
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Image } from "antd";
const { Header, Sider, Content, Footer } = Layout;

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <Image src={Logo} />
          </div>
          <div className="userStat">
            <ContUserStat></ContUserStat>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <a href="/dashboard">Dashboard</a>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <a href="/harbor">Harbor</a>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <a href="/gallery">Gallery</a>,
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: <a href="/battle">Battle</a>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          ></Header>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Router>
                <>
                  <Routes>
                    <Route path="/" element={<Splash />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/battle" element={<Battle />} />
                    <Route path="/harbor" element={<Harbor />} />
                    <Route path="/login" element={<LoginPage />} />
                  </Routes>
                </>
              </Router>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Space Grift: Whale Hunter
          </Footer>
        </Layout>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
