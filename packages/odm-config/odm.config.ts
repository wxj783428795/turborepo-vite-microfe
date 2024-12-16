interface Entry {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
}
const container = "#subapp-container";

export const odmConfig: {
  [key: string]: {
    entries: Entry[];
  };
} = {
  development: {
    entries: [
      {
        name: "sub1",
        activeRule: "/sub1",
        entry: "//localhost:5001",
        container,
      },
      {
        name: "sub2",
        activeRule: "/sub2",
        entry: "//localhost:5002",
        container,
      },
    ],
  },
  production: {
    entries: [
      {
        name: "sub1",
        activeRule: "/sub1",
        entry: "//test.xiaojie.com:3001",
        container
      },
      {
        name: "sub2",
        activeRule: "/sub2",
        entry: "//test.xiaojie.com:3002",
        container
      },
    ],
  },
};
