const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});

//目录
router.get('/works', async (ctx, next) => {
  await ctx.render('works', {
  })
});

//动画hover
router.get('/hoverDemo', async (ctx, next) => {
  await ctx.render('hoverDemo', {
  })
})

//算法
router.get('/algorithm', async (ctx, next) => {
  await ctx.render('algorithm', {
  })
});

//导航
router.get('/nav', async (ctx, next) => {
  await ctx.render('nav', {
  })
});

//翻书
router.get('/books', async (ctx, next) => {
  await ctx.render('books', {
  })
});

//Grid布局
router.get('/gridFlex', async (ctx, next) => {
  await ctx.render('gridFlex', {
  })
});




router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
