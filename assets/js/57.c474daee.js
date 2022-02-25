(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{507:function(v,_,t){"use strict";t.r(_);var a=t(20),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"redis-复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-复制"}},[v._v("#")]),v._v(" Redis 复制")]),v._v(" "),t("blockquote",[t("p",[v._v("在 Redis 中，"),t("strong",[v._v("可以通过执行 "),t("code",[v._v("SLAVEOF")]),v._v(" 命令或设置 "),t("code",[v._v("slaveof")]),v._v(" 选项，让一个服务器去复制（replicate）另一个服务器")]),v._v("，其中，后者叫主服务器（master），前者叫从服务器（slave）。")]),v._v(" "),t("p",[v._v("Redis 2.8 以前的复制不能高效处理断线后重复制的情况，而 Redis 2.8 新添的部分重同步可以解决这个问题。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200712182603.png",alt:"img"}})]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80%E5%A4%8D%E5%88%B6%E7%AE%80%E4%BB%8B"}},[v._v("一、复制简介")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C%E6%97%A7%E7%89%88%E5%A4%8D%E5%88%B6"}},[v._v("二、旧版复制")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%90%8C%E6%AD%A5"}},[v._v("同步")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E5%91%BD%E4%BB%A4%E4%BC%A0%E6%92%AD"}},[v._v("命令传播")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%97%A7%E7%89%88%E5%A4%8D%E5%88%B6%E7%9A%84%E7%BC%BA%E9%99%B7"}},[v._v("旧版复制的缺陷")])])])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89%E6%96%B0%E7%89%88%E5%A4%8D%E5%88%B6"}},[v._v("三、新版复制")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E9%83%A8%E5%88%86%E9%87%8D%E5%90%8C%E6%AD%A5"}},[v._v("部分重同步")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#psync-%E5%91%BD%E4%BB%A4"}},[v._v("PSYNC 命令")])])])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E5%BF%83%E8%B7%B3%E6%A3%80%E6%B5%8B"}},[v._v("四、心跳检测")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E6%A3%80%E6%B5%8B%E4%B8%BB%E4%BB%8E%E8%BF%9E%E6%8E%A5%E7%8A%B6%E6%80%81"}},[v._v("检测主从连接状态")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E8%BE%85%E5%8A%A9%E5%AE%9E%E7%8E%B0-min-slaves-%E9%80%89%E9%A1%B9"}},[v._v("辅助实现 min-slaves 选项")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%A3%80%E6%B5%8B%E5%91%BD%E4%BB%A4%E4%B8%A2%E5%A4%B1"}},[v._v("检测命令丢失")])])])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%94%E5%A4%8D%E5%88%B6%E7%9A%84%E6%B5%81%E7%A8%8B"}},[v._v("五、复制的流程")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E6%AD%A5%E9%AA%A4-1-%E8%AE%BE%E7%BD%AE%E4%B8%BB%E4%BB%8E%E6%9C%8D%E5%8A%A1%E5%99%A8"}},[v._v("步骤 1. 设置主从服务器")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%AD%A5%E9%AA%A4-2-%E4%B8%BB%E4%BB%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BB%BA%E7%AB%8B-tcp-%E8%BF%9E%E6%8E%A5"}},[v._v("步骤 2. 主从服务器建立 TCP 连接。")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%AD%A5%E9%AA%A4-3-%E5%8F%91%E9%80%81-ping-%E6%A3%80%E6%9F%A5%E9%80%9A%E4%BF%A1%E7%8A%B6%E6%80%81"}},[v._v("步骤 3. 发送 PING 检查通信状态。")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%AD%A5%E9%AA%A4-4-%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81"}},[v._v("步骤 4. 身份验证。")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%AD%A5%E9%AA%A4-5-%E5%8F%91%E9%80%81%E7%AB%AF%E5%8F%A3%E4%BF%A1%E6%81%AF"}},[v._v("步骤 5. 发送端口信息。")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%AD%A5%E9%AA%A4-6-%E5%90%8C%E6%AD%A5"}},[v._v("步骤 6. 同步。")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E6%AD%A5%E9%AA%A4-7-%E5%91%BD%E4%BB%A4%E4%BC%A0%E6%92%AD"}},[v._v("步骤 7. 命令传播。")])])])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AD%E5%A4%8D%E5%88%B6%E7%9A%84%E9%85%8D%E7%BD%AE%E9%A1%B9"}},[v._v("六、复制的配置项")])]),v._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[v._v("参考资料")])])]),v._v(" "),t("h2",{attrs:{id:"一、复制简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、复制简介"}},[v._v("#")]),v._v(" 一、复制简介")]),v._v(" "),t("p",[v._v("Redis 通过 "),t("code",[v._v("slaveof host port")]),v._v(" 命令来让一个服务器成为另一个服务器的从服务器。")]),v._v(" "),t("p",[t("strong",[v._v("一个主服务器可以有多个从服务器")]),v._v("。不仅主服务器可以有从服务器，从服务器也可以有自己的从服务器， 多个从服务器之间可以构成一个主从链。")]),v._v(" "),t("p",[t("strong",[v._v("一个从服务器只能有一个主服务器，并且不支持主主复制")]),v._v("。")]),v._v(" "),t("p",[v._v("可以通过复制功能来让主服务器免于执行持久化操作： 只要关闭主服务器的持久化功能， 然后由从服务器去执行持久化操作即可。")]),v._v(" "),t("p",[v._v("在使用 Redis 复制功能时的设置中，强烈建议在 master 和在 slave 中启用持久化。当不启用时，例如由于非常慢的磁盘性能而导致的延迟问题，"),t("strong",[v._v("应该配置实例来避免重置后自动重启")]),v._v("。")]),v._v(" "),t("p",[v._v("从 Redis 2.6 开始， 从服务器支持只读模式， 并且该模式为从服务器的默认模式。")]),v._v(" "),t("ul",[t("li",[v._v("只读模式由 "),t("code",[v._v("redis.conf")]),v._v(" 文件中的 "),t("code",[v._v("slave-read-only")]),v._v(" 选项控制， 也可以通过 "),t("a",{attrs:{href:"http://redisdoc.com/configure/config_set.html#config-set",target:"_blank",rel:"noopener noreferrer"}},[v._v("CONFIG SET parameter value"),t("OutboundLink")],1),v._v(" 命令来开启或关闭这个模式。")]),v._v(" "),t("li",[v._v("只读从服务器会拒绝执行任何写命令， 所以不会出现因为操作失误而将数据不小心写入到了从服务器的情况。")])]),v._v(" "),t("h2",{attrs:{id:"二、旧版复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、旧版复制"}},[v._v("#")]),v._v(" 二、旧版复制")]),v._v(" "),t("blockquote",[t("p",[v._v("Redis 2.8 版本以前实现方式："),t("code",[v._v("SYNC")]),v._v(" 命令")])]),v._v(" "),t("p",[v._v("Redis 的复制功能分为同步（sync）和命令传播（command propagate）两个操作：")]),v._v(" "),t("ul",[t("li",[t("strong",[t("code",[v._v("同步（sync）")])]),v._v(" - 用于将从服务器的数据库状态更新至主服务器当前的数据库状态。")]),v._v(" "),t("li",[t("strong",[t("code",[v._v("命令传播（command propagate）")])]),v._v(" - 当主服务器的数据库状态被修改，导致主从数据库状态不一致时，让主从服务器的数据库重新回到一致状态。")])]),v._v(" "),t("h3",{attrs:{id:"同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[v._v("#")]),v._v(" 同步")]),v._v(" "),t("p",[t("code",[v._v("SYNC")]),v._v(" 命令的执行步骤：")]),v._v(" "),t("ol",[t("li",[v._v("从服务器向主服务器发送 "),t("code",[v._v("SYNC")]),v._v(" 命令。")]),v._v(" "),t("li",[v._v("收到 "),t("code",[v._v("SYNC")]),v._v(" 命令的主服务器执行 "),t("code",[v._v("BGSAVE")]),v._v(" 命令，在后台生成一个 RDB 文件，并使用一个缓冲区记录从现在开始执行的所有写命令。")]),v._v(" "),t("li",[v._v("主服务器执行 "),t("code",[v._v("BGSAVE")]),v._v(" 完毕后，主服务器会将生成的 RDB 文件发送给从服务器。从服务器接收并载入 RDB 文件，更新自己的数据库状态。")]),v._v(" "),t("li",[v._v("主服务器将记录在缓冲区中的所有写命令发送给从服务器，从服务器执行这些写命令，更新自己的数据库状态。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200224220353.png",alt:"img"}})]),v._v(" "),t("h3",{attrs:{id:"命令传播"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令传播"}},[v._v("#")]),v._v(" 命令传播")]),v._v(" "),t("p",[v._v("同步操作完成后，主从数据库的数据库状态将达到一致。每当主服务器执行客户端发送的写命令时，主从数据库状态不再一致。需要将写命令发送给从服务器执行，使得二者的数据库状态重新达到一致。")]),v._v(" "),t("h3",{attrs:{id:"旧版复制的缺陷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#旧版复制的缺陷"}},[v._v("#")]),v._v(" 旧版复制的缺陷")]),v._v(" "),t("p",[v._v("从服务器对主服务器的复制存在两种情况：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("初次复制")]),v._v(" - 从服务器以前没有复制过将要复制的主服务器。")]),v._v(" "),t("li",[t("strong",[v._v("断线后重复制")]),v._v(" - 处于命令传播阶段的主从服务器因为网络原因而中断了复制，当从服务器通过自动重连重新连上了主服务器后，继续复制主服务器。")])]),v._v(" "),t("p",[v._v("对于初次复制，旧版复制功能可用很好完成任务；但是"),t("strong",[v._v("对于断线后重复制，由于每次任然需要生成 RDB 并传输，效率很低")]),v._v("。")]),v._v(" "),t("blockquote",[t("p",[v._v("🔔 注意："),t("strong",[v._v("SYNC 命令是一个非常耗费资源的操作。")])]),v._v(" "),t("ul",[t("li",[v._v("主服务器执行 "),t("code",[v._v("BGSAVE")]),v._v(" 命令生成 RDB 文件，这个操作会耗费主服务器大量的 CPU、内存和磁盘 I/O 资源。")]),v._v(" "),t("li",[v._v("主服务器传输 RDB 文件给从服务器，这个操作会耗费主从服务器大量的网络资源，并对主服务器响应时延产生影响。")]),v._v(" "),t("li",[v._v("从服务器载入 RDB 文件期间，会阻塞其他命令请求。")])])]),v._v(" "),t("h2",{attrs:{id:"三、新版复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、新版复制"}},[v._v("#")]),v._v(" 三、新版复制")]),v._v(" "),t("blockquote",[t("p",[v._v("Redis 2.8 版本以后的新实现方式：使用 "),t("code",[v._v("PSYNC")]),v._v(" 命令替代 "),t("code",[v._v("SYNC")]),v._v(" 命令。")])]),v._v(" "),t("p",[t("code",[v._v("PSYNC")]),v._v(" 命令具有完整重同步和部分重同步两种模式：")]),v._v(" "),t("ul",[t("li",[t("strong",[t("code",[v._v("完整重同步（full resychronization）")])]),v._v(" - 用于初次复制。执行步骤与 "),t("code",[v._v("SYNC")]),v._v(" 命令基本一致。")]),v._v(" "),t("li",[t("strong",[t("code",[v._v("部分重同步（partial resychronization）")])]),v._v(" - 用于断线后重复制。"),t("strong",[v._v("如果条件允许，主服务器可以将主从服务器连接断开期间执行的写命令发送给从服务器")]),v._v("，从服务器只需接收并执行这些写命令，即可将主从服务器的数据库状态保持一致。")])]),v._v(" "),t("h3",{attrs:{id:"部分重同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部分重同步"}},[v._v("#")]),v._v(" 部分重同步")]),v._v(" "),t("p",[v._v("部分重同步功能实现由三个部分构成：")]),v._v(" "),t("ul",[t("li",[v._v("主从服务器的"),t("strong",[v._v("复制偏移量（replication offset）")])]),v._v(" "),t("li",[v._v("主服务器的"),t("strong",[v._v("复制积压缓冲区（replication backlog）")])]),v._v(" "),t("li",[t("strong",[v._v("服务器的运行 ID")])])]),v._v(" "),t("h4",{attrs:{id:"复制偏移量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制偏移量"}},[v._v("#")]),v._v(" 复制偏移量")]),v._v(" "),t("p",[v._v("主服务器和从服务器会分别维护一个复制偏移量。")]),v._v(" "),t("ul",[t("li",[v._v("如果主从服务器的复制偏移量相同，则说明二者的数据库状态一致；")]),v._v(" "),t("li",[v._v("反之，则说明二者的数据库状态不一致。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/cs/database/redis/redis-replication-offset.png",alt:"img"}})]),v._v(" "),t("h4",{attrs:{id:"复制积压缓冲区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制积压缓冲区"}},[v._v("#")]),v._v(" 复制积压缓冲区")]),v._v(" "),t("p",[t("strong",[v._v("复制积压缓冲区是主服务器维护的一个固定长度的先进先出（FIFO）队列")]),v._v("，默认大小为 "),t("code",[v._v("1MB")]),v._v("。")]),v._v(" "),t("p",[v._v("复制积压缓冲区会保存一部分最近传播的写命令，并且复制积压缓冲区会为队列中的每个字节记录相应的复制偏移量。")]),v._v(" "),t("p",[v._v("当从服务器断线重连主服务时，从服务器会通过 "),t("code",[v._v("PSYNC")]),v._v(" 命令将自己的复制偏移量 offset 发送给主服务器，主服务器会根据这个复制偏移量来决定对从服务器执行何种同步操作。")]),v._v(" "),t("ul",[t("li",[v._v("如果 offset 之后的数据仍然在复制积压缓冲区，则主服务器对从服务器执行部分重同步操作。")]),v._v(" "),t("li",[v._v("反之，则主服务器对从服务器执行完整重同步操作。")])]),v._v(" "),t("blockquote",[t("p",[v._v("🔔 注意："),t("strong",[v._v("合理调整复制积压缓冲区的大小")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Redis 复制积压缓冲区默认大小为 "),t("code",[v._v("1MB")]),v._v("。")])]),v._v(" "),t("li",[t("p",[v._v("复制积压缓冲区的最小大小可以根据公式 "),t("code",[v._v("second * write_size_per_second")]),v._v(" 估算。")])])])]),v._v(" "),t("h4",{attrs:{id:"服务器的运行-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器的运行-id"}},[v._v("#")]),v._v(" 服务器的运行 ID")]),v._v(" "),t("ul",[t("li",[v._v("每个 Redis 服务器，都有运行 ID，用于唯一识别身份。")]),v._v(" "),t("li",[v._v("运行 ID 在服务器启动时自动生成，由 40 个随机的十六进制字符组成。例如：132e358005e29741f8d7b0a42d666aace286edda")])]),v._v(" "),t("p",[v._v("从服务器对主服务器进行初次复制时，主服务器会将自己的运行 ID 传送给从服务器，从服务器会将这个运行 ID 保存下来。")]),v._v(" "),t("p",[v._v("当从服务器断线重连一个主服务器时，从服务器会发送之前保存的运行 ID：")]),v._v(" "),t("ul",[t("li",[v._v("如果保存的运行 ID 和当前主服务器的运行 ID 一致，则说明从服务器断线之前连接的就是这个主服务器，主服务器可以继续尝试执行部分重同步操作；")]),v._v(" "),t("li",[v._v("反之，若运行 ID 不一致，则说明从服务器断线之前连接的不是这个主服务器，主服务器将对从服务器执行完整重同步操作。")])]),v._v(" "),t("h3",{attrs:{id:"psync-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#psync-命令"}},[v._v("#")]),v._v(" PSYNC 命令")]),v._v(" "),t("p",[v._v("了解了部分重同步的实现，PSYNC 的实现就很容易理解了，它的基本工作原理大致如下：")]),v._v(" "),t("p",[v._v("当从服务接收到 "),t("code",[v._v("SLAVEOF")]),v._v(" 命令时，先判断从服务器以前是否执行过复制操作。")]),v._v(" "),t("ul",[t("li",[v._v("如果没有复制过任何主服务器，向要复制的主服务器"),t("strong",[v._v("发送 "),t("code",[v._v("PSYNC ? -1")]),v._v(" 命令，主动请求进行完整重同步")]),v._v("。")]),v._v(" "),t("li",[v._v("反之，向要复制的主服务器发送 "),t("code",[v._v("PSYNC <runid> <offset>")]),v._v(" 命令。\n"),t("ul",[t("li",[t("code",[v._v("runid")]),v._v(" 是上一次复制的主服务器的运行 ID。")]),v._v(" "),t("li",[t("code",[v._v("offset")]),v._v(" 是复制偏移量。")])])])]),v._v(" "),t("p",[v._v("接收到 "),t("code",[v._v("PSYNC <runid> <offset>")]),v._v(" 命令的主服务会进行分析：")]),v._v(" "),t("ul",[t("li",[v._v("假如主从服务器的 "),t("strong",[v._v("master run id 相同")]),v._v("，并且"),t("strong",[v._v("指定的偏移量（offset）在内存缓冲区中还有效")]),v._v("，复制就会从上次中断的点开始继续。")]),v._v(" "),t("li",[v._v("如果其中一个条件不满足，就会进行完全重新同步（在 2.8 版本之前就是直接进行完全重新同步）。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/cs/database/redis/redis-psync-workflow.png",alt:"img"}})]),v._v(" "),t("h2",{attrs:{id:"四、心跳检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、心跳检测"}},[v._v("#")]),v._v(" 四、心跳检测")]),v._v(" "),t("p",[v._v("在"),t("strong",[v._v("命令传播")]),v._v("阶段，从服务器默认会以"),t("strong",[v._v("每秒一次")]),v._v("的频率，向主服务器发送命令：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("REPLCONF ACK <replication_offset>\n")])])]),t("p",[v._v("其中，"),t("code",[v._v("replication_offset")]),v._v(" 是从服务器当前的复制偏移量。")]),v._v(" "),t("p",[v._v("发送 "),t("code",[v._v("REPLCONF ACK")]),v._v(" 命令对于主从服务器有三个作用：")]),v._v(" "),t("ul",[t("li",[v._v("检测主从服务器的网络连接状态。")]),v._v(" "),t("li",[v._v("辅助实现 min-slaves 选项。")]),v._v(" "),t("li",[v._v("检测命令丢失。")])]),v._v(" "),t("h3",{attrs:{id:"检测主从连接状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测主从连接状态"}},[v._v("#")]),v._v(" 检测主从连接状态")]),v._v(" "),t("p",[t("strong",[v._v("可以通过发送和接收 "),t("code",[v._v("REPLCONF ACK")]),v._v(" 命令来检查主从服务器之间的网络连接")]),v._v("是否正常：如果主服务器超过一秒没有收到从服务器发来的 "),t("code",[v._v("REPLCONF ACK")]),v._v(" 命令，那么主服务器就知道主从服务器之间的连接出现问题了。")]),v._v(" "),t("p",[v._v("可以通过向主服务器发送 "),t("code",[v._v("INFO replication")]),v._v(" 命令，在列出的从服务器列表的 lag 一栏中，可以看到从服务器向主服务器发送 "),t("code",[v._v("REPLCONF ACK")]),v._v(" 命令已经过去多少秒。")]),v._v(" "),t("h3",{attrs:{id:"辅助实现-min-slaves-选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#辅助实现-min-slaves-选项"}},[v._v("#")]),v._v(" 辅助实现 min-slaves 选项")]),v._v(" "),t("p",[v._v("Redis 的 "),t("strong",[t("code",[v._v("min-slaves-to-write")]),v._v(" 和 "),t("code",[v._v("min-slaves-max-lag")]),v._v(" 两个选项可以防止主服务器在不安全的情况下执行写命令")]),v._v("。")]),v._v(" "),t("p",[v._v("【示例】min-slaves 配置项")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("min-slaves-to-write 3\nmin-slaves-max-lag 10\n")])])]),t("p",[v._v("以上配置表示：从服务器小于 3 个，或三个从服务器的延迟（lag）都大于等于 10 秒时，主服务器将拒绝执行写命令。")]),v._v(" "),t("h3",{attrs:{id:"检测命令丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测命令丢失"}},[v._v("#")]),v._v(" 检测命令丢失")]),v._v(" "),t("p",[v._v("如果因为网络故障，主服务传播给从服务器的写命令丢失，那么从服务器定时向主服务器发送  "),t("code",[v._v("REPLCONF ACK")]),v._v(" 命令时，主服务器将发觉从服务器的复制偏移量少于自己的。然后，主服务器就会根据从服务器提交的复制偏移量，在复制积压缓冲区中找到从服务器缺少的数据，并将这些数据重新发送给从服务器。")]),v._v(" "),t("h2",{attrs:{id:"五、复制的流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、复制的流程"}},[v._v("#")]),v._v(" 五、复制的流程")]),v._v(" "),t("p",[v._v("通过向从服务器发送如下 SLAVEOF 命令，可以让一个从服务器去复制一个主服务器。")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("SLAVEOF <master_ip> <master_port>\n")])])]),t("h3",{attrs:{id:"步骤-1-设置主从服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-设置主从服务器"}},[v._v("#")]),v._v(" 步骤 1. 设置主从服务器")]),v._v(" "),t("p",[v._v("配置一个从服务器非常简单， 只要在配置文件中增加以下的这一行就可以了：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("slaveof 127.0.0.1 6379\n")])])]),t("p",[v._v("当然， 你需要将代码中的 "),t("code",[v._v("127.0.0.1")]),v._v(" 和 "),t("code",[v._v("6379")]),v._v(" 替换成你的主服务器的 IP 和端口号。")]),v._v(" "),t("p",[v._v("另外一种方法是调用 "),t("a",{attrs:{href:"http://redisdoc.com/replication/slaveof.html#slaveof",target:"_blank",rel:"noopener noreferrer"}},[v._v("SLAVEOF host port"),t("OutboundLink")],1),v._v(" 命令， 输入主服务器的 IP 和端口， 然后同步就会开始：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("127.0.0.1:6379> SLAVEOF 127.0.0.1 10086\nOK\n")])])]),t("h3",{attrs:{id:"步骤-2-主从服务器建立-tcp-连接。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-主从服务器建立-tcp-连接。"}},[v._v("#")]),v._v(" 步骤 2. 主从服务器建立 TCP 连接。")]),v._v(" "),t("h3",{attrs:{id:"步骤-3-发送-ping-检查通信状态。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-发送-ping-检查通信状态。"}},[v._v("#")]),v._v(" 步骤 3. 发送 PING 检查通信状态。")]),v._v(" "),t("h3",{attrs:{id:"步骤-4-身份验证。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-4-身份验证。"}},[v._v("#")]),v._v(" 步骤 4. 身份验证。")]),v._v(" "),t("p",[v._v("如果主服务器没有设置 "),t("code",[v._v("requirepass")]),v._v(" ，从服务器没有设置 "),t("code",[v._v("masterauth")]),v._v("，则不进行身份验证；反之，则需要进行身份验证。如果身份验证失败，则放弃执行复制工作。")]),v._v(" "),t("p",[v._v("如果主服务器通过 "),t("code",[v._v("requirepass")]),v._v(" 选项设置了密码， 那么为了让从服务器的同步操作可以顺利进行， 我们也必须为从服务器进行相应的身份验证设置。")]),v._v(" "),t("p",[v._v("对于一个正在运行的服务器， 可以使用客户端输入以下命令：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("config set masterauth <password>\n")])])]),t("p",[v._v("要永久地设置这个密码， 那么可以将它加入到配置文件中：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("masterauth <password>\n")])])]),t("p",[v._v("另外还有几个选项， 它们和主服务器执行部分重同步时所使用的复制流缓冲区有关， 详细的信息可以参考 Redis 源码中附带的 "),t("code",[v._v("redis.conf")]),v._v(" 示例文件。")]),v._v(" "),t("h3",{attrs:{id:"步骤-5-发送端口信息。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-5-发送端口信息。"}},[v._v("#")]),v._v(" 步骤 5. 发送端口信息。")]),v._v(" "),t("p",[v._v("从服务器执行 "),t("code",[v._v("REPLCONF listening-port <port-number>")]),v._v(" ，向主服务器发送从服务器的监听端口号。")]),v._v(" "),t("h3",{attrs:{id:"步骤-6-同步。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-6-同步。"}},[v._v("#")]),v._v(" 步骤 6. 同步。")]),v._v(" "),t("p",[v._v("前文已介绍，此处不赘述。")]),v._v(" "),t("h3",{attrs:{id:"步骤-7-命令传播。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-7-命令传播。"}},[v._v("#")]),v._v(" 步骤 7. 命令传播。")]),v._v(" "),t("p",[v._v("在命令传播阶段，从服务器默认会以每秒一次的频率，向主服务发送命令：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("REPLCONF ACK <replication_coffset>\n")])])]),t("p",[v._v("命令的作用：")]),v._v(" "),t("ul",[t("li",[v._v("检测主从服务器的网络连接状态。")]),v._v(" "),t("li",[v._v("辅助实现 min-slave 选项。")]),v._v(" "),t("li",[v._v("检测命令丢失。")])]),v._v(" "),t("h2",{attrs:{id:"六、复制的配置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、复制的配置项"}},[v._v("#")]),v._v(" 六、复制的配置项")]),v._v(" "),t("p",[v._v("从 Redis 2.8 开始， 为了保证数据的安全性， 可以通过配置， 让主服务器只在有至少 N 个当前已连接从服务器的情况下， 才执行写命令。")]),v._v(" "),t("p",[v._v("不过， 因为 Redis 使用异步复制， 所以主服务器发送的写数据并不一定会被从服务器接收到， 因此， 数据丢失的可能性仍然是存在的。")]),v._v(" "),t("p",[v._v("以下是这个特性的运作原理：")]),v._v(" "),t("ul",[t("li",[v._v("从服务器以每秒一次的频率 PING 主服务器一次， 并报告复制流的处理情况。")]),v._v(" "),t("li",[v._v("主服务器会记录各个从服务器最后一次向它发送 PING 的时间。")]),v._v(" "),t("li",[v._v("用户可以通过配置， 指定网络延迟的最大值 "),t("code",[v._v("min-slaves-max-lag")]),v._v(" ， 以及执行写操作所需的至少从服务器数量 "),t("code",[v._v("min-slaves-to-write")]),v._v(" 。")])]),v._v(" "),t("p",[v._v("如果至少有 "),t("code",[v._v("min-slaves-to-write")]),v._v(" 个从服务器， 并且这些服务器的延迟值都少于 "),t("code",[v._v("min-slaves-max-lag")]),v._v("秒， 那么主服务器就会执行客户端请求的写操作。")]),v._v(" "),t("p",[v._v("你可以将这个特性看作 CAP 理论中的 C 的条件放宽版本： 尽管不能保证写操作的持久性， 但起码丢失数据的窗口会被严格限制在指定的秒数中。")]),v._v(" "),t("p",[v._v("另一方面， 如果条件达不到 "),t("code",[v._v("min-slaves-to-write")]),v._v(" 和 "),t("code",[v._v("min-slaves-max-lag")]),v._v(" 所指定的条件， 那么写操作就不会被执行， 主服务器会向请求执行写操作的客户端返回一个错误。")]),v._v(" "),t("p",[v._v("以下是这个特性的两个选项和它们所需的参数：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("min-slaves-to-write <number of slaves>")])]),v._v(" "),t("li",[t("code",[v._v("min-slaves-max-lag <number of seconds>")])])]),v._v(" "),t("p",[v._v("详细的信息可以参考 Redis 源码中附带的 "),t("code",[v._v("redis.conf")]),v._v(" 示例文件。")]),v._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("官网")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 官网"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis github"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 官方文档中文版"),t("OutboundLink")],1)])])]),v._v(" "),t("li",[t("strong",[v._v("书籍")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《Redis 实战》"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《Redis 设计与实现》"),t("OutboundLink")],1)])])]),v._v(" "),t("li",[t("strong",[v._v("教程")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://redisdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Redis 命令参考"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);