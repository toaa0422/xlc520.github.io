const e=JSON.parse('{"key":"v-a4b9dd90","path":"/dev/Logback%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BC%98%E5%8C%96.html","title":"Logback 配置文件优化","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Logback 配置文件优化","description":"01、通过阅读本篇文章将了解到\\r1.日志输出到文件并根据LEVEL级别将日志分类保存到不同文件; \\r2.通过异步输出日志减少磁盘IO提高性能; \\r3.异步输出日志的原理; 02、配置文件logback-spring.xml SpringBoot工程自带logback和`slf4j的依赖，所以重点放在编写配置文件上，需要引入什么依赖，日志依赖冲突统统都不...","date":"2022-06-30T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"java","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Logback%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"Logback 配置文件优化"}],["meta",{"property":"og:description","content":"01、通过阅读本篇文章将了解到\\r1.日志输出到文件并根据LEVEL级别将日志分类保存到不同文件; \\r2.通过异步输出日志减少磁盘IO提高性能; \\r3.异步输出日志的原理; 02、配置文件logback-spring.xml SpringBoot工程自带logback和`slf4j的依赖，所以重点放在编写配置文件上，需要引入什么依赖，日志依赖冲突统统都不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-20T12:43:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-06-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-20T12:43:54.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"02、配置文件logback-spring.xml","slug":"_02、配置文件logback-spring-xml","link":"#_02、配置文件logback-spring-xml","children":[]},{"level":3,"title":"03、logback 高级特性异步输出日志","slug":"_03、logback-高级特性异步输出日志","link":"#_03、logback-高级特性异步输出日志","children":[]},{"level":3,"title":"04、异步输出日志性能测试","slug":"_04、异步输出日志性能测试","link":"#_04、异步输出日志性能测试","children":[]},{"level":3,"title":"05、服务器硬件","slug":"_05、服务器硬件","link":"#_05、服务器硬件","children":[]},{"level":3,"title":"06、测试工具","slug":"_06、测试工具","link":"#_06、测试工具","children":[]},{"level":3,"title":"07、同步输出日志","slug":"_07、同步输出日志","link":"#_07、同步输出日志","children":[]},{"level":3,"title":"08、异步输出日志","slug":"_08、异步输出日志","link":"#_08、异步输出日志","children":[]},{"level":3,"title":"09、异步日志输出原理","slug":"_09、异步日志输出原理","link":"#_09、异步日志输出原理","children":[]}],"git":{"createdTime":1668948234000,"updatedTime":1668948234000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":4.95,"words":1484},"filePathRelative":"dev/Logback 配置文件优化.md","localizedDate":"2022年6月30日"}');export{e as data};
