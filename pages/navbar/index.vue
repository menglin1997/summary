<!--
 * @Descripttion: navbar
 * @version: 
 * @Author: zml
 * @Date: 2020-03-20 18:47:07
 * @LastEditors: zml
 * @LastEditTime: 2020-04-03 18:47:20
 -->
<template>
	<view class="container">
		<!-- navbar -->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{current: tabCurrentIndex === index}"
			 @click="tabClick(index)">
				{{item.text}}
			</view>
		</view>

		<!-- 列表 -->
		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="getList" :scroll-with-animation="true">
					<view class="list" v-for="(item, index) in tabItem.orderList" :key="index">
						{{item.deviceNo}}
					</view>
					<view class="no-data" v-if="tabItem.orderList.length === 0">
						<text>暂无数据</text>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	// import Json from '@/Json';
	export default {

		data() {
			return {
				navList: [{
						state: 0,
						text: '蓝牙设备',
						loadingType: 'more',
						orderList: [{
								deviceNo: '8745995123',
								time: '2020-02-12',
								address: '郑州市高新区大学科技园',
								isLine: '在线'
							},
							{
								deviceNo: '8745995123',
								time: '2020-02-12',
								address: '郑州市高新区大学科技园',
								isLine: '在线'
							},
							{
								deviceNo: '8745995123',
								time: '2020-02-12',
								address: '郑州市高新区大学科技园',
								isLine: '在线'
							},
							{
								deviceNo: '8745995123',
								time: '2020-02-12',
								address: '郑州市高新区大学科技园',
								isLine: '在线'
							},
							{
								deviceNo: '8745995123',
								time: '2020-02-12',
								address: '郑州市高新区大学科技园',
								isLine: '在线'
							},
							{
								deviceNo: '8745995123',
								time: '2020-02-12',
								address: '郑州市高新区大学科技园',
								isLine: '在线'
							},
							{
								deviceNo: '8745995123',
								time: '2020-02-12',
								address: '郑州市高新区大学科技园',
								isLine: '在线'
							},
							{
								deviceNo: '8745995123',
								time: '2020-02-12',
								address: '郑州市高新区大学科技园',
								isLine: '在线'
							},
							{
								deviceNo: '8745995123',
								time: '2020-02-12',
								address: '郑州市高新区大学科技园',
								isLine: '在线'
							},
							{
								deviceNo: '8745995123',
								time: '2020-02-12',
								address: '郑州市高新区大学科技园',
								isLine: '在线'
							}
						]
					},
					{
						state: 1,
						text: 'WiFi配网',
						loadingType: 'more',
						orderList: [

						]
					},
					{
						state: 2,
						text: '远程控制',
						loadingType: 'more',
						orderList: [

						]
					},
					{
						state: 1,
						text: 'WiFi配网',
						loadingType: 'more',
						orderList: [
					
						]
					}
				],
				tabCurrentIndex: 0,
			};
		},
		onLoad(option) {
			this.getList()
		},
		methods: {
			// 获取数据
			getList() {
				console.log(12)
				// let equipList = Json.equipList
				// this.navList[this.tabCurrentIndex].orderList = equipList
			},

			// narbar改变
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
				if (this.tabCurrentIndex === 1) {} else if (this.tabCurrentIndex === 0) {}
			},

			// 点击navbar
			tabClick(i) {
				console.log(i)
				this.tabCurrentIndex = i
			}

		}

	}
</script>

<style lang="scss" scoped>
	@import "./index.scss";
</style>
