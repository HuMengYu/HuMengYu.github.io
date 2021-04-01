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
    "revision": "d5cd266a84b37654e2180c464ec59399"
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
    "url": "assets/js/10.d0242e54.js",
    "revision": "7a6c0cbd870f3a94a4c4f1985d5a3b13"
  },
  {
    "url": "assets/js/11.47ea162e.js",
    "revision": "e767307c1b121750cdf440897bcbb845"
  },
  {
    "url": "assets/js/12.49ca4763.js",
    "revision": "596850de88da1f774e139a95e72cf32f"
  },
  {
    "url": "assets/js/13.d56233dd.js",
    "revision": "b6c925de774855391554ef76cad7ce45"
  },
  {
    "url": "assets/js/14.54306b23.js",
    "revision": "70776b7383172c518b8b5b4430932c5a"
  },
  {
    "url": "assets/js/15.894934fc.js",
    "revision": "8a70ed747c54a35683f14e07cad66c8a"
  },
  {
    "url": "assets/js/16.ea181c55.js",
    "revision": "1dd9bafd2e06d2650a3028375dbff42e"
  },
  {
    "url": "assets/js/17.d3b51b42.js",
    "revision": "58a493aad2b3b3f8fcb54f070b0864b0"
  },
  {
    "url": "assets/js/18.e5102e2e.js",
    "revision": "a69dd817e0f8a81c7cf399d34994bc31"
  },
  {
    "url": "assets/js/19.6470157b.js",
    "revision": "2a0576941011565d464abcbea9e65533"
  },
  {
    "url": "assets/js/2.d1321283.js",
    "revision": "6bd51e949c61687d0415955b4ddd3382"
  },
  {
    "url": "assets/js/20.2aaa7ff9.js",
    "revision": "1f2697d14895f5a93bdcc03d69dc3658"
  },
  {
    "url": "assets/js/21.9f957431.js",
    "revision": "6ed33822221255cd003950b81c3c82ce"
  },
  {
    "url": "assets/js/22.6a5db00c.js",
    "revision": "2741274a867cfe3b7d135ca2b0305d4f"
  },
  {
    "url": "assets/js/23.251e2e05.js",
    "revision": "0aff4e57dcaa45c3daf68847780d4784"
  },
  {
    "url": "assets/js/24.80ef3465.js",
    "revision": "e3ffbfc8c765178e4fce5c417371dd9b"
  },
  {
    "url": "assets/js/25.c202f904.js",
    "revision": "ad279fd4c86da11db54fd9b35d5a9ecd"
  },
  {
    "url": "assets/js/26.7e0a4bce.js",
    "revision": "74cf3a906bd51a9fa6245379d7bc465a"
  },
  {
    "url": "assets/js/27.a2be4440.js",
    "revision": "a131ec3ef79e5a30f0412fcf042413de"
  },
  {
    "url": "assets/js/28.2714a345.js",
    "revision": "96ce591d981c0c6ee3b54de2cafe302a"
  },
  {
    "url": "assets/js/29.08ec6e97.js",
    "revision": "2de30941a292743e502e74aa980f0895"
  },
  {
    "url": "assets/js/3.df8552d7.js",
    "revision": "a655770b6462d151e173a6fbb5625236"
  },
  {
    "url": "assets/js/30.b569845a.js",
    "revision": "df6deef1d178b83bfae200ebe8464723"
  },
  {
    "url": "assets/js/31.038c01d3.js",
    "revision": "85e7161375258a70a67f5dfb697ec29d"
  },
  {
    "url": "assets/js/32.342e9a2a.js",
    "revision": "4ff06c596130ae2cb974ad786cd7a200"
  },
  {
    "url": "assets/js/33.d293d6a3.js",
    "revision": "52220e91d4b386d125726561a2932dce"
  },
  {
    "url": "assets/js/4.fd402d1f.js",
    "revision": "768bc15f1732343f7b17cd1bf104545f"
  },
  {
    "url": "assets/js/5.74ce8efa.js",
    "revision": "5bc047addb2dc936c831c4220e384142"
  },
  {
    "url": "assets/js/6.ff0f9ab7.js",
    "revision": "69c36b8f037b1bde2e1d7259284ea5e2"
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
    "url": "assets/js/app.222bd0f7.js",
    "revision": "66e114080ad5e00f6456a90dbeecf27c"
  },
  {
    "url": "Bug/index.html",
    "revision": "c2a02237f851a0c9faebe046e2696c5a"
  },
  {
    "url": "Database/MySQL/index.html",
    "revision": "c58dfc875c559fb2f5b57e4e8785c4c2"
  },
  {
    "url": "Database/Redis/index.html",
    "revision": "622748fefe7c6baf0f73f14a7633e30d"
  },
  {
    "url": "Demo/Mall/index.html",
    "revision": "a9dffc5aa4ded9f95e4a1b98598a89e0"
  },
  {
    "url": "Demo/RuoYi/index.html",
    "revision": "bb59f86377369fda9e4d5036e3f45399"
  },
  {
    "url": "Demo/vue-element-admin/index.html",
    "revision": "75fc2425a64f45ba0b49918b9615c723"
  },
  {
    "url": "HTML/index.html",
    "revision": "c44d65491217e619986df644f35207bd"
  },
  {
    "url": "IDEA/index.html",
    "revision": "20b49f940c2ca3af616ff838cd021c0a"
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
    "revision": "b7836b4532ae89fbf5a2652d4e3c4988"
  },
  {
    "url": "JAVASCRIPT/Angular/index.html",
    "revision": "01fc97300e6800ff58fa531abcaf80f1"
  },
  {
    "url": "JAVASCRIPT/jQuery/index.html",
    "revision": "ea45e6fe4a6aca991d8021dc9f350b24"
  },
  {
    "url": "JAVASCRIPT/React/index.html",
    "revision": "dfeba59899403bd32432c55d8bda8f18"
  },
  {
    "url": "JAVASCRIPT/Vue/index.html",
    "revision": "e3952e3ce930918a5a590a5021be3543"
  },
  {
    "url": "JAVASCRIPT/Vue/VuePress.html",
    "revision": "2d642519570e44d9ea1ad887e1adccc2"
  },
  {
    "url": "Other/Git/index.html",
    "revision": "542bbfa8164673fd1781984d6a4d4e6f"
  },
  {
    "url": "Other/MarkDown/index.html",
    "revision": "9c6d1024ce70dac2885639263fac91c1"
  },
  {
    "url": "pwa/HMY.png",
    "revision": "b331e21eeea247e2ded51049c089132d"
  },
  {
    "url": "Server/Docker/index.html",
    "revision": "aa15a3c4b15cf81f52107386d1daffb2"
  },
  {
    "url": "Server/Linux/index.html",
    "revision": "63c973190620d67fcbf2a8f863ff70c1"
  },
  {
    "url": "SpringBoot/JWT/index.html",
    "revision": "23f36b93b888c344d00671834536d013"
  },
  {
    "url": "SpringBoot/MyBatis-Plus/index.html",
    "revision": "aed7b20a609d5b099e1c4197008ffb9c"
  },
  {
    "url": "SpringBoot/SpringBoot/index.html",
    "revision": "b82d86f044dbca4e1822ceb15652fd2e"
  },
  {
    "url": "SpringBoot/SpringBoot/pom.xml.html",
    "revision": "149512ee4afdbc1a765e8242dc29913b"
  },
  {
    "url": "SpringBoot/SpringSecurity/index.html",
    "revision": "8a374ddb9c09cbbc97f856ef7a51c6ef"
  },
  {
    "url": "Thesis/index.html",
    "revision": "886df8c598b67ab8eb07c232dcae0827"
  },
  {
    "url": "Vue/Vue/index.html",
    "revision": "78425fd891d1220506160df89c748323"
  },
  {
    "url": "Vue/VuePress/index.html",
    "revision": "b1c9599ddcd0d7e3798cd971e733aaab"
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
