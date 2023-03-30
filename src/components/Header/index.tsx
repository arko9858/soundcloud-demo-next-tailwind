import BellIcon from "../Icons/Bell";
import EllipsisIcon from "../Icons/Ellipsis";
import EnvelopIcon from "../Icons/Envelop";
import Logo from "../Logo";
import NavList from "../NavList";
import Searchbar from "../Searchbar";

const Header = () => {
  return (
    <header className="flex justify-center bg-gray-1 h-header">
      <div className="flex items-center justify-content-center w-lg">
        <div className="flex h-full">
          <Logo />
          <NavList />
        </div>
        <div className="flex-1">
          <Searchbar />
        </div>
        <div className="flex items-center text-sm">
          <a className="text-red-500 hover:text-orange-500 mx-3" href="/">
            Try Next Pro
          </a>
          <div>
            <a className="text-gray-4 mx-2" href="/">
              Upload
            </a>
          </div>
          <div className="flex items-center text-gray-4">
            <div className="flex items-center py-3 pl-2.5 mr-7 hover:text-gray-5 hover:cursor-pointer relative">
              <div
                className="h-6 w-6 rounded-full"
                style={{
                  backgroundImage: "linear-gradient(135deg,#70929c,#e6846e)",
                }}
              />
              <div className="mx-2">Arko Sakib</div>
              <div
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjhweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCA4IDUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjIuMiAoOTk4MykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+RHJvcGRvd248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iVG9wLUJhciIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwNjYuMDAwMDAwLCAtNTQ1LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjA2Nyw1NDUuMDIyNzQ2IEwyMDY2LDU0Ni4wMjI3NDYgTDIwNjkuOTU0NzYsNTQ5Ljk3NzUxMSBMMjA3My45Nzc1MSw1NDUuOTU0NzY1IEwyMDcyLjk3NzUxLDU0NC45NTQ3NjUgTDIwNjkuOTU0NzYsNTQ3Ljk3NzUxMSBMMjA2Nyw1NDUuMDIyNzQ2IFoiIGlkPSJEcm9wZG93biIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)",
                }}
                className="h-2 w-2 text-red-400 absolute top-22px -right-2.5 opacity-80"
              />
            </div>
            <div className="h-full w-4 mx-2 hover:text-white hover:cursor-pointer">
              <BellIcon />
            </div>
            <div className="h-full w-4 mx-3 hover:text-white hover:cursor-pointer">
              <EnvelopIcon />
            </div>
          </div>
          <div className="h-full w-6 mx-2 text-gray-4 hover:text-white hover:cursor-pointer">
            <EllipsisIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
