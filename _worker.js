addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 替换为你的本地 Nginx 服务的 IP 地址和端口
  const targetUrl = 'http://[240e:335:7c01:cfa5:2e0:4cff:fe8c:512b]:80'; 

  // 克隆请求以避免修改原始请求
  const newRequest = new Request(targetUrl + request.url.split(request.url.includes('://') ? request.url.split('://')[1].split('/')[0] : request.url.split('/')[0]).pop(), {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: request.redirect
  })

  // 发送请求到目标 URL
  const response = await fetch(newRequest)

  return response
}
    
