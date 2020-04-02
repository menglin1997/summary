<!--
 * @Descripttion: 登录
 * @version: 
 * @Author: zml
 * @Date: 2020-03-19 10:36:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-02 11:46:42
 -->
<template>
	<view class="login">
		<view class="logo">
			<text>欢迎来到诚毅物联</text>
		</view>
		<!-- 表单 -->
<!-- 		<view class="form" v-if="isLogin">
			<view class="login form-ipt">
				<input type="text" placeholder="请输入账号" v-model="loginData.userName"/>
			</view>
			<view class="password form-ipt">
				<input type="password" placeholder="请输入密码" v-model="loginData.password" maxlength="12"/>
			</view>
		</view> -->
		<view class="form">
			<view class="login form-ipt">
				<input type="number" placeholder="请输入手机号" maxlength="11" v-model="loginData.phone"/>
			</view>
			<!-- 验证码 -->
			<view class="form-ipt form-code">
				<input type="number" placeholder="请输入短信验证码" v-model="loginData.code"/>
				<text @tap="getCode" v-if="disabled">获取验证码</text>
				<text v-else>{{ sec }}s后重发</text>
			</view>
		<!-- 	<view class="password form-ipt">
				<input type="text" placeholder="请输入密码" maxlength="12" v-model="registerData.password"/>
			</view> -->
		</view>
		<!-- 登录 -->
<!-- 		<view v-if="isLogin">
			<view class="form-btn" @tap="toLogin">
				登录
			</view>
			<view class="tips">
				<text>还没有账号？</text>
				<text class="tips-register" @tap="toChange">立即注册</text>
			</view>
		</view> -->
		<view>
			<view class="form-btn" @tap="toLogin">
				登录
			</view>
			<view class="privacy">
				点击登录默认同意《用户注册协议》
			</view>
		<!-- 	<view class="tips">
				<text>已有账号？</text>
				<text class="tips-register" @tap="toChange">立即登录</text>
			</view> -->
		</view>
	</view>
</template>

<script>
		var timer
 // 验证密码 保存用户信息
	import { isPasswd, userHandle, checkTel } from '@/utils/myUtils.js'
	import {
		TOKEN,
		USERINFO
	} from '@/utils/storageTypes.js'
	export default {
		data() {
			return {
				sec: 59,
				disabled: true,
				isLogin: true,
				loginData: {
					phone: '',
					code: ''
				},
				registerData: {
					phone: '',
					code: '',
					password: ''
				}
			};
		},
		onLoad() {
			// 验证是否登录
			let res = this.$checkLogin()
			if (res) {
				console.log(4)
				// uni.switchTab({
				// 	url: '../device/index'
				// });
				uni.navigateTo({
					url: './startPage'
				})
			}
		},
		onUnload() {
			if (timer) {
				console.log('清楚了')
				clearInterval(timer)
			}
		},
		methods: {
			// 登录
			toLogin() {
				console.log('登录')
				if (!this.loginData.phone || !this.loginData.code) {
					this.toast('请将信息填写完整')
					return
				}
				if(!checkTel(this.loginData.phone)){
					this.toast('手机号错误')
					return
				}
			},
			// 获取验证码
			getCode() {
				// 1. 手机号验证
				if(!checkTel(this.loginData.phone)){
					this.toast('手机号错误')
					return
				}
				// 2. 调用接口 发验证码,成功后开始计时
				this.disabled = false
				timer = setInterval(()=>{
					console.log('发送中')
					if (this.sec) {
						this.sec -= 1
					} else {
						this.disabled = true
						this.sec = 59
						clearInterval(timer)
					}
				}, 1000);
				
			},
		}
	}
</script>

<style lang="scss" scope>
@import './login.scss';
</style>
