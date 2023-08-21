import Index from "./layouts";
import TIndex from "./pages/index";

const AppRoutes = [
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/draw_number",
        element: <TIndex />,
      },
    ],
  },
];

export default AppRoutes;
