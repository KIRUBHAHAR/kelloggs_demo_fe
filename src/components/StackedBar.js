import React, { useState } from "react";
import {
	Axis,
	Chart,
	Tooltip,
	Interval,
	View,
	Line,
	Legend,
	getTheme
} from "bizcharts";

const theme = getTheme();

const data = [
	{ name: '01-01-2023', month: 'Jan.', users: 18 },
	{ name: '01-01-2023', month: 'Feb.', users: 28 },
	{ name: '01-01-2023', month: 'Mar.', users: 39 },
	{ name: '01-01-2023', month: 'Apr.', users: 81},
	{ name: '01-01-2023', month: 'May', users: 47 },
	{ name: '01-01-2023', month: 'Jun.', users: 20 },
	{ name: '01-01-2023', month: 'Jul.', users: 24 },
	{ name: '01-01-2023', month: 'Aug.', users: 35 },
    { name: '02-01-2023', month: 'Jan.', users: 15},
	{ name: '02-01-2023', month: 'Feb.', users: 21 },
	{ name: '02-01-2023', month: 'Mar.', users: 31},
	{ name: '02-01-2023', month: 'Apr.', users: 89 },
	{ name: '02-01-2023', month: 'May', users: 42 },
	{ name: '02-01-2023', month: 'Jun.', users: 21 },
	{ name: '02-01-2023', month: 'Jul.', users: 21},
	{ name: '02-01-2023', month: 'Aug.', users: 32 },
    { name: '03-01-2023', month: 'Jan.', users: 34},
	{ name: '03-01-2023', month: 'Feb.', users: 0 },
	{ name: '03-01-2023', month: 'Mar.', users: 15},
	{ name: '03-01-2023', month: 'Apr.', users: 98 },
	{ name: '03-01-2023', month: 'May', users: 65},
	{ name: '03-01-2023', month: 'Jun.', users: 34 },
	{ name: '03-01-2023', month: 'Jul.', users: 24 },
	{ name: '03-01-2023', month: 'Aug.', users: 35 },
    { name: '04-01-2023', month: 'Jan.', users: 23},
	{ name: '04-01-2023', month: 'Feb.', users: 21 },
	{ name: '04-01-2023', month: 'Mar.', users: 31},
	{ name: '04-01-2023', month: 'Apr.', users: 89 },
	{ name: '04-01-2023', month: 'May', users: 42 },
	{ name: '04-01-2023', month: 'Jun.', users: 21 },
	{ name: '04-01-2023', month: 'Jul.', users: 21},
	{ name: '04-01-2023', month: 'Aug.', users: 32 },
    { name: '05-01-2023', month: 'Jan.', users: 23 },
	{ name: '05-01-2023', month: 'Feb.', users: 28 },
	{ name: '05-01-2023', month: 'Mar.', users: 39 },
	{ name: '05-01-2023', month: 'Apr.', users: 81},
	{ name: '05-01-2023', month: 'May', users: 47 },
	{ name: '05-01-2023', month: 'Jun.', users: 20 },
	{ name: '05-01-2023', month: 'Jul.', users: 24 },
	{ name: '05-01-2023', month: 'Aug.', users: 34 },
	// { name: 'Berlin', month: 'Jan.', users: 12.4 },
	// { name: 'Berlin', month: 'Feb.', users: 23.2 },
	// { name: 'Berlin', month: 'Mar.', users: 34.5 },
	// { name: 'Berlin', month: 'Apr.', users: 99.7 },
	// { name: 'Berlin', month: 'May', users: 52.6 },
	// { name: 'Berlin', month: 'Jun.', users: 35.5 },
	// { name: 'Berlin', month: 'Jul.', users: 37.4 },
	// { name: 'Berlin', month: 'Aug.', users: 42.4 },
];
const average = data.reduce((pre, item) => {
	const { month, users } = item;
	if (!pre[month]) {
		pre[month] = 0
	}
	pre[month] += (users);
	return pre;
}, {});

const averageData = Object.keys(average).map(key => {
	return { month: key, averageRain: Number((average[key] / 2).toFixed(2)), name: 'avg' }
})

const scale = {
	month: {
		sync: true
	},
	averageRain: {
		min: 0,
		max: 100,
		alias: 'Average'
	},
	users: {
		min: 0,
		max: 100
	}
}

const colors = theme.colors10;
/**
 * 图例开关状态
 */
let legendMap = {}
/**
 * 图表实例
 */
let chartIns;
export default function StackedBar() {
	return (
		<Chart height={400} padding={[50,60]} scale={scale}
			data={data}  autoFit
			onGetG2Instance={c => chartIns = c}>
			<Tooltip shared />
			<Interval
				adjust={[
					{
						type: 'dodge',
						marginRatio: 0,
					},
				]}
				color={["name", colors]}
				position="month*users"
			/>
			<Axis name='users' position='left' />
			{/* <View data={averageData} scale={scale} padding={0} >
				<Axis name='averageRain' position='right' />
				<Line
					position="month*averageRain"
					color={colors[2]}
				/>
			</View> */}
			{/* <Legend custom={true} items={[
				{
					name: "London", value: 'London', marker: {
						symbol: 'square',
						style: { fill: colors[0] }
					}
				},
				{
					name: "Berlin", value: 'Berlin', marker: {
						symbol: 'square',
						style: { fill: colors[1] }
					}
				},
				{
					name: "平均", value: 'avg', marker: {
						symbol: 'hyphen',
						style: { stroke: colors[2], lineWidth: 2 }
					},
				}]}
				onChange={(ev) => {
					const { item } = ev;
					const { value } = item;
					const checked = !item.unchecked;
					// 设置图例项状态
					legendMap[value] = checked;
					if (value === 'avg') {
						// 通过filter控制元素显示隐藏
						const view = chartIns.views[0];
						view.filter('name', (val) => {
							return legendMap[val]
						})
						// 重新渲染，触发filter
						view.render(true)
					} else {
						// 通过filter控制元素显示隐藏
						chartIns.filter('name', (val) => {
							return legendMap[val] !== false
						})
						// 重新渲染，触发filter
						chartIns.render(true)
					}
				}}
			/> */}

		</Chart>
	);
}

