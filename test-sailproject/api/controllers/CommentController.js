/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `CommentController.create()`
   */
  create: function (req, res, next) {
    return res.json({ id:12, nama:'jumilar', alamat:'bangbayang', involvedInPurchases: [
    {
      amount: 10000,
      createdAt: "2014-08-03T01:50:33.898Z",
      updatedAt: "2014-08-03T01:51:08.227Z",
      id: 47,
      cashier: 7

    }
  ]

    });
  },

  farm: function(req,res, next){
    var opiks = [{email:"axx"},
     { pasword:"yyy"}];
     res.view({});
    // res.render('CommentController',farm);
  },


  /**
   * `CommentController.destroy()`
   */
  destroy: function (req, res, next) {
    return res.json({
      id:11, nama:'ega', alamat:'cijambe'
    });
  },


  /**
   * `CommentController.tag()`
   */
  tag: function (req, res, next) {
    return res.json({
      todo: 'tag() is not implemented yet!'
    });
  },


  /**
   * `CommentController.like()`
   */
  like: function (req, res, next) {
    return res.json({
      todo: 'like() is not implemented yet!'
    });
  },

  pelajaran: function (req, res, next) {
    return res.json({ nama:'jumilar',
      alamat:'jalan bangbayang no.17',
      pekerjaan: '...'
      // todo: 'tag() is not implemented yet!'
    });
  },
};

