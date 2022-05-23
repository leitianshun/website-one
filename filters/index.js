function formatDate(str) {
  if (!str || str === '') {
    return ''
  }
  const d = new Date(str)
  const time = d.getFullYear() + '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') + '-' +
    d.getDate().toString().padStart(2, '0')
  return time
}




function formatDateTime(str) {
  if (!str || str === '') {
    return ''
  }
  const d = new Date(str)
  const time = d.getFullYear() + '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') + '-' +
    d.getDate().toString().padStart(2, '0') + ' ' +
    d.getHours().toString().padStart(2, '0') + ':' +
    d.getMinutes().toString().padStart(2, '0') + ':' +
    d.getSeconds().toString().padStart(2, '0')
  return time
}

function formatDateMin(str) {
  if (!str || str === '') {
    return ''
  }
  const d = new Date(str)
  const time = d.getFullYear() + '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') + '-' +
    d.getDate().toString().padStart(2, '0') + ' ' +
    d.getHours().toString().padStart(2, '0') + ':' +
    d.getMinutes().toString().padStart(2, '0')
  return time
}

function getStatus(companyCard) {
  if (companyCard.endTime) {
    const endTime = new Date(companyCard.endTime).getTime()
    const nowTime = new Date().getTime()
    if (endTime > nowTime) {
      return '' // 未到期返回''
    } else {
      return '已到期'
    }
  } else {
    return '未授权'
  }
}

function timestampToMin(timestamp) {
  const time = Number(String(timestamp * 1000).slice(0, 13))
  return formatDateMin(new Date(time))
}

function formatFloat(value) {
  const result = Number((value / 100).toFixed(2))
  return Number.isNaN(result) ? 0 : result
}

function getStatusByTimestamp(timestamp) {
  const nowTime = new Date().getTime()
  if (timestamp > nowTime) {
    return '已授权'
  } else {
    return '已到期'
  }
}

function getState(state) {
  if (typeof state === 'undefined') {
    return '暂无'
  }
  const status = {
    '-1': '提交失败',
    1: '提交成功',
    2: '审核中',
    3: '审核提交失败',
    4: '审核失败',
    5: '审核成功',
    6: '发布成功',
    7: '发布失败',
  }
  return status[state]
}

/**
 * 充值状态(1待审核2待充值3已完成4已拒绝)
 * @param state
 * @returns {*}
 */
function rechargeStateFilter(state) {
  const rechargeState = {
    0: '请上传转账凭证',
    1: '待审核',
    2: '待充值',
    3: '已完成',
    4: '已拒绝',
  }
  return rechargeState[state]
}

/**
 * 订单状态（1 待付款，2 待发货，3 待收货，4 已完成，5 交易取消，6 退款成功）
 * @param state
 * @returns {string|*}
 */
function getOrderState(refundState, state) {
  if (typeof state === 'undefined') {
    return '暂无'
  }
  const status = {
    1: {
      0: '已失效',
      1: '待付款',
      2: '待发货',
      3: '待收货',
      4: '已完成',
      5: '取消订单',
      6: '退款成功',
    },
    2: '退款中',
    3: '退款成功',
  }
  return refundState === 1
    ? status[refundState][state]
    : status[refundState]
}

/**
 * 退款状态 1 未申请，2 退款申请中，3 退款成功
 * @param state
 * @returns {string|*}
 */
function getRefundState(state) {
  if (typeof state === 'undefined') {
    return '暂无'
  }
  const status = {
    1: '未申请',
    2: '退款申请中',
    3: '退款成功',
  }
  return status[state]
}

/**
 * 退款状态 0 否, 1 是
 * @param state
 * @returns {string|*}
 */
function getInvoiceState(state) {
  if (typeof state === 'undefined') {
    return '暂无'
  }
  const status = {
    0: '否',
    1: '是',
  }
  return status[state]
}

/**
 * 配送状态 1 待定，2 待定，3 待定
 * @param state
 * @returns {string|*}
 */
function getDeliveryState(state) {
  if (typeof state === 'undefined') {
    return '暂无'
  }
  const status = {
    1: '待定',
    2: '待定',
    3: '待定',
  }
  return status[state]
}

/**
 ** 加法函数，用来得到精确的加法结果
 ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 ** 调用：accAdd(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
function accAdd(arg1, arg2) {
  let r1, r2, m, c
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  c = Math.abs(r1 - r2)
  m = Math.pow(10, Math.max(r1, r2))
  if (c > 0) {
    const cm = Math.pow(10, c)
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''))
      arg2 = Number(arg2.toString().replace('.', '')) * cm
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm
      arg2 = Number(arg2.toString().replace('.', ''))
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''))
    arg2 = Number(arg2.toString().replace('.', ''))
  }
  return (arg1 + arg2) / m
}
/**
 ** 减法函数，用来得到精确的减法结果
 ** 说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 ** 调用：accSub(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
function accSub(arg1, arg2) {
  let r1, r2, m, n
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2)) // last modify by deeka //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2
  return ((arg1 * m - arg2 * m) / m).toFixed(n)
}
/**
 ** 乘法函数，用来得到精确的乘法结果
 ** 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 ** 调用：accMul(arg1,arg2)
 ** 返回值：arg1乘以 arg2的精确结果
 **/
function accMul(arg1, arg2) {
  let m = 0; const s1 = arg1.toString(); const s2 = arg2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {
  }
  try {
    m += s2.split('.')[1].length
  } catch (e) {
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) /
    Math.pow(10, m)
}
/**
 ** 除法函数，用来得到精确的除法结果
 ** 说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 ** 调用：accDiv(arg1,arg2)
 ** 返回值：arg1除以arg2的精确结果
 **/
function accDiv(arg1, arg2) {
  let t1 = 0; let t2 = 0; let r1; let r2
  try {
    t1 = arg1.toString().split('.')[1].length
  } catch (e) {
  }
  try {
    t2 = arg2.toString().split('.')[1].length
  } catch (e) {
  }

  r1 = Number(arg1.toString().replace('.', ''))
  r2 = Number(arg2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}

export default {
  formatDate,
  formatDateTime,
  formatDateMin,
  getStatus,
  timestampToMin,
  getStatusByTimestamp,
  getState,
  getInvoiceState,
  getOrderState,
  getRefundState,
  formatFloat,
  rechargeStateFilter,
  accAdd,
  accSub,
  accMul,
  accDiv,
}
