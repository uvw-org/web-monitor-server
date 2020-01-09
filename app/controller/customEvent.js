'use strict';

const Controller = require('egg').Controller;

class UpController extends Controller {
  async custom_event_up() {
    const { ctx } = this;
    const { type = '', project_id = '' } = ctx.query;
    if (!project_id) {
      return ctx.body = {
        code: 0,
        msg: '项目ID不能为空',
      };
    }
    const message = await ctx.model.CustomEvent.create({ type, project_id });
    ctx.body = `hi, ${message}`;
  }
}

module.exports = UpController;
