const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = async (event, context) => {
  console.log(event)
  console.log(context)

  const { userInfo } = event

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID

  return db.collection('users')
    .where({
      _openid: openid
    })
    .get()
    .then(res => {
      // 已经存在用户，则更新用户信息
      if (res.data.length > 0) {
        return db.collection('users').where({
          _openid: openid
        }).update({
          data: {
            userInfo: userInfo
          }
        }).then(result => {
          console.log('[数据库] [更新记录] 成功，返回：', result)
          return {
            code: 0,
            openid: openid,
            userInfo: userInfo
          }
        }).catch(err => {
          console.error('[数据库] [更新记录] 失败：', err)
          throw {
            code: 1,
            err: err
          }
        })
      } else {
        // 不存在用户，则添加一条用户信息
        return db.collection('users').add({
          data: {
            _openid: openid,
            userInfo: userInfo
          }
        }).then(result => {
          console.log('[数据库] [新增记录] 成功，记录 _id: ', result._id)
          return {
            code: 0,
            openid: openid,
            userInfo: userInfo
          }
        }).catch(err => {
          console.error('[数据库] [新增记录] 失败：', err)
          throw {
            code: 1,
            err: err
          }
        })
      }
    })
}
