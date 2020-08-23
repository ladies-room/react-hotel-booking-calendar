import React from 'react'
import styled from 'styled-components';
import Modal from 'styled-react-modal';
// import Modal from 'react-modal';
import Calendar from './Calendar.jsx';

// Modal.setAppElement('#app');
// FORM HEAD: (FIRST):
const NightSpan = styled.span`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  white-space: nowrap !important;
  padding-left: 4px !important;
`
const StyledModal = styled.div`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px !important;
    display: inline-block !important;
    padding-top: 24px !important;
    padding-bottom: 16px !important;
    padding-left: 32px !important;
    padding-right: 32px !important;
    position: absolute !important;
    top: -24px !important;
    right: -32px !important;
    width: 661px !important;
    z-index: 1 !important;
    min-height: 460px !important;
    background: rgb(255, 255, 255) !important;
    border-radius: 16px !important;
`
const DateInput_2 = styled.input`
-webkit-box-align: start !important;
    -webkit-box-pack: justify !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: flex-start !important;
    padding-bottom: 16px !important;

    height: 56px !important;
    width: 100% !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 26px !important;
    padding-bottom: 10px !important;
    background-color: transparent !important;
    font-family: inherit !important;
    font-size: 14px !important;
    font-weight: inherit !important;
    line-height: 18px !important;
    appearance: none !important;
    cursor: pointer !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    color: rgb(113, 113, 113) !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    outline: none !important;
    margin: 0px !important;
    overflow: hidden !important;
`
const FormMainDiv = styled.div`
-webkit-box-direction: normal !important;
    -webkit-box-orient: vertical !important;
    display: flex !important;
    flex-direction: column !important;
`
const FormHeadDiv = styled.div`
-webkit-box-align: baseline !important;
    -webkit-box-pack: justify !important;
    -webkit-box-direction: normal !important;
    -webkit-box-orient: horizontal !important;
    // display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: baseline !important;
    padding-bottom: 20px
`
const FormSpan = styled.span`
color: rgb(34, 34, 34) !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
    white-space: nowrap !important;
    padding-left: 4px !important;
`

// FORM BODY (MIDDLE):
const FormBodyDiv = styled.div`
margin-bottom: 16px !important;
background-color: #FFFFFF !important;
position: relative !important;
border-radius: 8px;

`
const FormBodyInputTopDiv = styled.div`
position: relative !important;
    display: flex !important;
    width: 100% !important;
    color: rgb(34, 34, 34) !important;
    background-color: transparent !important;
    box-shadow: none !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 400 !important;
    margin: 0px !important;
    border-width: initial !important;
    // border-style: none !important;
    border-image: initial !important;
    border-radius: 0px !important;
    outline: 0px !important;
    border-color: transparent !important;
`
const InputTop = styled.div`
  width: 100% !important;
  flex: 1 1 0%;
`
const InputTopDiv = styled.div`
position: relative !important;
    display: flex !important;
    width: 100% !important;
    color: rgb(34, 34, 34) !important;
    background-color: transparent !important;
    box-shadow: none !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 400 !important;
    margin: 0px !important;
    border-width: initial !important;
    border-style: none !important;
    border-image: initial !important;
    border-radius: 0px !important;
    outline: 0px !important;
    border-color: transparent !important;
`
const InputTopLeftDiv = styled.div`
position: relative !important;
    width: 100% !important;
    flex: 1 1 0% !important;
    padding: 0px !important;
    overflow: hidden !important;
`
const DateInput = styled.input`
height: 56px !important;
    width: 100% !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 26px !important;
    padding-bottom: 10px !important;
    background-color: transparent !important;
    font-family: inherit !important;
    font-size: 14px !important;
    font-weight: inherit !important;
    line-height: 18px !important;
    appearance: none !important;
    cursor: pointer !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    color: rgb(113, 113, 113) !important;
    border-width: initial !important;
    // border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    outline: none !important;
    margin: 0px !important;
    overflow: hidden !important;
    box-sizing: border-box;
`
const Text = styled.div`
position: absolute !important;
    top: 12px !important;
    left: 12px !important;
    right: 12px !important;
    pointer-events: none !important;
    font-size: 10px !important;
    line-height: 12px !important;
    color: rgb(34, 34, 34) !important;
    text-transform: uppercase !important;
    font-weight: 800 !important;
    max-width: 100% !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    margin: 0px !important;
    padding: 0px !important;
    overflow: hidden !important;
`

// FORM BUTTON (LAST):
const Label = styled.label`
// position: relative !important;
// display: flex !important;
// width: 100% !important;
// color: rgb(34, 34, 34) !important;
// background-color: transparent !important;
// box-shadow: none !important;
// font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
// font-size: 16px !important;
// line-height: 20px !important;
// font-weight: 400 !important;
// margin: 0px !important;
// border-width: initial !important;
// border-style: none !important;
// border-image: initial !important;
// border-radius: 0px !important;
// outline: 0px !important;
// border-color: transparent !important;
`
const GuestInput = styled.input`
position: relative !important;
    width: 100% !important;
    flex: 1 1 auto !important;
    padding: 0px !important;
    overflow: hidden !important;
`
const LabelDiv = styled.div`
height: 56px !important;
    width: 100% !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 26px !important;
    padding-bottom: 10px !important;
    background-color: transparent !important;
    font-family: inherit !important;
    font-size: 14px !important;
    font-weight: inherit !important;
    line-height: 18px !important;
    appearance: none !important;
    cursor: pointer !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    color: rgb(113, 113, 113) !important;
    border-width: initial !important;
    // border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    outline: none !important;
    margin: 0px !important;
    overflow: hidden !important;
    box-sizing: border-box;
`

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showCalendar: false,
      modalIsOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setModalIsOpen = this.setModalIsOpen.bind(this);
  }
  setModalIsOpen() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      showCalendar: false
    })
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.checkPrice(this.props.dateRange[0], this.props.dateRange[1])
  }
  handleClick(event) {
    // console.log('clicked')
    this.setState({
      showCalendar: true
    })
  }

  render() {
    var toggleCalendar;
    if (this.state.showCalendar) {
      toggleCalendar =
        <StyledModal isOpen={true}
          style={{
            overlay: {
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 20px!important',
              display: 'inline-block!important',
              paddingTop: '24px!important',
              paddingBottom: '16px!important',
              paddingLeft: '32px!important',
              paddingRight: '32px!important',
              position: 'absolute!important',
              top: '-24px!important',
              right: '-32px!important',
              width: '661px!important',
              zIndex: '1!important',
              minHeight: '460px!important',
              background: 'rgb(255, 255, 255)!important',
              borderRadius: '50px!important'
            },
            content: {
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 20px!important',
              display: 'inline-block!important',
              paddingTop: '24px!important',
              paddingBottom: '16px!important',
              paddingLeft: '32px!important',
              paddingRight: '32px!important',
              position: 'absolute!important',
              top: '-24px!important',
              right: '-32px!important',
              width: '661px!important',
              zIndex: '1!important',
              minHeight: '460px!important',
              background: 'rgb(255, 255, 255)!important',
              borderRadius: '50px!important'
            }
          }}
        >
          <h2>Modal Calendar</h2>
          <button onClick={this.setModalIsOpen} >Close</button>
        </StyledModal >
    }
    return (
      // <FormMainDiv>
      <form onSubmit={this.handleSubmit}>
        <FormHeadDiv style={{
          fontWeight: 600,
          fontSize: '22px',
          lineHeight: '26px !important'
        }}>
          ${this.props.totalPrice}
          <FormSpan>/ night</FormSpan>
        </FormHeadDiv>


        {/* BODY DIV START */}
        {/* BODY DIV START */}
        {/* BODY DIV START */}
        <FormBodyDiv>
          <InputTop>
            <InputTopDiv>
              {/* LEFT CHECKIN DIV */}
              <InputTopLeftDiv>
                <Text>CHECK-IN</Text>
                <DateInput
                  type="text"
                  placeholder='Add date'
                  value={this.props.checkin}
                  onChange={this.handleChange}
                  onClick={this.handleClick}
                />
              </InputTopLeftDiv>
              {/* RIGHT CHECKOUT DIV */}
              <InputTopLeftDiv>
                <Text>CHECKOUT</Text>
                <DateInput
                  type="text"
                  placeholder='Add date'
                  value={this.props.checkout}
                  onChange={this.handleChange}
                  onClick={this.handleClick}
                />
              </InputTopLeftDiv>
            </InputTopDiv>
          </InputTop>

          <div className="InputBottom"
            style={{ position: 'relative', width: '100%', flex: '1 1 0%' }}>
            <InputTopLeftDiv>
              <Text>GUESTS</Text>
              <DateInput
                type="text"
                placeholder='1 guests'
              />
            </InputTopLeftDiv>
          </div>
        </FormBodyDiv>
        {/* BODY DIV END */}
        {/* BODY DIV END */}
        {/* BODY DIV END */}


        {toggleCalendar}
        <input type="submit" value="Check Price" />
        {/* </FormMainDiv > */}
      </form >
    );
  }
}

export default Form;


// {toggleCalendar}