var express = require('express'),
    router = express.Router();

router.get('/', function(req, res, next){
  res.render('tools', {
    title:'Tools',
    tools:[
      {
        name:'Deal Manager',
        description:'Deal entry system for Holiday Blocks',
        link:'/dealmanager',
        icon:'http://www.axure.com/c/attachments/forum/general-discussion/3919d1401387174-turn-placeholder-widget-into-image-maintain-interactions-screen-shot-2014-05-29-10.46.57-am.png'
      },
      {
        name:'Deal Manager',
        description:'Deal entry system for Holiday Blocks',
        link:'/dealmanager',
        icon:'http://www.axure.com/c/attachments/forum/general-discussion/3919d1401387174-turn-placeholder-widget-into-image-maintain-interactions-screen-shot-2014-05-29-10.46.57-am.png'
      }
    ]
  });
});

module.exports = router;
