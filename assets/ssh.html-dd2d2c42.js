import{_ as n,p as s,q as a,Z as t}from"./framework-47a2e622.js";const p={},o=t(`<h2 id="创建-ssh-连接" tabindex="-1"><a class="header-anchor" href="#创建-ssh-连接" aria-hidden="true">#</a> 创建 SSH 连接</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding:utf-8 -*-  </span>
<span class="token keyword">import</span> paramiko  <span class="token comment"># 先安装pycrypto，再安装paramiko  </span>
<span class="token keyword">import</span> sys  
<span class="token comment"># 创建SSH对象  </span>
ssh <span class="token operator">=</span> paramiko<span class="token punctuation">.</span>SSHClient<span class="token punctuation">(</span><span class="token punctuation">)</span>  
  
<span class="token comment"># 允许连接不在~/.ssh/known_hosts文件中的主机  </span>
ssh<span class="token punctuation">.</span>set_missing_host_key_policy<span class="token punctuation">(</span>paramiko<span class="token punctuation">.</span>AutoAddPolicy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
  
<span class="token comment"># 连接服务器  </span>
ssh<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>hostname<span class="token operator">=</span><span class="token string">&quot;192.168.64.131&quot;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">22</span><span class="token punctuation">,</span> username<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> password<span class="token operator">=</span><span class="token string">&quot;lhj1998&quot;</span><span class="token punctuation">)</span>  
  
<span class="token comment"># 执行命令，不要执行top之类的在不停的刷新的命令(可以执行多条命令，以分号来分隔多条命令)  </span>
<span class="token comment"># stdin, stdout, stderr = ssh.exec_command(&quot;cd %s;mkdir %s&quot; % (&quot;/www/wwwroot&quot;, &quot;aa&quot;))  </span>
  
<span class="token keyword">def</span> <span class="token function">getMessage</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span><span class="token punctuation">:</span>  
    stdin<span class="token punctuation">,</span> stdout<span class="token punctuation">,</span> stderr <span class="token operator">=</span> ssh<span class="token punctuation">.</span>exec_command<span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>  
    stdin<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token comment"># 获取命令结果  </span>
 	res<span class="token punctuation">,</span> err <span class="token operator">=</span> stdout<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> stderr<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    result <span class="token operator">=</span> res <span class="token keyword">if</span> res <span class="token keyword">else</span> err  
    res <span class="token operator">=</span> result<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>  
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>  
        <span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>  
  
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>  
    message <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;null&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;null&quot;</span><span class="token punctuation">]</span>  
    messageCmd <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;whoami&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hostname&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">]</span>  
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  
        i <span class="token operator">=</span> <span class="token number">0</span>  
 		ch <span class="token operator">=</span> <span class="token string">&quot;$&quot;</span>  
 		<span class="token keyword">for</span> cmd <span class="token keyword">in</span> messageCmd<span class="token punctuation">:</span>  
            stdin1<span class="token punctuation">,</span> stdout1<span class="token punctuation">,</span> stderr1 <span class="token operator">=</span> ssh<span class="token punctuation">.</span>exec_command<span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>  
            stdin1<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>  
            res1<span class="token punctuation">,</span> err1 <span class="token operator">=</span> stdout1<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> stderr1<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>  
            result1 <span class="token operator">=</span> res1 <span class="token keyword">if</span> res1 <span class="token keyword">else</span> err1  
            res1 <span class="token operator">=</span> result1<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>  
            message<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> res1<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>  
            i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>  
 		<span class="token keyword">if</span> message<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">:</span>  
            ch <span class="token operator">=</span> <span class="token string">&quot;#&quot;</span>  
 		<span class="token keyword">else</span><span class="token punctuation">:</span>  
            ch <span class="token operator">=</span> <span class="token string">&quot;$&quot;</span>  
 		cmd <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;[%s@%s %s] %s &quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>message<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> message<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> message<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">)</span>  
        <span class="token keyword">if</span> cmd <span class="token operator">==</span> <span class="token string">&quot;exit()&quot;</span><span class="token punctuation">:</span>  
            <span class="token comment"># 关闭服务器连接  </span>
 			ssh<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>  
            sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>  
        <span class="token keyword">elif</span> <span class="token string">&quot;cd&quot;</span> <span class="token keyword">in</span> cmd<span class="token punctuation">:</span>  
            messageCmd<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;cd &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;;&quot;</span> <span class="token operator">+</span> cmd <span class="token operator">+</span> <span class="token string">&quot;;pwd&quot;</span>  
 		<span class="token keyword">else</span><span class="token punctuation">:</span>  
            getMegCmd <span class="token operator">=</span> <span class="token string">&quot;cd &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;;&quot;</span> <span class="token operator">+</span> cmd  
            getMessage<span class="token punctuation">(</span>getMegCmd<span class="token punctuation">)</span>
</code></pre></div>`,2),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","ssh.html.vue"]]);export{r as default};
