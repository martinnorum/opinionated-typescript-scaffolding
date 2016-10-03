import React from 'react'
import {
  Route,
  IndexRedirect
} from 'react-router'

import { AppContainer } from './App'
import ContentLists from './modules/ContentLists/ContentLists'
import { WelcomeScreenContainer} from './modules/WelcomeScreen/WelcomeScreen'
import { ManuscriptEditorContainer } from './modules/ManuscriptEditor/components/ManuscriptEditor'
import { CharacterEditorContainer } from './modules/CharacterEditor/components/CharacterEditor'
import { LoginScreenContainer } from './modules/Auth/components/LoginScreen'
import { CancelThirdPartyContainer } from './modules/CancelThirdParty/components/CancelThirdParty'
import requireAuth from './modules/Auth/utils/requireAuth'

export default function createRoutes(store) {
  return (
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/welcome" />
      <Route path="/welcome" component={WelcomeScreenContainer} />
      <Route path="/plots" component={ContentLists} onEnter={requireAuth(store)} />
      <Route path="/characters" component={ContentLists} onEnter={requireAuth(store)} />
      <Route path="/plots/:plotId" component={ManuscriptEditorContainer} onEnter={requireAuth(store)} />
      <Route path="/characters/:characterId" component={CharacterEditorContainer} onEnter={requireAuth(store)} />
      <Route path="/login" component={LoginScreenContainer} />
      <Route path="/thirdpartylogin" component={CancelThirdPartyContainer} />
    </Route>
  )
}
