import { readFileSync } from 'fs';
import { resolve } from 'path';
import axios, { AxiosError } from 'axios'

const PLUGINS_SOURCE_DIR = resolve(process.cwd(), 'plugins/');
const plugins = ['baidu', 'bilibili', 'bishenggongkao', 'cdn', 'didapinche', 'fenbi', 'gaodemap', 'gongkaoleida', 'google', 'hupu', 'huya', 'peopleapp', 'pinduoduo', 'pptv', 'sogou', 'wallsstcn', 'wechat', 'weibo', 'xinhuanews', 'zhihu'];

type Action = 'cdn' | 'purge'

function getUrl(action: Action, pluginName: string) {
	if (action === 'cdn') return `https://cdn.jsdelivr.net/gh/sorachandesu/s@t/plugins/${pluginName}.plugin`
	return `https://purge.jsdelivr.net/gh/sorachandesu/s@t/plugins/${pluginName}.plugin`
}

async function updateCDNCache(pluginName: string) {
	try {
		const url = getUrl('purge', pluginName)
		const response = await axios.get(url)
		return response.data
	} catch(err) {
		console.error(err)
	}
}

async function updateCDNUrl(pluginName: string) {
	try {
		const url = getUrl('cdn', pluginName)
		const response = await axios.get(url)
		return response.data
	} catch(err) {
		console.error(err)
	}
}

function readAllFiles(path: string) {
	return new Promise((resolve, reject) => {
		readFileSync(path).map(item => item);
		resolve(true)
	}).catch(err => {
		console.log(err)
	})
}

async function main() {
	plugins.forEach(async plugin => {
		const data = await updateCDNCache(plugin)
		console.log(data)
	})
}

main();
