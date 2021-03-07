/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e6de0000a4c56cd2f950fec1c90c85b2"
  },
  {
    "url": "assets/css/0.styles.d39084ab.css",
    "revision": "5bdccc7dfa1a3140dd680140d0ba5124"
  },
  {
    "url": "assets/img/image-20210129135241201.27fece4a.png",
    "revision": "27fece4a0cbcea95d14ede48d2a8c1ab"
  },
  {
    "url": "assets/img/image-20210129163501575.93002f83.png",
    "revision": "93002f8325d791e39d59a0af4ca8acfd"
  },
  {
    "url": "assets/img/image-20210129172638818.8b52adb6.png",
    "revision": "8b52adb690f3d5d8c0d8e05587b352e6"
  },
  {
    "url": "assets/img/image-20210129173340366.23a2dcc9.png",
    "revision": "23a2dcc9ba8725c136647c1a38af5f46"
  },
  {
    "url": "assets/img/image-20210129173456031.f9df5f50.png",
    "revision": "f9df5f50b1482020c6887c7fbc282fde"
  },
  {
    "url": "assets/img/image-20210130004837794.53bb02a1.png",
    "revision": "53bb02a1f26d9ebcf7b9dc580cc39b73"
  },
  {
    "url": "assets/img/image-20210208210205126.dbd7fcdb.png",
    "revision": "dbd7fcdbae6aa5a84fbcd39e0542afe0"
  },
  {
    "url": "assets/img/image-20210209183910255.bad688bc.png",
    "revision": "bad688bccaf8f8c2087963dac23cd070"
  },
  {
    "url": "assets/img/image-20210209190747457.e0eccb8f.png",
    "revision": "e0eccb8fe58da179e489d16cf42e5b38"
  },
  {
    "url": "assets/img/image-20210209191929352.34615159.png",
    "revision": "34615159b282197efd7096c4a7ae38b9"
  },
  {
    "url": "assets/img/image-20210209204042482.b698fd97.png",
    "revision": "b698fd9768e248c01192bd8aacf4edd9"
  },
  {
    "url": "assets/img/image-20210209205546705.893253fa.png",
    "revision": "893253fa5db22dc4ef1ac64f0ee8f1ae"
  },
  {
    "url": "assets/img/image-20210209213232799.e72377d9.png",
    "revision": "e72377d94e336c7d979f31ff9639d101"
  },
  {
    "url": "assets/img/image-20210209213333722.af3d9af3.png",
    "revision": "af3d9af36830b949b4ff7fa7f41ce28c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6f280bf.js",
    "revision": "3afc986bc8047933d80cba397a936cf2"
  },
  {
    "url": "assets/js/11.e581024b.js",
    "revision": "0402f454c392aa9b8d86019cef80efe3"
  },
  {
    "url": "assets/js/12.c0fb23fe.js",
    "revision": "bd94ee2c5540846265e09c75ef8dafd7"
  },
  {
    "url": "assets/js/13.91d63aa3.js",
    "revision": "fc9d732ed4afce088f9c4117b2654f80"
  },
  {
    "url": "assets/js/14.d2619b41.js",
    "revision": "cf4c1ed0f2af27481ff0b29898491439"
  },
  {
    "url": "assets/js/15.e8628ebb.js",
    "revision": "8a70ed747c54a35683f14e07cad66c8a"
  },
  {
    "url": "assets/js/16.9b7e8396.js",
    "revision": "e1fad99d47fef43a55c4051ac6775b11"
  },
  {
    "url": "assets/js/17.117ea0e3.js",
    "revision": "9d5aed9aa4694b2e4e4e0cc11a466264"
  },
  {
    "url": "assets/js/18.79799b7b.js",
    "revision": "2f6e47e094ea594a85ebdc61239c8a59"
  },
  {
    "url": "assets/js/19.acc85875.js",
    "revision": "aad30ac586ad87e1d82e9cb1a2045609"
  },
  {
    "url": "assets/js/2.d1321283.js",
    "revision": "6bd51e949c61687d0415955b4ddd3382"
  },
  {
    "url": "assets/js/20.1c893c5b.js",
    "revision": "39df25aeb07eb2c0418da972dafb5bcd"
  },
  {
    "url": "assets/js/21.eb5b0574.js",
    "revision": "5b32b51a847f007aad23768d80a9a6cc"
  },
  {
    "url": "assets/js/22.8aaad7e5.js",
    "revision": "95fba3b3150fe5d09b02b036a2d8f351"
  },
  {
    "url": "assets/js/23.c14e17b5.js",
    "revision": "322e97eb1edf81ffd3ad0520059b97b5"
  },
  {
    "url": "assets/js/24.695570f3.js",
    "revision": "1d0f329732f9df0e31128b82b8026f7f"
  },
  {
    "url": "assets/js/25.73c06860.js",
    "revision": "757e971f2305fb10a48a2e65e77e55cd"
  },
  {
    "url": "assets/js/26.4fca7190.js",
    "revision": "31928f5d6449e6776b9cc017806ed32e"
  },
  {
    "url": "assets/js/27.6968aae2.js",
    "revision": "7159ce28df611a51098c7f841f75b842"
  },
  {
    "url": "assets/js/28.cc5c8e56.js",
    "revision": "b78f4201f3b2d05292fe0f027328bbfd"
  },
  {
    "url": "assets/js/29.aad8590f.js",
    "revision": "a67acd70554bda519274e5ae8dec13fb"
  },
  {
    "url": "assets/js/3.d2c397a9.js",
    "revision": "e245b9c6a0ffc45da6302847ad1dcb86"
  },
  {
    "url": "assets/js/30.37755fad.js",
    "revision": "0cc3b6311517b0e0f25d6f81281f54e4"
  },
  {
    "url": "assets/js/31.8865f31a.js",
    "revision": "75e5a5efe2d86c9e84735e78ec43c5e3"
  },
  {
    "url": "assets/js/32.96cb78c9.js",
    "revision": "166172b6a741d4514207080a85085be5"
  },
  {
    "url": "assets/js/4.fd402d1f.js",
    "revision": "768bc15f1732343f7b17cd1bf104545f"
  },
  {
    "url": "assets/js/5.6c02752c.js",
    "revision": "0005c4b5bc2b124bf9cfcee6bc9e95ee"
  },
  {
    "url": "assets/js/6.3cd650ea.js",
    "revision": "be87e9f862bee6635038d7751d8a34b3"
  },
  {
    "url": "assets/js/7.c5f97d55.js",
    "revision": "97b4e5b987b824ca4275b8574e81f700"
  },
  {
    "url": "assets/js/8.185fe185.js",
    "revision": "6deb6af616dd9e29b27c3d7564402ebb"
  },
  {
    "url": "assets/js/9.fa82fca0.js",
    "revision": "4a1a85be2f7709056681df496ef4fdef"
  },
  {
    "url": "assets/js/app.0641536a.js",
    "revision": "822b557914d9a30c437c07b3117febc8"
  },
  {
    "url": "Bug/index.html",
    "revision": "fc23dd2021c437407b96273181b9dd8b"
  },
  {
    "url": "Database/MySQL/index.html",
    "revision": "c59188d735560177c9b9c7a67f7b671d"
  },
  {
    "url": "Database/Redis/index.html",
    "revision": "2208d6d87b365e2c03ef12121f0d595a"
  },
  {
    "url": "Demo/Mall/index.html",
    "revision": "5b17bd00af9b6052bab9ede32a0118af"
  },
  {
    "url": "Demo/RuoYi/index.html",
    "revision": "d2c1d2baaa110ed13cfcc8e1d52e4a12"
  },
  {
    "url": "Demo/vue-element-admin/index.html",
    "revision": "a32d6ded3771ef45fd795e4a368ef6de"
  },
  {
    "url": "IDEA/index.html",
    "revision": "a2af740fd98ef72d0fb7bbff4567810e"
  },
  {
    "url": "images/image-20210129135241201.png",
    "revision": "27fece4a0cbcea95d14ede48d2a8c1ab"
  },
  {
    "url": "images/image-20210129163501575.png",
    "revision": "93002f8325d791e39d59a0af4ca8acfd"
  },
  {
    "url": "images/image-20210129172638818.png",
    "revision": "8b52adb690f3d5d8c0d8e05587b352e6"
  },
  {
    "url": "images/image-20210129173340366.png",
    "revision": "23a2dcc9ba8725c136647c1a38af5f46"
  },
  {
    "url": "images/image-20210129173456031.png",
    "revision": "f9df5f50b1482020c6887c7fbc282fde"
  },
  {
    "url": "images/image-20210130001425709.png",
    "revision": "6a39ddd020dba21b2c54566ae414015e"
  },
  {
    "url": "images/image-20210130004743284.png",
    "revision": "8785c5a0548aaee5f78d85fbcbf80b33"
  },
  {
    "url": "images/image-20210130004837794.png",
    "revision": "53bb02a1f26d9ebcf7b9dc580cc39b73"
  },
  {
    "url": "images/image-20210208210205126.png",
    "revision": "dbd7fcdbae6aa5a84fbcd39e0542afe0"
  },
  {
    "url": "images/image-20210209183321710.png",
    "revision": "caf8013737e5174f2dc3a425367521cf"
  },
  {
    "url": "images/image-20210209183910255.png",
    "revision": "bad688bccaf8f8c2087963dac23cd070"
  },
  {
    "url": "images/image-20210209184429806.png",
    "revision": "05de1a0c046d8c2c64eacc00f954e370"
  },
  {
    "url": "images/image-20210209184605734.png",
    "revision": "fe6d728505096709e79d69db53524106"
  },
  {
    "url": "images/image-20210209190250448.png",
    "revision": "a81c330ef1b2eb3f89a981a210440358"
  },
  {
    "url": "images/image-20210209190747457.png",
    "revision": "e0eccb8fe58da179e489d16cf42e5b38"
  },
  {
    "url": "images/image-20210209191929352.png",
    "revision": "34615159b282197efd7096c4a7ae38b9"
  },
  {
    "url": "images/image-20210209204042482.png",
    "revision": "b698fd9768e248c01192bd8aacf4edd9"
  },
  {
    "url": "images/image-20210209204907409.png",
    "revision": "2c2a838e233bc3cf56d8f51d618bc6d5"
  },
  {
    "url": "images/image-20210209205546705.png",
    "revision": "893253fa5db22dc4ef1ac64f0ee8f1ae"
  },
  {
    "url": "images/image-20210209212957363.png",
    "revision": "8785be4ad05934935d1178ead892fb82"
  },
  {
    "url": "images/image-20210209213232799.png",
    "revision": "e72377d94e336c7d979f31ff9639d101"
  },
  {
    "url": "images/image-20210209213333722.png",
    "revision": "af3d9af36830b949b4ff7fa7f41ce28c"
  },
  {
    "url": "index.html",
    "revision": "d61dd3da5a4582dfb88311a6ab7b4fff"
  },
  {
    "url": "Other/Git/index.html",
    "revision": "24e410b3cd495bd0ac99a5f09d898f3a"
  },
  {
    "url": "Other/MarkDown/index.html",
    "revision": "5cbaf94b72b614197b3476518bc2afc6"
  },
  {
    "url": "pwa/HMY.png",
    "revision": "b331e21eeea247e2ded51049c089132d"
  },
  {
    "url": "Server/Docker/index.html",
    "revision": "1a4f97c56784964b4b8bfcaca2d425d0"
  },
  {
    "url": "Server/Linux/index.html",
    "revision": "125e351f1eff3d608ba5dee21e573cf4"
  },
  {
    "url": "SpringBoot/JWT/index.html",
    "revision": "09f28fcdf238a85229fd21f3f6c8a119"
  },
  {
    "url": "SpringBoot/MyBatis-Plus/index.html",
    "revision": "69b8920d05b335483c01523e5cacfa8b"
  },
  {
    "url": "SpringBoot/SpringBoot/index.html",
    "revision": "4d30ce253708ffa4acef51e88e4b6a48"
  },
  {
    "url": "SpringBoot/SpringBoot/pom.xml.html",
    "revision": "e176ed0869332f4cd06dd95b6a5030c6"
  },
  {
    "url": "SpringBoot/SpringSecurity/index.html",
    "revision": "8272c46a9b53e558ab23fbd06381da98"
  },
  {
    "url": "Thesis/index.html",
    "revision": "a7dce821a6257e5407f2a2955638cc1c"
  },
  {
    "url": "Thesis/人口.html",
    "revision": "8bb82b2028dd687d605f6f59d6949c1a"
  },
  {
    "url": "Thesis/代码.html",
    "revision": "a12f0dffc3e2d69f28b13734c0db19e9"
  },
  {
    "url": "Thesis/广西人口数量与结构的预测研究.html",
    "revision": "ab7ffbeeab5b253e4503e72566df0a9f"
  },
  {
    "url": "Thesis/概念.html",
    "revision": "c56a91dacf986cb3e63345a1e07dd293"
  },
  {
    "url": "Thesis/草稿.html",
    "revision": "571ae8018e2b8a215c688395890b2493"
  },
  {
    "url": "Vue/Vue/index.html",
    "revision": "270c09950d47356bb02162251f654ea9"
  },
  {
    "url": "Vue/VuePress/index.html",
    "revision": "bfd279e6edcf65be81c113045fd3c023"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
