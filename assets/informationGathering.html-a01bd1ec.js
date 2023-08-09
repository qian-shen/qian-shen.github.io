import{_ as a,p as n,q as s,Z as e}from"./framework-47a2e622.js";const i="/images/image20210430182025.png",l={},t=e('<h2 id="dmz-区" tabindex="-1"><a class="header-anchor" href="#dmz-区" aria-hidden="true">#</a> DMZ 区</h2><p>隔离区，也称非军事化区。</p><p><img src="'+i+`" alt=""></p><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2><h3 id="收集基本信息" tabindex="-1"><a class="header-anchor" href="#收集基本信息" aria-hidden="true">#</a> 收集基本信息</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systeminfo 系统详细信息
net start 启动服务
tasklist 进程列表
schtasks 计划任务
</code></pre></div><h3 id="了解接口信息" tabindex="-1"><a class="header-anchor" href="#了解接口信息" aria-hidden="true">#</a> 了解接口信息</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ipconfig /all 判断存在域-dns 通过查看是否存在主dns后缀查看是否在域环境里面
net view /domain 判断存在域
net <span class="token function">time</span> /domain 判断主域 原理是获取当前时间，而大多数情况时间是由域控同步的，所以会返回域控的主机名字
<span class="token function">nslookup</span> / <span class="token function">ping</span> 域控名 获取域控的IP地址
<span class="token function">netstat</span> <span class="token parameter variable">-ano</span> 当前网络端口开放情况
<span class="token function">nslookup</span> 域名解析
</code></pre></div><h3 id="系统默认常见用户身份" tabindex="-1"><a class="header-anchor" href="#系统默认常见用户身份" aria-hidden="true">#</a> 系统默认常见用户身份</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>Domain Admins：域管理员（默认对域控制器有完全控制权）
Domain Computers：域内机器
Domain Controllers：域控制器
Domain Guest：域访客，权限低
Domain Users：域用户
Enterprise Admins：企业系统管理用户（默认对域控制器有完全控制权）
</code></pre></div><h3 id="相关用户收集操作命令" tabindex="-1"><a class="header-anchor" href="#相关用户收集操作命令" aria-hidden="true">#</a> 相关用户收集操作命令</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">whoami</span> /all 用户权限
net config workstation 登录信息
net user 本地用户
net localgroup 本地用户组
net user /domain 获取域用户信息
net group /domain 获取域用户组信息
wmic useraccout get /all 设计域用户详细信息
net group <span class="token string">&quot;Domain Admins&quot;</span> /domain 查询域管理员账户
net group <span class="token string">&quot;Enterprise Admins&quot;</span> /domain 查询管理员用户组
net group <span class="token string">&quot;Domain Controllers&quot;</span> /domain 查询域控制器
<span class="token comment">#收集域用户名方便以后渗透时对用户名密码进行爆破</span>
</code></pre></div><h3 id="凭据信息收集" tabindex="-1"><a class="header-anchor" href="#凭据信息收集" aria-hidden="true">#</a> 凭据信息收集</h3><ul><li>计算机用户 HASH，明文获取-<code>mimikatz(win)</code>，<code>mimipenguin(linux)</code></li><li>计算机各种协议服务口令获取-<code>LaZagne(all)</code>，<code>XenArmor(win)</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Netsh WLAN show profiles
Netsh WLAN show profile <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;无线名称&quot;</span> <span class="token assign-left variable">key</span><span class="token operator">=</span>clear
</code></pre></div><ol><li>站点源码备份文件，数据库备份文件等</li><li>各类数据库 web 管理入口，如 phpmyadmin。</li><li>浏览器保存密码，浏览器 cookies。</li><li>其他用户会话，3389 和 ipc$ 连接记录，回收站内容。</li><li>Windows 保存的 WiFi 密码。</li><li>网络内部的各种账号和密码，如：Email、VPN、FTP、OA 等。</li></ol><h3 id="探测域内存活主机及地址信息" tabindex="-1"><a class="header-anchor" href="#探测域内存活主机及地址信息" aria-hidden="true">#</a> 探测域内存活主机及地址信息</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> /L %I <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1,1</span>,254<span class="token punctuation">)</span> DO @ping <span class="token parameter variable">-w</span> <span class="token number">1</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token number">192.168</span>.3.%<span class="token punctuation">(</span>扫描的网段<span class="token punctuation">)</span> <span class="token operator">|</span> findstr <span class="token string">&quot;TTL=&quot;</span> 
</code></pre></div><blockquote><p>使用 nmap masscan 第三方 powershell 脚本<code>nishang</code> <code>empire</code>等。</p></blockquote><p>nishang 使用：</p><ul><li>导入模块</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Import-Module .<span class="token punctuation">\\</span>nishang.psml
</code></pre></div><ul><li>设置执行策略</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Set-ExecutionPolicy RemoteSigned
</code></pre></div><ul><li>获取模块 nishang 的命令函数</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Get-Command <span class="token parameter variable">-Module</span> nishang
</code></pre></div><ul><li>获取常规计算机信息</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Get-Information
</code></pre></div><ul><li>端口扫描（查看目录对应的文件）</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Invoke-PortScan <span class="token parameter variable">-StartAddress</span> <span class="token number">192.168</span>.3.0 <span class="token parameter variable">-EndAddress</span> <span class="token number">192.168</span>.3.100 <span class="token parameter variable">-ResolveHost</span> <span class="token parameter variable">-ScanPort</span>
</code></pre></div><ul><li>其他功能：删除补丁，反弹 shell，凭据获取等。</li></ul><h3 id="探针域内主机角色及服务信息" tabindex="-1"><a class="header-anchor" href="#探针域内主机角色及服务信息" aria-hidden="true">#</a> 探针域内主机角色及服务信息</h3><p>利用开放端口服务及计算机名判断：</p><ol><li>高级管理人员、系统管理员、财务/人事/业务人员的个人计算机</li><li>产品管理系统服务器</li><li>办公系统服务器</li><li>财务应用系统服务器</li><li>核心产品源码服务器（自建 svn、git）</li><li>数据库服务器</li><li>文件或网盘服务器、共享服务器</li><li>电子邮件服务器</li><li>网络监控系统服务器</li><li>其他服务器（内部技术文档服务器、其他监控服务器等）</li></ol>`,34),o=[t];function r(c,p){return n(),s("div",null,o)}const h=a(l,[["render",r],["__file","informationGathering.html.vue"]]);export{h as default};
