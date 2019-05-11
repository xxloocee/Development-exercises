import * as types from '../mutation-types'

const state = {
  applist: [
    {
      id: '1',
      url: require('../../assets/images/app1.jpg'),
      tit: '企业邮箱团购'
    },
    { id: '2', url: require('../../assets/images/app2.jpg'), tit: '法天使' },
    { id: '3', url: require('../../assets/images/app3.jpg'), tit: '法蝉' },
    { id: '4', url: require('../../assets/images/app4.jpg'), tit: '坚果云' },
    { id: '5', url: require('../../assets/images/app5.png'), tit: '天眼查' }
  ],
  classifyContentlist: [
    {
      name: '办公服务',
      datalist: [
        {
          id: '1',
          isHave: false,
          url: require('../../assets/images/app1.jpg'),
          tit: '企业邮箱团购'
        },
        {
          id: '2',
          isHave: false,
          url: require('../../assets/images/app2.jpg'),
          tit: '法天使'
        },
        {
          id: '3',
          isHave: false,
          url: require('../../assets/images/app3.jpg'),
          tit: '法蝉'
        },
        {
          id: '4',
          isHave: false,
          url: require('../../assets/images/app4.jpg'),
          tit: '坚果云'
        },
        {
          id: '5',
          isHave: false,
          url: require('../../assets/images/app5.png'),
          tit: '天眼查'
        },
        {
          id: '7',
          isHave: false,
          url: require('../../assets/images/traffic2.png'),
          tit: '特价酒店'
        }
      ]
    },
    {
      name: '旅行交通',
      datalist: [
        {
          id: '6',
          isHave: false,
          url: require('../../assets/images/traffic1.png'),
          tit: '特价机票'
        },
        {
          id: '7',
          isHave: false,
          url: require('../../assets/images/traffic2.png'),
          tit: '特价酒店'
        },
        {
          id: '5',
          isHave: false,
          url: require('../../assets/images/app5.png'),
          tit: '天眼查'
        }
      ]
    },
    {
      name: '休闲娱乐',
      datalist: [
        {
          id: '8',
          isHave: false,
          url: require('../../assets/images/arder1.png'),
          tit: '健身卡'
        },
        {
          id: '9',
          isHave: false,
          url: require('../../assets/images/arder2.png'),
          tit: '电影票'
        },
        {
          id: '10',
          isHave: false,
          url: require('../../assets/images/arder3.png'),
          tit: '话剧票'
        },
        {
          id: '4',
          isHave: false,
          url: require('../../assets/images/app4.jpg'),
          tit: '坚果云'
        }
      ]
    },
    {
      name: '办公服务',
      datalist: [
        {
          id: '1',
          isHave: false,
          url: require('../../assets/images/app1.jpg'),
          tit: '企业邮箱团购'
        },
        {
          id: '2',
          isHave: false,
          url: require('../../assets/images/app2.jpg'),
          tit: '法天使'
        },
        {
          id: '3',
          isHave: false,
          url: require('../../assets/images/app3.jpg'),
          tit: '法蝉'
        },
        {
          id: '4',
          isHave: false,
          url: require('../../assets/images/app4.jpg'),
          tit: '坚果云'
        },
        {
          id: '5',
          isHave: false,
          url: require('../../assets/images/app5.png'),
          tit: '天眼查'
        },
        {
          id: '7',
          isHave: false,
          url: require('../../assets/images/traffic2.png'),
          tit: '特价酒店'
        }
      ]
    },
    {
      name: '旅行交通',
      datalist: [
        {
          id: '6',
          isHave: false,
          url: require('../../assets/images/traffic1.png'),
          tit: '特价机票'
        },
        {
          id: '7',
          isHave: false,
          url: require('../../assets/images/traffic2.png'),
          tit: '特价酒店'
        },
        {
          id: '5',
          isHave: false,
          url: require('../../assets/images/app5.png'),
          tit: '天眼查'
        }
      ]
    },
    {
      name: '休闲娱乐',
      datalist: [
        {
          id: '8',
          isHave: false,
          url: require('../../assets/images/arder1.png'),
          tit: '健身卡'
        },
        {
          id: '9',
          isHave: false,
          url: require('../../assets/images/arder2.png'),
          tit: '电影票'
        },
        {
          id: '10',
          isHave: false,
          url: require('../../assets/images/arder3.png'),
          tit: '话剧票'
        },
        {
          id: '4',
          isHave: false,
          url: require('../../assets/images/app4.jpg'),
          tit: '坚果云'
        }
      ]
    }
  ],

}

const getters = {
  applist: state => state.applist,
  classifyContentlist: state => state.classifyContentlist
}

const actions = {
  initAppOper: ({ commit }) => commit('initAppOper'),
  addApps: ({ commit }, item) => commit('addApps', item),
  removeApps: ({ commit }, index) => commit('removeApps', index),
  subRemoveApps: ({ commit }, item) => commit('subRemoveApps', item),
  synAppOper: ({ commit }, obj) => commit('synAppOper', obj)
}

const mutations = {
  initAppOper(state) {
    state.applist.map(item => {
      this.commit('synAppOper', {itemValue: item, flagValue: true})
    });
  },
  addApps(state, item) {
    let flag = true;
      state.applist.map(appitem => {
        if (appitem.id === item.id) {
          flag = false;
        }
      });
      if (flag) {
        state.applist.push({
          id: item.id,
          isHave: item.isHave,
          url: item.url,
          tit: item.tit
        });
      }
  },
  removeApps(state, index) {
    state.applist.splice(index, 1);
  },
  subRemoveApps(state, item) {
    state.applist.map((appitem, index) => {
      if (appitem.id === item.id) {
        state.applist.splice(index, 1);
      }
    });
  },
  synAppOper(state, obj) {
    state.classifyContentlist.map(subitem => {
      subitem.datalist.map(listitem => {
        if (listitem.id === obj.itemValue.id) {
          listitem.isHave = obj.flagValue;
        }
      })
    });
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
