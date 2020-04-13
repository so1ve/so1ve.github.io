const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Ray's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"01fe8169a9be3dfa0031a7a88b1436d3",url:"./404.html"},{revision:"f04fd82fef391e978508a86ed7833243",url:"./about/index.html"},{revision:"e3284cb06b86b754dad995969ed4f536",url:"./archives/index.html"},{revision:"ec6ce4749fafd345e1e072dd9e1040aa",url:"./aria2ng/index.html"},{revision:"a86088046085af914323aaef3f8e8ffb",url:"./categories/cdn/index.html"},{revision:"752c467c3aabacc8bbb2347585dd92d6",url:"./categories/chrome/index.html"},{revision:"25d24645dc60303df9d9cc6ae92d6db1",url:"./categories/ci/index.html"},{revision:"c8e4e6f30c86231b2e9e2177155aee73",url:"./categories/github/index.html"},{revision:"cb3949cf2588edcd5241cd289bc99872",url:"./categories/hosts/index.html"},{revision:"9e470ccaaadc753a8c130f2cce473fa6",url:"./categories/html/index.html"},{revision:"6c096c364859a1d661f73e189a28d725",url:"./categories/html入门/index.html"},{revision:"78a6a191b97270225ad6965fb7975166",url:"./categories/hugo/index.html"},{revision:"c5b8618700b50a11cc92783a1dc7f8db",url:"./categories/index.html"},{revision:"52d944483f3546b48c65071e4540979e",url:"./categories/picgo/index.html"},{revision:"34355b2da279b1196b9e9e38d7d3c71c",url:"./categories/python/index.html"},{revision:"4f353530723c732199ecb3abc26cd092",url:"./categories/python关键字/index.html"},{revision:"d04e5df1577bec5ce4b6d8b9655b3de8",url:"./categories/python学习笔记/index.html"},{revision:"21b7f3ffc2d67f8ded844c9a851462f1",url:"./categories/代理/index.html"},{revision:"f4d3dcec6c97ff05c1bec26430904b65",url:"./categories/免费空间/index.html"},{revision:"241640a06f582b777286eba0189ddc12",url:"./categories/博客/index.html"},{revision:"c5addeb7dbf3bd2877e0f1bc6c1b267e",url:"./categories/吐槽/index.html"},{revision:"16f0e178de6c4395f42f0f87f3cff482",url:"./categories/图床/index.html"},{revision:"03076c8b1ec4cab123631fa5d12da657",url:"./categories/域名/index.html"},{revision:"b10afa6220db0c88321626f48cee5783",url:"./categories/对象存储/index.html"},{revision:"2e7819ff01cdde6a59232b25c356cabe",url:"./categories/批处理/index.html"},{revision:"25536f3f0ccd0fa9d9d6e5d65866ab35",url:"./categories/折腾/index.html"},{revision:"7cb719f15e81099ae839c7192e0f8820",url:"./categories/搞笑/index.html"},{revision:"340771dde31b27e2d9e55912f447c5a3",url:"./categories/服务器/index.html"},{revision:"22a1176c1e37c5c79643e08b4ee76643",url:"./categories/爬虫/index.html"},{revision:"b720b05dc7c43a07a77a7aab34f9376a",url:"./categories/算法/index.html"},{revision:"cf5e7f5ae7c80c49d5aab8e6a106af45",url:"./categories/网站/index.html"},{revision:"cab27ac274e650eab04a455ae1055caf",url:"./categories/邮箱/index.html"},{revision:"450f5e15a68bf53bef9ba55287c413be",url:"./css/DPlayer.min.css"},{revision:"ab46869030565993ad52d4ebc193a0d2",url:"./css/font.css"},{revision:"b80750f337f8c130e32e2474fff2e69c",url:"./css/hot-tags.css"},{revision:"4055df09a76134d10681d9614e93fd89",url:"./css/insight.css"},{revision:"cf87a8ecd1d89de9051adb1cb0826d08",url:"./css/main-banner.css"},{revision:"ebecaa841d49a540f79b4f38fa4d89d5",url:"./css/meme.min.6b005c893ec8eac640c7336ecc77690b703da3d2de8f30b9f8d4e50102b20c87.css"},{revision:"8d2a4fd8cbf836428792bdd7f92af172",url:"./fonts/glyph-correction.woff2"},{revision:"731beb121d7bd263a68792fbda697d31",url:"./goto/index.html"},{revision:"aecb2762a6a0ae75b52c4bb6c3fa878f",url:"./index.html"},{revision:"4097986cff510567068128f4b18004a6",url:"./js/DPlayer.min.js"},{revision:"6653527062f3bc0815a3a09e5c8b5e84",url:"./js/flowchart.js"},{revision:"857bd850aa7ae067f385ed9fdc5ee8dc",url:"./js/flv.min.js"},{revision:"357901ac93910b8a12d24184817573ff",url:"./js/insight.js"},{revision:"67f9bb88641c997d1c325909d9eadb55",url:"./js/instantclick.min.js"},{revision:"2cb90c06cfc2084e0e11ca2b8a10f6c9",url:"./js/jquery.easing.1.3.js"},{revision:"89c45121934ed4664ff3ca811a008226",url:"./js/jquery.lazyload.min.js"},{revision:"4a356126b9573eb7bd1e9a7494737410",url:"./js/jquery.min.js"},{revision:"28ef3dc306be44a30ec0d0ffe2bee109",url:"./js/jquery.waypoints.min.js"},{revision:"c50596fd5295610c129d94194c37a779",url:"./js/linkcard.js"},{revision:"c5a6d23bea20750472bd446f051fb305",url:"./js/meme.min.f36dfafc81a5064b571150628139b6f380711072aab59919073ad59be8fe1ee5.js"},{revision:"d215c2fcffdaa7759bf99e6da9f7c402",url:"./js/raphael.min.js"},{revision:"b106ecb09811bf627fea68cdd9646222",url:"./js/typing.js"},{revision:"7146c9ddd5693d08630a495de9421d4d",url:"./js/Valineex.min.js"},{revision:"6605e9c42a0d7e78cc36d3189d632c47",url:"./json-data/hot-tags.json"},{revision:"9c8862b0260b7b8f691ee0db17bd59a2",url:"./json-data/links.json"},{revision:"d2b3632bcfb08200057a24d02d3cc655",url:"./json-data/main-banner.json"},{revision:"3e79c7a2c0ed690f7143c43fa42e2ed2",url:"./json-data/python.json"},{revision:"fb6e5b13b560f1d211172f74b5c2b8f1",url:"./learn/index.html"},{revision:"84817cb1ca23be8459f78599f29e27d3",url:"./links/index.html"},{revision:"aefde635fb757bf7c83d5e9558d24860",url:"./lunr.json"},{revision:"d383aa931ea48ff061d6ae53cc31c93b",url:"./manifest.json"},{revision:"c0388369aad9d89dd77f17a0356d4e1f",url:"./now.json"},{revision:"2aa4952388b16644559441b7a9334bb1",url:"./p/1000-uv/index.html"},{revision:"a83ac6d0e4b5dbe61c7f795a2715ebbc",url:"./p/about-valine/index.html"},{revision:"93499a5c9acbc67c4100b64a7381bd74",url:"./p/av-and-bv/index.html"},{revision:"756d012c4fc5d782655819ed03f37e3e",url:"./p/backblaze-free-object-storage/index.html"},{revision:"b234254e5950cae729e2f7067494c747",url:"./p/build-a-blog-recommendation/index.html"},{revision:"6d06d29c748de8d77779d27686ca2f61",url:"./p/build-website-with-leancloud/index.html"},{revision:"a0d5602334c5444a0565ac2790549206",url:"./p/cf-worker-proxy/index.html"},{revision:"acf5a6d2f2940ac712c9e663c02559c3",url:"./p/chrome-crashed/index.html"},{revision:"5f5f425ecbd0f5a9dd8000e92e38425d",url:"./p/cloudmusic-spider-artlist/index.html"},{revision:"65c6ddb27bc71fc2b2832495b8bd3f7c",url:"./p/cooking-with-cpu/index.html"},{revision:"822dec742a797901abffd4e1636715ff",url:"./p/ddos-guard-free-cdn/index.html"},{revision:"e04a24a124286c9da2be28aaae43e0f9",url:"./p/deploy-your-hugo-and-hexo-blog-to-netlify/index.html"},{revision:"ab50a6520f470461d6d38bb14efb27f9",url:"./p/domain-mail/index.html"},{revision:"e39acbbcd47789dc20167bc74a8a78a9",url:"./p/github-hosts/index.html"},{revision:"0d2e89891416056a7419c00be3602405",url:"./p/github-pages-becomes-faster/index.html"},{revision:"a2ecd03292b9e1ed4ccce0afa7892ff9",url:"./p/goto-transfer-page/index.html"},{revision:"7906637472befa33925c733ffc93e416",url:"./p/how-to-read-google-correctly/index.html"},{revision:"9185b00753a051081d0c88278cd2c09e",url:"./p/html-1/index.html"},{revision:"c9f4d34d1bf35719ab6235bcb01fcba3",url:"./p/html-2/index.html"},{revision:"6241fc2b4038ef69acca51b5f8ddfc59",url:"./p/hugo-auto-deploy/index.html"},{revision:"fd7ce73a1588d76032c04c25e0e43b6c",url:"./p/index.html"},{revision:"272cd6125d1dfa0c3286ba4a7743023a",url:"./p/kodcloud-with-centos7/index.html"},{revision:"62c30c0593f30a14c026f37cfca8150f",url:"./p/kugoumusic-spider-artlist/index.html"},{revision:"f90b92c11fab9fb595d2a595277a02f1",url:"./p/music-spider-downloader/index.html"},{revision:"68732987f07ba6a4e67214dbb1e88b07",url:"./p/picgo-and-gitee-markdown-pic/index.html"},{revision:"686aab78fd3b80caeebcd2d4461e7b3c",url:"./p/python-assert/index.html"},{revision:"baceaf65f68820e498f4050b8092894d",url:"./p/python-eval/index.html"},{revision:"d815a9c1d114bbcdc175fe6b29bbbc9a",url:"./p/python-exec/index.html"},{revision:"b719e604ddc39c2ee690e86b38fe9eb1",url:"./p/python-special-characters/index.html"},{revision:"117bd1ea96b9b506e185f67ae5d50168",url:"./p/python-with/index.html"},{revision:"6e35240fa129041f88d7282191086c19",url:"./p/python-yield/index.html"},{revision:"ca47ced7c2ad5417bccb64111db9531a",url:"./p/qqmusic-spider-artlist/index.html"},{revision:"8f444a1439f0caadc0ddd1a4d964db26",url:"./p/spider-api/index.html"},{revision:"210c23d60e9a9e52aeb3307dce6dca04",url:"./p/travis-ci-automatically-deploys-hugo-blog/index.html"},{revision:"a140742f5021df4b9515a4f6597d9c4b",url:"./p/ulang/index.html"},{revision:"d54480e9c93c627d4b025856bc137b96",url:"./p/白嫖office365/index.html"},{revision:"b20134e4e5b0faf092e43a70cc5b6f63",url:"./page/1/index.html"},{revision:"b0fba288d8103b1e4b8ec8fdaec1a9ef",url:"./page/2/index.html"},{revision:"3667bdff378e85052e35a582c6465233",url:"./page/3/index.html"},{revision:"4bd7826f0f77b456ac507dcf3d783e41",url:"./page/4/index.html"},{revision:"7b6a38720cb809d924af8c95a9ac16ea",url:"./tags/api/index.html"},{revision:"bd3d91e9bb3610d2497ddd0b5ad1884a",url:"./tags/backblaze/index.html"},{revision:"d1947fa61dcf116905295b4827a84ebd",url:"./tags/bilibili/index.html"},{revision:"97adfa5c105ef7b4695dfcfbddb270a4",url:"./tags/cdn/index.html"},{revision:"c0a5ee1ef02a53de58630497d8e3409f",url:"./tags/centos/index.html"},{revision:"2c90f938335a1abe198fffadcfc521e7",url:"./tags/chrome/index.html"},{revision:"7e6c7f4acc7cf7ef1e85210ca4c83b4e",url:"./tags/cloudflare/index.html"},{revision:"e0411a1532baa39153254f0ff8d6da54",url:"./tags/cpu/index.html"},{revision:"c78a6e1512b513ea2b2c2e04597ab8a6",url:"./tags/git/index.html"},{revision:"9209d83e101c10bb9530fdaab0329f64",url:"./tags/gitee/index.html"},{revision:"c233817e80d403af5d9089dfd4906021",url:"./tags/github-pages/index.html"},{revision:"e387ca177f452e724a95c2165dab84f7",url:"./tags/github/index.html"},{revision:"bf96c89d25ea274b7df12d23b88f33be",url:"./tags/hosts/index.html"},{revision:"bdbef010cd7d491061b205c63b8b6339",url:"./tags/html/index.html"},{revision:"34d053c9b4526e7abc5f2b1035ce3479",url:"./tags/html入门/index.html"},{revision:"a5b4277269aafb75e185923887718609",url:"./tags/html结构/index.html"},{revision:"a33482305a1da4360443b3b4a2a2ed45",url:"./tags/hugo/index.html"},{revision:"92dc023d178398d701a500aa03c39b1f",url:"./tags/index.html"},{revision:"ac601d4d6f9215cf27839beca59a13a7",url:"./tags/js/index.html"},{revision:"6e3e11cc4ecf3eaf1f62bc71b1a9efb3",url:"./tags/netlify/index.html"},{revision:"5431a95f00f70b709480df93477b3ab3",url:"./tags/office/index.html"},{revision:"70b5634afaf193d3f6c2e6a9d6ee3e87",url:"./tags/pages/index.html"},{revision:"0ce5cc1b368aa0782f456b7766861a7f",url:"./tags/picgo/index.html"},{revision:"e6ca0fb3f6849c95b35e7620fac0211b",url:"./tags/python/index.html"},{revision:"a56a362962f2664d9ab34dd775c451f0",url:"./tags/python关键字/index.html"},{revision:"192aa13f416535b66436cdb6754ae35f",url:"./tags/python学习笔记/index.html"},{revision:"bb0d6b5f778d4a5bec98959dc5900cb2",url:"./tags/python进阶/index.html"},{revision:"3b8015cfa16e19993bdbb1a9920805eb",url:"./tags/qq音乐/index.html"},{revision:"021324cf3a5dca31fce38625b503f591",url:"./tags/travis-ci/index.html"},{revision:"baa12b82a804e52e49c278e7bcc8c53e",url:"./tags/ulang/index.html"},{revision:"fd3ecad053000d35c8ab65f0e6f8be88",url:"./tags/中转/index.html"},{revision:"5ceaa36d52bfefc6f04d8f8d29438c3f",url:"./tags/代理/index.html"},{revision:"748dd6a522beaa2bceb78e2b8355fdc0",url:"./tags/会员/index.html"},{revision:"7aa2f081c92d5bc6eb1f1b7063642cdd",url:"./tags/免费空间/index.html"},{revision:"b42dedc4d29ea40c0899ea2ee3e1f731",url:"./tags/关键字/index.html"},{revision:"057b947b9a2c36c3dc22c6fe4e3a0f92",url:"./tags/内置函数/index.html"},{revision:"2fd10a286976ae351b13794665367c96",url:"./tags/加速/index.html"},{revision:"819b6e64d9284e7a92aceca04bc56690",url:"./tags/博客/index.html"},{revision:"bffd24c309a11c2e75fa6f4f97784672",url:"./tags/域名/index.html"},{revision:"186d0318509593f86e848a45b7b06663",url:"./tags/多线程/index.html"},{revision:"0ed09040d0be2509d027f083947ddbdd",url:"./tags/对象存储/index.html"},{revision:"11f9228ae6acc513776aafbf7aede35a",url:"./tags/工具/index.html"},{revision:"c3b7360b22cb892b1e7f98c411ea653f",url:"./tags/折腾/index.html"},{revision:"24fd09e6f3553b295ae528c6df7ffdb9",url:"./tags/搞机/index.html"},{revision:"ea4c3c8e2da68e8ec7c7135d4a01a87a",url:"./tags/搞笑/index.html"},{revision:"ff68134fc2b053e7bcab8996a08d697b",url:"./tags/教程/index.html"},{revision:"93db2acba14733ec33f2e8603929f8f8",url:"./tags/日常/index.html"},{revision:"7d68c6ff06af8b3dc3441182cd99adb0",url:"./tags/服务器/index.html"},{revision:"bbb6d7ad2fc577d08b6a5d23024a97e2",url:"./tags/爬虫/index.html"},{revision:"e244e843cb67af619afc5173cba6b92c",url:"./tags/白嫖/index.html"},{revision:"ba99df6d1e12b7fb506b489c44e68ea9",url:"./tags/破解/index.html"},{revision:"6d3d8a840b90619b052d7257ea883599",url:"./tags/福利/index.html"},{revision:"b71ca416fa7782430f3daa9e4d706a36",url:"./tags/算法/index.html"},{revision:"f9c709f6dc99b86ed0471198166454bb",url:"./tags/素贞/index.html"},{revision:"a58fd5cd0873a8e31e9ba5bee3310d94",url:"./tags/网易/index.html"},{revision:"10d05b05f96d2a6d5a744f850e6406b9",url:"./tags/网盘/index.html"},{revision:"2dd62ce4dffb59a05a5accfe94b882ea",url:"./tags/网站/index.html"},{revision:"313a9fa9b9d9b334ea81200128d89724",url:"./tags/自定义/index.html"},{revision:"5bef2c4fe7b25f29eb43fc170880727a",url:"./tags/谷歌/index.html"},{revision:"81a972b7764fa8a54b5bed00a128c809",url:"./tags/酷狗/index.html"},{revision:"e40dff8d256fe7d9e5a03c1eb5e71f4a",url:"./tags/音乐/index.html"},{revision:"ec6ce4749fafd345e1e072dd9e1040aa",url:"./tools/aria2ng/index.html"},{revision:"2ba884c84aeb725407039e8c6441aa10",url:"./tools/bv2av/index.html"},{revision:"52c61761741d10fb12b249ae3e916ccf",url:"./tools/cloudmusic/index.html"},{revision:"0b846c6296e461ccb1f76b85587c18a6",url:"./tools/cloudmusic/main.js"},{revision:"0927e500fdf0fd782c55f1c93ac16f7f",url:"./tools/index.html"},{revision:"cd0b4576fa8f9390625d7024c3c5ad39",url:"./writes/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();