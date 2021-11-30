import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe/react-header",
  app: () => System.import("@mfe/react-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@mfe/vue",
  app: () => System.import("@mfe/vue"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
