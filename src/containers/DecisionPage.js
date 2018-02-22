import React, {Component} from 'react'
import {connect} from 'react-redux'
import ResultPage from '../components/ResultPage'

import MainView from '../components/CardView'
import {
  FlexContainer,
  MainViewContainer,
  QuestionTop,
  QuestionBottom,
  MessageContainer,
  MessageTop,
  MessageBottom,
  Divider
} from '../components/StyledComponents'
import MouseOverHelper from '../components/MouseOverHelper'


import {  Redirect } from 'react-router'

import {iconList as icons} from '../DilemmaMaker'

import {random as rn} from 'lodash'

import BlankCircle from 'react-icons/lib/fa/circle'
import CheckIcon from 'react-icons/lib/md/check-circle'





import '../css/decision-page.css'


const devMode = true

const checkIconStyle = {
  width:70,
  height:70,
  color:'#608796',
  cursor:'pointer'
};

class DecisionPage extends Component {



    render() {
        const {
            person,
            currentChosen,
            makeSelection,
            chooseFeature,
            showingFeatures,
            availableFeatures,
            nextFeature,
            displayMode,
            changeDisplay,
            featurePreference,
            features,
            labels,
            randomChoices,
            n_trials,
            mouseOverState,
            mouseOver,
            setCurrentChosen,
            setCurrentRandom,
            currentRandom
        } = this.props
        const names = person.map(d=>d.features.name)

        const percent = (labels.length/n_trials) * 100

        let view = labels.length/n_trials < 1? (

          <FlexContainer>
          <MainViewContainer>
            <MessageTop>
              Both of these individuals are in need of a kidney, but there is only one.
            </MessageTop>
              <QuestionTop>
                Who should receive
              </QuestionTop>
              <QuestionBottom>
                the kidney ?
              </QuestionBottom>
              <MessageContainer>

                <MessageBottom>
                  {MouseOverHelper(mouseOverState)}
                </MessageBottom>


              </MessageContainer>

                <MainView person={person}
                        currentChosen={currentChosen}
                        makeSelection={makeSelection}
                        mouseOver={mouseOver}
                        mouseOverState={mouseOverState}
                        currentChosen={currentChosen}
                        setCurrentChosen={setCurrentChosen}
                        setCurrentRandom={setCurrentRandom}
                        makeSelection={makeSelection}
                        currentRandom={currentRandom}
                        trial={{n:n_trials,index:labels.length}}
                        percent={percent}
                      />

            </MainViewContainer>
          </FlexContainer>
        )
        : (
          <ResultPage
            labels={labels}
            features={features}
            randomChoices={randomChoices}

          />
        );
        return view;
    }

}

const mapDispatchToProps = dispatch => {
    return {
        makeSelection: (sel,random=0) => {
            let choice = [0,0]
            choice[sel] = 1
            return dispatch({type: "SELECTION", choice,random})
              },
        chooseFeature: feature => dispatch({type: "CHOOSE_FEATURE", feature}),
        addFeature: feature => dispatch({type: "ADD_FEATURE", feature}),
        addData: (data,random=0) => dispatch({type: "ADD_DATA", data,random}),
        changeDisplay: displayMode => dispatch({type: "CHANGE_DISPLAY", displayMode}),
        mouseOver:input=> dispatch({type: "MOUSE_OVER", input}),
        setCurrentChosen:input=>dispatch({type:"SET_CURRENT_CHOSEN",input}),
        setCurrentRandom:()=>dispatch({type:"SET_CURRENT_RANDOM"})


    }
}

const mapStateToProps = state => {

    return state.dec
}

export default connect(mapStateToProps, mapDispatchToProps)(DecisionPage)
