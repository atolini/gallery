const ResponsiveContainer = `
  position: relative;

  @media screen and (max-width: 320px) { 
    width: 320px;
    padding-left: 4px;
    padding-right: 4px;
  }

  @media screen and (min-width: 320px) { 
    width: 100vw;
  }

  @media screen and (min-width: 375px) {
    padding-left: clamp(1.5rem, 0.3072519083969465rem + 5.089058524173028vw, 2.75rem); 
    padding-right: clamp(1.5rem, 0.3072519083969465rem + 5.089058524173028vw, 2.75rem);
    width: 100vw;
  }

  @media screen and (min-width: 768px) {
    padding-left: clamp(2.5rem, -14.527027027027028rem + 35.472972972972975vw, 15.625rem); 
    padding-right: clamp(2.5rem, -14.527027027027028rem + 35.472972972972975vw, 15.625rem);
  } 

  @media screen and (min-width: 1024px) { 
    padding-left: clamp(0.75rem, -4.583333333333333rem + 8.333333333333332vw, 2.5rem);
    padding-right: clamp(0.75rem, -4.583333333333333rem + 8.333333333333332vw, 2.5rem);
  }

  @media screen and (min-width: 1360px) { 
    padding-left: 40px; 
    padding-right: 40px;
  }

  @media screen and (min-width: 1440px) { 
    width: 1360px;
    padding-left: 0;
    padding-right: 0;
  }
`;

export default ResponsiveContainer;
