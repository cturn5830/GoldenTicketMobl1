export const pageview = (url) => {

  };
  
  export const event = ({ action, params }) => {
    window.gtag("event", action, params);
  };