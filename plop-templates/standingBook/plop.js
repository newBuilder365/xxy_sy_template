module.exports = {
  description: "创建一个分页台账",
  prompts: [
    {
      type: "input", // 问题的类型
      name: "name", // 问题对应得到答案的变量名，可以在acitons中使用该变量
      message: "当前组件的名称", // 在命令行中的问题
      default: "List",
    },
    {
      type: "input", // 问题的类型
      name: "cloudApi", // 问题对应得到答案的变量名，可以在acitons中使用该变量
      message: "业务API", // 在命令行中的问题
      default: "cloudApi",
    },
    {
      type: "input", // 问题的类型
      name: "path", // 问题对应得到答案的变量名，可以在acitons中使用该变量
      message: "组件创建路径(modules/...)", // 在命令行中的问题
      default: "modules",
    },
    {
      type: "confirm", // 问题的类型
      name: "useHooks", // 问题对应得到答案的变量名，可以在acitons中使用该变量
      message: "是否使用hooks", // 在命令行中的问题
      default: true,
    },
  ],
  actions: (data) => {
    // 这里可以通过data获取输入的pathname
    let name = data.name;
    let useHooks = data.useHooks;
    const characters = [...name];
    characters[0] = characters[0].toLocaleLowerCase();
    name = characters.join("");
    let path = data.path;
    path = path.replace(/\\/g, "/");
    const finalPath = `${path}/${name}`;
    const actions = [
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/views/index.js`, //添加的文件的路径
        templateFile: useHooks
          ? "plop-templates/hookTemplates/view.hbs"
          : "plop-templates/standingBook/templates/views/index.hbs", //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/components/tableSearchBar.js`, //添加的文件的路径
        templateFile: useHooks
          ? "plop-templates/hookTemplates/tableSearchBar.hbs"
          : "plop-templates/standingBook/templates/components/tableSearchBar.hbs", //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/components/list.js`, //添加的文件的路径
        templateFile: useHooks
          ? "plop-templates/hookTemplates/list.hbs"
          : "plop-templates/standingBook/templates/components/list.hbs", //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/services.js`, //添加的文件的路径
        templateFile: useHooks
          ? "plop-templates/hookTemplates/services.hbs"
          : "plop-templates/standingBook/templates/services/index.hbs", //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/models.js`, //添加的文件的路径
        templateFile: useHooks
          ? "plop-templates/hookTemplates/models.hbs"
          : "plop-templates/standingBook/templates/models/index.hbs", //模版文件的路径
      },
    ];

    return actions;
  },
};
