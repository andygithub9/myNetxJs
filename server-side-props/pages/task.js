import React, { useState } from 'react'

const headers = {
  'user-agent': 'Mozilla/99.0 MDN Example',
  'content-type': 'application/json',
}

const Task = () => {
  const [message, setMessage] = useState('')
  const [txtMytask, setMytask] = useState('1000')
  const txtMytask_onchange = (event) => {
    setMytask(event.target.value)
  }

  const handlerAppDataEvent = async (appdata) => {
    const postdata = JSON.stringify({
      mytask: appdata.mytask,
    })
    console.log(postdata)
    let apiurl = '/api/tasks/'
    let method = 'GET'
    let res = null
    switch (appdata.action) {
      case 'create':
        method = 'POST'
        res = await fetch(apiurl, {
          method,
          body: postdata,
          headers,
        })
        break
      case 'delete':
        apiurl = apiurl + appdata.mytask
        method = 'DELETE'
        res = await fetch(apiurl, {
          method,
          body: postdata,
          headers,
        })
        break
      case 'getone':
        apiurl = apiurl + appdata.mytask
        method = 'GET'
        res = await fetch(apiurl, {
          method,
          headers,
        })
        break
      case 'search':
        method = 'GET'
        res = await fetch(apiurl, {
          method,
          headers,
        })
        break
      case 'update':
        apiurl = apiurl + appdata.mytask
        method = 'PUT'
        res = await fetch(apiurl, {
          method,
          body: postdata,
          headers,
        })
        break
    }
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
    const data = await res.json()
    setMessage(JSON.stringify(data, {}, 4))
  }

  const btn_click = async (action) => {
    await handlerAppDataEvent({
      action,
      mytask: txtMytask,
    })
  }

  return (
    <React.Fragment>
      <h2>Task API表单</h2>
      <div>
        <label htmlFor="txtMyTask">我的任务</label>
        <input
          type="text"
          id="txtMyTask"
          value={txtMytask}
          onChange={txtMytask_onchange}
        />
      </div>
      <div>
        <button onClick={() => btn_click('create')}>Create(POST)</button>
      </div>
      <div className="py-1">
        <button onClick={() => btn_click('delete')}>Delete(DELETE)</button>
      </div>
      <div>
        <button onClick={() => btn_click('getone')}>GetOne(GET)</button>
        <br />
        <button onClick={() => btn_click('search')}>Search(GET)</button>
      </div>
      <div>
        <button onClick={() => btn_click('update')}>Update(PUT)</button>
      </div>
      <hr />
      <pre>{message}</pre>
    </React.Fragment>
  )
}
export default Task
