# Xiaoting Du — Academic Homepage

杜晓婷个人学术主页。纯静态(HTML + CSS + 原生 JS),无构建步骤,部署在 GitHub Pages:
<https://xiaotingdu.github.io/>

## 文件结构

```
index.html        # 全部内容(单页 + 锚点分区)
style.css         # 样式(北邮红 #C00000,响应式)
main.js           # 导航高亮、移动端菜单、滚动渐显
files/            # 头像 xiaotingdu.jpg、中文 CV、旧版样式
publications/     # 论文 PDF
404.html          # 404 页面
```

## 本地预览

任选其一:

```bash
# 方式 1:Python 自带服务器(推荐,绝对路径才能正确解析)
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000

# 方式 2:直接双击 index.html
# 注意:页面里的链接用的是绝对路径(/style.css 等),
# 直接双击可能样式加载不全,建议用方式 1。
```

## 部署到 GitHub Pages

仓库名必须是 `用户名.github.io`(本仓库已是 `xiaotingdu.github.io`):

```bash
git add -A
git commit -m "Update homepage"
git push origin master
```

推送后约 1 分钟,GitHub Pages 自动重新构建。
首次启用:仓库 Settings → Pages → Source 选 `master` 分支、根目录 `/`。

## 如何手动维护(无需懂前端)

打开 `index.html`,所有内容都是直白的 HTML,照着现有条目复制修改即可。

### 新增一条 News

在 `<ul class="news"> ... </ul>` 里加一行:

```html
<li><time>2026.09</time><span>你的动态一句话。</span></li>
```

### 新增一篇论文

找到对应年份的 `<div class="year-head">2026</div>` 下方,复制一条 `.pub` 块修改。
本人名字用 `<span class="me">Xiaoting Du</span>` 包裹即可自动高亮成红色;
PDF / DOI 链接放在 `<span class="pub__links">` 里:

```html
<div class="pub">
  <div class="venue">TSE'26</div>
  <div class="pub__body">
    <span class="me">Xiaoting Du</span>, et al.
    <span class="title">论文标题</span>.
    <span class="viz">期刊/会议名(斜体)</span>.
    <span class="pub__links"><a href="/publications/xxx.pdf">pdf</a><a href="DOI链接">doi</a></span>
  </div>
</div>
```

新论文 PDF 放进 `publications/` 目录,再在条目里引用 `/publications/文件名.pdf`。

## 待补占位(搜索 `TODO` 可定位)

- [ ] DBLP / GitHub 主页链接(`index.html` 联系方式区有 TODO 注释)
- [ ] 论文统计数字(引用数/篇数)按需核对更新
- [ ] 两篇 2026 论文的录用月份(News 暂用年份)
