import { Container, createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
const rootId = "root";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
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
