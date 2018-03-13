
import styled from 'styled-components';

const breakpoint1 = "768px"
const breakpoint2 = "1200px"
// SVG Icons


export const FeatureIcon = styled.div`
  display: inline-block;
  color: #fffdde;
  width:40px;
  height: 40px;
  margin-right: 15px;
  &: hover {
    color:white
  }
  @media (max-width: ${breakpoint1}){
    width:25px;
  }
  @media (max-width: ${breakpoint1}){
    width:25px;
  }

`
export const PatientIcon = styled.span`
  ${'' /* display: inline-block; */}
  color: #fffdde;
  width:50px;
  height: 50px;
  margin:auto;
  padding: 0 0 10px 0;
  @media (max-width: ${breakpoint1}){
    width:45px;
  }


`
// Decision Page

export const QuestionTop = styled.h1`
  font-weight: 1000;
  text-align: justify;
  font-size: 1.3em;
  color:#177a9d;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-top:20px;
  @media (max-width: ${breakpoint1}){
    ${'' /* display: inline;
    margin:auto; */}
    text-align: center;
    font-size: 1em;
  }
  @media (max-width: ${breakpoint1}){
    margin-left: 25px;

  }


`

export const QuestionBottom = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 1000;
  text-align: left;
  font-size: 2em;
  color:#9d1748;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  @media (max-width: ${breakpoint1}){
    ${'' /* display: inline;
    margin:auto; */}
    text-align: center;
    font-size: 1em;
  }
  @media (max-width: ${breakpoint1}){
    margin-left: 25px;

  }

`

export const FlexContainer = styled.section`
    height:100vh;
    display:flex
`

export const FlexWrapper = styled.div`
    height:100%;
    display:flex
`

export const AutoMarginWrapper = styled.div`
  margin: auto;
`

export const MainViewContainer = styled.section`
      margin: 0 auto;
      min-width:1200px;
      @media (max-width: ${breakpoint2}){
        width:100%;
        min-width:450px;
      }
      @media (max-width: ${breakpoint1}){
        width:100%;

      }

`

export const PersonCardSty = styled.div`
  border-color: ${props => props.focused ? 'rgba(0, 0, 0, 0.5)' :'rgba(0, 0, 0, 0)'};
  width:40%;
  margin: auto;
  background: #608796;
  padding: 10px;
  border-radius: 0px;
  border-width: 20px;
  border-style: solid;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
             0 1px 5px 0 rgba(0, 0, 0, 0.12),
             0 3px 1px -2px rgba(0, 0, 0, 0.2);
  cursor:pointer;
  @media (max-width: ${breakpoint2}){
    flex-grow: 2
  }
  @media (max-width: ${breakpoint1}){

    width:35%;
  }
 &:hover {
   border-color: ${props => props.focused ? 'rgba(0, 0, 0, 0.5)' :'rgba(0, 0, 0, .2)'};
 }
`

export const CardContainer = styled.div`
  display: flex;
  @media (max-width: ${breakpoint1}){
    width:100%;
    padding:0;
    margin:0;

  }
  @media (max-width: ${breakpoint1}){

    flex-wrap: wrap;
  }
`

export const StatBox = styled.div`
  display: flex;
  margin-left: 0px;
  width: 250px;
  font-size: .8em;
  flex-wrap:wrap;
  justify-content: center;
  @media (max-width: ${breakpoint1}){
    width:100%;
    padding:0;
    margin:0;
    font-size: .6em;
    ${'' /* flex-direction: column; */}
  }

`

export const MessageContainer = styled.div`
  width:100%;
  margin:20px 0;

`


export const MessageTop = styled.h3`
  text-align: justify;
  font-size: 1em;
  color:black;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 0;
  margin-top:50px;
`

export const MessageBottom = styled.h3`
  font-weight: 300;
  text-align: justify;
  font-size: 1em;
  color:black;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 0;
  margin-top:5px;
`


export const StatGroup = styled.div`
  margin: 10px;
  width 100%;
  display: flex;
`

export const StatTitle = styled.div`
  font-size: 0.6em;
  color:#dbd2c5;
  margin-bottom: 5px;


`

export const StatData = styled.div`
  font-size: 1.2em;
  color:#fffdde;
`

export const StatContent = styled.div`
  ${'' /* display:inline-block; */}


`


export const PatientName = styled.div`
  font-family: 'Open Sans', sans-serif;
  margin:auto;
  font-size: 1.2em;
  text-align: center;
  color:#dbd2c5;
  ${'' /* float:right; */}
  @media (max-width:${breakpoint1}) {
    font-size: 1em;
  }


`


export const CardHead = styled.span`
    ${'' /* display:inline-block; */}
    ${'' /* margin:auto */}
    display:flex;
    float: right;
    flex-direction: column;
    @media (max-width:${breakpoint1}) {
      float: none;
    }

`



export const Divider = styled.hr`
margin: 1rem 0;
    line-height: 1;
    height: 0;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .05em;
    color: rgba(0,0,0,.85);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color:
`

export const ProgressBar = styled.div`
  width:100%;
  height:10%;
  display:flex;
  @media(max-width:${breakpoint1}){

  }
`

export const Progress = styled.div`
  width:${props => Math.min(props.percent,100)+"%;"};
  height:100%;
  background: #9d1748;
  display: inline-block;
  -webkit-transition: width .5s;
  transition: width .5s;
  font-size: 1.2em;
  font-family: 'Open Sans', sans-serif;

`

export const ButtonGroup = styled.div`
  ${'' /* display:flex;
  justify-content:space-evenly; */}
  max-width: 150px;
  order:2;
  @media (max-width:${breakpoint1}) {
    max-width: ${breakpoint1};
    width:100%;
    display:flex;
    flex-wrap: wrap;
    order:3;
  }
`

export const Button = styled.button`
  text-transform: uppercase;
  font-weight:1000;
  background: ${props => props.disabled ? 'rgba(255,255,255,.2)' : '#ccc'};
  color: ${props => props.disabled ? 'rgba(111,111,111,.2)' : '#9d1748'};
  height:45%;
  width:100%;
  font-size: 1.2em;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  border-radius: 0px;
  border-width: 20px;
  border-style: solid;
  border-color: ${props => props.focused ? 'rgba(0, 0, 0, 0.5)' :'rgba(0, 0, 0, 0)'};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
             0 1px 5px 0 rgba(0, 0, 0, 0.12),
             0 3px 1px -2px rgba(0, 0, 0, 0.2);
  cursor:pointer;
  @media (max-width:${breakpoint1}) {
    font-size: 0.8em;
  }
 &:hover {
   border-color: ${props => props.disabled? 'rgba(0, 0, 0, 0)':props.focused? 'rgba(0, 0, 0, 0.5)' :'rgba(0, 0, 0, .2)'};
 }
  cursor:${props => props.disabled ? 'not-allowed': 'pointer'};;
`;

// Result

export const ResultPageFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${'' /* height:300px; */}
  flex-wrap: wrap;
`

export const BadgeContainer = styled.div`
  margin:auto;
  width:120px;
  ${'' /* height:60px; */}
  background: rgb(70,70,70);
  color:#eee;
  display:flex;
  flex-direction: column;
  padding: 10px 15px;
  border-radius: 5px;
`

export const BadgeHeading = styled.h3`
  width:100%;
  text-align: center;
  font-size: .7em;
  font-family: 'Open Sans', sans-serif;
  font-weight: lighter;
  margin:10px 5px;
  text-align: center;
  text-transform: uppercase;
`

export const BadgeDesc = styled.div`
  margin:10px 5px;
  font-size: 0.4em;
  padding-bottom: 5px;
  text-align: justify;
  text-transform: lowercase;
`

export const PlotBox = styled.div`
width: ${({w}) => w+25};
height:${({h}) => h+25};
margin:auto;
display: flex;
flex-direction: column;
padding: 5px;

`
export const PlotContainer = styled.div`
  width:100%;
  height:auto;
  display: flex;
  flex-wrap: wrap;
`
export const PlotSvg = styled.svg`
  width: ${({w}) => w};
  height:${({h}) => h};
  margin:auto;
`

export const PlotDesc = styled.p`
  margin:20px 5px;
  text-align:center;
  font-size: .7em;
  font-family: 'Open Sans', sans-serif;
  text-transform: capitalize;
`

export const XLabel = styled.div`
  font-size: .7em;
  font-family: 'Open Sans', sans-serif;
  color:grey;
  text-align: right;
  margin-top: 0;
`

// MODAL

export const ModalBackground = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const ModalContent = styled.div`
  background-color: #f4f7f8;
  width:300px;
  margin: auto;
  padding: 0 20px;
  border-radius: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
             0 1px 5px 0 rgba(0, 0, 0, 0.12),
             0 3px 1px -2px rgba(0, 0, 0, 0.2);
   @media (max-width:${breakpoint1}) {
     ${'' /* width:90%;
     height:50%; */}
   }

`

export const ModalHeader = styled.h3`
  justify-content: center;
`

export const Form = styled.form`
font-family: 'Open Sans', sans-serif;
  width:200px;

  margin:auto;
  padding:5% 5%;
  display:flex;
  flex-direction: column;
  justify-content: center;
`
export const InputField = styled.input`
  width:100%;
  height:20px;
margin:auto;

`

export const InputSubmit = styled.input`
width:80px;
height:20px;
margin:auto;
border-radius: 3px;
border:none;
cursor: pointer;
background: #608796;
color:white;


`
export const ModalText = styled.p`
  font-size: 0.8em;
  color:grey;
  text-align: justify;
`

export const FormLabel = styled.label`
  width:100%;
  margin:20px auto;
  color:grey;
  font-weight: bold;
  text-transform: uppercase;

`
export const ExitModal = styled.button`
  padding-top: 20px;
float: right;
background: none;
border: none;
cursor: pointer;
color:grey;
font-size: 1em;
`
