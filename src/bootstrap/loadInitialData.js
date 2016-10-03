import { loadContent } from '../modules/Content/contentActionCreators'
import { fetchCharacters } from '../modules/CharacterList/actionCreators/characterListActionCreators'
import {
  fetchCharacterCreatorData,
  fetchCharacterExpressions
} from '../modules/CharacterEditor/actionCreators/characterEditorActionCreators'
import { loadAllManuscripts } from '../modules/ManuscriptList/actionCreators/manuscriptListActionCreators'
import { initialDataLoaded } from '../modules/UI/uiActionCreators'

export default function loadInitialData(dispatch) {
  return () => {
    return dispatch(initialDataLoaded)
  }
}
