// eslint-disable-next-line strict
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const CustomEvent = app.model.define('custom_event', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: STRING(30),
    project_id: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return CustomEvent;
};
