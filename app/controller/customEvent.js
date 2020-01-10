'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UpController extends Controller {
  async custom_event_up() {
    const { ctx } = this;
    const { type, project_id, custom } = ctx.query;
    if (!project_id) {
      return ctx.body = {
        code: 0,
        msg: '项目ID不能为空',
      };
    }
    const message = await ctx.model.CustomEvent.create({ type, project_id, custom, ip: ctx.ip });
    ctx.body = message;
  }

  async custom_event_list() {
    const { ctx } = this;
    const { project_id } = ctx.query;
    if (!project_id) {
      return ctx.body = {
        code: 0,
        msg: '项目ID不能为空',
      };
    }
    const query = {
      where: { project_id },
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset - 1),
    };
    const list = await ctx.model.CustomEvent.findAll(query);
    const count = await ctx.model.CustomEvent.count(query);
    ctx.body = {
      code: 1,
      list,
      count,
    }
  }
}

module.exports = UpController;
