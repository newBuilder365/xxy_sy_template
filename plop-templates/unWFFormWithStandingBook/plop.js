module.exports = {
  description: "创建一个带台账的非流程表单",
  prompts: [
    {
      type: "input", // 问题的类型
      name: "name", // 问题对应得到答案的变量名，可以在acitons中使用该变量
      message: "当前组件的名称", // 在命令行中的问题
      default: "UnEditForm",
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
  ],
  actions: (data) => {
    // 这里可以通过data获取输入的pathname
    let name = data.name;
    const characters = [...name];
    characters[0] = characters[0].toLocaleLowerCase();
    name = characters.join("");
    let path = data.path;
    path = path.replace(/\\/g, "/");
    const finalPath = `${path}/${name}`;
    const actions = [
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/unWfEdit.js`, //添加的文件的路径
        templateFile: `plop-templates/unWFFormWithStandingBook/templates/unWfEdit.hbs`, //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/index.js`, //添加的文件的路径
        templateFile: `plop-templates/templates/view.hbs`, //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/components/tableSearchBar.js`, //添加的文件的路径
        templateFile: `plop-templates/templates/tableSearchBar.hbs`, //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/components/list.js`, //添加的文件的路径
        templateFile: `plop-templates/templates/list.hbs`, //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/components/form.js`, //添加的文件的路径
        templateFile: `plop-templates/unWFFormWithStandingBook/templates/form.hbs`, //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/components/formToolBar.js`, //添加的文件的路径
        templateFile: `plop-templates/templates/formToolBar.hbs`, //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/services.js`, //添加的文件的路径
        templateFile: `plop-templates/templates/services.hbs`, //模版文件的路径
      },
      {
        type: "add", // 操作类型 添加文件
        path: `${finalPath}/models.js`, //添加的文件的路径
        templateFile: `plop-templates/templates/models.hbs`, //模版文件的路径
      },
    ];

    return actions;
  },
};
