'use strict';

/**
 * add-to-shopping-cart service
 */

module.exports = () => ({
    addNew: async (user, productId, amount) => {
        console.log(productId)
       const shoppingCart = user.shoppingcart
        var exist = false;
       for(var i = 0; i < shoppingCart.length; i++){
            if  (+shoppingCart[i].productId === +productId){
                exist = true;
                var newAmount = +shoppingCart[i].amount + amount
                if (newAmount <= 0){
                    shoppingCart.splice(i, 1);
                }
                else{
                    shoppingCart[i].amount = newAmount
                }
                break;
            }
       }
       if (!exist){
        shoppingCart.push({
            productId, amount
        })
       }

       const entry = await strapi.entityService.update('plugin::users-permissions.user', user.id, {
            data: {
                shoppingcart: shoppingCart,
            },
        });
        for(var i = 0; i < shoppingCart.length; i++){
            const amount = shoppingCart[i].amount
            shoppingCart[i] = await strapi.entityService.findOne('api::product.product', shoppingCart[i].productId, {
                populate: { category: true , image: true},
              });
              shoppingCart[i].amount = amount;
        }
       return shoppingCart
    },
});
