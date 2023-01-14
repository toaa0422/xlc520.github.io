const e=JSON.parse('{"key":"v-3febf42d","path":"/dev/SpringCloudGatewayAPI%E6%8E%A5%E5%8F%A3%E5%AE%89%E5%85%A8%E8%AE%BE%E8%AE%A1(%E5%8A%A0%E5%AF%86%E7%AD%BE%E5%90%8D).html","title":"SpringCloud Gateway API接口安全设计（加密 、签名）","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringCloud Gateway API接口安全设计（加密 、签名）","description":"SpringCloud Gateway API接口安全设计（加密 、签名） 1 防止数据抓包窃取 1.1 风险简述 简述：当用户登录时，恶意攻击者可以用抓包工具可以拿到用户提交的表单信息，可以获取用户的账号密码，进而可以恶意访问网站。 1.2 RSA 非对称加密 1.2.1 RSA简介4","date":"2022-07-13T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"java","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringCloudGatewayAPI%E6%8E%A5%E5%8F%A3%E5%AE%89%E5%85%A8%E8%AE%BE%E8%AE%A1(%E5%8A%A0%E5%AF%86%E7%AD%BE%E5%90%8D).html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"SpringCloud Gateway API接口安全设计（加密 、签名）"}],["meta",{"property":"og:description","content":"SpringCloud Gateway API接口安全设计（加密 、签名） 1 防止数据抓包窃取 1.1 风险简述 简述：当用户登录时，恶意攻击者可以用抓包工具可以拿到用户提交的表单信息，可以获取用户的账号密码，进而可以恶意访问网站。 1.2 RSA 非对称加密 1.2.1 RSA简介4"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-14T09:09:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-07-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-14T09:09:11.000Z"}]]},"headers":[{"level":2,"title":"1 防止数据抓包窃取","slug":"_1-防止数据抓包窃取","link":"#_1-防止数据抓包窃取","children":[{"level":3,"title":"1.1 风险简述","slug":"_1-1-风险简述","link":"#_1-1-风险简述","children":[]},{"level":3,"title":"1.2 RSA 非对称加密","slug":"_1-2-rsa-非对称加密","link":"#_1-2-rsa-非对称加密","children":[]},{"level":3,"title":"1.3 案例","slug":"_1-3-案例","link":"#_1-3-案例","children":[]}]},{"level":2,"title":"2 设置URL有效时长","slug":"_2-设置url有效时长","link":"#_2-设置url有效时长","children":[{"level":3,"title":"2.1 前端代码","slug":"_2-1-前端代码","link":"#_2-1-前端代码","children":[]},{"level":3,"title":"2.2 后端验证时间戳","slug":"_2-2-后端验证时间戳","link":"#_2-2-后端验证时间戳","children":[]},{"level":3,"title":"2.3 测试不传时间戳","slug":"_2-3-测试不传时间戳","link":"#_2-3-测试不传时间戳","children":[]}]},{"level":2,"title":"3 确保URL唯一性","slug":"_3-确保url唯一性","link":"#_3-确保url唯一性","children":[{"level":3,"title":"3.1 修改前端请求参数","slug":"_3-1-修改前端请求参数","link":"#_3-1-修改前端请求参数","children":[]},{"level":3,"title":"3.2 后端增加验证RequestId","slug":"_3-2-后端增加验证requestid","link":"#_3-2-后端增加验证requestid","children":[]}]},{"level":2,"title":"4 增加签名","slug":"_4-增加签名","link":"#_4-增加签名","children":[{"level":3,"title":"4.1 前端增加签名","slug":"_4-1-前端增加签名","link":"#_4-1-前端增加签名","children":[]},{"level":3,"title":"4.2 增强读取Body类","slug":"_4-2-增强读取body类","link":"#_4-2-增强读取body类","children":[]},{"level":3,"title":"4.3 修改GatewayFilterConfig","slug":"_4-3-修改gatewayfilterconfig","link":"#_4-3-修改gatewayfilterconfig","children":[]},{"level":3,"title":"4.4 测试登录","slug":"_4-4-测试登录","link":"#_4-4-测试登录","children":[]},{"level":3,"title":"4.5 测试查询","slug":"_4-5-测试查询","link":"#_4-5-测试查询","children":[]}]},{"level":2,"title":"5 码云地址","slug":"_5-码云地址","link":"#_5-码云地址","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1673687351000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":12.11,"words":3633},"filePathRelative":"dev/SpringCloudGatewayAPI接口安全设计(加密签名).md","localizedDate":"2022年7月13日","excerpt":"<h1> SpringCloud Gateway API接口安全设计（加密 、签名）</h1>\\n<h2> 1 防止数据抓包窃取</h2>\\n<h3> 1.1 风险简述</h3>\\n<p>简述：当用户登录时，恶意攻击者可以用抓包工具可以拿到用户提交的表单信息，可以获取用户的账号密码，进而可以恶意访问网站。\\n<img src=\\"https://static.xlc520.ml/blogImage/1a25b48aa07f4da7adeed28003850f74.png\\" alt=\\"图片\\" loading=\\"lazy\\"></p>\\n<h3> 1.2 RSA 非对称加密</h3>\\n<h4> 1.2.1 RSA简介4</h4>","autoDesc":true}');export{e as data};
