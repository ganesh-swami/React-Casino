const config = {
  isProduction: process.env.NODE_ENV === "production",
  contentfulSpaceId: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  contentfulAccessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  googleAnalyticsTrackingId: process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
  // socketURI: process.env.REACT_APP_SERVER_URI
  // process.env.NODE_ENV === 'production'
  //   ? process.env.REACT_APP_SERVER_URI
  //   : `http://${window.location.hostname}:5000/`,
  // @gscode i comment this ==> serverURI: "44.217.139.110",
  // serverURI: "192.168.145.23:5000",
};

export default config;
