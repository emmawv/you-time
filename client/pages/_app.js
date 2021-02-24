/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';

// import 'nprogress/nprogress.css'; Gives me automatic settings
import '../components/styles/nprogress.css'; // My own settings as a CSS file.
// eslint-disable-next-line import/order
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start()); // When the routing starts the loader bar at top of page starts.
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done()); // If routing ends or there is an error it finishes.

const MyApp = ({ Component, pageProps, apollo }) => (
  // To take the withData function and create an instance of Apollo to inject into our application we wrap the app in a provider (a component in React that usually lives very high in your application and allows components that are several levels deep to access the data). Anywhere in my app I can access the data from apollo client.
  <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
);

// Tell Next to fetch all the queries in all the children components. If any of the pages have a getInitialProps method on them (they will as this is what withData is adding to them) we are going to wait and fetch it.
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query; // Will allow us to get any query variables.
  return { pageProps };
};

export default withData(MyApp); // withData function will send apollo props to MyApp.
