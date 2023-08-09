import{_ as n,p as s,q as a,Z as t}from"./framework-47a2e622.js";const p={},o=t(`<h2 id="文件读写" tabindex="-1"><a class="header-anchor" href="#文件读写" aria-hidden="true">#</a> 文件读写</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;nihao.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
	f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#读取文件</span>
	
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;nihao.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
	content <span class="token operator">=</span> text 
	f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span> <span class="token comment"># 写入文件</span>
</code></pre></div><h2 id="io操作类型" tabindex="-1"><a class="header-anchor" href="#io操作类型" aria-hidden="true">#</a> IO操作类型</h2><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">r</td><td style="text-align:center;">以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式</td></tr><tr><td style="text-align:center;">w</td><td style="text-align:center;">打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件</td></tr><tr><td style="text-align:center;">a</td><td style="text-align:center;">打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入</td></tr><tr><td style="text-align:center;">rb</td><td style="text-align:center;">以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式</td></tr><tr><td style="text-align:center;">wb</td><td style="text-align:center;">以二进制格式打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件</td></tr><tr><td style="text-align:center;">ab</td><td style="text-align:center;">以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入</td></tr><tr><td style="text-align:center;">r+</td><td style="text-align:center;">打开一个文件用于读写。文件指针将会放在文件的开头</td></tr><tr><td style="text-align:center;">w+</td><td style="text-align:center;">打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件</td></tr><tr><td style="text-align:center;">a+</td><td style="text-align:center;">打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写</td></tr><tr><td style="text-align:center;">rb+</td><td style="text-align:center;">以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头</td></tr><tr><td style="text-align:center;">w+</td><td style="text-align:center;">以二进制格式打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件</td></tr><tr><td style="text-align:center;">ab+</td><td style="text-align:center;">以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写</td></tr></tbody></table><h2 id="读取大文件" tabindex="-1"><a class="header-anchor" href="#读取大文件" aria-hidden="true">#</a> 读取大文件</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 方法1</span>
<span class="token keyword">def</span> <span class="token function">read_chunk</span><span class="token punctuation">(</span>chunk_size <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 限制每次读取的字节</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./test.html&#39;</span><span class="token punctuation">,</span> encoding <span class="token operator">=</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>  
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  
            chunk_data <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span>chunk_size<span class="token punctuation">)</span>  
            <span class="token keyword">if</span> <span class="token keyword">not</span> chunk_data<span class="token punctuation">:</span>  
                <span class="token keyword">break</span>  
 			<span class="token keyword">yield</span> chunk_data

<span class="token keyword">for</span> data <span class="token keyword">in</span> read_chunk<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment"># 读取到的每一部分数据</span>

<span class="token comment"># 方法2</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;./test.html&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
	<span class="token keyword">for</span> data <span class="token keyword">in</span> f<span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment"># 将文件对象当作迭代器</span>
</code></pre></div><h2 id="os操作" tabindex="-1"><a class="header-anchor" href="#os操作" aria-hidden="true">#</a> OS操作</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>file_name<span class="token punctuation">)</span> <span class="token comment"># 删除文件</span>
os<span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span><span class="token string">&quot;new_dir&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 创建目录</span>
os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span><span class="token string">&quot;/home/dir&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 改变当前目录</span>
os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 显示当前工作目录</span>
os<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>old<span class="token punctuation">,</span>new<span class="token punctuation">)</span> <span class="token comment"># 修改文件名称</span>
os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token comment"># 返回绝对路径</span>
os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>basename<span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token comment"># 返回文件名</span>
os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 将文件名和扩展名分开</span>
os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token comment"># 返回路径中包含的文件夹名或文件名的列表</span>
os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token comment"># 判断路径是否存在</span>
os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 遍历目录，输出文件名</span>
os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>path1<span class="token punctuation">,</span> path2<span class="token punctuation">)</span> <span class="token comment"># 拼接路径</span>
os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 获取上级目录</span>
os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;../..&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 获取上上级目录</span>
</code></pre></div><h2 id="os-walk" tabindex="-1"><a class="header-anchor" href="#os-walk" aria-hidden="true">#</a> os.walk()</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">walkFile</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> root<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> files <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># root 表示当前正在访问的文件夹路径</span>
        <span class="token comment"># dirs 表示该文件夹下的子目录名list</span>
        <span class="token comment"># files 表示该文件夹下的文件list</span>

        <span class="token comment"># 遍历文件</span>
        <span class="token keyword">for</span> f <span class="token keyword">in</span> files<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># 遍历所有的文件夹</span>
        <span class="token keyword">for</span> d <span class="token keyword">in</span> dirs<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">)</span>
			
walkile<span class="token punctuation">(</span><span class="token string">&#39;floder_name&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 传入文件夹的名称</span>
</code></pre></div><h2 id="shutil-方法" tabindex="-1"><a class="header-anchor" href="#shutil-方法" aria-hidden="true">#</a> SHUTIL 方法</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> shutil

shutil<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token string">&quot;path_old&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;path_new&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 复制文件 path_old为原来的路径，path_new为新路径</span>
shutil<span class="token punctuation">.</span>copytree<span class="token punctuation">(</span><span class="token string">&quot;floder_old&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;floder_new&quot;</span><span class="token punctuation">)</span> <span class="token comment">#复制目录和目录下的文件</span>
shutil<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token string">&quot;path_old&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;path_new&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 移动文件或文件夹</span>
</code></pre></div><h2 id="zip-文件" tabindex="-1"><a class="header-anchor" href="#zip-文件" aria-hidden="true">#</a> ZIP 文件</h2><p>压缩：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os<span class="token punctuation">,</span>os<span class="token punctuation">.</span>path
<span class="token keyword">import</span> zipfile

<span class="token keyword">def</span> <span class="token function">zip_dir</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span>zipfilename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    filelist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isfile<span class="token punctuation">(</span>dirname<span class="token punctuation">)</span><span class="token punctuation">:</span>
        filelist<span class="token punctuation">.</span>append<span class="token punctuation">(</span>dirname<span class="token punctuation">)</span>
    <span class="token keyword">else</span> <span class="token punctuation">:</span>
        <span class="token keyword">for</span> root<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> files <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>dirname<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> name <span class="token keyword">in</span> files<span class="token punctuation">:</span>
                filelist<span class="token punctuation">.</span>append<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>
    zf <span class="token operator">=</span> zipfile<span class="token punctuation">.</span>ZipFile<span class="token punctuation">(</span>zipfilename<span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> zipfile<span class="token punctuation">.</span>zlib<span class="token punctuation">.</span>DEFLATED<span class="token punctuation">)</span>
    <span class="token keyword">for</span> tar <span class="token keyword">in</span> filelist<span class="token punctuation">:</span>
        arcname <span class="token operator">=</span> tar<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>dirname<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
        zf<span class="token punctuation">.</span>write<span class="token punctuation">(</span>tar<span class="token punctuation">,</span>arcname<span class="token punctuation">)</span>
    zf<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

zip_dir<span class="token punctuation">(</span>dir_name<span class="token punctuation">,</span>zip_name<span class="token punctuation">)</span> <span class="token comment"># dir_name：目录名 zip_name：压缩后文件名</span>
</code></pre></div><p>解压：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> glob
<span class="token keyword">import</span> zipfile

<span class="token keyword">def</span> <span class="token function">unzip_file</span><span class="token punctuation">(</span>dir_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 解压缩后文件的存放路径</span>
    unzip_file_path <span class="token operator">=</span> <span class="token string">r&quot;C:\\Users\\Desktop\\新建文件夹&quot;</span>
    <span class="token comment"># 找到压缩文件夹</span>
    dir_list <span class="token operator">=</span> glob<span class="token punctuation">.</span>glob<span class="token punctuation">(</span>dir_path<span class="token punctuation">)</span>
    <span class="token keyword">if</span> dir_list<span class="token punctuation">:</span>
        <span class="token comment"># 循环zip文件夹</span>
        <span class="token keyword">for</span> dir_zip <span class="token keyword">in</span> dir_list<span class="token punctuation">:</span>
            <span class="token comment"># 以读的方式打开</span>
            <span class="token keyword">with</span> zipfile<span class="token punctuation">.</span>ZipFile<span class="token punctuation">(</span>dir_zip<span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                <span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> f<span class="token punctuation">.</span>namelist<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    f<span class="token punctuation">.</span>extract<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span> path<span class="token operator">=</span>unzip_file_path<span class="token punctuation">)</span>　　<span class="token comment"># 有密码时需要传入第三个参数pwd</span>
            os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>dir_zip<span class="token punctuation">)</span>
 
 
unzip_file<span class="token punctuation">(</span><span class="token string">r&quot;C:\\Users\\Desktop\\新建文件夹\\*.zip&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 压缩目录下所有文件</span>
<span class="token keyword">def</span> <span class="token function">zip_files</span><span class="token punctuation">(</span>dir_path<span class="token punctuation">,</span> zip_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    :param dir_path: 需要压缩的文件目录
    :param zip_path: 压缩后的目录
    :return:
    &quot;&quot;&quot;</span>
    <span class="token keyword">with</span> zipfile<span class="token punctuation">.</span>ZipFile<span class="token punctuation">(</span>zip_path<span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> zipfile<span class="token punctuation">.</span>ZIP_DEFLATED<span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        <span class="token keyword">for</span> root<span class="token punctuation">,</span> _<span class="token punctuation">,</span> file_names <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>dir_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> filename <span class="token keyword">in</span> file_names<span class="token punctuation">:</span>
                f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
</code></pre></div><h2 id="后缀名查找文件" tabindex="-1"><a class="header-anchor" href="#后缀名查找文件" aria-hidden="true">#</a> 后缀名查找文件</h2><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

<span class="token keyword">def</span> <span class="token function">getFileName</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>  
    fileName <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  
    f_list <span class="token operator">=</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>path<span class="token punctuation">)</span>  
    <span class="token keyword">for</span> i <span class="token keyword">in</span> f_list<span class="token punctuation">:</span>  
        <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;.html&#39;</span><span class="token punctuation">:</span>  
            fileName<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>  
    <span class="token keyword">return</span> fileName  
</code></pre></div>`,19),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","file.html.vue"]]);export{k as default};
