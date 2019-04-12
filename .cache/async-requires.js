// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/phmarques/Documents/personal-website-2019/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/phmarques/Documents/personal-website-2019/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/Users/phmarques/Documents/personal-website-2019/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/phmarques/Documents/personal-website-2019/.cache/data.json")

