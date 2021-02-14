/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';

// import 'nprogress/nprogress.css'; Gives me automatic settings
import '../components/styles/nprogress.css'; // My own settings as a CSS file.

Router.events.on('routeChangeStart', () => NProgress.start()); // When the routing starts the loader bar at top of page starts.
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done()); // If routing ends or there is an error it finishes.

const MyApp = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default MyApp;
