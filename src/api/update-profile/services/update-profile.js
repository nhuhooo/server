'use strict';

module.exports = {
    async updateProfile(userId, data) {
      try {
        const updatedUser = await strapi.query('plugin::users-permissions.user').update({
          where: { id: userId },
          data: {
            realname: data.realname,
            phone: data.phone,
            email: data.email,
            address: data.address 
          },
        });
  
        return updatedUser;
      } catch (error) {
        throw new Error('Cập nhật thông tin thất bại: ' + error.message);
      }
    },
  };
  