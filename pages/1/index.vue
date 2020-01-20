<template>
	<view class="content">

		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<!-- 横向滑动 start -->
		<view class="news-nav">
			<scroll-view scroll-x="true">
				<text>类目一</text>
				<text>类目一</text>
				<text>类目一</text>
				<text>类目一</text>
				<text>类目一</text>
				<text>类目一</text>
				<text>类目一</text>
				<text>类目一</text>
			</scroll-view>
		</view>
		<!-- 横向滑动 end -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '下边是横向滑动',
				menu: [{
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
						id: 4,
						title: '4'
					},
					{
						id: 5,
						title: '5'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	// 横向滑动 start
	.news-nav {
		margin: 70rpx 32rpx 0;
		height: 112rpx;
		line-height: 112rpx;
		background-color: #f5f5f5;
		scroll-view {
			white-space: nowrap;
			width: 100%;
			text {
				display: inline-block;
				width: 150rpx;
				height: 60rpx;
				text-align: center;
				font-size: 28rpx;
				color: #333333;
				&:nth-child(1) {
					color: #083C9D;
					font-size: 32rpx;
					color: #333333;
				}
			}
		}
	}
	// 横向滑动 end

</style>
