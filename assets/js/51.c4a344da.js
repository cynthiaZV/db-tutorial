(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{483:function(v,_,t){"use strict";t.r(_);var r=t(20),e=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"redis-集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-集群"}},[v._v("#")]),v._v(" Redis 集群")]),v._v(" "),t("blockquote",[t("p",[t("strong",[t("a",{attrs:{href:"https://redis.io/topics/cluster-tutorial",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 集群（Redis Cluster）"),t("OutboundLink")],1),v._v(" 是 Redis 官方提供的分布式数据库方案")]),v._v("。")]),v._v(" "),t("p",[v._v("既然是分布式，自然具备分布式系统的基本特性：可扩展、高可用、一致性。")]),v._v(" "),t("ul",[t("li",[v._v("Redis 集群通过划分 hash 槽来分片，进行数据分享。")]),v._v(" "),t("li",[v._v("Redis 集群采用主从模型，提供复制和故障转移功能，来保证 Redis 集群的高可用。")]),v._v(" "),t("li",[v._v("根据 CAP 理论，Consistency、Availability、Partition tolerance 三者不可兼得，而 Redis 集群的选择是 AP。Redis 集群节点间采用异步通信方式，不保证强一致性，尽力达到最终一致性。")])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200713100613.png",alt:"img"}})]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80redis-cluster-%E5%88%86%E5%8C%BA"}},[v._v("一、Redis Cluster 分区")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E9%9B%86%E7%BE%A4%E8%8A%82%E7%82%B9"}},[v._v("集群节点")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E5%88%86%E9%85%8D-hash-%E6%A7%BD"}},[v._v("分配 Hash 槽")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E5%AF%BB%E5%9D%80"}},[v._v("寻址")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E9%87%8D%E6%96%B0%E5%88%86%E7%89%87"}},[v._v("重新分片")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#ask-%E9%94%99%E8%AF%AF"}},[v._v("ASK 错误")])])])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8Credis-cluster-%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB"}},[v._v("二、Redis Cluster 故障转移")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%A4%8D%E5%88%B6"}},[v._v("复制")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%95%85%E9%9A%9C%E6%A3%80%E6%B5%8B"}},[v._v("故障检测")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB"}},[v._v("故障转移")])])])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89redis-cluster-%E9%80%9A%E4%BF%A1"}},[v._v("三、Redis Cluster 通信")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9Bredis-cluster-%E5%BA%94%E7%94%A8"}},[v._v("四、Redis Cluster 应用")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E9%9B%86%E7%BE%A4%E9%99%90%E5%88%B6"}},[v._v("集群限制")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E9%9B%86%E7%BE%A4%E9%85%8D%E7%BD%AE"}},[v._v("集群配置")])])])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%94%E5%85%B6%E4%BB%96%E6%96%B9%E6%A1%88"}},[v._v("五、其他方案")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%88%86%E5%8C%BA%E6%96%B9%E6%A1%88"}},[v._v("客户端分区方案")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BB%A3%E7%90%86%E5%88%86%E5%8C%BA%E6%96%B9%E6%A1%88"}},[v._v("代理分区方案")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%9F%A5%E8%AF%A2%E8%B7%AF%E7%94%B1%E6%96%B9%E6%A1%88"}},[v._v("查询路由方案")])])])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[v._v("参考资料")])])]),v._v(" "),t("h2",{attrs:{id:"一、redis-cluster-分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、redis-cluster-分区"}},[v._v("#")]),v._v(" 一、Redis Cluster 分区")]),v._v(" "),t("h3",{attrs:{id:"集群节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群节点"}},[v._v("#")]),v._v(" 集群节点")]),v._v(" "),t("p",[v._v("Redis 集群由多个节点组成，节点刚启动时，彼此是相互独立的。"),t("strong",[v._v("节点通过握手（ "),t("code",[v._v("CLUSTER MEET")]),v._v(" 命令）来将其他节点添加到自己所处的集群中")]),v._v("。")]),v._v(" "),t("p",[v._v("向一个节点发送 "),t("code",[v._v("CLUSTER MEET")]),v._v(" 命令，可以让当前节点与指定 IP、PORT 的节点进行握手，握手成功时，当前节点会将指定节点加入所在集群。")]),v._v(" "),t("p",[t("strong",[v._v("集群节点保存键值对以及过期时间的方式与单机 Redis 服务完全相同")]),v._v("。")]),v._v(" "),t("p",[v._v("Redis 集群节点分为主节点（master）和从节点（slave），其中主节点用于处理槽，而从节点则用于复制某个主节点，并在被复制的主节点下线时，代替下线主节点继续处理命令请求。")]),v._v(" "),t("h3",{attrs:{id:"分配-hash-槽"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分配-hash-槽"}},[v._v("#")]),v._v(" 分配 Hash 槽")]),v._v(" "),t("p",[v._v("分布式存储需要解决的首要问题是把 "),t("strong",[v._v("整个数据集")]),v._v(" 按照 "),t("strong",[v._v("分区规则")]),v._v(" 映射到 "),t("strong",[v._v("多个节点")]),v._v(" 的问题，即把 "),t("strong",[v._v("数据集")]),v._v(" 划分到 "),t("strong",[v._v("多个节点")]),v._v(" 上，每个节点负责 "),t("strong",[v._v("整体数据")]),v._v(" 的一个 "),t("strong",[v._v("子集")]),v._v("。")]),v._v(" "),t("p",[t("strong",[v._v("Redis 集群通过划分 hash 槽来将数据分区")]),v._v("。Redis 集群通过分片的方式来保存数据库的键值对："),t("strong",[v._v("集群的整个数据库被分为 16384 个哈希槽（slot）")]),v._v("，数据库中的每个键都属于这 16384 个槽的其中一个，集群中的每个节点可以处理 0 个或最多 16384 个槽。"),t("strong",[v._v("如果数据库中有任何一个槽没有得到处理，那么集群处于下线状态")]),v._v("。")]),v._v(" "),t("p",[v._v("通过向节点发送 "),t("a",{attrs:{href:"https://redis.io/commands/cluster-addslots",target:"_blank",rel:"noopener noreferrer"}},[t("code",[v._v("CLUSTER ADDSLOTS")]),t("OutboundLink")],1),v._v(" 命令，可以将一个或多个槽指派给节点负责。")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("> CLUSTER ADDSLOTS 1 2 3\nOK\n")])])]),t("p",[v._v("集群中的每个节点负责一部分哈希槽，比如集群中有３个节点，则：")]),v._v(" "),t("ul",[t("li",[v._v("节点Ａ存储的哈希槽范围是：0 – 5500")]),v._v(" "),t("li",[v._v("节点Ｂ存储的哈希槽范围是：5501 – 11000")]),v._v(" "),t("li",[v._v("节点Ｃ存储的哈希槽范围是：11001 – 16384")])]),v._v(" "),t("h3",{attrs:{id:"寻址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#寻址"}},[v._v("#")]),v._v(" 寻址")]),v._v(" "),t("p",[v._v("当客户端向节点发送与数据库键有关的命令时，接受命令的节点会"),t("strong",[v._v("计算出命令要处理的数据库属于哪个槽")]),v._v("，并"),t("strong",[v._v("检查这个槽是否指派给了自己")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("如果键所在的槽正好指派给了当前节点，那么当前节点直接执行命令。")]),v._v(" "),t("li",[v._v("如果键所在的槽没有指派给当前节点，那么节点会向客户端返回一个 MOVED 错误，指引客户端重定向至正确的节点。")])]),v._v(" "),t("h4",{attrs:{id:"计算键属于哪个槽"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算键属于哪个槽"}},[v._v("#")]),v._v(" 计算键属于哪个槽")]),v._v(" "),t("p",[v._v("决定一个 key 应该分配到那个槽的算法是："),t("strong",[v._v("计算该 key 的 CRC16 结果再模 16834")]),v._v("。")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("slot = CRC16(KEY) & 16384\n")])])]),t("p",[v._v("当节点计算出 key 所属的槽为 i 之后，节点会根据以下条件判断槽是否由自己负责：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("clusterState.slots[i] == clusterState.myself\n")])])]),t("h4",{attrs:{id:"moved-错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#moved-错误"}},[v._v("#")]),v._v(" MOVED 错误")]),v._v(" "),t("p",[v._v("当节点发现键所在的槽并非自己负责处理的时候，节点就会向客户端返回一个 "),t("code",[v._v("MOVED")]),v._v(" 错误，指引客户端转向正在负责槽的节点。")]),v._v(" "),t("p",[t("code",[v._v("MOVED")]),v._v(" 错误的格式为：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("MOVED <slot> <ip>:<port>\n")])])]),t("blockquote",[t("p",[v._v("个人理解：MOVED 这种操作有点类似 HTTP 协议中的重定向。")])]),v._v(" "),t("h3",{attrs:{id:"重新分片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新分片"}},[v._v("#")]),v._v(" 重新分片")]),v._v(" "),t("p",[v._v("Redis 集群的"),t("strong",[v._v("重新分片操作可以将任意数量的已经指派给某个节点（源节点）的槽改为指派给另一个节点（目标节点），并且相关槽所属的键值对也会从源节点被移动到目标节点")]),v._v("。")]),v._v(" "),t("p",[v._v("重新分片操作"),t("strong",[v._v("可以在线进")]),v._v("行，在重新分片的过程中，集群不需要下线，并且源节点和目标节点都可以继续处理命令请求。")]),v._v(" "),t("p",[v._v("Redis 集群的重新分片操作由 Redis 集群管理软件 "),t("strong",[v._v("redis-trib")]),v._v(" 负责执行的，redis-trib 通过向源节点和目标节点发送命令来进行重新分片操作。")]),v._v(" "),t("p",[v._v("重新分片的实现原理如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/cs/database/redis/redis-cluster-trib.png",alt:"img"}})]),v._v(" "),t("h3",{attrs:{id:"ask-错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ask-错误"}},[v._v("#")]),v._v(" ASK 错误")]),v._v(" "),t("p",[t("code",[v._v("ASK")]),v._v(" 错误与 "),t("code",[v._v("MOVED")]),v._v(" 的区别在于："),t("strong",[v._v("ASK 错误只是两个节点在迁移槽的过程中使用的一种临时措施")]),v._v("，在客户端收到关于槽 i 的 ASK 错误之后，客户端只会在接下来的一次命令请求中将关于槽 i 的命令请求发送至 ASK 错误所指示的节点，但这种转向不会对客户端今后发送关于槽 i 的命令请求产生任何影响，客户端仍然会将关于槽 i 的命令请求发送至目前负责处理槽 i 的节点，除非 ASK 错误再次出现。")]),v._v(" "),t("p",[v._v("判断 ASK 错误的过程如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/cs/database/redis/redis-ask.png",alt:"img"}})]),v._v(" "),t("h2",{attrs:{id:"二、redis-cluster-故障转移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、redis-cluster-故障转移"}},[v._v("#")]),v._v(" 二、Redis Cluster 故障转移")]),v._v(" "),t("h3",{attrs:{id:"复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[v._v("#")]),v._v(" 复制")]),v._v(" "),t("p",[v._v("Redis 复制机制可以参考："),t("RouterLink",{attrs:{to:"/nosql/redis/redis-replication.html"}},[v._v("Redis 复制")])],1),v._v(" "),t("h3",{attrs:{id:"故障检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#故障检测"}},[v._v("#")]),v._v(" 故障检测")]),v._v(" "),t("p",[t("strong",[v._v("集群中每个节点都会定期向集群中的其他节点发送 PING 消息，以此来检测对方是否在线")]),v._v("。")]),v._v(" "),t("p",[v._v("节点的状态信息可以分为：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("在线状态；")])]),v._v(" "),t("li",[t("p",[v._v("下线状态（FAIL）;")])]),v._v(" "),t("li",[t("p",[v._v("疑似下线状态（PFAIL），即在规定的时间内，没有应答 PING 消息；")])])]),v._v(" "),t("h3",{attrs:{id:"故障转移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#故障转移"}},[v._v("#")]),v._v(" 故障转移")]),v._v(" "),t("ol",[t("li",[v._v("下线主节点的所有从节点中，会有一个从节点被选中。")]),v._v(" "),t("li",[v._v("被选中的从节点会执行 "),t("code",[v._v("SLAVEOF no one")]),v._v(" 命令，成为新的主节点。")]),v._v(" "),t("li",[v._v("新的主节点会撤销所有对已下线主节点的槽指派，并将这些槽全部指派给自己。")]),v._v(" "),t("li",[v._v("新的主节点向集群广播一条 PONG 消息，告知其他节点这个从节点已变成主节点。")])]),v._v(" "),t("h4",{attrs:{id:"选举新的主节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选举新的主节点"}},[v._v("#")]),v._v(" 选举新的主节点")]),v._v(" "),t("p",[v._v("Redis 集群选举新的主节点流程基于"),t("a",{attrs:{href:"https://www.jianshu.com/p/8e4bbe7e276c",target:"_blank",rel:"noopener noreferrer"}},[v._v("共识算法：Raft"),t("OutboundLink")],1)]),v._v(" "),t("h2",{attrs:{id:"三、redis-cluster-通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、redis-cluster-通信"}},[v._v("#")]),v._v(" 三、Redis Cluster 通信")]),v._v(" "),t("p",[v._v("集群中的节点通过发送和接收消息来进行通信。")]),v._v(" "),t("p",[v._v("Redis 集群节点发送的消息主要有以下五种：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("MEET")]),v._v(" - 请求接收方加入发送方所在的集群。")]),v._v(" "),t("li",[t("code",[v._v("PING")]),v._v(" - 集群中每个节点每隔一段时间（默认为一秒）从已知节点列表中随机选出五个节点，然后对这五个节点中最久没联系的节点发送 PING 消息，以此检测被选中的节点是否在线。")]),v._v(" "),t("li",[t("code",[v._v("PONG")]),v._v(" - 当接收方收到发送方发来的 MEET 消息或 PING 消息时，会返回一条 PONG 消息作为应答。")]),v._v(" "),t("li",[t("code",[v._v("FAIL")]),v._v(" - 当一个主节点 A 判断另一个主节点 B 已经进入 FAIL 状态时，节点 A 会向集群广播一条关于节点 B 的 FAIL 消息，所有收到这条消息的节点都会立即将节点 B 标记为已下线。")]),v._v(" "),t("li",[t("code",[v._v("PUBLISH")]),v._v(" - 当节点收到一个 PUBLISH 命令时，节点会执行这个命令，并向集群广播一条 PUBLISH 消息，所有接受到这条消息的节点都会执行相同的 PUBLISH 命令。")])]),v._v(" "),t("h2",{attrs:{id:"四、redis-cluster-应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、redis-cluster-应用"}},[v._v("#")]),v._v(" 四、Redis Cluster 应用")]),v._v(" "),t("h3",{attrs:{id:"集群限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群限制"}},[v._v("#")]),v._v(" 集群限制")]),v._v(" "),t("p",[t("code",[v._v("Redis")]),v._v(" 集群相对 "),t("strong",[v._v("单机")]),v._v(" 在功能上存在一些限制，需要 "),t("strong",[v._v("开发人员")]),v._v(" 提前了解，在使用时做好规避。")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("key")]),v._v(" "),t("strong",[v._v("批量操作")]),v._v(" 支持有限。")])]),v._v(" "),t("p",[v._v("类似 "),t("code",[v._v("mset")]),v._v("、"),t("code",[v._v("mget")]),v._v(" 操作，目前只支持对具有相同 "),t("code",[v._v("slot")]),v._v(" 值的 "),t("code",[v._v("key")]),v._v(" 执行 "),t("strong",[v._v("批量操作")]),v._v("。对于 "),t("strong",[v._v("映射为不同")]),v._v(" "),t("code",[v._v("slot")]),v._v(" 值的 "),t("code",[v._v("key")]),v._v(" 由于执行 "),t("code",[v._v("mget")]),v._v("、"),t("code",[v._v("mget")]),v._v(" 等操作可能存在于多个节点上，因此不被支持。")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("key")]),v._v(" "),t("strong",[v._v("事务操作")]),v._v(" 支持有限。")])]),v._v(" "),t("p",[v._v("只支持 "),t("strong",[v._v("多")]),v._v(" "),t("code",[v._v("key")]),v._v(" 在 "),t("strong",[v._v("同一节点上")]),v._v(" 的 "),t("strong",[v._v("事务操作")]),v._v("，当多个 "),t("code",[v._v("key")]),v._v(" 分布在 "),t("strong",[v._v("不同")]),v._v(" 的节点上时 "),t("strong",[v._v("无法")]),v._v(" 使用事务功能。")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("key")]),v._v(" 作为 "),t("strong",[v._v("数据分区")]),v._v(" 的最小粒度")])]),v._v(" "),t("p",[v._v("不能将一个 "),t("strong",[v._v("大的键值")]),v._v(" 对象如 "),t("code",[v._v("hash")]),v._v("、"),t("code",[v._v("list")]),v._v(" 等映射到 "),t("strong",[v._v("不同的节点")]),v._v("。")]),v._v(" "),t("ul",[t("li",[v._v("不支持 "),t("strong",[v._v("多数据库空间")])])]),v._v(" "),t("p",[t("strong",[v._v("单机")]),v._v(" 下的 "),t("code",[v._v("Redis")]),v._v(" 可以支持 "),t("code",[v._v("16")]),v._v(" 个数据库（"),t("code",[v._v("db0 ~ db15")]),v._v("），"),t("strong",[v._v("集群模式")]),v._v(" 下只能使用 "),t("strong",[v._v("一个")]),v._v(" 数据库空间，即 "),t("code",[v._v("db0")]),v._v("。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("复制结构")]),v._v(" 只支持一层")])]),v._v(" "),t("p",[t("strong",[v._v("从节点")]),v._v(" 只能复制 "),t("strong",[v._v("主节点")]),v._v("，不支持 "),t("strong",[v._v("嵌套树状复制")]),v._v(" 结构。")]),v._v(" "),t("h3",{attrs:{id:"集群配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群配置"}},[v._v("#")]),v._v(" 集群配置")]),v._v(" "),t("p",[v._v("我们后面会部署一个 Redis 集群作为例子，在那之前，先介绍一下集群在 redis.conf 中的参数。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("cluster-enabled")]),v._v(" "),t("code",[v._v("<yes/no>")]),v._v(" - 如果配置”yes”则开启集群功能，此 redis 实例作为集群的一个节点，否则，它是一个普通的单一的 redis 实例。")]),v._v(" "),t("li",[t("strong",[v._v("cluster-config-file")]),v._v(" "),t("code",[v._v("<filename>")]),v._v(" - 注意：虽然此配置的名字叫“集群配置文件”，但是此配置文件不能人工编辑，它是集群节点自动维护的文件，主要用于记录集群中有哪些节点、他们的状态以及一些持久化参数等，方便在重启时恢复这些状态。通常是在收到请求之后这个文件就会被更新。")]),v._v(" "),t("li",[t("strong",[v._v("cluster-node-timeout")]),v._v(" "),t("code",[v._v("<milliseconds>")]),v._v(" - 这是集群中的节点能够失联的最大时间，超过这个时间，该节点就会被认为故障。如果主节点超过这个时间还是不可达，则用它的从节点将启动故障迁移，升级成主节点。注意，任何一个节点在这个时间之内如果还是没有连上大部分的主节点，则此节点将停止接收任何请求。")]),v._v(" "),t("li",[t("strong",[v._v("cluster-slave-validity-factor")]),v._v(" "),t("code",[v._v("<factor>")]),v._v(" - 如果设置成０，则无论从节点与主节点失联多久，从节点都会尝试升级成主节点。如果设置成正数，则 cluster-node-timeout 乘以 cluster-slave-validity-factor 得到的时间，是从节点与主节点失联后，此从节点数据有效的最长时间，超过这个时间，从节点不会启动故障迁移。假设 cluster-node-timeout=5，cluster-slave-validity-factor=10，则如果从节点跟主节点失联超过 50 秒，此从节点不能成为主节点。注意，如果此参数配置为非 0，将可能出现由于某主节点失联却没有从节点能顶上的情况，从而导致集群不能正常工作，在这种情况下，只有等到原来的主节点重新回归到集群，集群才恢复运作。")]),v._v(" "),t("li",[t("strong",[v._v("cluster-migration-barrier")]),v._v(" "),t("code",[v._v("<count>")]),v._v(" - 主节点需要的最小从节点数，只有达到这个数，主节点失败时，它从节点才会进行迁移。更详细介绍可以看本教程后面关于副本迁移到部分。")]),v._v(" "),t("li",[t("strong",[v._v("cluster-require-full-coverage")]),v._v(" <yes/no> - 在部分 key 所在的节点不可用时，如果此参数设置为”yes”(默认值), 则整个集群停止接受操作；如果此参数设置为”no”，则集群依然为可达节点上的 key 提供读操作。")])]),v._v(" "),t("h2",{attrs:{id:"五、其他方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、其他方案"}},[v._v("#")]),v._v(" 五、其他方案")]),v._v(" "),t("h3",{attrs:{id:"客户端分区方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端分区方案"}},[v._v("#")]),v._v(" 客户端分区方案")]),v._v(" "),t("p",[t("strong",[v._v("客户端")]),v._v(" 就已经决定数据会被 "),t("strong",[v._v("存储")]),v._v(" 到哪个 "),t("code",[v._v("redis")]),v._v(" 节点或者从哪个 "),t("code",[v._v("redis")]),v._v(" 节点 "),t("strong",[v._v("读取数据")]),v._v("。其主要思想是采用 "),t("strong",[v._v("哈希算法")]),v._v(" 将 "),t("code",[v._v("Redis")]),v._v(" 数据的 "),t("code",[v._v("key")]),v._v(" 进行散列，通过 "),t("code",[v._v("hash")]),v._v(" 函数，特定的 "),t("code",[v._v("key")]),v._v("会 "),t("strong",[v._v("映射")]),v._v(" 到特定的 "),t("code",[v._v("Redis")]),v._v(" 节点上。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/4/165a4f9e74a09b36?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),v._v(" "),t("p",[t("strong",[v._v("客户端分区方案")]),v._v(" 的代表为 "),t("code",[v._v("Redis Sharding")]),v._v("，"),t("code",[v._v("Redis Sharding")]),v._v(" 是 "),t("code",[v._v("Redis Cluster")]),v._v(" 出来之前，业界普遍使用的 "),t("code",[v._v("Redis")]),v._v(" "),t("strong",[v._v("多实例集群")]),v._v(" 方法。"),t("code",[v._v("Java")]),v._v(" 的 "),t("code",[v._v("Redis")]),v._v(" 客户端驱动库 "),t("code",[v._v("Jedis")]),v._v("，支持 "),t("code",[v._v("Redis Sharding")]),v._v(" 功能，即 "),t("code",[v._v("ShardedJedis")]),v._v(" 以及 "),t("strong",[v._v("结合缓存池")]),v._v(" 的 "),t("code",[v._v("ShardedJedisPool")]),v._v("。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("优点")])])]),v._v(" "),t("p",[v._v("不使用 "),t("strong",[v._v("第三方中间件")]),v._v("，"),t("strong",[v._v("分区逻辑")]),v._v(" 可控，"),t("strong",[v._v("配置")]),v._v(" 简单，节点之间无关联，容易 "),t("strong",[v._v("线性扩展")]),v._v("，灵活性强。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("缺点")])])]),v._v(" "),t("p",[t("strong",[v._v("客户端")]),v._v(" 无法 "),t("strong",[v._v("动态增删")]),v._v(" 服务节点，客户端需要自行维护 "),t("strong",[v._v("分发逻辑")]),v._v("，客户端之间 "),t("strong",[v._v("无连接共享")]),v._v("，会造成 "),t("strong",[v._v("连接浪费")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"代理分区方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代理分区方案"}},[v._v("#")]),v._v(" 代理分区方案")]),v._v(" "),t("p",[t("strong",[v._v("客户端")]),v._v(" 发送请求到一个 "),t("strong",[v._v("代理组件")]),v._v("，"),t("strong",[v._v("代理")]),v._v(" 解析 "),t("strong",[v._v("客户端")]),v._v(" 的数据，并将请求转发至正确的节点，最后将结果回复给客户端。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("优点")]),v._v("：简化 "),t("strong",[v._v("客户端")]),v._v(" 的分布式逻辑，"),t("strong",[v._v("客户端")]),v._v(" 透明接入，切换成本低，代理的 "),t("strong",[v._v("转发")]),v._v(" 和 "),t("strong",[v._v("存储")]),v._v(" 分离。")]),v._v(" "),t("li",[t("strong",[v._v("缺点")]),v._v("：多了一层 "),t("strong",[v._v("代理层")]),v._v("，加重了 "),t("strong",[v._v("架构部署复杂度")]),v._v(" 和 "),t("strong",[v._v("性能损耗")]),v._v("。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/4/165a4f9e6f8b3a44?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),v._v(" "),t("p",[t("strong",[v._v("代理分区")]),v._v(" 主流实现的有方案有 "),t("code",[v._v("Twemproxy")]),v._v(" 和 "),t("code",[v._v("Codis")]),v._v("。")]),v._v(" "),t("h4",{attrs:{id:"twemproxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#twemproxy"}},[v._v("#")]),v._v(" Twemproxy")]),v._v(" "),t("p",[t("code",[v._v("Twemproxy")]),v._v(" 也叫 "),t("code",[v._v("nutcraker")]),v._v("，是 "),t("code",[v._v("twitter")]),v._v(" 开源的一个 "),t("code",[v._v("redis")]),v._v(" 和 "),t("code",[v._v("memcache")]),v._v(" 的 "),t("strong",[v._v("中间代理服务器")]),v._v(" 程序。"),t("code",[v._v("Twemproxy")]),v._v(" 作为 "),t("strong",[v._v("代理")]),v._v("，可接受来自多个程序的访问，按照 "),t("strong",[v._v("路由规则")]),v._v("，转发给后台的各个 "),t("code",[v._v("Redis")]),v._v(" 服务器，再原路返回。"),t("code",[v._v("Twemproxy")]),v._v(" 存在 "),t("strong",[v._v("单点故障")]),v._v(" 问题，需要结合 "),t("code",[v._v("Lvs")]),v._v(" 和 "),t("code",[v._v("Keepalived")]),v._v(" 做 "),t("strong",[v._v("高可用方案")]),v._v("。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/4/165a4f9e751d0773?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("优点")]),v._v("：应用范围广，稳定性较高，中间代理层 "),t("strong",[v._v("高可用")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("缺点")]),v._v("：无法平滑地 "),t("strong",[v._v("水平扩容/缩容")]),v._v("，无 "),t("strong",[v._v("可视化管理界面")]),v._v("，运维不友好，出现故障，不能 "),t("strong",[v._v("自动转移")]),v._v("。")])]),v._v(" "),t("h4",{attrs:{id:"codis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#codis"}},[v._v("#")]),v._v(" Codis")]),v._v(" "),t("p",[t("code",[v._v("Codis")]),v._v(" 是一个 "),t("strong",[v._v("分布式")]),v._v(" "),t("code",[v._v("Redis")]),v._v(" 解决方案，对于上层应用来说，连接 "),t("code",[v._v("Codis-Proxy")]),v._v(" 和直接连接 "),t("strong",[v._v("原生的")]),v._v(" "),t("code",[v._v("Redis-Server")]),v._v(" 没有的区别。"),t("code",[v._v("Codis")]),v._v(" 底层会 "),t("strong",[v._v("处理请求的转发")]),v._v("，不停机的进行 "),t("strong",[v._v("数据迁移")]),v._v(" 等工作。"),t("code",[v._v("Codis")]),v._v(" 采用了无状态的 "),t("strong",[v._v("代理层")]),v._v("，对于 "),t("strong",[v._v("客户端")]),v._v(" 来说，一切都是透明的。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/4/165a4f9e7509b300?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("优点")])])]),v._v(" "),t("p",[v._v("实现了上层 "),t("code",[v._v("Proxy")]),v._v(" 和底层 "),t("code",[v._v("Redis")]),v._v(" 的 "),t("strong",[v._v("高可用")]),v._v("，"),t("strong",[v._v("数据分片")]),v._v(" 和 "),t("strong",[v._v("自动平衡")]),v._v("，提供 "),t("strong",[v._v("命令行接口")]),v._v(" 和 "),t("code",[v._v("RESTful API")]),v._v("，提供 "),t("strong",[v._v("监控")]),v._v(" 和 "),t("strong",[v._v("管理")]),v._v(" 界面，可以动态 "),t("strong",[v._v("添加")]),v._v(" 和 "),t("strong",[v._v("删除")]),v._v(" "),t("code",[v._v("Redis")]),v._v(" 节点。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("缺点")])])]),v._v(" "),t("p",[t("strong",[v._v("部署架构")]),v._v(" 和 "),t("strong",[v._v("配置")]),v._v(" 复杂，不支持 "),t("strong",[v._v("跨机房")]),v._v(" 和 "),t("strong",[v._v("多租户")]),v._v("，不支持 "),t("strong",[v._v("鉴权管理")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"查询路由方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询路由方案"}},[v._v("#")]),v._v(" 查询路由方案")]),v._v(" "),t("p",[t("strong",[v._v("客户端随机地")]),v._v(" 请求任意一个 "),t("code",[v._v("Redis")]),v._v(" 实例，然后由 "),t("code",[v._v("Redis")]),v._v(" 将请求 "),t("strong",[v._v("转发")]),v._v(" 给 "),t("strong",[v._v("正确")]),v._v(" 的 "),t("code",[v._v("Redis")]),v._v(" 节点。"),t("code",[v._v("Redis Cluster")]),v._v(" 实现了一种 "),t("strong",[v._v("混合形式")]),v._v(" 的 "),t("strong",[v._v("查询路由")]),v._v("，但并不是 "),t("strong",[v._v("直接")]),v._v(" 将请求从一个 "),t("code",[v._v("Redis")]),v._v(" 节点 "),t("strong",[v._v("转发")]),v._v(" 到另一个 "),t("code",[v._v("Redis")]),v._v(" 节点，而是在 "),t("strong",[v._v("客户端")]),v._v(" 的帮助下直接 "),t("strong",[v._v("重定向")]),v._v("（ "),t("code",[v._v("redirected")]),v._v("）到正确的 "),t("code",[v._v("Redis")]),v._v(" 节点。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/4/165a4f9e84b4b379?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("优点")])])]),v._v(" "),t("p",[t("strong",[v._v("无中心节点")]),v._v("，数据按照 "),t("strong",[v._v("槽")]),v._v(" 存储分布在多个 "),t("code",[v._v("Redis")]),v._v(" 实例上，可以平滑的进行节点 "),t("strong",[v._v("扩容/缩容")]),v._v("，支持 "),t("strong",[v._v("高可用")]),v._v(" 和 "),t("strong",[v._v("自动故障转移")]),v._v("，运维成本低。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("缺点")])])]),v._v(" "),t("p",[v._v("严重依赖 "),t("code",[v._v("Redis-trib")]),v._v(" 工具，缺乏 "),t("strong",[v._v("监控管理")]),v._v("，需要依赖 "),t("code",[v._v("Smart Client")]),v._v(" ("),t("strong",[v._v("维护连接")]),v._v("，"),t("strong",[v._v("缓存路由表")]),v._v("，"),t("code",[v._v("MultiOp")]),v._v(" 和 "),t("code",[v._v("Pipeline")]),v._v(" 支持)。"),t("code",[v._v("Failover")]),v._v(" 节点的 "),t("strong",[v._v("检测过慢")]),v._v("，不如 "),t("strong",[v._v("中心节点")]),v._v(" "),t("code",[v._v("ZooKeeper")]),v._v(" 及时。"),t("code",[v._v("Gossip")]),v._v(" 消息具有一定开销。无法根据统计区分 "),t("strong",[v._v("冷热数据")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("官网")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 官网"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis github"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 官方文档中文版"),t("OutboundLink")],1)])])]),v._v(" "),t("li",[t("strong",[v._v("书籍")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《Redis 实战》"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《Redis 设计与实现》"),t("OutboundLink")],1)])])]),v._v(" "),t("li",[t("strong",[v._v("教程")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://redisdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 命令参考"),t("OutboundLink")],1)])])]),v._v(" "),t("li",[t("strong",[v._v("文章")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://ifeve.com/redis-cluster-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 集群教程"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/c869feb5581d",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 集群的原理和搭建"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5b8fc5536fb9a05d2d01fb11",target:"_blank",rel:"noopener noreferrer"}},[v._v("深入剖析 Redis 系列(三) - Redis 集群模式搭建与原理详解"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);