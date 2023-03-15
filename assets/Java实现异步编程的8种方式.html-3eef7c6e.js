const e=JSON.parse('{"key":"v-0fac8ca7","path":"/dev/Java%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E7%9A%848%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"Java实现异步编程的8种方式","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Java实现异步编程的8种方式","description":"Java实现异步编程的8种方式 一、🌈前言 异步执行对于开发者来说并不陌生，在实际的开发过程中，很多场景多会使用到异步，相比同步执行，异步可以大大缩短请求链路耗时时间，比如：发送短信、邮件、异步更新等，这些都是典型的可以通过异步实现的场景。","date":"2023-03-01T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Java%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E7%9A%848%E7%A7%8D%E6%96%B9%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Java实现异步编程的8种方式"}],["meta",{"property":"og:description","content":"Java实现异步编程的8种方式 一、🌈前言 异步执行对于开发者来说并不陌生，在实际的开发过程中，很多场景多会使用到异步，相比同步执行，异步可以大大缩短请求链路耗时时间，比如：发送短信、邮件、异步更新等，这些都是典型的可以通过异步实现的场景。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T09:41:05.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T09:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java实现异步编程的8种方式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T09:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"一、🌈前言","slug":"一、🌈前言","link":"#一、🌈前言","children":[]},{"level":2,"title":"二、异步的八种实现方式","slug":"二、异步的八种实现方式","link":"#二、异步的八种实现方式","children":[]},{"level":2,"title":"三、什么是异步？","slug":"三、什么是异步","link":"#三、什么是异步","children":[]},{"level":2,"title":"四、异步编程","slug":"四、异步编程","link":"#四、异步编程","children":[]},{"level":2,"title":"4.1 线程异步","slug":"_4-1-线程异步","link":"#_4-1-线程异步","children":[]},{"level":2,"title":"4.2 Future异步","slug":"_4-2-future异步","link":"#_4-2-future异步","children":[{"level":3,"title":"4.2.1 Future的不足之处","slug":"_4-2-1-future的不足之处","link":"#_4-2-1-future的不足之处","children":[]}]},{"level":2,"title":"4.3 CompletableFuture实现异步","slug":"_4-3-completablefuture实现异步","link":"#_4-3-completablefuture实现异步","children":[]},{"level":2,"title":"4.4 Spring的@Async异步","slug":"_4-4-spring的-async异步","link":"#_4-4-spring的-async异步","children":[{"level":3,"title":"4.4.1 自定义异步线程池","slug":"_4-4-1-自定义异步线程池","link":"#_4-4-1-自定义异步线程池","children":[]},{"level":3,"title":"4.4.2 AsyncService","slug":"_4-4-2-asyncservice","link":"#_4-4-2-asyncservice","children":[]}]},{"level":2,"title":"4.5 Spring ApplicationEvent事件实现异步","slug":"_4-5-spring-applicationevent事件实现异步","link":"#_4-5-spring-applicationevent事件实现异步","children":[{"level":3,"title":"4.5.1 定义事件","slug":"_4-5-1-定义事件","link":"#_4-5-1-定义事件","children":[]},{"level":3,"title":"4.5.2 定义事件处理器","slug":"_4-5-2-定义事件处理器","link":"#_4-5-2-定义事件处理器","children":[]}]},{"level":2,"title":"4.6 消息队列","slug":"_4-6-消息队列","link":"#_4-6-消息队列","children":[{"level":3,"title":"4.6.1 回调事件消息生产者","slug":"_4-6-1-回调事件消息生产者","link":"#_4-6-1-回调事件消息生产者","children":[]},{"level":3,"title":"4.6.2 回调事件消息消费者","slug":"_4-6-2-回调事件消息消费者","link":"#_4-6-2-回调事件消息消费者","children":[]}]},{"level":2,"title":"4.7 ThreadUtil异步工具类","slug":"_4-7-threadutil异步工具类","link":"#_4-7-threadutil异步工具类","children":[]},{"level":2,"title":"4.8 Guava异步","slug":"_4-8-guava异步","link":"#_4-8-guava异步","children":[]}],"git":{"createdTime":1678870561000,"updatedTime":1678873265000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":8.1,"words":2430},"filePathRelative":"dev/Java实现异步编程的8种方式.md","localizedDate":"2023年3月1日","excerpt":"<h1> Java实现异步编程的8种方式</h1>\\n<h2> 一、🌈前言</h2>\\n<blockquote>\\n<p>异步执行对于开发者来说并不陌生，在实际的开发过程中，很多场景多会使用到异步，相比同步执行，异步可以大大缩短请求链路耗时时间，比如：<strong>发送短信、邮件、异步更新等</strong>，这些都是典型的可以通过异步实现的场景。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
