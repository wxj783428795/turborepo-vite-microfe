export const odmConfig: {
  [key: string]: {
    name: string;
    entry: string;
    container: string;
    activeRule: string;
  }[];
} = {
  development: [
    {
      name: "sub1",
      entry: "//localhost:5001",
      container: "#subapp-container",
      activeRule: "/sub1",
    },
    {
      name: "sub2",
      entry: "//localhost:5002",
      container: "#subapp-container",
      activeRule: "/sub2",
    },
  ],
  production: [
    {
      name: "sub1",
      entry: "//test.xiaojie.com:3001",
      container: "#subapp-container",
      activeRule: "/sub1",
    },
    {
      name: "sub2",
      entry: "//test.xiaojie.com:3002",
      container: "#subapp-container",
      activeRule: "/sub2",
    },
  ],
};
