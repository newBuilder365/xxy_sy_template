const standingBook = require('./plop-templates/standingBook/plop')
const wfFormWithoutStandingBook = require('./plop-templates/wfFormWithoutStandingBook/plop')

module.exports = plop => {
    plop.setGenerator('创建台账1', standingBook),
    plop.setGenerator('创建不带台账的流程表单', wfFormWithoutStandingBook)
}