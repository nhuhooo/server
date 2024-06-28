module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/users/${userId}',
      handler: 'update-profile.updatedUser',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
