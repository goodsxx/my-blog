import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as i,c as u,e as p,w as a,d as r,a as n,b as s}from"./app-Y2o9GSn_.js";const k="/assets/1678761415001-ChfEMKca.png",m={},d=r('<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>RabbitMQ 简单模式（Simple Mode）是 RabbitMQ 最基础的一种使用模式，也称为点对点模式。在简单模式中，一个生产者向一个消费者发送消息，消费者从队列中获取并处理该消息。这种模式非常适用于只有一个消费者需要处理任务的场景，如日志处理、计算任务等。</p></div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>RabbitMQ 简单模式（Simple Mode）是 RabbitMQ 最基础的一种使用模式，也称为“Hello World”模式，它包括一个生产者将消息发送到队列中，然后一个消费者从该队列接收并处理该消息。</p><figure><img src="'+k+'" alt="简单模式" tabindex="0" loading="lazy"><figcaption>简单模式</figcaption></figure><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>简单队列模式适用于需要单个消费者处理任务的场景，例如：</p><ul><li>异步处理任务：通过将任务放入队列中，让消费者异步处理任务，从而提高系统的吞吐量和性能。</li><li>消息传递：通过消息代理传递消息，使得不同的应用程序可以异步地进行解耦合的通信。</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h2>',8),b=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},[s("RabbitMQ"),n("span",{class:"token punctuation"},"."),s("Client")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},[s("System"),n("span",{class:"token punctuation"},"."),s("Text")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 创建ConnectionFactory实例，设置RabbitMQ节点的主机名"),s(`
`),n("span",{class:"token class-name"},"ConnectionFactory"),s(" factory "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(` 
`),n("span",{class:"token punctuation"},"{"),s(` 
    HostName `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"192.168.3.100"'),n("span",{class:"token punctuation"},","),s(` 
    Port`),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"5672"),n("span",{class:"token punctuation"},","),s(` 
    UserName `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"guest"'),n("span",{class:"token punctuation"},","),s(` 
    Password `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"guest"'),s(` 
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" connection "),n("span",{class:"token operator"},"="),s(" factory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateConnection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 创建连接"),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" channel "),n("span",{class:"token operator"},"="),s(" connection"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateModel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 创建通道"),s(`

`),n("span",{class:"token comment"},"// 声明队列，如果该队列不存在，则会自动创建"),s(`
channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"QueueDeclare"),n("span",{class:"token punctuation"},"("),n("span",{class:"token named-parameter punctuation"},"queue"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"durable"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"exclusive"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"autoDelete"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"arguments"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" message "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Hello World!"'),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 待发送的消息"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" body "),n("span",{class:"token operator"},"="),s(" Encoding"),n("span",{class:"token punctuation"},"."),s("UTF8"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBytes"),n("span",{class:"token punctuation"},"("),s("message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 将消息转换成字节数组"),s(`

`),n("span",{class:"token comment"},"// 发布消息到队列中，exchange参数为空表示默认交换器"),s(`
channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"BasicPublish"),n("span",{class:"token punctuation"},"("),n("span",{class:"token named-parameter punctuation"},"exchange"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"routingKey"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 消息的路由键为hello"),s(`
                     basicProperties`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"body"),n("span",{class:"token punctuation"},":"),s(" body"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"[生产者] 发送消息：{0}"'),n("span",{class:"token punctuation"},","),s(" message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 输出发送的消息内容"),s(`

Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"按[Enter]键退出"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("p",null,[n("strong",null,"参数说明")],-1),g=n("blockquote",null,[n("p",null,[n("strong",null,"QueueDeclare：")]),n("ul",null,[n("li",null,[n("strong",null,[n("code",null,"queue")]),s(" : 队列的名称，用于标识要发送或消费的消息队列。")]),n("li",null,[n("strong",null,[n("code",null,"durable")]),s(" : 是否持久化，如果为 true，则 RabbitMQ 会将该队列存储在磁盘中，即使 RabbitMQ 服务重启也不会丢失。默认为 false。")]),n("li",null,[n("strong",null,[n("code",null,"exclusive")]),s(" : 是否排他性，如果为 true，则该队列只能被当前连接使用，并在连接关闭时删除。默认为 false。")]),n("li",null,[n("strong",null,[n("code",null,"autoDelete")]),s(" : 是否自动删除，如果为 true，则当队列没有任何消费者时，RabbitMQ 会自动删除该队列。默认为 false。")]),n("li",null,[n("strong",null,[n("code",null,"arguments")]),s(" : 队列参数，用于设置队列的特定参数选项。")])])],-1),h=n("blockquote",null,[n("p",null,[n("strong",null,"BasicPublish：")]),n("ul",null,[n("li",null,[n("strong",null,[n("code",null,"exchange")]),s(" : 交换机的名称，用于标识要发送消息的目标交换机。在简单模式下通常为空字符串。")]),n("li",null,[n("strong",null,[n("code",null,"routingKey")]),s(" : 路由键，用于指定消息的路由规则，在简单模式下通常与队列名称相同。")]),n("li",null,[n("strong",null,[n("code",null,"basicProperties")]),s(" : 消息属性对象，用于设置消息的各种属性，如消息的优先级、过期时间、持久化等。在简单模式下通常为 null。")]),n("li",null,[n("strong",null,[n("code",null,"body")]),s(" : 消息体，即要发送的消息内容，可以是二进制数据流或 UTF-8 编码的文本。")])])],-1),y=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},[s("RabbitMQ"),n("span",{class:"token punctuation"},"."),s("Client")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},[s("RabbitMQ"),n("span",{class:"token punctuation"},"."),s("Client"),n("span",{class:"token punctuation"},"."),s("Events")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},[s("System"),n("span",{class:"token punctuation"},"."),s("Text")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 创建连接工厂对象，指定主机名和登录凭据信息"),s(`
`),n("span",{class:"token class-name"},"ConnectionFactory"),s(" factory "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    HostName `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"192.168.3.100"'),n("span",{class:"token punctuation"},","),s(`
    Port `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5672"),n("span",{class:"token punctuation"},","),s(`
    UserName `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"guest"'),n("span",{class:"token punctuation"},","),s(`
    Password `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"guest"'),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" connection "),n("span",{class:"token operator"},"="),s(" factory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateConnection"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 创建连接"),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" channel "),n("span",{class:"token operator"},"="),s(" connection"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"CreateModel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 创建通道"),s(`

`),n("span",{class:"token comment"},"// 声明队列，如果该队列不存在，则会自动创建"),s(`
channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"QueueDeclare"),n("span",{class:"token punctuation"},"("),n("span",{class:"token named-parameter punctuation"},"queue"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"durable"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"exclusive"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"autoDelete"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"arguments"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 创建一个事件基本消费者"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"var")]),s(" consumer "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"EventingBasicConsumer"),n("span",{class:"token punctuation"},"("),s("channel"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
consumer`),n("span",{class:"token punctuation"},"."),s("Received "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token punctuation"},"("),s("model"),n("span",{class:"token punctuation"},","),s(" ea"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},[s("ReadOnlyMemory"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},">")]),s(" body "),n("span",{class:"token operator"},"="),s(" ea"),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ToArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 获取消息体的字节数组"),s(`
    `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" message "),n("span",{class:"token operator"},"="),s(" Encoding"),n("span",{class:"token punctuation"},"."),s("UTF8"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetString"),n("span",{class:"token punctuation"},"("),s("body"),n("span",{class:"token punctuation"},"."),s("Span"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 将字节数组转换成字符串"),s(`
    Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'" [消费者] 收到消息：{0}"'),n("span",{class:"token punctuation"},","),s(" message"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 输出接收到的消息"),s(`
    `),n("span",{class:"token comment"},"//成功时手动确认消息"),s(`
    channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"BasicAck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token named-parameter punctuation"},"deliveryTag"),n("span",{class:"token punctuation"},":"),s(" ea"),n("span",{class:"token punctuation"},"."),s("DeliveryTag"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token named-parameter punctuation"},"multiple"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"//失败时打回队列"),s(`
    `),n("span",{class:"token comment"},"//channel.BasicNack(deliveryTag: ea.DeliveryTag, multiple: false, requeue: true);"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 启动消费者"),s(`
channel`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"BasicConsume"),n("span",{class:"token punctuation"},"("),n("span",{class:"token named-parameter punctuation"},"queue"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"hello"'),n("span",{class:"token punctuation"},","),s(`
                     `),n("span",{class:"token named-parameter punctuation"},"autoAck"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 是否自动确认消息已经被消费"),s(`
                     consumer`),n("span",{class:"token punctuation"},":"),s(" consumer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 指定消费者"),s(`

Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"按[Enter]键退出"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("p",null,[n("strong",null,"参数说明")],-1),_=n("blockquote",null,[n("p",null,[n("strong",null,"EventingBasicConsumer.Received：")]),n("ul",null,[n("li",null,[n("strong",null,[n("code",null,"model")]),s(" : 消费者对象所在的信道，用于处理消息确认等操作。")]),n("li",null,[n("strong",null,[n("code",null,"ea")]),s(" : BasicDeliverEventArgs 对象，包含了接收到的消息信息，如消息体、消息属性、消息标识符等。")]),n("li",null,[n("strong",null,[n("code",null,"body")]),s(" : 字节数组类型，表示消息体的二进制数据流。")]),n("li",null,[n("strong",null,[n("code",null,"message")]),s(" : string 类型，表示将消息体转换为字符串后得到的文本内容。")])])],-1),w=n("blockquote",null,[n("p",null,[n("strong",null,"BasicConsume：")]),n("ul",null,[n("li",null,[n("strong",null,[n("code",null,"autoAck")]),s(" : 是否自动确认消息，如果为 true，则 RabbitMQ 在向该消费者发送一条消息时，会自动将该消息标记为已经确认（ack），无需手动调用 BasicAck 方法进行确认。默认为 false。")]),n("li",null,[n("strong",null,[n("code",null,"consumer")]),s(" : EventingBasicConsumer 对象，用于实现消费者的事件处理和状态管理。")])])],-1),M=n("p",null,"简单队列模式是 RabbitMQ 中最简单的消息模式之一，适用于需要单个消费者处理任务的场景。本文演示了如何使用 RabbitMQ 实现简单队列模式，包括生产者将消息发送到队列中，消费者从队列中接收并处理该消息。",-1);function C(R,Q){const o=c("Tabs");return i(),u("div",null,[d,p(o,{id:"36",data:[{id:"生产者"},{id:"消费者"}]},{title0:a(({value:t,isActive:e})=>[s("生产者")]),title1:a(({value:t,isActive:e})=>[s("消费者")]),tab0:a(({value:t,isActive:e})=>[b,v,g,h]),tab1:a(({value:t,isActive:e})=>[y,f,_,w]),_:1}),M])}const B=l(m,[["render",C],["__file","simple-mode.html.vue"]]),q=JSON.parse('{"path":"/articles/distributed-middleware/rabbitmq/simple-mode.html","title":"简单模式","lang":"zh-CN","frontmatter":{"title":"简单模式","date":"2023-03-04T00:00:00.000Z","category":["分布式中间件"],"tag":["RabbitMQ"],"timeline":true,"order":1,"description":"✨✨✨✨✨ RabbitMQ 简单模式（Simple Mode）是 RabbitMQ 最基础的一种使用模式，也称为点对点模式。在简单模式中，一个生产者向一个消费者发送消息，消费者从队列中获取并处理该消息。这种模式非常适用于只有一个消费者需要处理任务的场景，如日志处理、计算任务等。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/distributed-middleware/rabbitmq/simple-mode.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"简单模式"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ RabbitMQ 简单模式（Simple Mode）是 RabbitMQ 最基础的一种使用模式，也称为点对点模式。在简单模式中，一个生产者向一个消费者发送消息，消费者从队列中获取并处理该消息。这种模式非常适用于只有一个消费者需要处理任务的场景，如日志处理、计算任务等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-14T12:27:43.000Z"}],["meta",{"property":"article:author","content":"SongXinXin"}],["meta",{"property":"article:tag","content":"RabbitMQ"}],["meta",{"property":"article:published_time","content":"2023-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-14T12:27:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简单模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-14T12:27:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SongXinXin\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]}],"git":{"createdTime":1678731858000,"updatedTime":1678796863000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":2}]},"readingTime":{"minutes":4.21,"words":1264},"filePathRelative":"articles/distributed-middleware/rabbitmq/simple-mode.md","localizedDate":"2023年3月4日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>RabbitMQ 简单模式（Simple Mode）是 RabbitMQ 最基础的一种使用模式，也称为点对点模式。在简单模式中，一个生产者向一个消费者发送消息，消费者从队列中获取并处理该消息。这种模式非常适用于只有一个消费者需要处理任务的场景，如日志处理、计算任务等。</p>\\n</div>\\n","autoDesc":true}');export{B as comp,q as data};