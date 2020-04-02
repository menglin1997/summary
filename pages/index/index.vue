<template>
	<view class="content">

		<!-- lunbotu -->
		<view class="page-top">
			<view class="mask-white"></view>
			<view>
				<swiper class="screen-swiper square-dot" indicator-active-color="rgba(255,255,255,1)" :indicator-dots="true"
				 :circular="true" :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item,index) in topBanner" :key="index">
						<image :src="item.thumb" mode="aspectFill" />
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		<!-- 公告 -->
		<view class="adv-wapper">
			<view class="lside">
				<image src="/static/oa/icon_index08.png"></image>
			</view>
			<view class="rside">
				<swiper class="swiper" :indicator-dots="false" :vertical="true" :circular="true" :autoplay="true" interval="5000"
				 duration="300">
					<swiper-item v-for="(item,index) in noticeList" :key="index">
						<view class="adv-text">{{item.title}}</view>
					</swiper-item>
				</swiper>
			</view>
		</view>

		<!-- 横向滑动Navbar start -->
		<view class="mj-nav-wapper" id="mj_nav_wapper" @touchmove.stop.prevent>
			<view :class="{'mj-nav-content': !isFixed , 'mj-nav-content-fixed': isFixed}">
				<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
					<view class="cu-item" :class="index==currentTabIndex?'text-green cur':''" v-for="(item,index) in navs" :key="index"
					 @tap="tabSelect" :data-id="index">{{item.community_name}}
						<image src="/static/icon_index07.png" mode="widthFix" class="mj-img"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 横向滑动 end -->
		
		
		<!-- navbar对应的列表内容 -->

		<swiper class="mews-swiper" :current="currentTabIndex" @change="newsSwiperChange">
			<swiper-item v-for="(news,id) in listData" :key="id">
				<scroll-view :scroll-y="isFixed" class="news-list-scroll-view" @scrolltolower="getList">
					<view class="news-list">
						<view class="news-item" v-for="(item, index) in news.lists" :key="index">
							<view class="rside">
								<image mode="aspectFill" class="rside" :src="item.images" />
								<view class="tag" v-if="item.is_top == 1">置顶</view>
							</view>
							<view class="lside">
								<view class="title">{{item.title}}</view>
								<view class="desc">{{item.synopsis}}</view>
								<view class="placeholder"></view>
								<view class="time">
									<text>{{item.create_time}}</text>
									<image :src="'/static/oa/icon_index0' + (item.is_praise == 1 ? '5' : '4') + '.png'"></image> {{item.praise_num}}
								</view>
							</view>
						</view>

						<!-- <view class="loading-wapper" v-if="!news.loadedAll && !news.noListData">
							<view class="loading-icon"></view>
							<text class="loading-txt">加载中</text>
						</view>
						<view class="loading-wapper" v-if="news.loadedAll && !news.noListData && news.lists.length != 0">
							<text class="loading-txt">已加载全部{{news.name}}新闻~</text>
						</view>
						-->
						<view class="public-page-empty" v-if="(news.loadedAll && news.noListData) || (news.loadedAll && news.lists.length == 0)">
							<image src="/static/empty/empty11.png" style="width: 400upx; height: 294upx"></image>
							<view class="txt">暂无{{news.name}}新闻</view>
						</view> 
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>


	</view>
</template>

<script>
	let statusBarAndNavBarHeight = uni.getSystemInfoSync().statusBarHeight + 44

	const app = getApp()
	export default {
		data() {
			return {
				title1: '下边是横向滑动',
				title2: '下边是纵向滑动',

				topBanner: [{
						height: 0,
						href: "www.baidu.com",
						name: "guide_1.9",
						thumb: "http://hzoa.huaiyangren.cn/uploads/images/20191217/a46f55ca3bb9127645a56d1f739e7231.jpg",
						width: 0
					},
					{
						height: 0,
						href: "www.baidu.com",
						name: "guide_1.9",
						thumb: "http://hzoa.huaiyangren.cn/uploads/images/20191226/13a18bcda9bc009e49755aaf3f5ec5a9.png",
						width: 0
					},
					{
						height: 0,
						href: "www.baidu.com",
						name: "guide_1.9",
						thumb: "http://hzoa.huaiyangren.cn/uploads/images/20191217/a46f55ca3bb9127645a56d1f739e7231.jpg",
						width: 0
					}
				],
				isFixed: false, // 新闻分类是否吸顶
				scrollLeft: 0, // 新闻分类NAV左滚动距离
				currentTabIndex: 0, // 当前选中新闻分类
				noticeList: [{
						id: 0,
						title: '1'
					},
					{
						id: 1,
						title: '2'
					},
					{
						id: 2,
						title: '3'
					},
					{
						id: 3,
						title: '4'
					},
					{
						id: 4,
						title: '5'
					},
					{
						id: 5,
						title: '6'
					}
				],
				navs: [{
						id: 0,
						community_name: '推荐文章'
					},
					{
						id: 1,
						community_name: '新闻'
					},
					{
						id: 2,
						community_name: '咨询啦'
					},
					{
						id: 3,
						community_name: '生化'
					},
					{
						id: 4,
						community_name: '项目推进'
					},
					{
						id: 5,
						community_name: '产品推荐'
					}
				],
				listData: [
					{
						lists: [{
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}]
					},
					{
						lists: [{
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}]
					},
					{
						lists: [{
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}]
					},
					{
						lists: [{
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}]
					},
					{
						lists: [{
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}]
					},
					{
						lists: [{
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}, {
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}, {
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}, {
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}, {
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}, {
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}, {
							comment_num: 128,
							content: "沙发沙发",
							create_time: "2019-12-17 19:41:37",
							id: 54,
							images: "http://hzoa.huaiyangren.cn/uploads/images/20200108/1dd280b6ba3ea20ea73bf269f8f81366.png",
							is_del: 0,
							is_praise: 0,
							is_tj: 1,
							is_top: 0,
							praise_num: 5,
							status: 1,
							synopsis: "据不完全统计，糖尿病在中国的发病率达到2%,中国已确诊的糖尿病患者已超过4000万，并以每年100万的速度递增，这个数字是非常惊人的。医学界还没有能完全治愈这种病症的特效药。临床研究也证实，药物治疗和控制饮食相结合对病情控制很有利，正如俗话所说:“三分治，七分养”。关键在于怎么养，就是能吃什么，要怎么吃才安全。《糖尿病饮食指南》就是针对这样的问题而编的，将是您居家旅行的必备之选！",
							title: "糖尿病患者检查指南",
							type_id: 1,
							user_id: 0
						}]
					}
				]

			}
		},
		onLoad() {
			console.log(app.globalData)
		},
		// 新闻分类吸顶
		onPageScroll(e) {
			let view = uni.createSelectorQuery().select('#mj_nav_wapper');
			view.boundingClientRect(data => {
				this.isFixed = data.top - statusBarAndNavBarHeight <= 0
			}).exec();
		},
		methods: {
			// 文章列表swiper切换
			newsSwiperChange(e) {
				console.log(e.detail)
				this.currentTabIndex = e.detail.current
				this.scrollLeft = (e.detail.current - 1) * 60
			},
			// tab栏目切换
			tabSelect(e) {
				console.log(e)
				this.currentTabIndex = e.currentTarget.dataset.id
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			getList() {
				console.log('滑动了')
			}
		}
	}
</script>

<style lang="scss">
	@import "./index.scss";
</style>
