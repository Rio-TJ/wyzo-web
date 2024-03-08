import React, { useState, useEffect } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import PageHead from "./PageHead";
import Sidebar from "./Sidebar";
import ZohoForm from "./ZohoForm";

const Layout = ({ children }) => {
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };

  useEffect(() => {
    // Вставьте скрипт Zoho SalesIQ здесь
    var $zoho = window.$zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
      widgetcode: "siq10707f7fba935ebc1b3eb5e122310cc1",
      values: {},
      ready: function () {},
    };
    var d = document;
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.id = "zsiqscript";
    s.defer = true;
    s.src = "https://salesiq.zoho.com/widget";
    var t = d.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);

    // Очистите скрипт при размонтировании компонента
    return () => {
      const script = document.getElementById("zsiqscript");
      if (script) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <PageHead />
      <div className="body-overlay-1" onClick={handleRemove} />
      <Header
        handleOpen={handleOpen}
        handleRemove={handleRemove}
        openClass={openClass}
        addClass="header-home7"
      />
      <Sidebar openClass={openClass} />
      <main className="main">
        <ZohoForm />
        {children}
      </main>
      {/* <Footer /> */}
      <BackToTop />
    </>
  );
};

export default Layout;
