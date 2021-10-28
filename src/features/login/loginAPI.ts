import {
  handleIncomingRedirect,
  login as solidLogin,
  logout as solidLogout,
} from '@inrupt/solid-client-authn-browser'

export const login = async (oidcIssuer: string) => {
  return await solidLogin({
    oidcIssuer,
    redirectUrl: globalThis.location.href,
    clientName: 'Open Hospitality Network',
  })
}

export const init = async () =>
  await handleIncomingRedirect({
    url: globalThis.location.href,
    restorePreviousSession: true,
  })

export const logout = async () => await solidLogout()
