const e=JSON.parse('{"key":"v-1936c0d5","path":"/dev/%E5%BE%AE%E6%9C%8D%E5%8A%A1_%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.html","title":"架构师图谱之微服务&消息队列","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"架构师图谱之微服务&消息队列","description":"架构师图谱之微服务&amp;消息队列 概述 “架构师图谱”是一个很宏大的命题，特别是优秀的架构师自身也是“由点到面再到图”，一点点成长积累起来，尝试写这篇文章的目的更多的是结合自身的一些架构、研发、管理经验对现阶段做一个复盘总结，所以这里更偏向于后端图谱，依赖于开源技术、云原生或者其他第三方服务。这里会重点介绍一些技术栈、设计理念以及适应场景，这些可以作为我们选型时的依据。所谓“架构即决策”，是在一个有约束的盒子中寻求最优解。这个有约束的盒子是团队经验、成本、资源、进度、业务所处阶段等编织、掺杂在一起的综合体。本质上无优劣，但是存在恰当的架构用在合适的软件系统中，而这些就是决策的结果。","date":"2022-06-25T00:00:00.000Z","category":"Java","tag":["Java","微服务","消息队列","Spring"],"article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/%E5%BE%AE%E6%9C%8D%E5%8A%A1_%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"StudyNote"}],["meta",{"property":"og:title","content":"架构师图谱之微服务&消息队列"}],["meta",{"property":"og:description","content":"架构师图谱之微服务&amp;消息队列 概述 “架构师图谱”是一个很宏大的命题，特别是优秀的架构师自身也是“由点到面再到图”，一点点成长积累起来，尝试写这篇文章的目的更多的是结合自身的一些架构、研发、管理经验对现阶段做一个复盘总结，所以这里更偏向于后端图谱，依赖于开源技术、云原生或者其他第三方服务。这里会重点介绍一些技术栈、设计理念以及适应场景，这些可以作为我们选型时的依据。所谓“架构即决策”，是在一个有约束的盒子中寻求最优解。这个有约束的盒子是团队经验、成本、资源、进度、业务所处阶段等编织、掺杂在一起的综合体。本质上无优劣，但是存在恰当的架构用在合适的软件系统中，而这些就是决策的结果。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T09:41:05.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"消息队列"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2022-06-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T09:41:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"架构师图谱之微服务&消息队列\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T09:41:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"序章","slug":"序章","link":"#序章","children":[]},{"level":2,"title":"微服务","slug":"微服务","link":"#微服务","children":[{"level":3,"title":"理论基础","slug":"理论基础","link":"#理论基础","children":[]},{"level":3,"title":"网关","slug":"网关","link":"#网关","children":[]},{"level":3,"title":"业务网关：","slug":"业务网关","link":"#业务网关","children":[]},{"level":3,"title":"协议","slug":"协议","link":"#协议","children":[]},{"level":3,"title":"RPC vs HTTP REST优点：","slug":"rpc-vs-http-rest优点","link":"#rpc-vs-http-rest优点","children":[]},{"level":3,"title":"服务注册/发现","slug":"服务注册-发现","link":"#服务注册-发现","children":[]},{"level":3,"title":"配置中心","slug":"配置中心","link":"#配置中心","children":[]},{"level":3,"title":"可观察性","slug":"可观察性","link":"#可观察性","children":[]},{"level":3,"title":"链路追踪","slug":"链路追踪","link":"#链路追踪","children":[]},{"level":3,"title":"日志","slug":"日志","link":"#日志","children":[]},{"level":3,"title":"指标3","slug":"指标3","link":"#指标3","children":[]},{"level":3,"title":"Service Mesh","slug":"service-mesh","link":"#service-mesh","children":[]}]},{"level":2,"title":"消息队列","slug":"消息队列","link":"#消息队列","children":[{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"RabbitMQ vs Kafka vs RocketMQ","slug":"rabbitmq-vs-kafka-vs-rocketmq","link":"#rabbitmq-vs-kafka-vs-rocketmq","children":[]},{"level":3,"title":"HA","slug":"ha","link":"#ha","children":[]},{"level":3,"title":"高吞吐","slug":"高吞吐","link":"#高吞吐","children":[]},{"level":3,"title":"功能丰富性","slug":"功能丰富性","link":"#功能丰富性","children":[]},{"level":3,"title":"重复消费","slug":"重复消费","link":"#重复消费","children":[]},{"level":3,"title":"消息顺序性","slug":"消息顺序性","link":"#消息顺序性","children":[]},{"level":3,"title":"Pulsar","slug":"pulsar","link":"#pulsar","children":[]}]}],"git":{"createdTime":1668948234000,"updatedTime":1678873265000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":3}]},"readingTime":{"minutes":30.65,"words":9194},"filePathRelative":"dev/微服务&消息队列.md","localizedDate":"2022年6月25日","excerpt":"<h1> 架构师图谱之微服务&amp;消息队列</h1>\\n<h2> 概述</h2>\\n<p>“架构师图谱”是一个很宏大的命题，特别是优秀的架构师自身也是“由点到面再到图”，一点点成长积累起来，尝试写这篇文章的目的更多的是结合自身的一些架构、研发、管理经验对现阶段做一个复盘总结，所以这里更偏向于后端图谱，依赖于开源技术、云原生或者其他第三方服务。这里会重点介绍一些技术栈、设计理念以及适应场景，这些可以作为我们选型时的依据。所谓“架构即决策”，是在一个有约束的盒子中寻求最优解。这个有约束的盒子是团队经验、成本、资源、进度、业务所处阶段等编织、掺杂在一起的综合体。本质上无优劣，但是存在恰当的架构用在合适的软件系统中，而这些就是决策的结果。</p>","autoDesc":true}');export{e as data};
