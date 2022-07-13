import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,d as t}from"./app.add21a8e.js";const p={},e=t(`<h1 id="vue\u5F00\u53D1\u62A5\u9519\u95EE\u9898\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#vue\u5F00\u53D1\u62A5\u9519\u95EE\u9898\u89E3\u51B3" aria-hidden="true">#</a> Vue\u5F00\u53D1\u62A5\u9519\u95EE\u9898\u89E3\u51B3</h1><h2 id="_2-\u540C\u7EC4\u4EF6\u65B0\u589E\u4FEE\u6539\u51FA\u73B0\u6570\u636E\u67E5\u8BE2\u662F\u4E0A\u4E00\u6B21" tabindex="-1"><a class="header-anchor" href="#_2-\u540C\u7EC4\u4EF6\u65B0\u589E\u4FEE\u6539\u51FA\u73B0\u6570\u636E\u67E5\u8BE2\u662F\u4E0A\u4E00\u6B21" aria-hidden="true">#</a> 2.\u540C\u7EC4\u4EF6\u65B0\u589E\u4FEE\u6539\u51FA\u73B0\u6570\u636E\u67E5\u8BE2\u662F\u4E0A\u4E00\u6B21</h2><blockquote><p>2022\u5E747\u67085\u65E509:22:16</p></blockquote><p>\u5173\u95ED\u7EC4\u4EF6\u65F6\u6E05\u7A7A\u6570\u636E\uFF0C\u65B0\u589E\u65F6\u6700\u597D\u4E5F\u6E05\u7A7A,methods\u65B9\u6CD5\u4E2D\u53EF\u4EE5\u6DFB\u52A0\u8BE5\u65B9\u6CD5\uFF0C\u4E0B\u534A\u90E8\u5206IDE\u63D2\u4EF6\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u4F46\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0A\u534A\u90E8\u5206\uFF0C\u4F46\u662F\u6548\u679C\u4E0D\u597D\u3002\u5982\u679Ctab\u4E2D\u6709\u5217\u8868\uFF0C\u6709\u5217\u8868\u7684\u90A3\u9879\u53EF\u4EE5\u8BBE\u7F6Elazy\u4E3Atrue\uFF0C\u65B9\u6CD5\u4E2D\u4E0D\u6E05\u7A7A\u6570\u636E\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">clearData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// this.$refs.basic.dataForm={};</span>
    <span class="token comment">// this.$refs.idsgmt.dataForm={};</span>
    <span class="token comment">// this.$refs.fcsinfsgmt.dataForm={};</span>
    <span class="token comment">// //this.$refs.mnmmbinfsgmt.dataForm={};</span>
    <span class="token comment">// this.$refs.regcap.dataForm={};</span>
    <span class="token comment">// this.$refs.sharhodinf.dataForm={};</span>
    <span class="token comment">// this.$refs.actucotrlinfsg.dataForm={};</span>
    <span class="token comment">// this.$refs.spvsgathrtyinfsgmt.dataForm={};</span>
    <span class="token comment">// // this.$refs.cotainfsgmt.dataForm={};</span>
    <span class="token comment">// this.$refs.enctfitginf.dataForm={};</span>
    <span class="token comment">// // this.$refs.enicdnrltpinf.dataForm={};</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>id<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>custId<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>bssgmt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>idsgmt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>fcsinfsgmt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>regCap<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//this.dataForm.mnmmbinfsgmt={};</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>sharhodInf<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>actucotrlinfsg<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>spvsgathrtyinfsgmt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//this.dataForm.cotainfsgmt={};</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>enctfitginf<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//this.dataForm.enicdnrltpinf={};</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-tab\u4E2D\u8868\u5355\u4E5F\u6709\u5217\u8868-\u5217\u8868\u663E\u793A\u548C\u67E5\u8BE2\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-tab\u4E2D\u8868\u5355\u4E5F\u6709\u5217\u8868-\u5217\u8868\u663E\u793A\u548C\u67E5\u8BE2\u95EE\u9898" aria-hidden="true">#</a> 1.tab\u4E2D\u8868\u5355\u4E5F\u6709\u5217\u8868\uFF0C\u5217\u8868\u663E\u793A\u548C\u67E5\u8BE2\u95EE\u9898</h2><blockquote><p>2022\u5E747\u67084\u65E514:41:48</p></blockquote><p><code>el-tab-pane</code>\u8BBE\u7F6E<code>lazy=&quot;true&quot;</code>,\u5426\u5219\u9875\u9762\u5728\u6570\u636E\u52A0\u8F7D\u5B8C\u4E4B\u524D\u6E32\u67D3\u5B8C\u6BD5\u5C31\u65E0\u6CD5\u67E5\u8BE2\u8BE5id\u7684\u6570\u636E\uFF0C\u4E5F\u4E0D\u9700\u8981\u65B0\u589E\u65F6\u7F6E\u7A7A<code>this.$refs.basic.dataForm={};</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:visible.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">destroy-on-close</span> <span class="token attr-name">@closed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClosed<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!addDisable?$t(<span class="token punctuation">&#39;</span>add<span class="token punctuation">&#39;</span>):$t(<span class="token punctuation">&#39;</span>update<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:close-on-click-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:close-on-press-escape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:fullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tabs</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border-card<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tab-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u57FA\u672C\u4FE1\u606F<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>basic</span> <span class="token attr-name">:dataForm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>basic<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5176\u5B83<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>eibcidsgmt</span> <span class="token attr-name">:dataForm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{id:dataForm.id}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eibcidsgmt<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tabs</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5217\u8868\u9875\u9762\u9700\u8981\u67E5\u8BE2\u6307\u5B9Aid\uFF0C\u5728\u65B0\u589E\u65F6\u4E0D\u663E\u793A\u53EF\u4EE5\u8BBE\u7F6E\u5217\u8868\u7EC4\u4EF6\u521B\u5EFA\u65F6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>custId<span class="token operator">==</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>custId<span class="token operator">=</span><span class="token string">&#39;-&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(u,l){return a(),s("div",null,o)}var r=n(p,[["render",c],["__file","Vue\u5F00\u53D1\u62A5\u9519\u95EE\u9898\u89E3\u51B3.html.vue"]]);export{r as default};
