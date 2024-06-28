'use strict';

module.exports = {
    async updatedUser(ctx) {
      try {
        const userId = ctx.params.userId;
        const data = ctx.request.body;
  
        const updatedUser = await strapi.services.profile.updateProfile(userId, data);
  
        ctx.send({ message: 'Cập nhật thành công', user: updatedUser });
      } catch (error) {
        ctx.send({ error: 'Cập nhật thất bại', details: error });
      }
    },
  };
  
  