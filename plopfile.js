const standingBook = require("./plop-templates/standingBook/plop");
const wfFormWithoutStandingBook = require("./plop-templates/wfFormWithoutStandingBook/plop");
const wfFormWithStandingBook = require("./plop-templates/wfFormWithStandingBook/plop");
const unWFFormWithStandingBook = require("./plop-templates/unWFFormWithStandingBook/plop");

module.exports = (plop) => {
    plop.setGenerator("创建台账", standingBook),
    plop.setGenerator("创建不带台账的流程表单", wfFormWithoutStandingBook),
    plop.setGenerator("创建带台账的流程表单", wfFormWithStandingBook),
    plop.setGenerator("创建带台账的非流程表单", unWFFormWithStandingBook)
};
