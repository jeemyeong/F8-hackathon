import * as FBA from "messenger-analytics";
export const fbaLogger = new FBA.Logger({
  appID: process.env.APP_ID,
  pageID: process.env.PAGE_ID,
});