//处理数据

import {userInfo, dialog, userWord} from 'src/service/getData'
import {GET_USERINFO, SAVE_BEGINDIALOGUE} from './mutation-types.js'

export default {
	//获取用户信息
	async getUserInfo({
		commit,
		state
	}){
		let useData = await userInfo()
		commit(GET_USERINFO,useData)
	},
	 async getDialog({
	 	commit,
	 	state
	 }){
	 	if(state.contactList.length > 0) return;
	 	let res=await dialog();
	 	commit(SAVE_BEGINDIALOGUE,res)
	 }
}