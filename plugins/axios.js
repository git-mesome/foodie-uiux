export default function (context) {
  context.$axios.setHeader('content-type', 'application/json')
  context.$axios.onError((error) => {
    if (error.response && error.response.status) {
      const code = parseInt(error.response.status)
      redirect(`/error/${code}`)
    }
  })
}

