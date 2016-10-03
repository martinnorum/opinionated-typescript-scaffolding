import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import {WelcomeScreen} from '../WelcomeScreen'

describe('WelcomeScreen', () => {

  const creatComponent = (overrideProps = {}, context = {}) => {

    const props = {
      dataReady: false,
      name: 'Plotagonia',
      bundleId: 'com.mock',
      ...overrideProps
    }

    return shallow(<WelcomeScreen {...props} />,
      {context}
    )
  }

  it('render a <h1/>', () => {
    const wrapper = creatComponent()
    expect(wrapper.find('h1')).to.have.length(1)
  })

  it('render dynamic name in header', () => {
    const wrapper = creatComponent({name: 'Animate Your Classroom'})
    expect(wrapper.find('h1').text()).to.match(/Welcome to Animate Your Classroom/)
  })

  it('render a <RasiedButton/>', () => {
    const wrapper = creatComponent()
    expect(wrapper.find('RaisedButton')).to.have.length(1)
  })

  it('render a disabled button button if data not ready' , () => {
    const wrapper = creatComponent()
    expect(wrapper.find('RaisedButton').first().prop("disabled")).to.be.true
  })

  it('render an enabled button button if data is ready' , () => {
    const wrapper = creatComponent({dataReady:true})
    expect(wrapper.find('RaisedButton').first().prop("disabled")).to.be.false
  })

  it('should push path to router when button is clicked ', function ()  {
    const action = chai.spy()
    const context = {
      router:{
        push: action
      }
    }

    const wrapper = creatComponent({}, context)
    wrapper.find('RaisedButton').first().simulate('touchTap')

    expect(action).to.be.spy
    expect(action).to.be.called()
    expect(action).to.be.called.with(`/characters`)
  })



})
