import { Container, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@repo/ui/styles.css";
// import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/dist/helper";
import {
  renderWithQiankun,
  qiankunWindow,
} from "@repo/vite-plugin-qiankun/helper";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import Page1 from "./pages/page1.tsx";
const rootId = "root";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/menu1",
      element: <Page1 />,
    },
  ],
  {
    basename: qiankunWindow.__POWERED_BY_QIANKUN__ ? "/sub1" : "/",
  }
);

const render = (root: Container) =>
  createRoot(root).render(<RouterProvider router={router} />);

renderWithQiankun({
  mount(props) {
    console.log("mount");
    console.log("props", props);
    render(
      props.container
        ? props.container.querySelector(`#${rootId}`)!
        : document.getElementById(rootId)!
    );
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props) {
    console.log("unmount");
    console.log("props", props);
    const { container } = props;
    const mountRoot = container?.querySelector(`#${rootId}`);
    ReactDOM.unmountComponentAtNode(
      mountRoot || document.querySelector(`#${rootId}`)!
    );
  },
  update(props) {
    console.log("update props", props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render(document.getElementById(rootId)!);
}
