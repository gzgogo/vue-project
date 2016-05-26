# vue-project

vue工程基础结构

## 操作说明

### 开发命令
该命令使用webpack.dev.config.js配置文件，利用webpack-dev-server以及vue-hot-reload-api使页面在代码修改后进行实时刷新和热替换。

```
npm run dev
```

有时运行开发命令时会报如下错误：`Error: listen EADDRINUSE 127.0.0.1:8888`，遇到这种情况需要按照下面方法修改端口：  
修改`package.jso`文件内`scripts`字段的`dev`命令，找到`--port`，将其后面的`888`8改为其他端口，如`3000`
    
>webpack-dev-server将所有内容编译打包到内存中，并不生成实际文件。

### 编译命令
该命令使用webpack.prod.config.js配置文件，通过webpack将内容编译并打包到dst目录下。

```
npm run build
```
