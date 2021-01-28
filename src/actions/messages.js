export const FETCH_MESSAGES = "FETCH_MESSAGES"
export const POST_MESSAGE = "POST_MESSAGE"

export const fetchMessages = (channel) => {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
  const promise = fetch(url).then(promise => promise.json())

  return {
    type: FETCH_MESSAGES,
    payload: promise
  }
}

export const postMessage = (channelId, data) => {
  const url = `https://wagon-chat.herokuapp.com/${channelId}/messages`
  const promise = fetch(url, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log('Error', error))

  return {
    type: POST_MESSAGE,
    payload: promise
  }
}
