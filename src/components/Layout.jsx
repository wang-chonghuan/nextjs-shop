import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import DemoBanner from "./DemoBanner";
import Footer from "./Footer";

/*
关于 /favicon 目录：

在 Next.js 项目中，你通常不需要创建一个 /favicon 目录。favicon 及相关文件应该放置在 public 目录中。Next.js 会自动处理 public 目录中这些文件的引用与路径问题。

总结

这段代码的主要作用是为网站提供不同尺寸、平台的图标及相关元数据，以增加网站的专业性和识别度。

 I used the favicon code generator at https://realfavicongenerator.
net/ to create the code for this block of links

 */

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Macaron Magic | great tasting home-made macarons</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header>
        <DemoBanner />
        <NavBar />
      </header>
      <div className="layout">
        <main className="main-container">{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
