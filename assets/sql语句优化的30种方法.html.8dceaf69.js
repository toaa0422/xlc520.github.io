const e=JSON.parse('{"key":"v-0fc88264","path":"/dev/sql%E8%AF%AD%E5%8F%A5%E4%BC%98%E5%8C%96%E7%9A%8430%E7%A7%8D%E6%96%B9%E6%B3%95.html","title":"sql语句优化的30种方法","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"sql语句优化的30种方法","description":"1.对查询进行优化，应尽量避免全表扫描，首先应考虑在 where 及 order by 涉及的列上建立索引。 2.应尽量避免在 where 子句中使用!=或操作符，否则将引擎放弃使用索引而进行全表扫描。 3.应尽量避免在 where 子句中对字段进行 null 值判断，否则将导致引擎放弃使用索引而进行全表扫描，如： 可以在num上设置默认值0，确保表中...","date":"2022-08-06T00:00:00.000Z","category":["Java"],"tag":["Java"],"article":true,"timeline":true,"icon":"java","password":null,"head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/sql%E8%AF%AD%E5%8F%A5%E4%BC%98%E5%8C%96%E7%9A%8430%E7%A7%8D%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"sql语句优化的30种方法"}],["meta",{"property":"og:description","content":"1.对查询进行优化，应尽量避免全表扫描，首先应考虑在 where 及 order by 涉及的列上建立索引。 2.应尽量避免在 where 子句中使用!=或操作符，否则将引擎放弃使用索引而进行全表扫描。 3.应尽量避免在 where 子句中对字段进行 null 值判断，否则将导致引擎放弃使用索引而进行全表扫描，如： 可以在num上设置默认值0，确保表中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-20T12:43:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-08-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-20T12:43:54.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1668948234000,"updatedTime":1668948234000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":6.67,"words":2000},"filePathRelative":"dev/sql语句优化的30种方法.md","localizedDate":"2022年8月6日"}');export{e as data};
