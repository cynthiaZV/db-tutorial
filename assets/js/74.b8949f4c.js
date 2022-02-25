(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{504:function(t,r,a){"use strict";a.r(r);var s=a(20),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-工作流"}},[t._v("#")]),t._v(" MySQL 工作流")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-%E5%9F%BA%E7%A1%80%E6%9E%B6%E6%9E%84"}},[t._v("1. 基础架构")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2-%E6%9F%A5%E8%AF%A2%E8%BF%87%E7%A8%8B"}},[t._v("2. 查询过程")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#21-%E4%B8%80%E8%BF%9E%E6%8E%A5"}},[t._v("2.1. （一）连接")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#22-%E4%BA%8C%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98"}},[t._v("2.2. （二）查询缓存")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#23-%E4%B8%89%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90"}},[t._v("2.3. （三）语法分析")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#24-%E5%9B%9B%E6%9F%A5%E8%AF%A2%E4%BC%98%E5%8C%96"}},[t._v("2.4. （四）查询优化")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#25-%E4%BA%94%E6%9F%A5%E8%AF%A2%E6%89%A7%E8%A1%8C%E5%BC%95%E6%93%8E"}},[t._v("2.5. （五）查询执行引擎")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#26-%E5%85%AD%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C"}},[t._v("2.6. （六）返回结果")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3-%E6%9B%B4%E6%96%B0%E8%BF%87%E7%A8%8B"}},[t._v("3. 更新过程")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#31-redo-log"}},[t._v("3.1. redo log")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#32-bin-log"}},[t._v("3.2. bin log")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#33-redo-log-vs-bin-log"}},[t._v("3.3. redo log vs. bin log")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#34-%E4%B8%A4%E9%98%B6%E6%AE%B5%E6%8F%90%E4%BA%A4"}},[t._v("3.4. 两阶段提交")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#4-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("4. 参考资料")])])]),t._v(" "),a("h2",{attrs:{id:"_1-基础架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础架构"}},[t._v("#")]),t._v(" 1. 基础架构")]),t._v(" "),a("p",[t._v("大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。")]),t._v(" "),a("p",[a("strong",[t._v("Server 层包括连接器、查询缓存、分析器、优化器、执行器等")]),t._v("，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。")]),t._v(" "),a("p",[a("strong",[t._v("存储引擎层负责数据的存储和提取")]),t._v("。其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认存储引擎。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200227201908.jpg",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"_2-查询过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查询过程"}},[t._v("#")]),t._v(" 2. 查询过程")]),t._v(" "),a("p",[t._v("SQL 语句在 MySQL 中是如何执行的？")]),t._v(" "),a("p",[t._v("MySQL 整个查询执行过程，总的来说分为 6 个步骤：")]),t._v(" "),a("ol",[a("li",[t._v("客户端和 MySQL 服务器建立连接；客户端向 MySQL 服务器发送一条查询请求。")]),t._v(" "),a("li",[t._v("MySQL 服务器首先检查查询缓存，如果命中缓存，则立刻返回结果。否则进入下一阶段。")]),t._v(" "),a("li",[t._v("MySQL 服务器进行 SQL 分析：语法分析、词法分析。")]),t._v(" "),a("li",[t._v("MySQL 服务器用优化器生成对应的执行计划。")]),t._v(" "),a("li",[t._v("MySQL 服务器根据执行计划，调用存储引擎的 API 来执行查询。")]),t._v(" "),a("li",[t._v("MySQL 服务器将结果返回给客户端，同时缓存查询结果。")])]),t._v(" "),a("h3",{attrs:{id:"_2-1-一-连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-一-连接"}},[t._v("#")]),t._v(" 2.1. （一）连接")]),t._v(" "),a("p",[t._v("使用 MySQL 第一步自然是要连接数据库。")]),t._v(" "),a("p",[t._v("MySQL 客户端/服务端通信是"),a("strong",[t._v("半双工模式")]),t._v("：即任一时刻，要么是服务端向客户端发送数据，要么是客户端向服务器发送数据。客户端用一个单独的数据包将查询请求发送给服务器，所以当查询语句很长的时候，需要设置"),a("code",[t._v("max_allowed_packet")]),t._v("参数。但是需要注意的是，如果查询实在是太大，服务端会拒绝接收更多数据并抛出异常。")]),t._v(" "),a("p",[t._v("MySQL 客户端连接命令："),a("code",[t._v("mysql -h<主机> -P<端口> -u<用户名> -p<密码>")]),t._v("。如果没有显式指定密码，会要求输入密码才能访问。")]),t._v(" "),a("p",[t._v("连接完成后，如果你没有后续的动作，这个连接就处于空闲状态，你可以在 "),a("code",[t._v("show processlist")]),t._v(" 命令中看到它。客户端如果太长时间没动静，连接器就会自动将它断开。"),a("strong",[t._v("客户端连接维持时间是由参数 "),a("code",[t._v("wait_timeout")]),t._v(" 控制的，默认值是 8 小时")]),t._v("。如果在连接被断开之后，客户端再次发送请求的话，就会收到一个错误提醒： "),a("code",[t._v("Lost connection to MySQL server during query")]),t._v("。这时候如果你要继续，就需要重连，然后再执行请求了。")]),t._v(" "),a("p",[t._v("建立连接的过程通常是比较复杂的，建议在使用中要尽量减少建立连接的动作，也就是尽量使用长连接。为了在程序中提高数据库连接的服用了，一般会使用数据库连接池来维护管理。")]),t._v(" "),a("p",[t._v("但是全部使用长连接后，你可能会发现，有些时候 MySQL 占用内存涨得特别快，这是因为 MySQL 在执行过程中临时使用的内存是管理在连接对象里面的。这些资源会在连接断开的时候才释放。所以如果长连接累积下来，可能导致内存占用太大，被系统强行杀掉（OOM），从现象看就是 MySQL 异常重启了。")]),t._v(" "),a("p",[t._v("怎么解决这个问题呢？你可以考虑以下两种方案。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("定期断开长连接")]),t._v("。使用一段时间，或者程序里面判断执行过一个占用内存的大查询后，断开连接，之后要查询再重连。")]),t._v(" "),a("li",[t._v("如果你用的是 MySQL 5.7 或更新版本，可以在每次执行一个比较大的操作后，通过执行 "),a("code",[t._v("mysql_reset_connection")]),t._v(" 来重新初始化连接资源。这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状态。")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-二-查询缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-二-查询缓存"}},[t._v("#")]),t._v(" 2.2. （二）查询缓存")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("不建议使用数据库缓存，因为往往弊大于利")]),t._v("。")])]),t._v(" "),a("p",[t._v("解析一个查询语句前，如果查询缓存是打开的，那么 MySQL 会检查这个查询语句是否命中查询缓存中的数据。如果当前查询恰好命中查询缓存，在检查一次用户权限后直接返回缓存中的结果。这种情况下，查询不会被解析，也不会生成执行计划，更不会执行。")]),t._v(" "),a("p",[t._v("MySQL 将缓存存放在一个引用表（不要理解成"),a("code",[t._v("table")]),t._v("，可以认为是类似于"),a("code",[t._v("HashMap")]),t._v("的数据结构），通过一个哈希值索引，这个哈希值通过查询本身、当前要查询的数据库、客户端协议版本号等一些可能影响结果的信息计算得来。所以两个查询在任何字符上的不同（例如：空格、注释），都会导致缓存不会命中。")]),t._v(" "),a("p",[a("strong",[t._v("如果查询中包含任何用户自定义函数、存储函数、用户变量、临时表、mysql 库中的系统表，其查询结果")]),t._v(" "),a("strong",[t._v("都不会被缓存")]),t._v("。比如函数"),a("code",[t._v("NOW()")]),t._v("或者"),a("code",[t._v("CURRENT_DATE()")]),t._v("会因为不同的查询时间，返回不同的查询结果，再比如包含"),a("code",[t._v("CURRENT_USER")]),t._v("或者"),a("code",[t._v("CONNECION_ID()")]),t._v("的查询语句会因为不同的用户而返回不同的结果，将这样的查询结果缓存起来没有任何的意义。")]),t._v(" "),a("p",[a("strong",[t._v("不建议使用数据库缓存，因为往往弊大于利")]),t._v("。查询缓存的失效非常频繁，只要有对一个表的更新，这个表上所有的查询缓存都会被清空。因此很可能你费劲地把结果存起来，还没使用呢，就被一个更新全清空了。对于更新压力大的数据库来说，查询缓存的命中率会非常低。除非你的业务就是有一张静态表，很长时间才会更新一次。比如，一个系统配置表，那这张表上的查询才适合使用查询缓存。")]),t._v(" "),a("p",[t._v("好在 MySQL 也提供了这种“按需使用”的方式。你可以将参数 "),a("code",[t._v("query_cache_type")]),t._v(" 设置成 "),a("code",[t._v("DEMAND")]),t._v("，这样对于默认的 SQL 语句都不使用查询缓存。而对于你确定要使用查询缓存的语句，可以用 "),a("code",[t._v("SQL_CACHE")]),t._v(" 显式指定，像下面这个语句一样：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" SQL_CACHE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" T "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注意：MySQL 8.0 版本直接将查询缓存的整块功能删掉了。")])]),t._v(" "),a("h3",{attrs:{id:"_2-3-三-语法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-三-语法分析"}},[t._v("#")]),t._v(" 2.3. （三）语法分析")]),t._v(" "),a("p",[t._v("如果没有命中查询缓存，就要开始真正执行语句了。首先，MySQL 需要知道你要做什么，因此需要对 SQL 语句做解析。MySQL 通过关键字对 SQL 语句进行解析，并生成一颗对应的语法解析树。这个过程中，分析器主要通过语法规则来验证和解析。比如 SQL 中是否使用了错误的关键字或者关键字的顺序是否正确等等。预处理则会根据 MySQL 规则进一步检查解析树是否合法。比如检查要查询的数据表和数据列是否存在等等。")]),t._v(" "),a("ul",[a("li",[t._v("分析器先会先做“"),a("strong",[t._v("词法分析")]),t._v('”。你输入的是由多个字符串和空格组成的一条 SQL 语句，MySQL 需要识别出里面的字符串分别是什么，代表什么。MySQL 从你输入的"select"这个关键字识别出来，这是一个查询语句。它也要把字符串“T”识别成“表名 T”，把字符串“ID”识别成“列 ID”。')]),t._v(" "),a("li",[t._v("接下来，要做“"),a("strong",[t._v("语法分析")]),t._v("”。根据词法分析的结果，语法分析器会根据语法规则，判断你输入的这个 SQL 语句是否满足 MySQL 语法。如果你的语句不对，就会收到“You have an error in your SQL syntax”的错误提醒，比如下面这个语句 select 少打了开头的字母“s”。")])]),t._v(" "),a("h3",{attrs:{id:"_2-4-四-查询优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-四-查询优化"}},[t._v("#")]),t._v(" 2.4. （四）查询优化")]),t._v(" "),a("p",[t._v("经过了分析器，MySQL 就知道你要做什么了。在开始执行之前，还要先经过优化器的处理。")]),t._v(" "),a("p",[t._v("经过前面的步骤生成的语法树被认为是合法的了，并且由优化器将其转化成执行计划。多数情况下，一条查询可以有很多种执行方式，最后都返回相应的结果。优化器的作用就是找到这其中最好的执行计划。")]),t._v(" "),a("p",[t._v("MySQL 使用基于成本的优化器，它尝试预测一个查询使用某种执行计划时的成本，并选择其中成本最小的一个。在 MySQL 可以通过查询当前会话的 "),a("code",[t._v("last_query_cost")]),t._v(" 的值来得到其计算当前查询的成本。")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" select "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" from t_message limit "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("省略结果集\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" show status like "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'last_query_cost'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Variable_name   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Value       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Last_query_cost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6391.799000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n")])])]),a("p",[t._v("示例中的结果表示优化器认为大概需要做 6391 个数据页的随机查找才能完成上面的查询。这个结果是根据一些列的统计信息计算得来的，这些统计信息包括：每张表或者索引的页面个数、索引的基数、索引和数据行的长度、索引的分布情况等等。")]),t._v(" "),a("p",[t._v("有非常多的原因会导致 MySQL 选择错误的执行计划，比如统计信息不准确、不会考虑不受其控制的操作成本（用户自定义函数、存储过程）、MySQL 认为的最优跟我们想的不一样（我们希望执行时间尽可能短，但 MySQL 值选择它认为成本小的，但成本小并不意味着执行时间短）等等。")]),t._v(" "),a("p",[t._v("MySQL 的查询优化器是一个非常复杂的部件，它使用了非常多的优化策略来生成一个最优的执行计划：")]),t._v(" "),a("ul",[a("li",[t._v("重新定义表的关联顺序（多张表关联查询时，并不一定按照 SQL 中指定的顺序进行，但有一些技巧可以指定关联顺序）")]),t._v(" "),a("li",[t._v("优化"),a("code",[t._v("MIN()")]),t._v("和"),a("code",[t._v("MAX()")]),t._v("函数（找某列的最小值，如果该列有索引，只需要查找 B+Tree 索引最左端，反之则可以找到最大值，具体原理见下文）")]),t._v(" "),a("li",[t._v("提前终止查询（比如：使用 Limit 时，查找到满足数量的结果集后会立即终止查询）")]),t._v(" "),a("li",[t._v("优化排序（在老版本 MySQL 会使用两次传输排序，即先读取行指针和需要排序的字段在内存中对其排序，然后再根据排序结果去读取数据行，而新版本采用的是单次传输排序，也就是一次读取所有的数据行，然后根据给定的列排序。对于 I/O 密集型应用，效率会高很多）")])]),t._v(" "),a("p",[t._v("随着 MySQL 的不断发展，优化器使用的优化策略也在不断的进化，这里仅仅介绍几个非常常用且容易理解的优化策略，其他的优化策略，大家自行查阅吧。")]),t._v(" "),a("h3",{attrs:{id:"_2-5-五-查询执行引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-五-查询执行引擎"}},[t._v("#")]),t._v(" 2.5. （五）查询执行引擎")]),t._v(" "),a("p",[t._v("在完成解析和优化阶段以后，MySQL 会生成对应的执行计划，查询执行引擎根据执行计划给出的指令逐步执行得出结果。整个执行过程的大部分操作均是通过调用存储引擎实现的接口来完成，这些接口被称为"),a("code",[t._v("handler API")]),t._v("。查询过程中的每一张表由一个"),a("code",[t._v("handler")]),t._v("实例表示。实际上，MySQL 在查询优化阶段就为每一张表创建了一个"),a("code",[t._v("handler")]),t._v("实例，优化器可以根据这些实例的接口来获取表的相关信息，包括表的所有列名、索引统计信息等。存储引擎接口提供了非常丰富的功能，但其底层仅有几十个接口，这些接口像搭积木一样完成了一次查询的大部分操作。")]),t._v(" "),a("h3",{attrs:{id:"_2-6-六-返回结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-六-返回结果"}},[t._v("#")]),t._v(" 2.6. （六）返回结果")]),t._v(" "),a("p",[t._v("查询过程的最后一个阶段就是将结果返回给客户端。即使查询不到数据，MySQL 仍然会返回这个查询的相关信息，比如该查询影响到的行数以及执行时间等等。")]),t._v(" "),a("p",[t._v("如果查询缓存被打开且这个查询可以被缓存，MySQL 也会将结果存放到缓存中。")]),t._v(" "),a("p",[t._v("结果集返回客户端是一个增量且逐步返回的过程。有可能 MySQL 在生成第一条结果时，就开始向客户端逐步返回结果集了。这样服务端就无须存储太多结果而消耗过多内存，也可以让客户端第一时间获得返回结果。需要注意的是，结果集中的每一行都会以一个满足 ① 中所描述的通信协议的数据包发送，再通过 TCP 协议进行传输，在传输过程中，可能对 MySQL 的数据包进行缓存然后批量发送。")]),t._v(" "),a("h2",{attrs:{id:"_3-更新过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-更新过程"}},[t._v("#")]),t._v(" 3. 更新过程")]),t._v(" "),a("p",[t._v("MySQL 更新过程和 MySQL 查询过程类似，也会将流程走一遍。不一样的是："),a("strong",[t._v("更新流程还涉及两个重要的日志模块，：redo log（重做日志）和 binlog（归档日志）")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-redo-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-redo-log"}},[t._v("#")]),t._v(" 3.1. redo log")]),t._v(" "),a("p",[a("strong",[t._v("redo log 是 InnoDB 引擎特有的日志")]),t._v("。"),a("strong",[t._v("redo log 即重做日志")]),t._v("。redo log 是物理日志，记录的是“在某个数据页上做了什么修改”。")]),t._v(" "),a("p",[a("strong",[t._v("redo log 是基于 WAL 技术")]),t._v("。WAL 的全称是 "),a("strong",[t._v("Write-Ahead Logging")]),t._v("，它的关键点就是"),a("strong",[t._v("先写日志，再写磁盘")]),t._v("。具体来说，当有一条记录需要更新的时候，InnoDB 引擎就会先把记录写到 redo log 里，并更新内存，这个时候更新就算完成了。同时，InnoDB 引擎会在适当的时候，将这个操作记录更新到磁盘里面，而这个更新往往是在系统比较空闲的时候做。")]),t._v(" "),a("p",[t._v("InnoDB 的 redo log 是固定大小的，比如可以配置为一组 4 个文件，每个文件的大小是 1GB，那么这块“粉板”总共就可以记录 4GB 的操作。从头开始写，写到末尾就又回到开头循环写。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200630180342.png",alt:"img"}})]),t._v(" "),a("p",[t._v("有了 redo log，InnoDB 就可以保证即使数据库发生异常重启，之前提交的记录都不会丢失，这个能力称为"),a("strong",[t._v("crash-safe")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-bin-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-bin-log"}},[t._v("#")]),t._v(" 3.2. bin log")]),t._v(" "),a("p",[a("strong",[t._v("bin log 即归档日志")]),t._v("。binlog 是逻辑日志，记录的是这个语句的原始逻辑。")]),t._v(" "),a("p",[t._v("binlog 是可以追加写入的，即写到一定大小后会切换到下一个，并不会覆盖以前的日志。")]),t._v(" "),a("p",[a("strong",[t._v("binlog 是 MySQL 的 Server 层实现的，所有引擎都可以使用")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("sync_binlog")]),t._v(" 这个参数设置成 1 的时候，表示每次事务的 binlog 都持久化到磁盘。这个参数我也建议你设置成 1，这样可以保证 MySQL 异常重启之后 binlog 不丢失。")]),t._v(" "),a("h3",{attrs:{id:"_3-3-redo-log-vs-bin-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-redo-log-vs-bin-log"}},[t._v("#")]),t._v(" 3.3. redo log vs. bin log")]),t._v(" "),a("p",[t._v("这两种日志有以下三点不同。")]),t._v(" "),a("ul",[a("li",[t._v("redo log 是 InnoDB 引擎特有的；binlog 是 MySQL 的 Server 层实现的，所有引擎都可以使用。")]),t._v(" "),a("li",[t._v("redo log 是物理日志，记录的是“在某个数据页上做了什么修改”；binlog 是逻辑日志，记录的是这个语句的原始逻辑，比如“给 ID=2 这一行的 c 字段加 1 ”。")]),t._v(" "),a("li",[t._v("redo log 是循环写的，空间固定会用完；binlog 是可以追加写入的。“追加写”是指 binlog 文件写到一定大小后会切换到下一个，并不会覆盖以前的日志。")])]),t._v(" "),a("p",[t._v("有了对这两个日志的概念性理解，我们再来看执行器和 InnoDB 引擎在执行这个简单的 update 语句时的内部流程。")]),t._v(" "),a("ol",[a("li",[t._v("执行器先找引擎取 ID=2 这一行。ID 是主键，引擎直接用树搜索找到这一行。如果 ID=2 这一行所在的数据页本来就在内存中，就直接返回给执行器；否则，需要先从磁盘读入内存，然后再返回。")]),t._v(" "),a("li",[t._v("执行器拿到引擎给的行数据，把这个值加上 1，比如原来是 N，现在就是 N+1，得到新的一行数据，再调用引擎接口写入这行新数据。")]),t._v(" "),a("li",[t._v("引擎将这行新数据更新到内存中，同时将这个更新操作记录到 redo log 里面，此时 redo log 处于 prepare 状态。然后告知执行器执行完成了，随时可以提交事务。")]),t._v(" "),a("li",[t._v("执行器生成这个操作的 binlog，并把 binlog 写入磁盘。")]),t._v(" "),a("li",[t._v("执行器调用引擎的提交事务接口，引擎把刚刚写入的 redo log 改成提交（commit）状态，更新完成。")])]),t._v(" "),a("p",[t._v("这里我给出这个 update 语句的执行流程图，图中浅色框表示是在 InnoDB 内部执行的，深色框表示是在执行器中执行的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200714133806.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_3-4-两阶段提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-两阶段提交"}},[t._v("#")]),t._v(" 3.4. 两阶段提交")]),t._v(" "),a("p",[t._v('redo log 的写入拆成了两个步骤：prepare 和 commit，这就是"两阶段提交"。为什么日志需要“两阶段提交”。')]),t._v(" "),a("p",[t._v("由于 redo log 和 binlog 是两个独立的逻辑，如果不用两阶段提交，要么就是先写完 redo log 再写 binlog，或者采用反过来的顺序。我们看看这两种方式会有什么问题。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("先写 redo log 后写 binlog")]),t._v("。假设在 redo log 写完，binlog 还没有写完的时候，MySQL 进程异常重启。由于我们前面说过的，redo log 写完之后，系统即使崩溃，仍然能够把数据恢复回来，所以恢复后这一行 c 的值是 1。\n但是由于 binlog 没写完就 crash 了，这时候 binlog 里面就没有记录这个语句。因此，之后备份日志的时候，存起来的 binlog 里面就没有这条语句。\n然后你会发现，如果需要用这个 binlog 来恢复临时库的话，由于这个语句的 binlog 丢失，这个临时库就会少了这一次更新，恢复出来的这一行 c 的值就是 0，与原库的值不同。")]),t._v(" "),a("li",[a("strong",[t._v("先写 binlog 后写 redo log")]),t._v("。如果在 binlog 写完之后 crash，由于 redo log 还没写，崩溃恢复以后这个事务无效，所以这一行 c 的值是 0。但是 binlog 里面已经记录了“把 c 从 0 改成 1”这个日志。所以，在之后用 binlog 来恢复的时候就多了一个事务出来，恢复出来的这一行 c 的值就是 1，与原库的值不同。")])]),t._v(" "),a("p",[t._v("可以看到，如果不使用“两阶段提交”，那么数据库的状态就有可能和用它的日志恢复出来的库的状态不一致。")]),t._v(" "),a("h2",{attrs:{id:"_4-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考资料"}},[t._v("#")]),t._v(" 4. 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《高性能 MySQL》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/intro/139",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL 实战 45 讲"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=e.exports}}]);