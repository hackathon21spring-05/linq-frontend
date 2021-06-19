import apis from '/@/lib/apis'

export async function redirect2AuthEndpoint(): Promise<void> {
  const oauthParam = (await apis.getGeneratedCode()).data
  const authorizationEndpointUrl = new URL('https://q.trap.jp/api/v3/oauth2/authorize')

  const searchParams = new URLSearchParams()
  searchParams.set('response_type', oauthParam.responseType)
  searchParams.set('client_id', oauthParam.clientID)
  searchParams.set('code_challenge', oauthParam.codeChallenge)
  searchParams.set('code_challenge_method', oauthParam.codeChallengeMethod)
  authorizationEndpointUrl.search = searchParams.toString()

  window.location.assign(authorizationEndpointUrl.toString())
  return
}