/*
 * @Author: huangyh
 * @Date: 2022-01-04 13:51:07
 * @LastEditors: huangyh
 * @LastEditTime: 2022-01-06 17:52:15
 */
// /biz/getDepartmentUserBasicInfo  获取部门用户基础信息  post请求，无参
// 今天 15:23

// /biz/sendWorkNotification 发送工作通知 post请求 参数 {"userIdList":"1,2,3","content":"发送的内容"}
const state = {
  orderList: [],
  assignPerson: [
    {
      id: 1,
      name: '张三',
      distance: '160.8km(三个月前)',
      phone: '13312345678',
      team: 'A团队',
      incompleteNum: 2,
      assign: true,
      coordination: false,
    },
    {
      id: 2,
      name: '李四',
      distance: '10.8km(一个月前)',
      phone: '18812345678',
      team: '同城维修',
      incompleteNum: 0,
      assign: true,
      coordination: false,
    },
    {
      id: 3,
      name: '王五',
      distance: '<3km',
      phone: '15912345678',
      team: 'A团队',
      incompleteNum: 4,
      assign: true,
      coordination: false,
    },
    {
      id: 4,
      name: '马六',
      distance: '-',
      phone: '16012345678',
      team: '同城维修',
      incompleteNum: 5,
      assign: true,
      coordination: false,
    },
  ],
  logObj: {},
  userInfo: {},
  corpId: '',
  agentId: '',
}
const mutations = {
  SET_CORPID: (state, data) => {
    state.corpId = data
  },
  SET_AGENTID: (state, data) => {
    state.agentId = data
  },
  SET_ORDERLIST: (state, orderList) => {
    state.orderList = orderList
  },
  PUSH_ORDERLIST: (state, orderItem) => {
    state.orderList.push(orderItem)
    saveData('orderList', state.orderList)
  },
  UPDATE_ORDERLIST: (state, orderItem) => {
    let index = state.orderList.findIndex((i) => i.id == orderItem.id)
    state.orderList.splice(index, 1, orderItem)
    saveData('orderList', state.orderList)
  },
  SET_LOGOBJ: (state, logObj) => {
    state.logObj = logObj
  },
  UPDATE_LOGOBJ: (state, logObj) => {
    if (state.logObj[logObj.orderId] != undefined) {
      state.logObj[logObj.orderId].push(logObj)
    } else {
      state.logObj[logObj.orderId] = []
      state.logObj[logObj.orderId].push(logObj)
    }
    saveData('logObj', state.logObj)
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
}
const actions = {}
function saveData(type, data) {
  localStorage.setItem(type, JSON.stringify(data))
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
