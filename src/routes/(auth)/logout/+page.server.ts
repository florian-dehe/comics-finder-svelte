import { makeSimplePost } from '$lib/requests/common'
import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  // we only use this endpoint for the api
  // and don't need to see the page
  throw redirect(302, '/')
}

export const actions: Actions = {
  async default({ cookies }) {
    // log out from api
    const res = await makeSimplePost("/auth/logout/", {});
    console.log(res.statusText);

    // eat the cookie
    cookies.set('session', '', {
      path: '/',
      expires: new Date(0),
    })

    // redirect the user
    throw redirect(302, '/login')
  },
}
