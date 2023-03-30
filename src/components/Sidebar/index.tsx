import SidebarContent from "./Content";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div>
      <a
        className="flex justify-between text-gray-2 text-sm font-thin"
        href="/"
      >
        <h3 className="flex items-center">
          <span
            className="inline-block bg-no-repeat w-5 h-5 mr-1"
            style={{
              backgroundImage:
                "url(https://a-v2.sndcdn.com/assets/images/calendar-f8dabf8c.svg)",
            }}
          />
          <span>Listening History</span>
        </h3>
        <span className="hover:text-gray-1">View All</span>
      </a>
      <div className="border-b border-gray-3 my-2" />
      <SidebarContent />
      <div className="border-b border-gray-3 my-2" />
      <Footer />
    </div>
  );
};

export default Sidebar;
