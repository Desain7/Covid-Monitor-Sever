//计算服务器消耗时长
module.exports = async (ctx, next) =>{
    //记录开始时间
    const start = Date.now();
    //
    await next()
    const end = Date.now();
    const duration = end - start;
    ctx.set('X-Response-Time', `${duration}ms`);
}