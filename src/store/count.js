//求和功能相关的配置
export default {
    namespaced:true,
    actions: {
        JIAODD(context, value) {
            console.log('action中的jiaOdd调用了')
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        JIAWAIT(context, value) {
            console.log('action中的jiaWait被调用了');
            setTimeout(() => {
                context.commit('JIA', value);
            }, 500);
        }
    },
    mutations: {
        JIA(state, value) {
            console.log("mutataions中的JIA被调用了")
            state.sum += value;
        },
        JIAN(state, value) {
            console.log("mutataions中的JIAN被调用了")
            state.sum -= value;
        },
    },
    state: {
        sum: 9, //当前的和
        school: '武汉软件工程职业学院',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
}