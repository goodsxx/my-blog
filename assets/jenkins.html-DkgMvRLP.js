import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,d as a}from"./app-Y2o9GSn_.js";const i="/assets/1682879599402-DeynU-0E.png",t="/assets/1682878254783-fu6p3odz.png",l="/assets/1682878481278-w8ux0u8x.png",o="/assets/1682879989987-DAA3qrRh.png",c="/assets/1682880056857-CIharv01.png",p="/assets/1682880105953-C5PoImOs.png",r="/assets/1682880770049-CroCy322.png",d="/assets/1682880814250-tLYEVPxm.png",u="/assets/1682880890182-BNyYeclQ.png",k="/assets/1682880937833-B-I0cVsD.png",g="/assets/1682881098585-D1iBE6Xe.png",m="/assets/1682881292360-hrrDENkn.png",h="/assets/1682881861972-BSHNlOwq.png",b="/assets/1682881928041-DPJHfmBt.png",v="/assets/1682881954453-Bdqs1iaG.png",f="/assets/1682882150379-CRqiSUFX.png",y="/assets/1682882322667-Hx8MseDl.png",_="/assets/1682882430022-B6sjUMlv.png",x="/assets/1682882722058-CTIS7jP0.png",j="/assets/1682882754508-DPB9eS6G.png",w="/assets/1682882998050-BRBrLzPw.png",S={},G=a(`<div class="hint-container tip"><p class="hint-container-title">✨✨✨✨✨</p><p>Jenkins是一个开源的自动化服务器，可以帮助软件开发人员自动化构建、测试和部署他们的项目。它支持多种编程语言和工具，并且可以与许多其他工具和服务集成，如Git、Docker、AWS、Slack等。Jenkins还提供了一个易于使用的Web界面，可以方便地配置和管理自动化流程。</p></div><h2 id="安装-jenkins" tabindex="-1"><a class="header-anchor" href="#安装-jenkins"><span>安装 Jenkins</span></a></h2><p>部署环境： ConterOS 7 + Docker Compose</p><h3 id="新建-jenkins-yml-文件-输入以下内容" tabindex="-1"><a class="header-anchor" href="#新建-jenkins-yml-文件-输入以下内容"><span>新建 jenkins.yml 文件，输入以下内容：</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">jenkins</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jenkins/jenkins<span class="token punctuation">:</span>jdk11
    <span class="token key atrule">user</span><span class="token punctuation">:</span> root <span class="token comment"># 设置Jenkins 容器内的所有进程都将以 root 用户身份运行，避免权限问题</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8100:8080&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;50000:50000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/var/jenkins_home:/var/jenkins_home&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/var/run/docker.sock:/var/run/docker.sock&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/usr/bin/docker:/usr/bin/docker&quot;</span>
      <span class="token comment"># 这三个目录需要执行 chmod 777 授权</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为相应文件授权" tabindex="-1"><a class="header-anchor" href="#为相应文件授权"><span>为相应文件授权</span></a></h3><p>权限不足可能造成之后 Jenkins 流水线失败<br> 若 jenkins.yml 文件中设置 <code>user: root</code> 仍无效可采用下面的方式授权：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">777</span> /var/jenkins_home
<span class="token function">chmod</span> <span class="token number">777</span> /var/run/docker.sock
<span class="token function">chmod</span> <span class="token number">777</span> usr/bin/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，重启服务器可能需要重新授权</p><h3 id="运行-jenkins-yml-脚本创建容器" tabindex="-1"><a class="header-anchor" href="#运行-jenkins-yml-脚本创建容器"><span>运行 jenkins.yml 脚本创建容器</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> jenkins.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问：[ip]:8100 会看到如下 Jenkins 页面：</p><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根据提示访问对应文件路径即可拿到管理员密码。</p><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件"><span>安装插件</span></a></h3><p>输入管理员密码后点击 继续，将会进入插件安装界面：</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>安装推荐的插件即可。</p><figure><img src="'+l+'" alt="等待安装插件" tabindex="0" loading="lazy"><figcaption>等待安装插件</figcaption></figure><p>等待插件安装完成。</p><p>若安装插件的过程中出现多个插件安装失败(版本不兼容)的情况，可参考<a href="#%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E5%A4%B1%E8%B4%A5">常见问题</a></p><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3><figure><img src="'+o+'" alt="创建用户" tabindex="0" loading="lazy"><figcaption>创建用户</figcaption></figure><p>根据提示输入即可。</p><h3 id="实例配置" tabindex="-1"><a class="header-anchor" href="#实例配置"><span>实例配置</span></a></h3><figure><img src="'+c+'" alt="实例配置" tabindex="0" loading="lazy"><figcaption>实例配置</figcaption></figure><p>直接下一步。</p><h3 id="安装完成" tabindex="-1"><a class="header-anchor" href="#安装完成"><span>安装完成</span></a></h3><figure><img src="'+p+'" alt="完成" tabindex="0" loading="lazy"><figcaption>完成</figcaption></figure><h2 id="创建测试web应用" tabindex="-1"><a class="header-anchor" href="#创建测试web应用"><span>创建测试Web应用</span></a></h2><ol><li>创建 <code>.Net Core Web</code> 应用程序</li><li>为项目添加 DockerFile 支持</li><li>将项目代码上传至 gitee 仓库</li></ol><h2 id="创建-jenkins-任务" tabindex="-1"><a class="header-anchor" href="#创建-jenkins-任务"><span>创建 Jenkins 任务</span></a></h2><ol><li><p><strong>首页点击 <code>新建任务</code></strong></p><figure><img src="'+r+'" alt="新建任务" tabindex="0" loading="lazy"><figcaption>新建任务</figcaption></figure></li><li><p><strong>输入 <code>任务名称</code></strong></p><figure><img src="'+d+'" alt="输入任务名称" tabindex="0" loading="lazy"><figcaption>输入任务名称</figcaption></figure></li><li><p><strong>选择 <code>自由风格</code> 的任务，进入下一步</strong></p><figure><img src="'+u+'" alt="自由风格" tabindex="0" loading="lazy"><figcaption>自由风格</figcaption></figure></li><li><p><strong>随便输入描述</strong></p><figure><img src="'+k+'" alt="描述" tabindex="0" loading="lazy"><figcaption>描述</figcaption></figure></li><li><p><strong>源码管理</strong></p><p>按照如下配置：</p><figure><img src="'+g+'" alt="源码管理配置" tabindex="0" loading="lazy"><figcaption>源码管理配置</figcaption></figure><p>其中，<code>Repository URL</code> 为仓库地址。</p><p>格式为：<code>https://[gitee账号]:[gitee密码]@gitee.com/[空间名称]/[仓库名称].git</code></p></li><li><p><strong>构建环境</strong></p><figure><img src="'+m+`" alt="构建环境" tabindex="0" loading="lazy"><figcaption>构建环境</figcaption></figure></li><li><p><strong>Build Steps</strong></p><p>选择 <code>执行 Shell</code>，填入下面的 Shell 脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token comment">#!/bin/bash</span>
 <span class="token comment"># 加载环境变量</span>
 <span class="token builtin class-name">source</span> /etc/profile

 <span class="token builtin class-name">echo</span> ----------获取短版本号----------
 <span class="token assign-left variable">SHORT_VERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> rev-parse <span class="token parameter variable">--short</span> HEAD<span class="token variable">\`</span></span>
 <span class="token builtin class-name">echo</span> <span class="token variable">$SHORT_VERSION</span>

 <span class="token builtin class-name">echo</span> ----------移动Dockerfile文件到当前文件夹----------
 <span class="token function">cp</span> src/<span class="token punctuation">[</span>Web项目文件夹<span class="token punctuation">]</span>/Dockerfile <span class="token builtin class-name">.</span>

 <span class="token builtin class-name">echo</span> ----------打包镜像----------
 <span class="token function">docker</span> build <span class="token parameter variable">-t</span> identity.image:<span class="token variable">$SHORT_VERSION</span> <span class="token builtin class-name">.</span>

 <span class="token builtin class-name">echo</span> ----------标记最新版本----------
 <span class="token function">docker</span> tag identity.image:<span class="token variable">$SHORT_VERSION</span> identity.image:latest

 <span class="token builtin class-name">echo</span> ----------如果容器存在，则停止并删除旧的容器----------
 <span class="token assign-left variable">CID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;identity&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
 <span class="token builtin class-name">echo</span> <span class="token variable">$CID</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$CID</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
     <span class="token builtin class-name">echo</span> ----------停止当前运行的容器----------
     <span class="token function">docker</span> stop <span class="token variable">$CID</span>
     <span class="token builtin class-name">echo</span> ----------删除当前运行的容器----------
     <span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">$CID</span>
 <span class="token keyword">fi</span>

 <span class="token builtin class-name">echo</span> ----------重新创建容器----------
 <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> identity <span class="token parameter variable">-p</span> <span class="token number">6100</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 identity.image:latest <span class="token parameter variable">--restart</span><span class="token operator">=</span>always

 <span class="token builtin class-name">echo</span> ----------删除所有none的镜像----------
 <span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;&lt;none&gt;&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>配置完成后保存即可。</p><h2 id="手动执行-jenkins-任务" tabindex="-1"><a class="header-anchor" href="#手动执行-jenkins-任务"><span>手动执行 Jenkins 任务</span></a></h2><h3 id="立即构建" tabindex="-1"><a class="header-anchor" href="#立即构建"><span>立即构建</span></a></h3><p>在任务页面点击 <code>立即构建</code> 执行任务</p><figure><img src="`+h+'" alt="立即构建" tabindex="0" loading="lazy"><figcaption>立即构建</figcaption></figure><h3 id="查看控制台输出" tabindex="-1"><a class="header-anchor" href="#查看控制台输出"><span>查看控制台输出</span></a></h3><figure><img src="'+b+'" alt="点击 任务序号" tabindex="0" loading="lazy"><figcaption>点击 任务序号</figcaption></figure><figure><img src="'+v+'" alt="点击 控制台输出" tabindex="0" loading="lazy"><figcaption>点击 控制台输出</figcaption></figure><p>显示如下内容说明构建成功：</p><figure><img src="'+f+'" alt="构建成功" tabindex="0" loading="lazy"><figcaption>构建成功</figcaption></figure><p>此时即可访问 [ip]:6100 查看部署的 Web 页面</p><h2 id="配置-gitee-webhooks" tabindex="-1"><a class="header-anchor" href="#配置-gitee-webhooks"><span>配置 Gitee WebHooks</span></a></h2><h3 id="安装-gitee-插件" tabindex="-1"><a class="header-anchor" href="#安装-gitee-插件"><span>安装 Gitee 插件</span></a></h3><ol><li><p><strong>进入 Jenkins 插件管理页面</strong></p><figure><img src="'+y+'" alt="插件管理" tabindex="0" loading="lazy"><figcaption>插件管理</figcaption></figure></li><li><p><strong>搜索 <code>gitee</code> 插件并安装</strong></p><figure><img src="'+_+'" alt="安装 gitee 插件" tabindex="0" loading="lazy"><figcaption>安装 gitee 插件</figcaption></figure></li></ol><h3 id="配置-gitee-触发器" tabindex="-1"><a class="header-anchor" href="#配置-gitee-触发器"><span>配置 Gitee 触发器</span></a></h3><p>打开之前创建的 jenkins 任务的配置页面，按照如下内容配置触发器：</p><figure><img src="'+x+'" alt="Gitee 触发器" tabindex="0" loading="lazy"><figcaption>Gitee 触发器</figcaption></figure><p>这里的 Gitee WebHook 地址等下要用。</p><figure><img src="'+j+'" alt="Gitee 触发器" tabindex="0" loading="lazy"><figcaption>Gitee 触发器</figcaption></figure><p>生成 Gitee WebHook 密码</p><h3 id="配置-gitee-webhooks-1" tabindex="-1"><a class="header-anchor" href="#配置-gitee-webhooks-1"><span>配置 Gitee WebHooks</span></a></h3><p>打开 web 应用程序的 gitee 仓库的 WebHooks 管理页面，将上一步中的 Gitee WebHook 地址和密码填入对应位置，勾选触发事件，保存即可。</p><figure><img src="'+w+`" alt="Gitee WebHooks" tabindex="0" loading="lazy"><figcaption>Gitee WebHooks</figcaption></figure><h2 id="完成" tabindex="-1"><a class="header-anchor" href="#完成"><span>完成</span></a></h2><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="插件安装失败" tabindex="-1"><a class="header-anchor" href="#插件安装失败"><span>插件安装失败</span></a></h3><h4 id="更新-docker-为最新版本" tabindex="-1"><a class="header-anchor" href="#更新-docker-为最新版本"><span>更新 docker 为最新版本</span></a></h4><h4 id="更新-jenkins-为最新版本" tabindex="-1"><a class="header-anchor" href="#更新-jenkins-为最新版本"><span>更新 jenkins 为最新版本</span></a></h4><ol><li><p>从官网下载最新的 jenkins.war 包并上传至部署 Jenkins 的服务器</p></li><li><p>删除容器中旧的 jenkins.war 包</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">-u</span> root <span class="token punctuation">[</span>container_id<span class="token punctuation">]</span> /bin/bash
<span class="token comment"># 删除旧的 jenkins.war 包</span>
<span class="token function">rm</span> /usr/share/jenkins/jenkins.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>将下载的 jenkins.war 包复制进容器中</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> jenkins.war  <span class="token punctuation">[</span>container_id<span class="token punctuation">]</span>:/usr/share/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>重启容器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> restart <span class="token punctuation">[</span>container_id<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,67),z=[G];function J(q,D){return s(),e("div",null,z)}const H=n(S,[["render",J],["__file","jenkins.html.vue"]]),E=JSON.parse('{"path":"/articles/distributed-middleware/cicd/jenkins.html","title":"Jenkins + Gitee 持续集成交付","lang":"zh-CN","frontmatter":{"title":"Jenkins + Gitee 持续集成交付","date":"2023-05-01T00:00:00.000Z","order":1,"category":["分布式中间件"],"description":"✨✨✨✨✨ Jenkins是一个开源的自动化服务器，可以帮助软件开发人员自动化构建、测试和部署他们的项目。它支持多种编程语言和工具，并且可以与许多其他工具和服务集成，如Git、Docker、AWS、Slack等。Jenkins还提供了一个易于使用的Web界面，可以方便地配置和管理自动化流程。","head":[["meta",{"property":"og:url","content":"http://blog.goodsxx.cn/articles/distributed-middleware/cicd/jenkins.html"}],["meta",{"property":"og:site_name","content":"Growing Notes"}],["meta",{"property":"og:title","content":"Jenkins + Gitee 持续集成交付"}],["meta",{"property":"og:description","content":"✨✨✨✨✨ Jenkins是一个开源的自动化服务器，可以帮助软件开发人员自动化构建、测试和部署他们的项目。它支持多种编程语言和工具，并且可以与许多其他工具和服务集成，如Git、Docker、AWS、Slack等。Jenkins还提供了一个易于使用的Web界面，可以方便地配置和管理自动化流程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T08:44:05.000Z"}],["meta",{"property":"article:author","content":"SongXinXin"}],["meta",{"property":"article:published_time","content":"2023-05-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T08:44:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins + Gitee 持续集成交付\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-21T08:44:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SongXinXin\\"}]}"]]},"headers":[{"level":2,"title":"安装 Jenkins","slug":"安装-jenkins","link":"#安装-jenkins","children":[{"level":3,"title":"新建 jenkins.yml 文件，输入以下内容：","slug":"新建-jenkins-yml-文件-输入以下内容","link":"#新建-jenkins-yml-文件-输入以下内容","children":[]},{"level":3,"title":"为相应文件授权","slug":"为相应文件授权","link":"#为相应文件授权","children":[]},{"level":3,"title":"运行 jenkins.yml 脚本创建容器","slug":"运行-jenkins-yml-脚本创建容器","link":"#运行-jenkins-yml-脚本创建容器","children":[]},{"level":3,"title":"安装插件","slug":"安装插件","link":"#安装插件","children":[]},{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":3,"title":"实例配置","slug":"实例配置","link":"#实例配置","children":[]},{"level":3,"title":"安装完成","slug":"安装完成","link":"#安装完成","children":[]}]},{"level":2,"title":"创建测试Web应用","slug":"创建测试web应用","link":"#创建测试web应用","children":[]},{"level":2,"title":"创建 Jenkins 任务","slug":"创建-jenkins-任务","link":"#创建-jenkins-任务","children":[]},{"level":2,"title":"手动执行 Jenkins 任务","slug":"手动执行-jenkins-任务","link":"#手动执行-jenkins-任务","children":[{"level":3,"title":"立即构建","slug":"立即构建","link":"#立即构建","children":[]},{"level":3,"title":"查看控制台输出","slug":"查看控制台输出","link":"#查看控制台输出","children":[]}]},{"level":2,"title":"配置 Gitee WebHooks","slug":"配置-gitee-webhooks","link":"#配置-gitee-webhooks","children":[{"level":3,"title":"安装 Gitee 插件","slug":"安装-gitee-插件","link":"#安装-gitee-插件","children":[]},{"level":3,"title":"配置 Gitee 触发器","slug":"配置-gitee-触发器","link":"#配置-gitee-触发器","children":[]},{"level":3,"title":"配置 Gitee WebHooks","slug":"配置-gitee-webhooks-1","link":"#配置-gitee-webhooks-1","children":[]}]},{"level":2,"title":"完成","slug":"完成","link":"#完成","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"插件安装失败","slug":"插件安装失败","link":"#插件安装失败","children":[{"level":4,"title":"更新 docker 为最新版本","slug":"更新-docker-为最新版本","link":"#更新-docker-为最新版本","children":[]},{"level":4,"title":"更新 jenkins 为最新版本","slug":"更新-jenkins-为最新版本","link":"#更新-jenkins-为最新版本","children":[]}]}]}],"git":{"createdTime":1682883226000,"updatedTime":1684658645000,"contributors":[{"name":"SongXinXin","email":"1368084801@qq.com","commits":3}]},"readingTime":{"minutes":3.87,"words":1160},"filePathRelative":"articles/distributed-middleware/cicd/jenkins.md","localizedDate":"2023年5月1日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">✨✨✨✨✨</p>\\n<p>Jenkins是一个开源的自动化服务器，可以帮助软件开发人员自动化构建、测试和部署他们的项目。它支持多种编程语言和工具，并且可以与许多其他工具和服务集成，如Git、Docker、AWS、Slack等。Jenkins还提供了一个易于使用的Web界面，可以方便地配置和管理自动化流程。</p>\\n</div>\\n","autoDesc":true}');export{H as comp,E as data};
